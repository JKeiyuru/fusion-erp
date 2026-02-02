// ============================================
// FILE: backend/src/modules/inventory/services/stock-movements.service.ts
// Location: backend/src/modules/inventory/services/stock-movements.service.ts
// ============================================
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateStockMovementDto } from '../dto/stock-movement.dto';

@Injectable()
export class StockMovementsService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateStockMovementDto) {
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
      // Create movement
      const movement = await prisma.stockMovement.create({
        data: {
          companyId: tenantId,
          ...createDto,
          date: createDto.date || new Date(),
        },
        include: {
          product: true,
          warehouse: true,
        },
      });

      // Update stock
      const stockUpdate =
        createDto.type === 'IN'
          ? { increment: createDto.quantity }
          : { decrement: createDto.quantity };

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
          quantity: createDto.type === 'IN' ? createDto.quantity : 0,
          reservedQuantity: 0,
        },
        update: {
          quantity: stockUpdate,
        },
      });

      return movement;
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 50;
    const skip = (page - 1) * limit;
    const where: any = { companyId: tenantId };

    if (options.productId) {
      where.productId = options.productId;
    }

    if (options.warehouseId) {
      where.warehouseId = options.warehouseId;
    }

    if (options.type) {
      where.type = options.type;
    }

    if (options.startDate || options.endDate) {
      where.date = {};
      if (options.startDate) where.date.gte = new Date(options.startDate);
      if (options.endDate) where.date.lte = new Date(options.endDate);
    }

    const [movements, total] = await Promise.all([
      this.prisma.stockMovement.findMany({
        where,
        skip,
        take: limit,
        include: {
          product: true,
          warehouse: true,
        },
        orderBy: { date: 'desc' },
      }),
      this.prisma.stockMovement.count({ where }),
    ]);

    return {
      data: movements,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(tenantId: string, id: string) {
    const movement = await this.prisma.stockMovement.findFirst({
      where: { id, companyId: tenantId },
      include: {
        product: true,
        warehouse: true,
      },
    });

    if (!movement) {
      throw new NotFoundException('Stock movement not found');
    }

    return movement;
  }
}
