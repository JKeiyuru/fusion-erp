import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { FinancialReportsService } from '../services/financial-reports.service';

@ApiTags('reporting')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('reporting/financial')
export class FinancialReportsController {
  constructor(private reportsService: FinancialReportsService) {}

  @Get('profit-and-loss')
  profitAndLoss(
    @CurrentTenant() tenantId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.reportsService.profitAndLoss(
      tenantId,
      new Date(startDate),
      new Date(endDate),
    );
  }

  @Get('balance-sheet')
  balanceSheet(
    @CurrentTenant() tenantId: string,
    @Query('asOfDate') asOfDate: string,
  ) {
    return this.reportsService.balanceSheet(tenantId, new Date(asOfDate));
  }

  @Get('cash-flow')
  cashFlow(
    @CurrentTenant() tenantId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.reportsService.cashFlow(
      tenantId,
      new Date(startDate),
      new Date(endDate),
    );
  }

  @Get('sales-analysis')
  salesAnalysis(
    @CurrentTenant() tenantId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.reportsService.salesAnalysis(
      tenantId,
      new Date(startDate),
      new Date(endDate),
    );
  }
}