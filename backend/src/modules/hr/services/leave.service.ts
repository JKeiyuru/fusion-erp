// ============================================
// FILE: backend/src/modules/hr/services/leave.service.ts
// ============================================
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateLeaveDto } from '../dto/create-leave.dto';
import { LeaveStatus } from '@prisma/client';

@Injectable()
export class LeaveService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateLeaveDto) {
    const employee = await this.prisma.employee.findFirst({
      where: {
        id: createDto.employeeId,
        companyId: tenantId,
        isActive: true,
      },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    // Validate dates
    if (createDto.endDate <= createDto.startDate) {
      throw new BadRequestException('End date must be after start date');
    }

    // Calculate days
    const days = this.calculateWorkingDays(createDto.startDate, createDto.endDate);

    // Check for overlapping leave
    const overlapping = await this.prisma.leaveRecord.findFirst({
      where: {
        employeeId: createDto.employeeId,
        status: { in: [LeaveStatus.PENDING, LeaveStatus.APPROVED] },
        OR: [
          {
            startDate: { lte: createDto.endDate },
            endDate: { gte: createDto.startDate },
          },
        ],
      },
    });

    if (overlapping) {
      throw new BadRequestException('Employee has overlapping leave request');
    }

    return this.prisma.leaveRecord.create({
      data: {
        employeeId: createDto.employeeId,
        type: createDto.type,
        startDate: createDto.startDate,
        endDate: createDto.endDate,
        days,
        reason: createDto.reason,
        status: LeaveStatus.PENDING,
      },
      include: {
        employee: true,
      },
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;
    const where: any = {
      employee: {
        companyId: tenantId,
      },
    };

    if (options.employeeId) {
      where.employeeId = options.employeeId;
    }

    if (options.status) {
      where.status = options.status;
    }

    if (options.type) {
      where.type = options.type;
    }

    const [leaves, total] = await Promise.all([
      this.prisma.leaveRecord.findMany({
        where,
        skip,
        take: limit,
        include: {
          employee: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.leaveRecord.count({ where }),
    ]);

    return {
      data: leaves,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const leave = await this.prisma.leaveRecord.findUnique({
      where: { id },
      include: {
        employee: true,
      },
    });

    if (!leave) {
      throw new NotFoundException('Leave record not found');
    }

    return leave;
  }

  async approve(id: string) {
    const leave = await this.findOne(id);

    if (leave.status !== LeaveStatus.PENDING) {
      throw new BadRequestException('Only pending leave can be approved');
    }

    return this.prisma.leaveRecord.update({
      where: { id },
      data: { status: LeaveStatus.APPROVED },
    });
  }

  async reject(id: string) {
    const leave = await this.findOne(id);

    if (leave.status !== LeaveStatus.PENDING) {
      throw new BadRequestException('Only pending leave can be rejected');
    }

    return this.prisma.leaveRecord.update({
      where: { id },
      data: { status: LeaveStatus.REJECTED },
    });
  }

  async getLeaveBalance(tenantId: string, employeeId: string, year: number) {
    const employee = await this.prisma.employee.findFirst({
      where: { id: employeeId, companyId: tenantId },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    // Kenya: 21 days annual leave per year (minimum)
    const annualLeaveEntitlement = 21;

    const startOfYear = new Date(year, 0, 1);
    const endOfYear = new Date(year, 11, 31);

    const approvedLeaves = await this.prisma.leaveRecord.findMany({
      where: {
        employeeId,
        status: LeaveStatus.APPROVED,
        startDate: { gte: startOfYear },
        endDate: { lte: endOfYear },
      },
    });

    const takenByType = approvedLeaves.reduce(
      (acc, leave) => {
        acc[leave.type] = (acc[leave.type] || 0) + leave.days;
        return acc;
      },
      {} as Record<string, number>,
    );

    return {
      employeeId,
      year,
      annualLeaveEntitlement,
      taken: takenByType,
      totalTaken: approvedLeaves.reduce((sum, leave) => sum + leave.days, 0),
      remaining: annualLeaveEntitlement - (takenByType.ANNUAL || 0),
    };
  }

  async getLeaveSummary(tenantId: string, year: number) {
    const startOfYear = new Date(year, 0, 1);
    const endOfYear = new Date(year, 11, 31);

    const leaves = await this.prisma.leaveRecord.findMany({
      where: {
        employee: {
          companyId: tenantId,
        },
        startDate: { gte: startOfYear },
        endDate: { lte: endOfYear },
      },
      include: {
        employee: true,
      },
    });

    const summary = {
      totalRequests: leaves.length,
      byStatus: {
        pending: 0,
        approved: 0,
        rejected: 0,
      },
      byType: {
        ANNUAL: 0,
        SICK: 0,
        MATERNITY: 0,
        PATERNITY: 0,
        UNPAID: 0,
      },
      totalDays: 0,
    };

    leaves.forEach((leave) => {
      summary.byStatus[leave.status.toLowerCase()] += 1;
      summary.byType[leave.type] = (summary.byType[leave.type] || 0) + leave.days;
      if (leave.status === LeaveStatus.APPROVED) {
        summary.totalDays += leave.days;
      }
    });

    return summary;
  }

  private calculateWorkingDays(startDate: Date, endDate: Date): number {
    let days = 0;
    const current = new Date(startDate);

    while (current <= endDate) {
      const dayOfWeek = current.getDay();
      // Exclude Saturdays (6) and Sundays (0)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days++;
      }
      current.setDate(current.getDate() + 1);
    }

    return days;
  }
}