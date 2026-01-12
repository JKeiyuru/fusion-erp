// FILE: backend/src/modules/procurement/services/bills.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateBillDto } from '../dto/create-bill.dto';
import { BillStatus } from '@prisma/client';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateBillDto) {
    const count = await this.prisma.bill.count({ where: { companyId: tenantId } });
    const billNumber = `BILL-${String(count + 1).padStart(6, '0')}`;

    let subtotal = 0;
    let taxAmount = 0;

    for (const line of createDto.lines) {
      const lineAmount = line.quantity * line.unitPrice;
      const lineTax = (lineAmount * line.taxRate) / 100;
      subtotal += lineAmount;
      taxAmount += lineTax;
    }

    return this.prisma.bill.create({
      data: {
        companyId: tenantId,
        billNumber,
        supplierId: createDto.supplierId,
        purchaseOrderId: createDto.purchaseOrderId,
        date: createDto.date,
        dueDate: createDto.dueDate,
        subtotal,
        taxAmount,
        total: subtotal + taxAmount,
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
      include: { supplier: true, lines: { include: { product: true } } },
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;
    const where: any = { companyId: tenantId };

    if (options.status) where.status = options.status;
    if (options.supplierId) where.supplierId = options.supplierId;

    const [bills, total] = await Promise.all([
      this.prisma.bill.findMany({
        where,
        skip,
        take: limit,
        include: { supplier: true },
        orderBy: { date: 'desc' },
      }),
      this.prisma.bill.count({ where }),
    ]);

    return { data: bills, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
  }

  async findOne(tenantId: string, id: string) {
    const bill = await this.prisma.bill.findFirst({
      where: { id, companyId: tenantId },
      include: { supplier: true, purchaseOrder: true, lines: { include: { product: true } } },
    });
    if (!bill) throw new NotFoundException('Bill not found');
    return bill;
  }

  async submit(tenantId: string, id: string) {
    await this.findOne(tenantId, id);
    return this.prisma.bill.update({
      where: { id },
      data: { status: BillStatus.SUBMITTED },
    });
  }
}