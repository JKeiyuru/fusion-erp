// ============================================
// FILE: backend/src/modules/hr/services/leave.service.ts
// Location: backend/src/modules/hr/services/leave.service.ts
// ============================================
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateLeaveRequestDto } from '../dto/create-leave-request.dto';
import { LeaveStatus } from '@prisma/client';

@Injectable()
export class LeaveService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateLeaveRequestDto) {
    const employee = await this.prisma.employee.findFirst({
      where: { id: createDto.employeeId, companyId: tenantId },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    return this.prisma.leaveRequest.create({
      data: { companyId: tenantId, ...createDto },
      include: { employee: true },
    });
  }

  async findAll(tenantId: string, options: any) {
    const where: any = { companyId: tenantId };
    
    if (options.employeeId) where.employeeId = options.employeeId;
    if (options.status) where.status = options.status;

    return this.prisma.leaveRequest.findMany({
      where,
      include: { employee: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async approve(tenantId: string, id: string, approverId: string) {
    const request = await this.prisma.leaveRequest.findFirst({
      where: { id, companyId: tenantId },
    });
    if (!request) throw new NotFoundException('Leave request not found');
    if (request.status !== 'PENDING') {
      throw new BadRequestException('Only pending requests can be approved');
    }

    return this.prisma.leaveRequest.update({
      where: { id },
      data: {
        status: LeaveStatus.APPROVED,
        approvedBy: approverId,
        approvedAt: new Date(),
      },
    });
  }

  async reject(tenantId: string, id: string, approverId: string) {
    const request = await this.prisma.leaveRequest.findFirst({
      where: { id, companyId: tenantId },
    });
    if (!request) throw new NotFoundException('Leave request not found');
    if (request.status !== 'PENDING') {
      throw new BadRequestException('Only pending requests can be rejected');
    }

    return this.prisma.leaveRequest.update({
      where: { id },
      data: {
        status: LeaveStatus.REJECTED,
        approvedBy: approverId,
        approvedAt: new Date(),
      },
    });
  }
}
