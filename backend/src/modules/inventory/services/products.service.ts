// ============================================
// FILE: backend/src/modules/inventory/services/products.service.ts
// Location: backend/src/modules/inventory/services/products.service.ts
// ============================================
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateProductDto) {
    // Check if SKU exists
    const existing = await this.prisma.product.findUnique({
      where: {
        companyId_sku: {
          companyId: tenantId,
          sku: createDto.sku,
        },
      },
    });

    if (existing) {
      throw new ConflictException('Product SKU already exists');
    }

    return this.prisma.product.create({
      data: {
        companyId: tenantId,
        ...createDto,
      },
      include: {
        category: true,
      },
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;
    const where: any = { companyId: tenantId };

    if (options.search) {
      where.OR = [
        { name: { contains: options.search, mode: 'insensitive' } },
        { sku: { contains: options.search, mode: 'insensitive' } },
        { barcode: { contains: options.search, mode: 'insensitive' } },
      ];
    }

    if (options.categoryId) {
      where.categoryId = options.categoryId;
    }

    if (options.type) {
      where.type = options.type;
    }

    if (options.isActive !== undefined) {
      where.isActive = options.isActive === 'true';
    }

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        skip,
        take: limit,
        include: {
          category: true,
          stock: {
            include: {
              warehouse: true,
            },
          },
        },
        orderBy: { name: 'asc' },
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      data: products,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(tenantId: string, id: string) {
    const product = await this.prisma.product.findFirst({
      where: { id, companyId: tenantId },
      include: {
        category: true,
        stock: {
          include: {
            warehouse: true,
          },
        },
        bom: {
          include: {
            components: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(tenantId: string, id: string, updateDto: UpdateProductDto) {
    await this.findOne(tenantId, id);

    return this.prisma.product.update({
      where: { id },
      data: updateDto,
      include: {
        category: true,
        stock: {
          include: {
            warehouse: true,
          },
        },
      },
    });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id);

    // Check if product has transactions
    const hasTransactions = await this.prisma.product.findFirst({
      where: {
        id,
        OR: [
          { invoiceLines: { some: {} } },
          { salesOrderLines: { some: {} } },
          { purchaseOrderLines: { some: {} } },
        ],
      },
    });

    if (hasTransactions) {
      // Deactivate instead of delete
      return this.prisma.product.update({
        where: { id },
        data: { isActive: false },
      });
    }

    return this.prisma.product.delete({ where: { id } });
  }

  async getStock(tenantId: string, productId: string) {
    await this.findOne(tenantId, productId);

    const stock = await this.prisma.stock.findMany({
      where: { productId },
      include: {
        warehouse: true,
      },
    });

    const totalQuantity = stock.reduce(
      (sum, stock) => sum + stock.quantity.toNumber(),
      0,
    );

    const totalReserved = stock.reduce(
      (sum, stock) => sum + stock.reservedQuantity.toNumber(),
      0,
    );

    return {
      productId,
      totalQuantity,
      totalReserved,
      availableQuantity: totalQuantity - totalReserved,
      byWarehouse: stock.map((stock) => ({
        warehouseId: stock.warehouseId,
        warehouseName: stock.warehouse.name,
        quantity: stock.quantity.toNumber(),
        reservedQuantity: stock.reservedQuantity.toNumber(),
        availableQuantity:
          stock.quantity.toNumber() - stock.reservedQuantity.toNumber(),
      })),
    };
  }

  async getLowStockProducts(tenantId: string) {
    const products = await this.prisma.product.findMany({
      where: {
        companyId: tenantId,
        isActive: true,
        trackInventory: true,
      },
      include: {
        stock: true,
      },
    });

    const lowStockProducts = products.filter((product) => {
      const totalStock = product.stock.reduce(
        (sum, stock) => sum + stock.quantity.toNumber(),
        0,
      );
      return (
        product.reorderLevel &&
        totalStock <= product.reorderLevel.toNumber()
      );
    });

    return lowStockProducts.map((product) => ({
      id: product.id,
      name: product.name,
      sku: product.sku,
      currentStock: product.stock.reduce(
        (sum, stock) => sum + stock.quantity.toNumber(),
        0,
      ),
      reorderLevel: product.reorderLevel?.toNumber() || 0,
      reorderQuantity: product.reorderQuantity?.toNumber() || 0,
    }));
  }

  async bulkUpdatePrices(
    tenantId: string,
    productIds: string[],
    priceAdjustment: { type: 'percentage' | 'fixed'; value: number },
  ) {
    const products = await this.prisma.product.findMany({
      where: {
        id: { in: productIds },
        companyId: tenantId,
      },
    });

    const updates = products.map((product) => {
      let newPrice = product.sellingPrice.toNumber();

      if (priceAdjustment.type === 'percentage') {
        newPrice += (newPrice * priceAdjustment.value) / 100;
      } else {
        newPrice += priceAdjustment.value;
      }

      return this.prisma.product.update({
        where: { id: product.id },
        data: { sellingPrice: newPrice },
      });
    });

    return Promise.all(updates);
  }
}