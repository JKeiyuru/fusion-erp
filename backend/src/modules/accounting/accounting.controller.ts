// ============================================
// FILE: backend/src/modules/accounting/controllers/accounts.controller.ts
// Location: backend/src/modules/accounting/controllers/accounts.controller.ts
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
import { AccountsService } from '../services/accounts.service';
import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';

@ApiTags('accounting')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('accounting/accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new account' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateAccountDto) {
    return this.accountsService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all accounts (Chart of Accounts)' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('type') type?: string,
  ) {
    return this.accountsService.findAll(tenantId, type);
  }

  @Get('tree')
  @ApiOperation({ summary: 'Get accounts as hierarchical tree' })
  getTree(@CurrentTenant() tenantId: string) {
    return this.accountsService.getTree(tenantId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get account by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.accountsService.findOne(tenantId, id);
  }

  @Get(':id/balance')
  @ApiOperation({ summary: 'Get account balance' })
  getBalance(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.accountsService.getBalance(tenantId, id, startDate, endDate);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update account' })
  update(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() updateDto: UpdateAccountDto,
  ) {
    return this.accountsService.update(tenantId, id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete account' })
  remove(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.accountsService.remove(tenantId, id);
  }
}