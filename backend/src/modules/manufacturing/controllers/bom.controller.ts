// ============================================
// FILE: backend/src/modules/manufacturing/controllers/bom.controller.ts
// Location: backend/src/modules/manufacturing/controllers/bom.controller.ts
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
import { BomService } from '../services/bom.service';
import { CreateBomDto, UpdateBomDto } from '../dto/create-bom.dto';

@ApiTags('manufacturing')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('manufacturing/bom')
export class BomController {
  constructor(private bomService: BomService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Bill of Materials' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateBomDto) {
    return this.bomService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Bills of Materials' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('productId') productId?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.bomService.findAll(tenantId, { productId, page, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get BOM by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.bomService.findOne(tenantId, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update BOM' })
  update(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() updateDto: UpdateBomDto,
  ) {
    return this.bomService.update(tenantId, id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete BOM' })
  remove(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.bomService.remove(tenantId, id);
  }

  @Get(':id/cost')
  @ApiOperation({ summary: 'Calculate BOM cost' })
  calculateCost(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.bomService.calculateCost(tenantId, id);
  }
}