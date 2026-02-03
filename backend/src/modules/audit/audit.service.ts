// ============================================
// FILE: backend/src/modules/audit/audit.service.ts
// ============================================
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(private prisma: PrismaService) {}

  async log(
    tenantId: string,
    userId: string | null,
    action: string,
    entity: string,
    entityId: string | null,
    changes: any = null,
    ipAddress?: string,
    userAgent?: string,
  ) {
    return this.prisma.auditLog.create({
      data: {
        companyId: tenantId,
        userId,
        action,
        entity,
        entityId,
        changes,
        ipAddress,
        userAgent,
      },
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 50;
    const skip = (page - 1) * limit;
    const where: any = { companyId: tenantId };

    if (options.userId) {
      where.userId = options.userId;
    }

    if (options.entity) {
      where.entity = options.entity;
    }

    if (options.action) {
      where.action = { contains: options.action, mode: 'insensitive' };
    }

    if (options.startDate || options.endDate) {
      where.createdAt = {};
      if (options.startDate) where.createdAt.gte = new Date(options.startDate);
      if (options.endDate) where.createdAt.lte = new Date(options.endDate);
    }

    const [logs, total] = await Promise.all([
      this.prisma.auditLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.auditLog.count({ where }),
    ]);

    return {
      data: logs,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getEntityHistory(tenantId: string, entity: string, entityId: string) {
    return this.prisma.auditLog.findMany({
      where: {
        companyId: tenantId,
        entity,
        entityId,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getUserActivity(tenantId: string, userId: string, days: number = 30) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    return this.prisma.auditLog.findMany({
      where: {
        companyId: tenantId,
        userId,
        createdAt: { gte: startDate },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async getActivitySummary(tenantId: string, days: number = 7) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const logs = await this.prisma.auditLog.findMany({
      where: {
        companyId: tenantId,
        createdAt: { gte: startDate },
      },
    });

    const summary = {
      totalActions: logs.length,
      byEntity: {} as Record<string, number>,
      byAction: {} as Record<string, number>,
      byUser: {} as Record<string, number>,
    };

    logs.forEach((log) => {
      summary.byEntity[log.entity] = (summary.byEntity[log.entity] || 0) + 1;
      summary.byAction[log.action] = (summary.byAction[log.action] || 0) + 1;
      if (log.userId) {
        summary.byUser[log.userId] = (summary.byUser[log.userId] || 0) + 1;
      }
    });

    return summary;
  }
}
