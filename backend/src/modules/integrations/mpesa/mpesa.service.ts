// ============================================
// FILE: backend/src/modules/integrations/mpesa/mpesa.service.ts
// ============================================
import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class MpesaService {
  private readonly consumerKey: string;
  private readonly consumerSecret: string;
  private readonly shortcode: string;
  private readonly passkey: string;
  private readonly callbackUrl: string;
  private readonly environment: string;

  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {
    this.consumerKey = this.config.get('MPESA_CONSUMER_KEY');
    this.consumerSecret = this.config.get('MPESA_CONSUMER_SECRET');
    this.shortcode = this.config.get('MPESA_SHORTCODE');
    this.passkey = this.config.get('MPESA_PASSKEY');
    this.callbackUrl = this.config.get('MPESA_CALLBACK_URL');
    this.environment = this.config.get('MPESA_ENVIRONMENT', 'sandbox');
  }

  async getAccessToken(): Promise<string> {
    const auth = Buffer.from(`${this.consumerKey}:${this.consumerSecret}`).toString('base64');
    const url = this.environment === 'production'
      ? 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
      : 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });
      return response.data.access_token;
    } catch (error) {
      throw new BadRequestException('Failed to get M-Pesa access token');
    }
  }

  async initiateSTKPush(phoneNumber: string, amount: number, accountReference: string, description: string) {
    const token = await this.getAccessToken();
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${this.shortcode}${this.passkey}${timestamp}`).toString('base64');

    // Format phone number (remove leading 0, add 254)
    const formattedPhone = phoneNumber.startsWith('0')
      ? `254${phoneNumber.slice(1)}`
      : phoneNumber.startsWith('+254')
      ? phoneNumber.slice(1)
      : phoneNumber;

    const url = this.environment === 'production'
      ? 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
      : 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

    const payload = {
      BusinessShortCode: this.shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: Math.round(amount),
      PartyA: formattedPhone,
      PartyB: this.shortcode,
      PhoneNumber: formattedPhone,
      CallBackURL: this.callbackUrl,
      AccountReference: accountReference,
      TransactionDesc: description,
    };

    try {
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return {
        success: true,
        merchantRequestID: response.data.MerchantRequestID,
        checkoutRequestID: response.data.CheckoutRequestID,
        responseCode: response.data.ResponseCode,
        responseDescription: response.data.ResponseDescription,
        customerMessage: response.data.CustomerMessage,
      };
    } catch (error) {
      throw new BadRequestException(error.response?.data?.errorMessage || 'STK Push failed');
    }
  }

  async querySTKStatus(checkoutRequestID: string) {
    const token = await this.getAccessToken();
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${this.shortcode}${this.passkey}${timestamp}`).toString('base64');

    const url = this.environment === 'production'
      ? 'https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query'
      : 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query';

    const payload = {
      BusinessShortCode: this.shortcode,
      Password: password,
      Timestamp: timestamp,
      CheckoutRequestID: checkoutRequestID,
    };

    try {
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw new BadRequestException('Failed to query STK status');
    }
  }

  async handleCallback(callbackData: any) {
    const { Body } = callbackData;
    const { stkCallback } = Body;

    if (stkCallback.ResultCode === 0) {
      // Payment successful
      const items = stkCallback.CallbackMetadata.Item;
      const amount = items.find((i: any) => i.Name === 'Amount')?.Value;
      const mpesaReceiptNumber = items.find((i: any) => i.Name === 'MpesaReceiptNumber')?.Value;
      const phoneNumber = items.find((i: any) => i.Name === 'PhoneNumber')?.Value;

      return {
        success: true,
        amount,
        mpesaCode: mpesaReceiptNumber,
        phoneNumber,
        merchantRequestID: stkCallback.MerchantRequestID,
        checkoutRequestID: stkCallback.CheckoutRequestID,
      };
    } else {
      // Payment failed
      return {
        success: false,
        resultCode: stkCallback.ResultCode,
        resultDesc: stkCallback.ResultDesc,
      };
    }
  }

  async registerC2BUrls(validationUrl: string, confirmationUrl: string) {
    const token = await this.getAccessToken();

    const url = this.environment === 'production'
      ? 'https://api.safaricom.co.ke/mpesa/c2b/v1/registerurl'
      : 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl';

    const payload = {
      ShortCode: this.shortcode,
      ResponseType: 'Completed',
      ConfirmationURL: confirmationUrl,
      ValidationURL: validationUrl,
    };

    try {
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw new BadRequestException('Failed to register C2B URLs');
    }
  }

  async handleC2BConfirmation(confirmationData: any) {
    // Process C2B payment confirmation
    // This is called when customer pays via Paybill
    const {
      TransactionType,
      TransID,
      TransTime,
      TransAmount,
      BusinessShortCode,
      BillRefNumber,
      InvoiceNumber,
      OrgAccountBalance,
      ThirdPartyTransID,
      MSISDN,
      FirstName,
      MiddleName,
      LastName,
    } = confirmationData;

    // Store transaction or update invoice
    // Example: Find invoice by BillRefNumber and mark as paid
    return {
      ResultCode: 0,
      ResultDesc: 'Accepted',
    };
  }

  async b2cPayment(phoneNumber: string, amount: number, remarks: string) {
    const token = await this.getAccessToken();

    const url = this.environment === 'production'
      ? 'https://api.safaricom.co.ke/mpesa/b2c/v1/paymentrequest'
      : 'https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest';

    // Format phone number
    const formattedPhone = phoneNumber.startsWith('0')
      ? `254${phoneNumber.slice(1)}`
      : phoneNumber;

    const payload = {
      InitiatorName: this.config.get('MPESA_INITIATOR_NAME'),
      SecurityCredential: this.config.get('MPESA_SECURITY_CREDENTIAL'),
      CommandID: 'BusinessPayment',
      Amount: Math.round(amount),
      PartyA: this.shortcode,
      PartyB: formattedPhone,
      Remarks: remarks,
      QueueTimeOutURL: `${this.callbackUrl}/b2c/timeout`,
      ResultURL: `${this.callbackUrl}/b2c/result`,
      Occasion: remarks,
    };

    try {
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw new BadRequestException('B2C payment failed');
    }
  }
}