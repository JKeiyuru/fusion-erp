// ============================================
// FILE: backend/src/modules/sales/services/customers.service.ts
// Location: backend/src/modules/sales/services/customers.service.ts
// ============================================
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateCustomerDto) {
    // Check if customer code exists
    const existing = await this.prisma.customer.findUnique({
      where: {
        companyId_code: {
          companyId: tenantId,
          code: createDto.code,
        },
      },
    });

    if (existing) {
      throw new ConflictException('Customer code already exists');
    }

    return this.prisma.customer.create({
      data: {
        companyId: tenantId,
        ...createDto,
      },
    });
  }

  async findAll(
    tenantId: string,
    options: { search?: string; page?: number; limit?: number },
  ) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;

    const where: any = { companyId: tenantId };

    if (options.search) {
      where.OR = [
        { name: { contains: options.search, mode: 'insensitive' } },
        { code: { contains: options.search, mode: 'insensitive' } },
        { email: { contains: options.search, mode: 'insensitive' } },
        { phone: { contains: options.search, mode: 'insensitive' } },
      ];
    }

    const [customers, total] = await Promise.all([
      this.prisma.customer.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: 'asc' },
      }),
      this.prisma.customer.count({ where }),
    ]);

    return {
      data: customers,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(tenantId: string, id: string) {
    const customer = await this.prisma.customer.findFirst({
      where: { id, companyId: tenantId },
      include: {
        _count: {
          select: {
            invoices: true,
            quotations: true,
            salesOrders: true,
          },
        },
      },
    });

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    return customer;
  }

  async update(tenantId: string, id: string, updateDto: UpdateCustomerDto) {
    await this.findOne(tenantId, id); // Check exists

    return this.prisma.customer.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id); // Check exists

    // Check if customer has transactions
    const hasTransactions = await this.prisma.customer.findFirst({
      where: {
        id,
        OR: [
          { invoices: { some: {} } },
          { quotations: { some: {} } },
          { salesOrders: { some: {} } },
        ],
      },
    });

    if (hasTransactions) {
      // Deactivate instead of delete
      return this.prisma.customer.update({
        where: { id },
        data: { isActive: false },
      });
    }

    return this.prisma.customer.delete({ where: { id } });
  }

  async getInvoices(tenantId: string, customerId: string) {
    await this.findOne(tenantId, customerId);

    return this.prisma.invoice.findMany({
      where: {
        companyId: tenantId,
        customerId,
      },
      include: {
        lines: {
          include: {
            product: true,
          },
        },
      },
      orderBy: { date: 'desc' },
    });
  }

  async getBalance(tenantId: string, customerId: string) {
    await this.findOne(tenantId, customerId);

    const invoices = await this.prisma.invoice.findMany({
      where: {
        companyId: tenantId,
        customerId,
        status: {
          in: ['SENT', 'PARTIALLY_PAID', 'OVERDUE'],
        },
      },
      select: {
        total: true,
        paidAmount: true,
      },
    });

    const totalDue = invoices.reduce(
      (sum, inv) => sum + (inv.total.toNumber() - inv.paidAmount.toNumber()),
      0,
    );

    return { balance: totalDue };
  }
}