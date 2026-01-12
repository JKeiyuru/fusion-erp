// ============================================
// FILE: backend/src/modules/accounting/controllers/reports.controller.ts
// Location: backend/src/modules/accounting/controllers/reports.controller.ts
// ============================================
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { ReportsService } from '../services/reports.service';

@ApiTags('accounting')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('accounting/reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('balance-sheet')
  @ApiOperation({ summary: 'Get Balance Sheet' })
  getBalanceSheet(
    @CurrentTenant() tenantId: string,
    @Query('date') date?: string,
  ) {
    return this.reportsService.getBalanceSheet(tenantId, date);
  }

  @Get('income-statement')
  @ApiOperation({ summary: 'Get Income Statement (P&L)' })
  getIncomeStatement(
    @CurrentTenant() tenantId: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportsService.getIncomeStatement(tenantId, startDate, endDate);
  }

  @Get('trial-balance')
  @ApiOperation({ summary: 'Get Trial Balance' })
  getTrialBalance(
    @CurrentTenant() tenantId: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportsService.getTrialBalance(tenantId, startDate, endDate);
  }

  @Get('general-ledger')
  @ApiOperation({ summary: 'Get General Ledger' })
  getGeneralLedger(
    @CurrentTenant() tenantId: string,
    @Query('accountId') accountId: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportsService.getGeneralLedger(
      tenantId,
      accountId,
      startDate,
      endDate,
    );
  }
}