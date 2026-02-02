// FILE: backend/src/modules/reporting/reporting.controller.ts
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../common/guards/tenant.guard';
import { CurrentTenant } from '../../common/decorators/tenant.decorator';
import { ReportingService } from './reporting.service';

@ApiTags('reporting')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('reporting')
export class ReportingController {
  constructor(private reportingService: ReportingService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get dashboard statistics' })
  getDashboard(@CurrentTenant() tenantId: string) {
    return this.reportingService.getDashboard(tenantId);
  }

  @Get('sales-summary')
  @ApiOperation({ summary: 'Get sales summary' })
  getSalesSummary(
    @CurrentTenant() tenantId: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportingService.getSalesSummary(tenantId, startDate, endDate);
  }

  @Get('inventory-summary')
  @ApiOperation({ summary: 'Get inventory summary' })
  getInventorySummary(@CurrentTenant() tenantId: string) {
    return this.reportingService.getInventorySummary(tenantId);
  }

  @Get('financial-summary')
  @ApiOperation({ summary: 'Get financial summary' })
  getFinancialSummary(
    @CurrentTenant() tenantId: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportingService.getFinancialSummary(tenantId, startDate, endDate);
  }

  @Get('aged-receivables')
  @ApiOperation({ summary: 'Get aged receivables report' })
  getAgedReceivables(@CurrentTenant() tenantId: string) {
    return this.reportingService.getAgedReceivables(tenantId);
  }

  @Get('aged-payables')
  @ApiOperation({ summary: 'Get aged payables report' })
  getAgedPayables(@CurrentTenant() tenantId: string) {
    return this.reportingService.getAgedPayables(tenantId);
  }
}