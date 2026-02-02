// FILE: backend/src/modules/hr/controllers/leave.controller.ts
import { Controller, Get, Post, Put, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../../common/guards/tenant.guard';
import { CurrentTenant } from '../../../common/decorators/tenant.decorator';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { LeaveService } from '../services/leave.service';
import { CreateLeaveRequestDto } from '../dto/create-leave-request.dto';

@ApiTags('hr')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('hr/leave')
export class LeaveController {
  constructor(private leaveService: LeaveService) {}

  @Post()
  @ApiOperation({ summary: 'Create leave request' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateLeaveRequestDto) {
    return this.leaveService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get leave requests' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('employeeId') employeeId?: string,
    @Query('status') status?: string,
  ) {
    return this.leaveService.findAll(tenantId, { employeeId, status });
  }

  @Put(':id/approve')
  @ApiOperation({ summary: 'Approve leave request' })
  approve(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.leaveService.approve(tenantId, id, user.id);
  }

  @Put(':id/reject')
  @ApiOperation({ summary: 'Reject leave request' })
  reject(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.leaveService.reject(tenantId, id, user.id);
  }
}
