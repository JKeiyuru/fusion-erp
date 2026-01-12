// ============================================
// FILE: backend/src/modules/pos/controllers/sessions.controller.ts
// Location: backend/src/modules/pos/controllers/sessions.controller.ts
// ============================================
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { SessionsService } from '../services/sessions.service';
import { OpenSessionDto } from '../dto/open-session.dto';
import { CloseSessionDto } from '../dto/close-session.dto';

@ApiTags('pos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('pos/sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Post('open')
  @ApiOperation({ summary: 'Open a new POS session' })
  open(
    @CurrentTenant() tenantId: string,
    @CurrentUser() user: any,
    @Body() openDto: OpenSessionDto,
  ) {
    return this.sessionsService.open(tenantId, user.id, openDto);
  }

  @Put(':id/close')
  @ApiOperation({ summary: 'Close POS session' })
  close(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() closeDto: CloseSessionDto,
  ) {
    return this.sessionsService.close(tenantId, id, closeDto);
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active session for current user' })
  getActive(@CurrentTenant() tenantId: string, @CurrentUser() user: any) {
    return this.sessionsService.getActive(tenantId, user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sessions' })
  findAll(@CurrentTenant() tenantId: string) {
    return this.sessionsService.findAll(tenantId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get session by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.sessionsService.findOne(tenantId, id);
  }
}
