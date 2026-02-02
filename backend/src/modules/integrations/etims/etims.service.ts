// ============================================
// FILE: backend/src/modules/integrations/etims/etims.service.ts
// Location: backend/src/modules/integrations/etims/etims.service.ts
// COMPLETE FIXED VERSION
// ============================================
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class EtimsService {
  private etimsUrl: string;

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {
    this.etimsUrl = this.config.get('ETIMS_API_URL') || 'https://etims-api-sbx.kra.go.ke';
  }

  async submitInvoice(tenantId: string, invoiceId: string) {
    const invoice = await this.prisma.invoice.findFirst({
      where: { id: invoiceId, companyId: tenantId },
      include: {
        customer: true,
        lines: {
          include: {
            product: true,
          },
        },
        company: true,
      },
    });

    if (!invoice) throw new BadRequestException('Invoice not found');
    if (invoice.etimsSubmitted) throw new BadRequestException('Already submitted to eTIMS');

    const company = invoice.company;
    if (!company.etimsDeviceId) {
      throw new BadRequestException('eTIMS not configured for this company');
    }

    // Prepare eTIMS request
    const request = {
      deviceId: company.etimsDeviceId,
      invoiceNo: invoice.invoiceNumber,
      invoiceDate: invoice.date.toISOString(),
      customerPin: invoice.customer.kraPin,
      customerName: invoice.customer.name,
      items: invoice.lines.map((line) => ({
        itemCode: line.product.code,
        itemName: line.product.name,
        quantity: line.quantity.toNumber(),
        unitPrice: line.unitPrice.toNumber(),
        taxRate: line.taxRate.toNumber(),
        amount: line.amount.toNumber(),
      })),
      totalAmount: invoice.total.toNumber(),
      taxAmount: invoice.taxAmount.toNumber(),
    };

    try {
      // Get API key from settings
      const settings = company.settings as any;
      const apiKey = settings?.etimsApiKey || '';

      // Submit to eTIMS
      const response = await axios.post(`${this.etimsUrl}/api/invoice/submit`, request, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      // Log success
      await this.prisma.etimsLog.create({
        data: {
          companyId: tenantId,
          invoiceId,
          request,
          response: response.data,
          status: 'SUCCESS',
        },
      });

      // Update invoice
      await this.prisma.invoice.update({
        where: { id: invoiceId },
        data: {
          etimsSubmitted: true,
          etimsInvoiceNo: response.data.invoiceNo,
        },
      });

      return { success: true, etimsInvoiceNo: response.data.invoiceNo };
    } catch (error: any) {
      // Log failure
      await this.prisma.etimsLog.create({
        data: {
          companyId: tenantId,
          invoiceId,
          request,
          response: error.response?.data,
          status: 'FAILED',
          errorMessage: error.message,
        },
      });

      throw new BadRequestException(`eTIMS submission failed: ${error.message}`);
    }
  }
}