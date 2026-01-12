// FILE: backend/src/modules/procurement/controllers/bills.controller.ts
import { Controller, Get, Post, Put, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { BillsService } from '../services/bills.service';
import { CreateBillDto } from '../dto/create-bill.dto';

@ApiTags('procurement')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('procurement/bills')
export class BillsController {
  constructor(private billsService: BillsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new bill' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateBillDto) {
    return this.billsService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bills' })
  findAll(@CurrentTenant() tenantId: string, @Query() options: any) {
    return this.billsService.findAll(tenantId, options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get bill by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.billsService.findOne(tenantId, id);
  }

  @Put(':id/submit')
  @ApiOperation({ summary: 'Submit bill' })
  submit(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.billsService.submit(tenantId, id);
  }
}
