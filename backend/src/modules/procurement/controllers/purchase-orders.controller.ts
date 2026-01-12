// FILE: backend/src/modules/procurement/controllers/purchase-orders.controller.ts
import { Controller, Get, Post, Put, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { PurchaseOrdersService } from '../services/purchase-orders.service';
import { CreatePurchaseOrderDto } from '../dto/create-purchase-order.dto';

@ApiTags('procurement')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('procurement/purchase-orders')
export class PurchaseOrdersController {
  constructor(private purchaseOrdersService: PurchaseOrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new purchase order' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreatePurchaseOrderDto) {
    return this.purchaseOrdersService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all purchase orders' })
  findAll(@CurrentTenant() tenantId: string, @Query() options: any) {
    return this.purchaseOrdersService.findAll(tenantId, options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get purchase order by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.purchaseOrdersService.findOne(tenantId, id);
  }

  @Put(':id/send')
  @ApiOperation({ summary: 'Send purchase order to supplier' })
  send(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.purchaseOrdersService.send(tenantId, id);
  }

  @Put(':id/receive')
  @ApiOperation({ summary: 'Receive purchase order' })
  receive(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.purchaseOrdersService.receive(tenantId, id);
  }
}