
// ============================================
// FILE: backend/src/modules/sales/controllers/invoices.controller.ts
// Location: backend/src/modules/sales/controllers/invoices.controller.ts
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
import { InvoicesService } from '../services/invoices.service';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';

@ApiTags('sales')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('sales/invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new invoice' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateInvoiceDto) {
    return this.invoicesService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all invoices' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('status') status?: string,
    @Query('customerId') customerId?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.invoicesService.findAll(tenantId, { status, customerId, page, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get invoice by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.invoicesService.findOne(tenantId, id);
  }

  @Put(':id/send')
  @ApiOperation({ summary: 'Mark invoice as sent' })
  send(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.invoicesService.send(tenantId, id);
  }

  @Put(':id/cancel')
  @ApiOperation({ summary: 'Cancel invoice' })
  cancel(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.invoicesService.cancel(tenantId, id);
  }

  @Get(':id/pdf')
  @ApiOperation({ summary: 'Generate invoice PDF' })
  generatePdf(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.invoicesService.generatePdf(tenantId, id);
  }
}