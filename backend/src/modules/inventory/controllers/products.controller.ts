// ============================================
// FILE: backend/src/modules/inventory/controllers/products.controller.ts
// ============================================
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dto/create-product.dto';

@ApiTags('inventory')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('inventory/products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateProductDto) {
    return this.productsService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('search') search?: string,
    @Query('categoryId') categoryId?: string,
    @Query('type') type?: string,
    @Query('isActive') isActive?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.productsService.findAll(tenantId, {
      search,
      categoryId,
      type,
      isActive,
      page,
      limit,
    });
  }

  @Get('low-stock')
  @ApiOperation({ summary: 'Get low stock products' })
  getLowStock(@CurrentTenant() tenantId: string) {
    return this.productsService.getLowStockProducts(tenantId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.productsService.findOne(tenantId, id);
  }

  @Get(':id/stock')
  @ApiOperation({ summary: 'Get product stock levels' })
  getStock(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.productsService.getStock(tenantId, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update product' })
  update(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() updateDto: UpdateProductDto,
  ) {
    return this.productsService.update(tenantId, id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product' })
  remove(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.productsService.remove(tenantId, id);
  }
}