// ============================================
// FILE: backend/src/modules/manufacturing/controllers/production-orders.controller.ts
// Location: backend/src/modules/manufacturing/controllers/production-orders.controller.ts
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
import { ProductionOrdersService } from '../services/production-orders.service';
import { CreateProductionOrderDto, CompleteProductionOrderDto } from '../dto/create-production-order.dto';

@ApiTags('manufacturing')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('manufacturing/production-orders')
export class ProductionOrdersController {
  constructor(private productionOrdersService: ProductionOrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new production order' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateProductionOrderDto) {
    return this.productionOrdersService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all production orders' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('status') status?: string,
    @Query('productId') productId?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.productionOrdersService.findAll(tenantId, { status, productId, page, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get production order by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.productionOrdersService.findOne(tenantId, id);
  }

  @Put(':id/confirm')
  @ApiOperation({ summary: 'Confirm production order' })
  confirm(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.productionOrdersService.confirm(tenantId, id);
  }

  @Put(':id/start')
  @ApiOperation({ summary: 'Start production' })
  start(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.productionOrdersService.start(tenantId, id);
  }

  @Put(':id/complete')
  @ApiOperation({ summary: 'Complete production order' })
  complete(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() completeDto: CompleteProductionOrderDto,
  ) {
    return this.productionOrdersService.complete(tenantId, id, completeDto.producedQuantity);
  }

  @Put(':id/cancel')
  @ApiOperation({ summary: 'Cancel production order' })
  cancel(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.productionOrdersService.cancel(tenantId, id);
  }
}