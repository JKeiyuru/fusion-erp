// ============================================
// FILE: backend/src/modules/sales/services/invoices.service.ts
// Location: backend/src/modules/sales/services/invoices.service.ts
// ============================================
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';
import { InvoiceStatus } from '@prisma/client';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class InvoicesService {
  constructor(
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(tenantId: string, createDto: CreateInvoiceDto) {
    // Generate invoice number
    const count = await this.prisma.invoice.count({
      where: { companyId: tenantId },
    });
    const invoiceNumber = `INV-${String(count + 1).padStart(6, '0')}`;

    // Calculate totals
    let subtotal = 0;
    let taxAmount = 0;

    for (const line of createDto.lines) {
      const lineAmount = line.quantity * line.unitPrice;
      const lineTax = (lineAmount * line.taxRate) / 100;
      subtotal += lineAmount;
      taxAmount += lineTax;
    }

    const total = subtotal + taxAmount;

    // Create invoice with lines
    const invoice = await this.prisma.invoice.create({
      data: {
        companyId: tenantId,
        invoiceNumber,
        customerId: createDto.customerId,
        salesOrderId: createDto.salesOrderId,
        date: createDto.date,
        dueDate: createDto.dueDate,
        subtotal,
        taxAmount,
        total,
        notes: createDto.notes,
        lines: {
          create: createDto.lines.map((line) => ({
            productId: line.productId,
            description: line.description,
            quantity: line.quantity,
            unitPrice: line.unitPrice,
            taxRate: line.taxRate,
            amount: line.quantity * line.unitPrice,
          })),
        },
      },
      include: {
        customer: true,
        lines: {
          include: {
            product: true,
          },
        },
      },
    });

    // Emit event for journal entry creation
    this.eventEmitter.emit('invoice.created', { tenantId, invoice });

    return invoice;
  }

  async findAll(
    tenantId: string,
    options: { status?: string; customerId?: string; page?: number; limit?: number },
  ) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;

    const where: any = { companyId: tenantId };

    if (options.status) {
      where.status = options.status;
    }

    if (options.customerId) {
      where.customerId = options.customerId;
    }

    const [invoices, total] = await Promise.all([
      this.prisma.invoice.findMany({
        where,
        skip,
        take: limit,
        include: {
          customer: true,
          _count: {
            select: {
              lines: true,
              payments: true,
            },
          },
        },
        orderBy: { date: 'desc' },
      }),
      this.prisma.invoice.count({ where }),
    ]);

    return {
      data: invoices,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(tenantId: string, id: string) {
    const invoice = await this.prisma.invoice.findFirst({
      where: { id, companyId: tenantId },
      include: {
        customer: true,
        salesOrder: true,
        lines: {
          include: {
            product: true,
          },
        },
        payments: true,
      },
    });

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    return invoice;
  }

  async send(tenantId: string, id: string) {
    const invoice = await this.findOne(tenantId, id);

    if (invoice.status !== 'DRAFT') {
      throw new BadRequestException('Only draft invoices can be sent');
    }

    const updated = await this.prisma.invoice.update({
      where: { id },
      data: { status: InvoiceStatus.SENT },
      include: {
        customer: true,
        lines: {
          include: {
            product: true,
          },
        },
      },
    });

    // Emit event for eTIMS submission
    this.eventEmitter.emit('invoice.sent', { tenantId, invoice: updated });

    return updated;
  }

  async cancel(tenantId: string, id: string) {
    const invoice = await this.findOne(tenantId, id);

    if (invoice.paidAmount.toNumber() > 0) {
      throw new BadRequestException('Cannot cancel invoice with payments');
    }

    return this.prisma.invoice.update({
      where: { id },
      data: { status: InvoiceStatus.CANCELLED },
    });
  }

  async generatePdf(tenantId: string, id: string) {
    const invoice = await this.findOne(tenantId, id);

    // PDF generation would go here
    // For now, return invoice data
    return {
      message: 'PDF generation not implemented yet',
      invoice,
    };
  }

  async recordPayment(tenantId: string, invoiceId: string, amount: number) {
    const invoice = await this.findOne(tenantId, invoiceId);

    const newPaidAmount = invoice.paidAmount.toNumber() + amount;
    const total = invoice.total.toNumber();

    let status = invoice.status;
    if (newPaidAmount >= total) {
      status = InvoiceStatus.PAID;
    } else if (newPaidAmount > 0) {
      status = InvoiceStatus.PARTIALLY_PAID;
    }

    return this.prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        paidAmount: newPaidAmount,
        status,
      },
    });
  }
}