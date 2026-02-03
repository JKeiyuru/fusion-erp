// ============================================
// FILE: backend/src/modules/hr/services/employees.service.ts
// ============================================
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../dto/create-employee.dto';


@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateEmployeeDto) {
    // Check if employee number exists
    const existing = await this.prisma.employee.findUnique({
      where: {
        companyId_employeeNo: {
          companyId: tenantId,
          employeeNo: createDto.employeeNo,
        },
      },
    });

    if (existing) {
      throw new ConflictException('Employee number already exists');
    }

    // Validate KRA PIN format (Kenya)
    if (createDto.kraPin && !this.isValidKraPin(createDto.kraPin)) {
      throw new ConflictException('Invalid KRA PIN format');
    }

    return this.prisma.employee.create({
      data: {
        companyId: tenantId,
        ...createDto,
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
        { firstName: { contains: options.search, mode: 'insensitive' } },
        { lastName: { contains: options.search, mode: 'insensitive' } },
        { employeeNo: { contains: options.search, mode: 'insensitive' } },
        { email: { contains: options.search, mode: 'insensitive' } },
      ];
    }

    if (options.department) {
      where.department = options.department;
    }

    if (options.isActive !== undefined) {
      where.isActive = options.isActive === 'true';
    }

    const [employees, total] = await Promise.all([
      this.prisma.employee.findMany({
        where,
        skip,
        take: limit,
        orderBy: { employeeNo: 'asc' },
      }),
      this.prisma.employee.count({ where }),
    ]);

    return {
      data: employees,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(tenantId: string, id: string) {
    const employee = await this.prisma.employee.findFirst({
      where: { id, companyId: tenantId },
      include: {
        payrollRuns: {
          orderBy: { periodEnd: 'desc' },
          take: 12, // Last 12 months
        },
        leaveRecords: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return employee;
  }

  async update(tenantId: string, id: string, updateDto: UpdateEmployeeDto) {
    await this.findOne(tenantId, id);

    if (updateDto.kraPin && !this.isValidKraPin(updateDto.kraPin)) {
      throw new ConflictException('Invalid KRA PIN format');
    }

    return this.prisma.employee.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id);

    // Check if employee has payroll records
    const hasPayroll = await this.prisma.payrollRun.count({
      where: { employeeId: id },
    });

    if (hasPayroll > 0) {
      // Deactivate instead of delete
      return this.prisma.employee.update({
        where: { id },
        data: { isActive: false },
      });
    }

    return this.prisma.employee.delete({ where: { id } });
  }

  async getDepartments(tenantId: string) {
    const departments = await this.prisma.employee.findMany({
      where: {
        companyId: tenantId,
        department: { not: null },
        isActive: true,
      },
      select: {
        department: true,
      },
      distinct: ['department'],
    });

    return departments
      .map((d) => d.department)
      .filter(Boolean)
      .sort();
  }

  async getEmployeeStats(tenantId: string) {
    const [total, active, byDepartment] = await Promise.all([
      this.prisma.employee.count({
        where: { companyId: tenantId },
      }),
      this.prisma.employee.count({
        where: { companyId: tenantId, isActive: true },
      }),
      this.prisma.employee.groupBy({
        by: ['department'],
        where: {
          companyId: tenantId,
          isActive: true,
          department: { not: null },
        },
        _count: true,
      }),
    ]);

    return {
      total,
      active,
      inactive: total - active,
      byDepartment: byDepartment.map((d) => ({
        department: d.department,
        count: d._count,
      })),
    };
  }

  private isValidKraPin(pin: string): boolean {
    // Kenya KRA PIN format: A000000000X (letter + 9 digits + letter)
    const kraPattern = /^[A-Z]\d{9}[A-Z]$/;
    return kraPattern.test(pin);
  }
}