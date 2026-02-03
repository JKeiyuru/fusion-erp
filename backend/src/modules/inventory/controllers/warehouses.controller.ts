// ============================================
// FILE: backend/src/modules/inventory/controllers/warehouses.controller.ts
// ============================================
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { WarehousesService } from '../services/warehouses.service';
import { CreateWarehouseDto, UpdateWarehouseDto } from '../dto/create-warehouse.dto';

@ApiTags('inventory')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('inventory/warehouses')
export class WarehousesController {
  constructor(private warehousesService: WarehousesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new warehouse' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateWarehouseDto) {
    return this.warehousesService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all warehouses' })
  findAll(@CurrentTenant() tenantId: string) {
    return this.warehousesService.findAll(tenantId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get warehouse by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.warehousesService.findOne(tenantId, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update warehouse' })
  update(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() updateDto: UpdateWarehouseDto,
  ) {
    return this.warehousesService.update(tenantId, id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete warehouse' })
  remove(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.warehousesService.remove(tenantId, id);
  }
}