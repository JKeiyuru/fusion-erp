import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private config: ConfigService) {
    this.transporter = nodemailer.createTransport({  // FIXED: createTransport not createTransporter
      host: this.config.get('SMTP_HOST'),
      port: this.config.get('SMTP_PORT'),
      secure: false,
      auth: {
        user: this.config.get('SMTP_USER'),
        pass: this.config.get('SMTP_PASS'),
      },
    });
  }

  async sendEmail(to: string, subject: string, html: string) {
    try {
      await this.transporter.sendMail({
        from: this.config.get('SMTP_FROM', 'noreply@fusionerp.com'),
        to,
        subject,
        html,
      });
      return { success: true };
    } catch (error) {
      console.error('Email error:', error);
      return { success: false, error: error.message };
    }
  }

  async sendInvoiceEmail(invoice: any, customerEmail: string) {
    const html = `
      <h2>Invoice ${invoice.invoiceNumber}</h2>
      <p>Dear ${invoice.customer.name},</p>
      <p>Please find attached your invoice for KES ${invoice.total.toLocaleString()}.</p>
      <p>Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}</p>
      <p>Thank you for your business!</p>
    `;

    return this.sendEmail(customerEmail, `Invoice ${invoice.invoiceNumber}`, html);
  }

  async sendPaymentConfirmation(payment: any, customerEmail: string) {
    const html = `
      <h2>Payment Confirmation</h2>
      <p>We have received your payment of KES ${payment.amount.toLocaleString()}.</p>
      <p>M-Pesa Code: ${payment.mpesaCode}</p>
      <p>Thank you!</p>
    `;

    return this.sendEmail(customerEmail, 'Payment Confirmation', html);
  }
}