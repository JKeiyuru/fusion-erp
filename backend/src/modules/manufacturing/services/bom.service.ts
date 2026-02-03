// ============================================
// FILE: backend/src/modules/manufacturing/services/bom.service.ts
// Location: backend/src/modules/manufacturing/services/bom.service.ts
// ============================================
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateBomDto } from '../dto/create-bom.dto';
import { UpdateBomDto } from '../dto/update-bom.dto';

@Injectable()
export class BomService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateBomDto) {
    // Check if BOM already exists for this product
    const existing = await this.prisma.bom.findFirst({
      where: {
        companyId: tenantId,
        productId: createDto.productId,
        isActive: true,
      },
    });

    if (existing) {
      throw new ConflictException('Active BOM already exists for this product');
    }

    // Validate all component products exist
    const componentIds = createDto.components.map(c => c.productId);
    const components = await this.prisma.product.findMany({
      where: {
        id: { in: componentIds },
        companyId: tenantId,
      },
    });

    if (components.length !== componentIds.length) {
      throw new NotFoundException('One or more component products not found');
    }

    // Generate BOM number
    const count = await this.prisma.bom.count({
      where: { companyId: tenantId },
    });
    const bomNumber = `BOM-${String(count + 1).padStart(6, '0')}`;

    return this.prisma.bom.create({
      data: {
        companyId: tenantId,
        bomNumber,
        productId: createDto.productId,
        version: createDto.version || '1.0',
        isActive: true,
        components: {
          create: createDto.components.map((comp) => ({
            productId: comp.productId,
            quantity: comp.quantity,
            unit: comp.unit,
            wastagePercentage: comp.wastagePercentage || 0,
          })),
        },
      },
      include: {
        product: true,
        components: {
          include: {
            product: true,
          },
        },
      },
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

    if (options.isActive !== undefined) {
      where.isActive = options.isActive === 'true';
    }

    const [boms, total] = await Promise.all([
      this.prisma.bom.findMany({
        where,
        skip,
        take: limit,
        include: {
          product: true,
          _count: {
            select: {
              components: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.bom.count({ where }),
    ]);

    return {
      data: boms,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(tenantId: string, id: string) {
    const bom = await this.prisma.bom.findFirst({
      where: { id, companyId: tenantId },
      include: {
        product: true,
        components: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!bom) {
      throw new NotFoundException('BOM not found');
    }

    return bom;
  }

  async update(tenantId: string, id: string, updateDto: UpdateBomDto) {
    await this.findOne(tenantId, id);

    return this.prisma.bom.update({
      where: { id },
      data: {
        version: updateDto.version,
        isActive: updateDto.isActive,
        components: updateDto.components
          ? {
              deleteMany: {},
              create: updateDto.components.map((comp) => ({
                productId: comp.productId,
                quantity: comp.quantity,
                unit: comp.unit,
                wastagePercentage: comp.wastagePercentage || 0,
              })),
            }
          : undefined,
      },
      include: {
        product: true,
        components: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id);

    // Soft delete by deactivating
    return this.prisma.bom.update({
      where: { id },
      data: { isActive: false },
    });
  }

  async calculateCost(tenantId: string, bomId: string) {
    const bom = await this.findOne(tenantId, bomId);

    let totalCost = 0;

    for (const component of bom.components) {
      const product = await this.prisma.product.findUnique({
        where: { id: component.productId },
      });

      if (product) {
        const componentCost = product.costPrice.toNumber() * component.quantity.toNumber();
        const wastage = (componentCost * component.wastagePercentage.toNumber()) / 100;
        totalCost += componentCost + wastage;
      }
    }

    return {
      bomId,
      totalCost,
      components: bom.components.map((comp) => ({
        productId: comp.productId,
        productName: comp.product.name,
        quantity: comp.quantity.toNumber(),
        unitCost: comp.product.costPrice.toNumber(),
        totalCost: comp.product.costPrice.toNumber() * comp.quantity.toNumber(),
        wastagePercentage: comp.wastagePercentage.toNumber(),
      })),
    };
  }

  async checkAvailability(tenantId: string, bomId: string, quantityToProduce: number) {
    const bom = await this.findOne(tenantId, bomId);

    const availability = [];

    for (const component of bom.components) {
      const requiredQty = component.quantity.toNumber() * quantityToProduce;

      // Get total available stock across all warehouses
      const stock = await this.prisma.stock.findMany({
        where: {
          productId: component.productId,
        },
      });

      const availableQty = stock.reduce(
        (sum, stock) => sum + stock.quantity.toNumber(),
        0,
      );

      availability.push({
        productId: component.productId,
        productName: component.product.name,
        requiredQuantity: requiredQty,
        availableQuantity: availableQty,
        isAvailable: availableQty >= requiredQty,
        shortage: Math.max(0, requiredQty - availableQty),
      });
    }

    const allAvailable = availability.every((item) => item.isAvailable);

    return {
      bomId,
      quantityToProduce,
      allAvailable,
      components: availability,
    };
  }
}