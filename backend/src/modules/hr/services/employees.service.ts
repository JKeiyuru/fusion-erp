// ============================================
// FILE: backend/src/modules/hr/services/employees.service.ts
// Location: backend/src/modules/hr/services/employees.service.ts
// ============================================
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateEmployeeDto) {
    const existing = await this.prisma.employee.findUnique({
      where: {
        companyId_employeeNumber: {
          companyId: tenantId,
          employeeNumber: createDto.employeeNumber,
        },
      },
    });
    if (existing) throw new ConflictException('Employee number already exists');

    return this.prisma.employee.create({
      data: { companyId: tenantId, ...createDto },
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 50;
    const skip = (page - 1) * limit;
    const where: any = { companyId: tenantId };

    if (options.status) where.status = options.status;
    if (options.department) where.department = options.department;

    const [employees, total] = await Promise.all([
      this.prisma.employee.findMany({
        where,
        skip,
        take: limit,
        orderBy: { firstName: 'asc' },
      }),
      this.prisma.employee.count({ where }),
    ]);

    return { data: employees, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
  }

  async findOne(tenantId: string, id: string) {
    const employee = await this.prisma.employee.findFirst({
      where: { id, companyId: tenantId },
      include: {
        payrolls: {
          take: 12,
          orderBy: { period: 'desc' },
        },
        leaves: {
          take: 10,
          orderBy: { createdAt: 'desc' },
        },
      },
    });
    if (!employee) throw new NotFoundException('Employee not found');
    return employee;
  }

  async update(tenantId: string, id: string, updateDto: UpdateEmployeeDto) {
    await this.findOne(tenantId, id);
    return this.prisma.employee.update({ where: { id }, data: updateDto });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id);
    return this.prisma.employee.update({
      where: { id },
      data: { status: 'TERMINATED' },
    });
  }
}
