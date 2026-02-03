// ============================================
// FILE: backend/src/modules/inventory/controllers/adjustments.controller.ts
// ============================================
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { AdjustmentsService } from '../services/adjustments.service';
import { CreateAdjustmentDto } from '../dto/create-adjustment.dto';

@ApiTags('inventory')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('inventory/adjustments')
export class AdjustmentsController {
  constructor(private adjustmentsService: AdjustmentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a stock adjustment' })
  create(
    @CurrentTenant() tenantId: string,
    @Request() req: any,
    @Body() createDto: CreateAdjustmentDto,
  ) {
    return this.adjustmentsService.create(tenantId, req.user.id, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all stock adjustments' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('productId') productId?: string,
    @Query('warehouseId') warehouseId?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.adjustmentsService.findAll(tenantId, {
      productId,
      warehouseId,
      page,
      limit,
    });
  }
}