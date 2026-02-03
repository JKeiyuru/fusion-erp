import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class SmsService {
  private readonly username: string;
  private readonly apiKey: string;
  private readonly shortCode: string;

  constructor(private config: ConfigService) {
    this.username = this.config.get('AT_USERNAME');
    this.apiKey = this.config.get('AT_API_KEY');
    this.shortCode = this.config.get('AT_SHORTCODE', 'FUSIONERP');
  }

  async sendSms(to: string, message: string) {
    try {
      const response = await axios.post(
        'https://api.africastalking.com/version1/messaging',
        {
          username: this.username,
          to,
          message,
          from: this.shortCode,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'apiKey': this.apiKey,
          },
        },
      );

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('SMS error:', error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async sendInvoiceSms(invoice: any, phoneNumber: string) {
    const message = `Invoice ${invoice.invoiceNumber} for KES ${invoice.total.toLocaleString()} has been sent. Due: ${new Date(invoice.dueDate).toLocaleDateString()}. Thank you!`;
    return this.sendSms(phoneNumber, message);
  }

  async sendPaymentConfirmation(payment: any, phoneNumber: string) {
    const message = `Payment of KES ${payment.amount.toLocaleString()} received. M-Pesa Code: ${payment.mpesaCode}. Thank you!`;
    return this.sendSms(phoneNumber, message);
  }

  async sendLowStockAlert(product: any, phoneNumber: string) {
    const message = `Low Stock Alert: ${product.name} (${product.sku}) is below reorder level. Current stock: ${product.currentStock}`;
    return this.sendSms(phoneNumber, message);
  }
}