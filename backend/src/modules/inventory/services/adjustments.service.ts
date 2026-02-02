// ============================================
// FILE: backend/src/modules/inventory/services/adjustments.service.ts
// Location: backend/src/modules/inventory/services/adjustments.service.ts
// ============================================
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateAdjustmentDto } from '../dto/create-adjustment.dto';

@Injectable()
export class AdjustmentsService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, userId: string, createDto: CreateAdjustmentDto) {
    // Verify product and warehouse exist
    const [product, warehouse] = await Promise.all([
      this.prisma.product.findFirst({
        where: { id: createDto.productId, companyId: tenantId },
      }),
      this.prisma.warehouse.findFirst({
        where: { id: createDto.warehouseId, companyId: tenantId },
      }),
    ]);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (!warehouse) {
      throw new NotFoundException('Warehouse not found');
    }

    return this.prisma.$transaction(async (prisma) => {
      // Get current stock
      const currentStock = await prisma.stock.findUnique({
        where: {
          productId_warehouseId: {
            productId: createDto.productId,
            warehouseId: createDto.warehouseId,
          },
        },
      });

      const oldQuantity = currentStock?.quantity.toNumber() || 0;
      const difference = createDto.newQuantity - oldQuantity;

      // Create adjustment record
      const adjustment = await prisma.stockAdjustment.create({
        data: {
          companyId: tenantId,
          productId: createDto.productId,
          warehouseId: createDto.warehouseId,
          oldQuantity,
          newQuantity: createDto.newQuantity,
          difference,
          reason: createDto.reason,
          notes: createDto.notes,
          adjustedBy: userId,
        },
        include: {
          product: true,
          warehouse: true,
          adjustedByUser: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
      });

      // Update stock
      await prisma.stock.upsert({
        where: {
          productId_warehouseId: {
            productId: createDto.productId,
            warehouseId: createDto.warehouseId,
          },
        },
        create: {
          productId: createDto.productId,
          warehouseId: createDto.warehouseId,
          quantity: createDto.newQuantity,
          reservedQuantity: 0,
        },
        update: {
          quantity: createDto.newQuantity,
        },
      });

      // Create stock movement
      await prisma.stockMovement.create({
        data: {
          companyId: tenantId,
          productId: createDto.productId,
          warehouseId: createDto.warehouseId,
          type: difference > 0 ? 'IN' : 'OUT',
          quantity: Math.abs(difference),
          reference: `ADJ-${adjustment.id.substring(0, 8)}`,
          notes: `Stock adjustment: ${createDto.reason}`,
          date: new Date(),
        },
      });

      return adjustment;
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;
    const where: any = { companyId: tenantId };

    if (options.productId) {
      where.productId = options.productId;
    }

    if (options.warehouseId) {
      where.warehouseId = options.warehouseId;
    }

    const [adjustments, total] = await Promise.all([
      this.prisma.stockAdjustment.findMany({
        where,
        skip,
        take: limit,
        include: {
          product: true,
          warehouse: true,
          adjustedByUser: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.stockAdjustment.count({ where }),
    ]);

    return {
      data: adjustments,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}