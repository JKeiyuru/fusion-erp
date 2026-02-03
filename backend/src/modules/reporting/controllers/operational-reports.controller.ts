import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { OperationalReportsService } from '../services/operational-reports.service';

@ApiTags('reporting')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('reporting/operational')
export class OperationalReportsController {
  constructor(private reportsService: OperationalReportsService) {}

  @Get('inventory-valuation')
  inventoryValuation(@CurrentTenant() tenantId: string) {
    return this.reportsService.inventoryValuation(tenantId);
  }

  @Get('stock-movements')
  stockMovements(
    @CurrentTenant() tenantId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.reportsService.stockMovementReport(
      tenantId,
      new Date(startDate),
      new Date(endDate),
    );
  }

  @Get('purchase-analysis')
  purchaseAnalysis(
    @CurrentTenant() tenantId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.reportsService.purchaseAnalysis(
      tenantId,
      new Date(startDate),
      new Date(endDate),
    );
  }
}