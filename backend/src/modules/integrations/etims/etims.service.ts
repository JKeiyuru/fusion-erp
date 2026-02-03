import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class EtimsService {
  private readonly apiUrl: string;
  private readonly apiKey: string;
  private readonly pin: string;

  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {
    this.apiUrl = this.config.get('ETIMS_API_URL');
    this.apiKey = this.config.get('ETIMS_API_KEY');
    this.pin = this.config.get('ETIMS_PIN');
  }

  async submitInvoice(invoiceId: string) {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id: invoiceId },
      include: {
        company: true,
        customer: true,
        lines: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!invoice) {
      throw new BadRequestException('Invoice not found');
    }

    const payload = {
      tpin: this.pin,
      bhfId: '00', // Branch ID
      invcNo: invoice.invoiceNumber,
      orgInvcNo: '',
      custTpin: invoice.customer.kraPin || '',
      custNm: invoice.customer.name,
      salesTyCd: 'N', // Normal sale
      rcptTyCd: 'S', // Sales receipt
      pmtTyCd: 'CASH',
      salesSttsCd: '02', // Approved
      cfmDt: invoice.date.toISOString().split('T')[0].replace(/-/g, ''),
      salesDt: invoice.date.toISOString().split('T')[0].replace(/-/g, ''),
      stockRlsDt: invoice.date.toISOString().split('T')[0].replace(/-/g, ''),
      totItemCnt: invoice.lines.length,
      taxblAmtA: invoice.subtotal.toNumber(),
      taxblAmtB: 0,
      taxblAmtC: 0,
      taxblAmtD: 0,
      taxRtA: 16, // VAT rate
      taxRtB: 0,
      taxRtC: 0,
      taxRtD: 0,
      taxAmtA: invoice.taxAmount.toNumber(),
      taxAmtB: 0,
      taxAmtC: 0,
      taxAmtD: 0,
      totTaxblAmt: invoice.subtotal.toNumber(),
      totTaxAmt: invoice.taxAmount.toNumber(),
      totAmt: invoice.total.toNumber(),
      itemList: invoice.lines.map((line, index) => ({
        itemSeq: index + 1,
        itemCd: line.product.sku,
        itemClsCd: '50101501', // Product classification code
        itemNm: line.product.name,
        bcd: line.product.barcode || '',
        pkgUnitCd: 'NT', // Not taxable
        pkg: line.quantity.toNumber(),
        qtyUnitCd: 'U', // Unit
        qty: line.quantity.toNumber(),
        prc: line.unitPrice.toNumber(),
        splyAmt: line.amount.toNumber(),
        dcRt: 0,
        dcAmt: 0,
        taxblAmt: line.amount.toNumber(),
        taxTyCd: 'A', // VAT
        taxAmt: (line.amount.toNumber() * line.taxRate.toNumber()) / 100,
        totAmt: line.amount.toNumber() * (1 + line.taxRate.toNumber() / 100),
      })),
    };

    try {
      const response = await axios.post(`${this.apiUrl}/trnsSales/saveSales`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'key': this.apiKey,
        },
      });

      // Store eTIMS response
      await this.prisma.invoice.update({
        where: { id: invoiceId },
        data: {
          notes: JSON.stringify({
            etims: response.data,
          }),
        },
      });

      return response.data;
    } catch (error) {
      throw new BadRequestException(error.response?.data?.msg || 'eTIMS submission failed');
    }
  }

  async getInvoiceStatus(invoiceNumber: string) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/trnsSales/selectTrnsSalesList`,
        {
          tpin: this.pin,
          bhfId: '00',
          invcNo: invoiceNumber,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'key': this.apiKey,
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new BadRequestException('Failed to get invoice status from eTIMS');
    }
  }
}