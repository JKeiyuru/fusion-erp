// ============================================
// FILE: backend/src/modules/sales/controllers/customers.controller.ts
// Location: backend/src/modules/sales/controllers/customers.controller.ts
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
import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@ApiTags('sales')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('sales/customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new customer' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateCustomerDto) {
    return this.customersService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all customers' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('search') search?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.customersService.findAll(tenantId, { search, page, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get customer by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.customersService.findOne(tenantId, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update customer' })
  update(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() updateDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(tenantId, id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete customer' })
  remove(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.customersService.remove(tenantId, id);
  }

  @Get(':id/invoices')
  @ApiOperation({ summary: 'Get customer invoices' })
  getInvoices(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.customersService.getInvoices(tenantId, id);
  }

  @Get(':id/balance')
  @ApiOperation({ summary: 'Get customer balance' })
  getBalance(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.customersService.getBalance(tenantId, id);
  }
}