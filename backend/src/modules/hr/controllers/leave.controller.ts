// ============================================
// FILE: backend/src/modules/hr/controllers/leave.controller.ts
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
import { LeaveService } from '../services/leave.service';
import { CreateLeaveDto } from '../dto/create-leave.dto';

@ApiTags('hr')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('hr/leave')
export class LeaveController {
  constructor(private leaveService: LeaveService) {}

  @Post()
  @ApiOperation({ summary: 'Create a leave request' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateLeaveDto) {
    return this.leaveService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all leave records' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('employeeId') employeeId?: string,
    @Query('status') status?: string,
    @Query('type') type?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.leaveService.findAll(tenantId, {
      employeeId,
      status,
      type,
      page,
      limit,
    });
  }

  @Get('balance/:employeeId')
  @ApiOperation({ summary: 'Get leave balance for an employee' })
  getBalance(
    @CurrentTenant() tenantId: string,
    @Param('employeeId') employeeId: string,
    @Query('year') year: number,
  ) {
    return this.leaveService.getLeaveBalance(tenantId, employeeId, Number(year));
  }

  @Get('summary')
  @ApiOperation({ summary: 'Get leave summary' })
  getSummary(@CurrentTenant() tenantId: string, @Query('year') year: number) {
    return this.leaveService.getLeaveSummary(tenantId, Number(year));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get leave record by ID' })
  findOne(@Param('id') id: string) {
    return this.leaveService.findOne(id);
  }

  @Put(':id/approve')
  @ApiOperation({ summary: 'Approve leave request' })
  approve(@Param('id') id: string) {
    return this.leaveService.approve(id);
  }

  @Put(':id/reject')
  @ApiOperation({ summary: 'Reject leave request' })
  reject(@Param('id') id: string) {
    return this.leaveService.reject(id);
  }
}