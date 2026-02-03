// ============================================
// FILE: backend/src/modules/manufacturing/services/production-orders.service.ts
// Location: backend/src/modules/manufacturing/services/production-orders.service.ts
// ============================================
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateProductionOrderDto } from '../dto/create-production-order.dto';
import { ProductionOrderStatus } from '@prisma/client';

@Injectable()
export class ProductionOrdersService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateProductionOrderDto) {
    // Verify BOM exists
    const bom = await this.prisma.bom.findFirst({
      where: {
        id: createDto.bomId,
        companyId: tenantId,
        isActive: true,
      },
      include: {
        components: {
          include: {
            product: true,
          },
        },
        product: true,
      },
    });

    if (!bom) {
      throw new NotFoundException('BOM not found or inactive');
    }

    // Generate order number
    const count = await this.prisma.productionOrder.count({
      where: { companyId: tenantId },
    });
    const orderNumber = `PRO-${String(count + 1).padStart(6, '0')}`;

    // Check component availability
    const shortages = [];
    for (const component of bom.components) {
      const requiredQty = component.quantity.toNumber() * createDto.quantity;
      const stock = await this.prisma.stock.findMany({
        where: { productId: component.productId },
      });
      const availableQty = stock.reduce(
        (sum, stock) => sum + stock.quantity.toNumber(),
        0,
      );

      if (availableQty < requiredQty) {
        shortages.push({
          product: component.product.name,
          required: requiredQty,
          available: availableQty,
          shortage: requiredQty - availableQty,
        });
      }
    }

    if (shortages.length > 0 && !createDto.forceProduce) {
      throw new BadRequestException({
        message: 'Insufficient components',
        shortages,
      });
    }

    // Create production order
    return this.prisma.productionOrder.create({
      data: {
        companyId: tenantId,
        orderNumber,
        bomId: createDto.bomId,
        productId: bom.productId,
        quantity: createDto.quantity,
        scheduledDate: createDto.scheduledDate,
        warehouseId: createDto.warehouseId,
        notes: createDto.notes,
        status: ProductionOrderStatus.DRAFT,
      },
      include: {
        bom: {
          include: {
            product: true,
            components: {
              include: {
                product: true,
              },
            },
          },
        },
        warehouse: true,
      },
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;
    const where: any = { companyId: tenantId };

    if (options.status) {
      where.status = options.status;
    }

    if (options.productId) {
      where.productId = options.productId;
    }

    const [orders, total] = await Promise.all([
      this.prisma.productionOrder.findMany({
        where,
        skip,
        take: limit,
        include: {
          bom: {
            include: {
              product: true,
            },
          },
          warehouse: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.productionOrder.count({ where }),
    ]);

    return {
      data: orders,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(tenantId: string, id: string) {
    const order = await this.prisma.productionOrder.findFirst({
      where: { id, companyId: tenantId },
      include: {
        bom: {
          include: {
            product: true,
            components: {
              include: {
                product: true,
              },
            },
          },
        },
        warehouse: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Production order not found');
    }

    return order;
  }

  async confirm(tenantId: string, id: string) {
    const order = await this.findOne(tenantId, id);

    if (order.status !== ProductionOrderStatus.DRAFT) {
      throw new BadRequestException('Only draft orders can be confirmed');
    }

    return this.prisma.productionOrder.update({
      where: { id },
      data: {
        status: ProductionOrderStatus.CONFIRMED,
        confirmedAt: new Date(),
      },
    });
  }

  async start(tenantId: string, id: string) {
    const order = await this.findOne(tenantId, id);

    if (order.status !== ProductionOrderStatus.CONFIRMED) {
      throw new BadRequestException('Only confirmed orders can be started');
    }

    // Reserve components
    await this.reserveComponents(tenantId, order);

    return this.prisma.productionOrder.update({
      where: { id },
      data: {
        status: ProductionOrderStatus.IN_PROGRESS,
        startedAt: new Date(),
      },
    });
  }

  async complete(tenantId: string, id: string, producedQuantity: number) {
    const order = await this.findOne(tenantId, id);

    if (order.status !== ProductionOrderStatus.IN_PROGRESS) {
      throw new BadRequestException('Only in-progress orders can be completed');
    }

    await this.prisma.$transaction(async (prisma) => {
      // Consume components from stock
      for (const component of order.bom.components) {
        const consumedQty = component.quantity.toNumber() * producedQuantity;

        // Find stock with available quantity
        const stock = await prisma.stock.findMany({
          where: {
            productId: component.productId,
            quantity: { gt: 0 },
          },
          orderBy: { createdAt: 'asc' }, // FIFO
        });

        let remainingToConsume = consumedQty;

        for (const stock of stock) {
          if (remainingToConsume <= 0) break;

          const consumeFromThis = Math.min(
            stock.quantity.toNumber(),
            remainingToConsume,
          );

          await prisma.stock.update({
            where: {
              productId_warehouseId: {
                productId: stock.productId,
                warehouseId: stock.warehouseId,
              },
            },
            data: {
              quantity: { decrement: consumeFromThis },
            },
          });

          // Create stock movement
          await prisma.stockMovement.create({
            data: {
              companyId: tenantId,
              productId: component.productId,
              warehouseId: stock.warehouseId,
              type: 'OUT',
              quantity: consumeFromThis,
              reference: order.orderNumber,
              notes: `Consumed for production order ${order.orderNumber}`,
              date: new Date(),
            },
          });

          remainingToConsume -= consumeFromThis;
        }
      }

      // Add produced quantity to stock
      await prisma.stock.upsert({
        where: {
          productId_warehouseId: {
            productId: order.productId,
            warehouseId: order.warehouseId,
          },
        },
        create: {
          productId: order.productId,
          warehouseId: order.warehouseId,
          quantity: producedQuantity,
          reservedQuantity: 0,
        },
        update: {
          quantity: { increment: producedQuantity },
        },
      });

      // Create stock movement for produced goods
      await prisma.stockMovement.create({
        data: {
          companyId: tenantId,
          productId: order.productId,
          warehouseId: order.warehouseId,
          type: 'IN',
          quantity: producedQuantity,
          reference: order.orderNumber,
          notes: `Produced from order ${order.orderNumber}`,
          date: new Date(),
        },
      });

      // Update production order
      await prisma.productionOrder.update({
        where: { id },
        data: {
          status: ProductionOrderStatus.COMPLETED,
          completedAt: new Date(),
          producedQuantity,
        },
      });
    });

    return this.findOne(tenantId, id);
  }

  async cancel(tenantId: string, id: string) {
    const order = await this.findOne(tenantId, id);

    if (order.status === ProductionOrderStatus.COMPLETED) {
      throw new BadRequestException('Cannot cancel completed orders');
    }

    // Release reserved components if in progress
    if (order.status === ProductionOrderStatus.IN_PROGRESS) {
      await this.releaseComponents(tenantId, order);
    }

    return this.prisma.productionOrder.update({
      where: { id },
      data: {
        status: ProductionOrderStatus.CANCELLED,
      },
    });
  }

  private async reserveComponents(tenantId: string, order: any) {
    for (const component of order.bom.components) {
      const requiredQty = component.quantity.toNumber() * order.quantity.toNumber();

      // Find stock to reserve from
      const stock = await this.prisma.stock.findMany({
        where: {
          productId: component.productId,
          quantity: { gt: 0 },
        },
        orderBy: { createdAt: 'asc' },
      });

      let remainingToReserve = requiredQty;

      for (const stock of stock) {
        if (remainingToReserve <= 0) break;

        const reserveFromThis = Math.min(
          stock.quantity.toNumber(),
          remainingToReserve,
        );

        await this.prisma.stock.update({
          where: {
            productId_warehouseId: {
              productId: stock.productId,
              warehouseId: stock.warehouseId,
            },
          },
          data: {
            reservedQuantity: { increment: reserveFromThis },
          },
        });

        remainingToReserve -= reserveFromThis;
      }
    }
  }

  private async releaseComponents(tenantId: string, order: any) {
    for (const component of order.bom.components) {
      const reservedQty = component.quantity.toNumber() * order.quantity.toNumber();

      const stock = await this.prisma.stock.findMany({
        where: {
          productId: component.productId,
          reservedQuantity: { gt: 0 },
        },
      });

      let remainingToRelease = reservedQty;

      for (const stock of stock) {
        if (remainingToRelease <= 0) break;

        const releaseFromThis = Math.min(
          stock.reservedQuantity.toNumber(),
          remainingToRelease,
        );

        await this.prisma.stock.update({
          where: {
            productId_warehouseId: {
              productId: stock.productId,
              warehouseId: stock.warehouseId,
            },
          },
          data: {
            reservedQuantity: { decrement: releaseFromThis },
          },
        });

        remainingToRelease -= releaseFromThis;
      }
    }
  }
}