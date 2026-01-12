// FILE: backend/src/modules/procurement/controllers/suppliers.controller.ts
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
import { SuppliersService } from '../services/suppliers.service';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';

@ApiTags('procurement')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('procurement/suppliers')
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new supplier' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateSupplierDto) {
    return this.suppliersService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all suppliers' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('search') search?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.suppliersService.findAll(tenantId, { search, page, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get supplier by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.suppliersService.findOne(tenantId, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update supplier' })
  update(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() updateDto: UpdateSupplierDto,
  ) {
    return this.suppliersService.update(tenantId, id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete supplier' })
  remove(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.suppliersService.remove(tenantId, id);
  }
}
