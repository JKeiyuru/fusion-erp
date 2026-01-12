// FILE: backend/src/modules/procurement/services/suppliers.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateSupplierDto) {
    const existing = await this.prisma.supplier.findUnique({
      where: { companyId_code: { companyId: tenantId, code: createDto.code } },
    });
    if (existing) throw new ConflictException('Supplier code already exists');

    return this.prisma.supplier.create({
      data: { companyId: tenantId, ...createDto },
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
        { code: { contains: options.search, mode: 'insensitive' } },
      ];
    }

    const [suppliers, total] = await Promise.all([
      this.prisma.supplier.findMany({ where, skip, take: limit, orderBy: { name: 'asc' } }),
      this.prisma.supplier.count({ where }),
    ]);

    return { data: suppliers, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
  }

  async findOne(tenantId: string, id: string) {
    const supplier = await this.prisma.supplier.findFirst({
      where: { id, companyId: tenantId },
      include: {
        _count: { select: { purchaseOrders: true, bills: true } },
      },
    });
    if (!supplier) throw new NotFoundException('Supplier not found');
    return supplier;
  }

  async update(tenantId: string, id: string, updateDto: UpdateSupplierDto) {
    await this.findOne(tenantId, id);
    return this.prisma.supplier.update({ where: { id }, data: updateDto });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id);
    const hasTransactions = await this.prisma.supplier.findFirst({
      where: { id, OR: [{ purchaseOrders: { some: {} } }, { bills: { some: {} } }] },
    });

    if (hasTransactions) {
      return this.prisma.supplier.update({ where: { id }, data: { isActive: false } });
    }

    return this.prisma.supplier.delete({ where: { id } });
  }
}