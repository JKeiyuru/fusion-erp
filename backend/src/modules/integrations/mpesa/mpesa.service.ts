// FILE: backend/src/modules/integrations/mpesa/mpesa.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class MpesaService {
  private mpesaUrl: string;
  private consumerKey: string;
  private consumerSecret: string;

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {
    this.mpesaUrl = this.config.get('MPESA_API_URL') || 'https://sandbox.safaricom.co.ke';
    this.consumerKey = this.config.get('MPESA_CONSUMER_KEY');
    this.consumerSecret = this.config.get('MPESA_CONSUMER_SECRET');
  }

  private async getAccessToken(): Promise<string> {
    const auth = Buffer.from(`${this.consumerKey}:${this.consumerSecret}`).toString('base64');
    const response = await axios.get(`${this.mpesaUrl}/oauth/v1/generate?grant_type=client_credentials`, {
      headers: { Authorization: `Basic ${auth}` },
    });
    return response.data.access_token;
  }

  async initiateSTKPush(data: {
    companyId: string;
    phoneNumber: string;
    amount: number;
    reference: string;
    description: string;
  }) {
    const token = await this.getAccessToken();
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    
    const request = {
      BusinessShortCode: this.config.get('MPESA_SHORTCODE'),
      Password: Buffer.from(
        `${this.config.get('MPESA_SHORTCODE')}${this.config.get('MPESA_PASSKEY')}${timestamp}`
      ).toString('base64'),
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: data.amount,
      PartyA: data.phoneNumber,
      PartyB: this.config.get('MPESA_SHORTCODE'),
      PhoneNumber: data.phoneNumber,
      CallBackURL: `${this.config.get('BACKEND_URL')}/api/v1/integrations/mpesa/callback`,
      AccountReference: data.reference,
      TransactionDesc: data.description,
    };

    const response = await axios.post(`${this.mpesaUrl}/mpesa/stkpush/v1/processrequest`, request, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // Save transaction
    await this.prisma.mpesaTransaction.create({
      data: {
        companyId: data.companyId,
        transactionId: response.data.CheckoutRequestID,
        amount: data.amount,
        phoneNumber: data.phoneNumber,
        merchantRequestId: response.data.MerchantRequestID,
        checkoutRequestId: response.data.CheckoutRequestID,
        status: 'PENDING',
        metadata: { reference: data.reference, description: data.description },
      },
    });

    return response.data;
  }

  async handleCallback(callbackData: any) {
    const { MerchantRequestID, CheckoutRequestID, ResultCode, ResultDesc } = callbackData.Body.stkCallback;

    const transaction = await this.prisma.mpesaTransaction.findFirst({
      where: {
        merchantRequestId: MerchantRequestID,
        checkoutRequestId: CheckoutRequestID,
      },
    });

    if (!transaction) return;

    const status = ResultCode === 0 ? 'SUCCESS' : 'FAILED';
    const mpesaCode = ResultCode === 0 ? callbackData.Body.stkCallback.CallbackMetadata?.Item?.find(
      (item: any) => item.Name === 'MpesaReceiptNumber'
    )?.Value : null;

    await this.prisma.mpesaTransaction.update({
      where: { id: transaction.id },
      data: {
        resultCode: ResultCode.toString(),
        resultDesc: ResultDesc,
        mpesaCode,
        status,
      },
    });

    // TODO: Update related invoice/payment
  }
}