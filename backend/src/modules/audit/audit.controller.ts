// ============================================
// FILE: backend/src/modules/audit/audit.controller.ts
// ============================================
import {
  Controller,
  Get,
  Query,
  Param,
  UseGuards,
} from '@nestjs/common';
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

  @Get()
  @ApiOperation({ summary: 'Get all audit logs' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('userId') userId?: string,
    @Query('entity') entity?: string,
    @Query('action') action?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.auditService.findAll(tenantId, {
      userId,
      entity,
      action,
      startDate,
      endDate,
      page,
      limit,
    });
  }

  @Get('entity/:entity/:entityId')
  @ApiOperation({ summary: 'Get entity history' })
  getEntityHistory(
    @CurrentTenant() tenantId: string,
    @Param('entity') entity: string,
    @Param('entityId') entityId: string,
  ) {
    return this.auditService.getEntityHistory(tenantId, entity, entityId);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get user activity' })
  getUserActivity(
    @CurrentTenant() tenantId: string,
    @Param('userId') userId: string,
    @Query('days') days?: number,
  ) {
    return this.auditService.getUserActivity(tenantId, userId, Number(days) || 30);
  }

  @Get('summary')
  @ApiOperation({ summary: 'Get activity summary' })
  getSummary(@CurrentTenant() tenantId: string, @Query('days') days?: number) {
    return this.auditService.getActivitySummary(tenantId, Number(days) || 7);
  }
}