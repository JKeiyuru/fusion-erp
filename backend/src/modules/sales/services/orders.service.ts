// FILE: backend/src/modules/sales/services/orders.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateSalesOrderDto } from '../dto/create-sales-order.dto';
import { SalesOrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateSalesOrderDto) {
    const count = await this.prisma.salesOrder.count({ where: { companyId: tenantId } });
    const orderNumber = `SO-${String(count + 1).padStart(6, '0')}`;

    let subtotal = 0;
    let taxAmount = 0;

    for (const line of createDto.lines) {
      const lineAmount = line.quantity * line.unitPrice;
      const lineTax = (lineAmount * line.taxRate) / 100;
      subtotal += lineAmount;
      taxAmount += lineTax;
    }

    return this.prisma.salesOrder.create({
      data: {
        companyId: tenantId,
        orderNumber,
        customerId: createDto.customerId,
        date: createDto.date,
        expectedDate: createDto.expectedDate,
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
      include: { customer: true, lines: { include: { product: true } } },
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;
    const where: any = { companyId: tenantId };

    if (options.status) where.status = options.status;
    if (options.customerId) where.customerId = options.customerId;

    const [orders, total] = await Promise.all([
      this.prisma.salesOrder.findMany({
        where,
        skip,
        take: limit,
        include: { customer: true },
        orderBy: { date: 'desc' },
      }),
      this.prisma.salesOrder.count({ where }),
    ]);

    return { data: orders, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
  }

  async findOne(tenantId: string, id: string) {
    const order = await this.prisma.salesOrder.findFirst({
      where: { id, companyId: tenantId },
      include: { customer: true, lines: { include: { product: true } } },
    });
    if (!order) throw new NotFoundException('Sales order not found');
    return order;
  }

  async confirm(tenantId: string, id: string) {
    await this.findOne(tenantId, id);
    return this.prisma.salesOrder.update({
      where: { id },
      data: { status: SalesOrderStatus.CONFIRMED },
    });
  }

  async complete(tenantId: string, id: string) {
    await this.findOne(tenantId, id);
    return this.prisma.salesOrder.update({
      where: { id },
      data: { status: SalesOrderStatus.COMPLETED },
    });
  }
}