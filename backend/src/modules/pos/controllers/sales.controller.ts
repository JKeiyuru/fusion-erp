// ============================================
// FILE: backend/src/modules/pos/controllers/sales.controller.ts
// Location: backend/src/modules/pos/controllers/sales.controller.ts
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
import { SalesService } from '../services/sales.service';
import { CreatePosSaleDto } from '../dto/create-pos-sale.dto';

@ApiTags('pos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('pos/sales')
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a POS sale' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreatePosSaleDto) {
    return this.salesService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get POS sales' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('sessionId') sessionId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.salesService.findAll(tenantId, {
      sessionId,
      startDate,
      endDate,
      page,
      limit,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get POS sale by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.salesService.findOne(tenantId, id);
  }

  @Get(':id/receipt')
  @ApiOperation({ summary: 'Get sale receipt' })
  getReceipt(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.salesService.getReceipt(tenantId, id);
  }
}