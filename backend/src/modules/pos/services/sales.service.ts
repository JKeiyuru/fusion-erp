// ============================================
// FILE: backend/src/modules/pos/services/sales.service.ts
// Location: backend/src/modules/pos/services/sales.service.ts
// ============================================
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePosSaleDto } from '../dto/create-pos-sale.dto';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreatePosSaleDto) {
    // Verify session exists and is open
    const session = await this.prisma.posSession.findFirst({
      where: {
        id: createDto.sessionId,
        companyId: tenantId,
        status: 'OPEN',
      },
    });

    if (!session) {
      throw new NotFoundException('Active session not found');
    }

    // Generate sale number
    const count = await this.prisma.posSale.count({
      where: { companyId: tenantId },
    });
    const saleNumber = `SALE-${String(count + 1).padStart(6, '0')}`;

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

    // Create sale and reduce stock
    return this.prisma.$transaction(async (prisma) => {
      const sale = await prisma.posSale.create({
        data: {
          companyId: tenantId,
          sessionId: createDto.sessionId,
          saleNumber,
          customerId: createDto.customerId,
          date: new Date(),
          subtotal,
          taxAmount,
          total,
          paymentMethod: createDto.paymentMethod,
          mpesaCode: createDto.mpesaCode,
          lines: {
            create: createDto.lines.map((line) => ({
              productId: line.productId,
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

      // Reduce stock for each line
      for (const line of createDto.lines) {
        // Find default warehouse stock (or first available)
        const stock = await prisma.stock.findFirst({
          where: {
            productId: line.productId,
            quantity: { gte: line.quantity },
          },
        });

        if (!stock) {
          throw new BadRequestException(
            `Insufficient stock for product ${line.productId}`,
          );
        }

        // Reduce quantity
        await prisma.stock.update({
          where: {
            productId_warehouseId: {
              productId: line.productId,
              warehouseId: stock.warehouseId,
            },
          },
          data: {
            quantity: {
              decrement: line.quantity,
            },
          },
        });

        // Create stock movement
        await prisma.stockMovement.create({
          data: {
            companyId: tenantId,
            productId: line.productId,
            warehouseId: stock.warehouseId,
            type: 'OUT',
            quantity: line.quantity,
            reference: sale.saleNumber,
            notes: 'POS Sale',
            date: new Date(),
          },
        });
      }

      return sale;
    });
  }

  async findAll(
    tenantId: string,
    options: {
      sessionId?: string;
      startDate?: string;
      endDate?: string;
      page?: number;
      limit?: number;
    },
  ) {
    const page = options.page || 1;
    const limit = options.limit || 50;
    const skip = (page - 1) * limit;

    const where: any = { companyId: tenantId };

    if (options.sessionId) {
      where.sessionId = options.sessionId;
    }

    if (options.startDate || options.endDate) {
      where.date = {};
      if (options.startDate) where.date.gte = new Date(options.startDate);
      if (options.endDate) where.date.lte = new Date(options.endDate);
    }

    const [sales, total] = await Promise.all([
      this.prisma.posSale.findMany({
        where,
        skip,
        take: limit,
        include: {
          customer: true,
          _count: {
            select: {
              lines: true,
            },
          },
        },
        orderBy: { date: 'desc' },
      }),
      this.prisma.posSale.count({ where }),
    ]);

    return {
      data: sales,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(tenantId: string, id: string) {
    const sale = await this.prisma.posSale.findFirst({
      where: { id, companyId: tenantId },
      include: {
        session: true,
        customer: true,
        lines: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!sale) {
      throw new NotFoundException('Sale not found');
    }

    return sale;
  }

  async getReceipt(tenantId: string, saleId: string) {
    const sale = await this.findOne(tenantId, saleId);

    const company = await this.prisma.company.findUnique({
      where: { id: tenantId },
    });

    return {
      company: {
        name: company.name,
        phone: company.phone,
        email: company.email,
        address: company.address,
        kraPin: company.kraPin,
      },
      sale,
      printedAt: new Date(),
    };
  }
}
