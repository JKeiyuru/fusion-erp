// FILE: backend/src/modules/procurement/services/purchase-orders.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePurchaseOrderDto } from '../dto/create-purchase-order.dto';
import { PurchaseOrderStatus } from '@prisma/client';

@Injectable()
export class PurchaseOrdersService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreatePurchaseOrderDto) {
    const count = await this.prisma.purchaseOrder.count({ where: { companyId: tenantId } });
    const orderNumber = `PO-${String(count + 1).padStart(6, '0')}`;

    let subtotal = 0;
    let taxAmount = 0;

    for (const line of createDto.lines) {
      const lineAmount = line.quantity * line.unitPrice;
      const lineTax = (lineAmount * line.taxRate) / 100;
      subtotal += lineAmount;
      taxAmount += lineTax;
    }

    return this.prisma.purchaseOrder.create({
      data: {
        companyId: tenantId,
        orderNumber,
        supplierId: createDto.supplierId,
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

    const [orders, total] = await Promise.all([
      this.prisma.purchaseOrder.findMany({
        where,
        skip,
        take: limit,
        include: { supplier: true },
        orderBy: { date: 'desc' },
      }),
      this.prisma.purchaseOrder.count({ where }),
    ]);

    return { data: orders, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
  }

  async findOne(tenantId: string, id: string) {
    const order = await this.prisma.purchaseOrder.findFirst({
      where: { id, companyId: tenantId },
      include: { supplier: true, lines: { include: { product: true } } },
    });
    if (!order) throw new NotFoundException('Purchase order not found');
    return order;
  }

  async send(tenantId: string, id: string) {
    await this.findOne(tenantId, id);
    return this.prisma.purchaseOrder.update({
      where: { id },
      data: { status: PurchaseOrderStatus.SENT },
    });
  }

  async receive(tenantId: string, id: string) {
    const order = await this.findOne(tenantId, id);

    // Add stock for all items
    await this.prisma.$transaction(async (prisma) => {
      for (const line of order.lines) {
        // Find or create stock record in first warehouse
        const warehouse = await prisma.warehouse.findFirst({
          where: { companyId: tenantId, isActive: true },
        });

        if (warehouse) {
          const stock = await prisma.stock.upsert({
            where: {
              productId_warehouseId: {
                productId: line.productId,
                warehouseId: warehouse.id,
              },
            },
            create: {
              productId: line.productId,
              warehouseId: warehouse.id,
              quantity: line.quantity,
              reservedQuantity: 0,
            },
            update: {
              quantity: { increment: line.quantity },
            },
          });

          // Create stock movement
          await prisma.stockMovement.create({
            data: {
              companyId: tenantId,
              productId: line.productId,
              warehouseId: warehouse.id,
              type: 'IN',
              quantity: line.quantity,
              reference: order.orderNumber,
              notes: 'Purchase Order Receipt',
              date: new Date(),
            },
          });
        }
      }

      return prisma.purchaseOrder.update({
        where: { id },
        data: { status: PurchaseOrderStatus.RECEIVED },
      });
    });

    return this.findOne(tenantId, id);
  }
}