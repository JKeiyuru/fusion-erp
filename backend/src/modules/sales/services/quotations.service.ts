// FILE: backend/src/modules/sales/services/quotations.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateQuotationDto } from '../dto/create-quotation.dto';
import { QuotationStatus } from '@prisma/client';

@Injectable()
export class QuotationsService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateQuotationDto) {
    const count = await this.prisma.quotation.count({ where: { companyId: tenantId } });
    const quotationNumber = `QT-${String(count + 1).padStart(6, '0')}`;

    let subtotal = 0;
    let taxAmount = 0;

    for (const line of createDto.lines) {
      const lineAmount = line.quantity * line.unitPrice;
      const lineTax = (lineAmount * line.taxRate) / 100;
      subtotal += lineAmount;
      taxAmount += lineTax;
    }

    const total = subtotal + taxAmount;

    return this.prisma.quotation.create({
      data: {
        companyId: tenantId,
        quotationNumber,
        customerId: createDto.customerId,
        date: createDto.date,
        validUntil: createDto.validUntil,
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
        lines: { include: { product: true } },
      },
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;
    const where: any = { companyId: tenantId };

    if (options.status) where.status = options.status;
    if (options.customerId) where.customerId = options.customerId;

    const [quotations, total] = await Promise.all([
      this.prisma.quotation.findMany({
        where,
        skip,
        take: limit,
        include: { customer: true, _count: { select: { lines: true } } },
        orderBy: { date: 'desc' },
      }),
      this.prisma.quotation.count({ where }),
    ]);

    return { data: quotations, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
  }

  async findOne(tenantId: string, id: string) {
    const quotation = await this.prisma.quotation.findFirst({
      where: { id, companyId: tenantId },
      include: { customer: true, lines: { include: { product: true } } },
    });
    if (!quotation) throw new NotFoundException('Quotation not found');
    return quotation;
  }

  async send(tenantId: string, id: string) {
    const quotation = await this.findOne(tenantId, id);
    if (quotation.status !== 'DRAFT') throw new BadRequestException('Only draft quotations can be sent');
    return this.prisma.quotation.update({
      where: { id },
      data: { status: QuotationStatus.SENT },
    });
  }

  async accept(tenantId: string, id: string) {
    return this.prisma.quotation.update({
      where: { id },
      data: { status: QuotationStatus.ACCEPTED },
    });
  }

  async reject(tenantId: string, id: string) {
    return this.prisma.quotation.update({
      where: { id },
      data: { status: QuotationStatus.REJECTED },
    });
  }
}