// ============================================
// FILE: backend/src/modules/inventory/services/warehouses.service.ts
// Location: backend/src/modules/inventory/services/warehouses.service.ts
// ============================================
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateWarehouseDto, UpdateWarehouseDto} from '../dto/create-warehouse.dto';


@Injectable()
export class WarehousesService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateWarehouseDto) {
    const existing = await this.prisma.warehouse.findUnique({
      where: {
        companyId_code: {
          companyId: tenantId,
          code: createDto.code,
        },
      },
    });

    if (existing) {
      throw new ConflictException('Warehouse code already exists');
    }

    return this.prisma.warehouse.create({
      data: {
        companyId: tenantId,
        ...createDto,
      },
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.warehouse.findMany({
      where: { companyId: tenantId },
      include: {
        _count: {
          select: {
            stock: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(tenantId: string, id: string) {
    const warehouse = await this.prisma.warehouse.findFirst({
      where: { id, companyId: tenantId },
      include: {
        stock: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!warehouse) {
      throw new NotFoundException('Warehouse not found');
    }

    return warehouse;
  }

  async update(tenantId: string, id: string, updateDto: UpdateWarehouseDto) {
    await this.findOne(tenantId, id);

    return this.prisma.warehouse.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id);

    const hasStock = await this.prisma.stock.count({
      where: { warehouseId: id, quantity: { gt: 0 } },
    });

    if (hasStock > 0) {
      throw new ConflictException('Cannot delete warehouse with stock');
    }

    return this.prisma.warehouse.delete({ where: { id } });
  }
}