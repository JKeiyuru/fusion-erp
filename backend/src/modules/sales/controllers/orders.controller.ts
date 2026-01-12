// FILE: backend/src/modules/sales/controllers/orders.controller.ts
import { Controller, Get, Post, Put, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { OrdersService } from '../services/orders.service';
import { CreateSalesOrderDto } from '../dto/create-order.dto';

@ApiTags('sales')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('sales/orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new sales order' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateSalesOrderDto) {
    return this.ordersService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sales orders' })
  findAll(@CurrentTenant() tenantId: string, @Query() options: any) {
    return this.ordersService.findAll(tenantId, options);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sales order by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.ordersService.findOne(tenantId, id);
  }

  @Put(':id/confirm')
  @ApiOperation({ summary: 'Confirm sales order' })
  confirm(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.ordersService.confirm(tenantId, id);
  }

  @Put(':id/complete')
  @ApiOperation({ summary: 'Complete sales order' })
  complete(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.ordersService.complete(tenantId, id);
  }
}
