// ============================================
// FILE: backend/src/modules/hr/controllers/payroll.controller.ts
// ============================================
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { PayrollService } from '../services/payroll.service';
import { ProcessPayrollDto, BulkProcessPayrollDto } from '../dto/process-payroll.dto';

@ApiTags('hr')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('hr/payroll')
export class PayrollController {
  constructor(private payrollService: PayrollService) {}

  @Post()
  @ApiOperation({ summary: 'Process payroll for an employee' })
  processPayroll(@CurrentTenant() tenantId: string, @Body() processDto: ProcessPayrollDto) {
    return this.payrollService.processPayroll(tenantId, processDto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Process payroll for multiple employees' })
  bulkProcess(@CurrentTenant() tenantId: string, @Body() bulkDto: BulkProcessPayrollDto) {
    return this.payrollService.bulkProcessPayroll(
      tenantId,
      bulkDto.periodStart,
      bulkDto.periodEnd,
      bulkDto.employeeIds,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all payroll records' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('employeeId') employeeId?: string,
    @Query('status') status?: string,
    @Query('periodStart') periodStart?: string,
    @Query('periodEnd') periodEnd?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.payrollService.findAll(tenantId, {
      employeeId,
      status,
      periodStart,
      periodEnd,
      page,
      limit,
    });
  }

  @Get('summary')
  @ApiOperation({ summary: 'Get payroll summary for a period' })
  getSummary(
    @CurrentTenant() tenantId: string,
    @Query('periodStart') periodStart: string,
    @Query('periodEnd') periodEnd: string,
  ) {
    return this.payrollService.getPayrollSummary(
      tenantId,
      new Date(periodStart),
      new Date(periodEnd),
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get payroll record by ID' })
  findOne(@Param('id') id: string) {
    return this.payrollService.findOne(id);
  }

  @Put(':id/approve')
  @ApiOperation({ summary: 'Approve payroll' })
  approve(@Param('id') id: string) {
    return this.payrollService.approve(id);
  }

  @Put(':id/pay')
  @ApiOperation({ summary: 'Mark payroll as paid' })
  pay(@Param('id') id: string) {
    return this.payrollService.pay(id);
  }
}