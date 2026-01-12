// FILE: backend/src/modules/sales/controllers/quotations.controller.ts
// Location: backend/src/modules/sales/controllers/quotations.controller.ts
import { Controller, Get, Post, Put, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { QuotationsService } from '../services/quotations.service';
import { CreateQuotationDto } from '../dto/create-quotation.dto';

@ApiTags('sales')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('sales/quotations')
export class QuotationsController {
  constructor(private quotationsService: QuotationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new quotation' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateQuotationDto) {
    return this.quotationsService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all quotations' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('status') status?: string,
    @Query('customerId') customerId?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.quotationsService.findAll(tenantId, { status, customerId, page, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get quotation by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.quotationsService.findOne(tenantId, id);
  }

  @Put(':id/send')
  @ApiOperation({ summary: 'Send quotation to customer' })
  send(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.quotationsService.send(tenantId, id);
  }

  @Put(':id/accept')
  @ApiOperation({ summary: 'Accept quotation' })
  accept(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.quotationsService.accept(tenantId, id);
  }

  @Put(':id/reject')
  @ApiOperation({ summary: 'Reject quotation' })
  reject(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.quotationsService.reject(tenantId, id);
  }
}