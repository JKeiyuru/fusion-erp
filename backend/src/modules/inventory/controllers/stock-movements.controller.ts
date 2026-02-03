// ============================================
// FILE: backend/src/modules/inventory/controllers/stock-movements.controller.ts
// ============================================
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { StockMovementsService } from '../services/stock-movements.service';
import { CreateStockMovementDto } from '../dto/stock-movement.dto';

@ApiTags('inventory')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('inventory/stock-movements')
export class StockMovementsController {
  constructor(private stockMovementsService: StockMovementsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a stock movement' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateStockMovementDto) {
    return this.stockMovementsService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all stock movements' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('productId') productId?: string,
    @Query('warehouseId') warehouseId?: string,
    @Query('type') type?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.stockMovementsService.findAll(tenantId, {
      productId,
      warehouseId,
      type,
      startDate,
      endDate,
      page,
      limit,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get stock movement by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.stockMovementsService.findOne(tenantId, id);
  }
}