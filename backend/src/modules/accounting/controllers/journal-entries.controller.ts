// ============================================
// FILE: backend/src/modules/accounting/controllers/journal-entries.controller.ts
// Location: backend/src/modules/accounting/controllers/journal-entries.controller.ts
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
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { JournalEntriesService } from '../services/journal-entries.service';
import { CreateJournalEntryDto } from '../dto/create-journal-entry.dto';

@ApiTags('accounting')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('accounting/journal-entries')
export class JournalEntriesController {
  constructor(private journalEntriesService: JournalEntriesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new journal entry' })
  create(
    @CurrentTenant() tenantId: string,
    @CurrentUser() user: any,
    @Body() createDto: CreateJournalEntryDto,
  ) {
    return this.journalEntriesService.create(tenantId, user.id, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all journal entries' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('status') status?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.journalEntriesService.findAll(tenantId, {
      status,
      startDate,
      endDate,
      page,
      limit,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get journal entry by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.journalEntriesService.findOne(tenantId, id);
  }

  @Put(':id/post')
  @ApiOperation({ summary: 'Post journal entry' })
  post(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.journalEntriesService.post(tenantId, id);
  }

  @Put(':id/cancel')
  @ApiOperation({ summary: 'Cancel journal entry' })
  cancel(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.journalEntriesService.cancel(tenantId, id);
  }
}