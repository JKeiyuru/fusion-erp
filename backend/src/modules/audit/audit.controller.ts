// FILE: backend/src/modules/audit/audit.controller.ts
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../common/guards/tenant.guard';
import { CurrentTenant } from '../../common/decorators/tenant.decorator';
import { AuditService } from './audit.service';

@ApiTags('audit')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('audit')
export class AuditController {
  constructor(private auditService: AuditService) {}

  @Get('logs')
  @ApiOperation({ summary: 'Get audit logs' })
  getLogs(
    @CurrentTenant() tenantId: string,
    @Query('userId') userId?: string,
    @Query('entity') entity?: string,
    @Query('action') action?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.auditService.getLogs(tenantId, {
      userId,
      entity,
      action,
      startDate,
      endDate,
      page,
      limit,
    });
  }

  @Get('activity')
  @ApiOperation({ summary: 'Get recent activity' })
  getActivity(
    @CurrentTenant() tenantId: string,
    @Query('limit') limit?: number,
  ) {
    return this.auditService.getRecentActivity(tenantId, limit);
  }
}
