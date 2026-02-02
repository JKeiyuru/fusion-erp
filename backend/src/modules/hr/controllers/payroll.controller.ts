// FILE: backend/src/modules/hr/controllers/payroll.controller.ts
import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { PayrollService } from '../services/payroll.service';
import { ProcessPayrollDto } from '../dto/process-payroll.dto';

@ApiTags('hr')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('hr/payroll')
export class PayrollController {
  constructor(private payrollService: PayrollService) {}

  @Post('process')
  @ApiOperation({ summary: 'Process payroll for a period' })
  process(@CurrentTenant() tenantId: string, @Body() processDto: ProcessPayrollDto) {
    return this.payrollService.processPayroll(tenantId, processDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get payroll entries' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('period') period?: string,
    @Query('employeeId') employeeId?: string,
    @Query('status') status?: string,
  ) {
    return this.payrollService.findAll(tenantId, { period, employeeId, status });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get payroll entry by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.payrollService.findOne(tenantId, id);
  }

  @Post(':id/pay')
  @ApiOperation({ summary: 'Mark payroll as paid' })
  markAsPaid(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.payrollService.markAsPaid(tenantId, id);
  }
}