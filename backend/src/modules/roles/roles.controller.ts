// FILE: backend/src/modules/roles/roles.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../common/guards/tenant.guard';
import { CurrentTenant } from '../../common/decorators/tenant.decorator';
import { RolesService } from './roles.service';
import { CreateRoleDto, UpdateRoleDto, AssignPermissionsDto } from './dto/create-role.dto';

@ApiTags('roles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new role' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateRoleDto) {
    return this.rolesService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all roles' })
  findAll(@CurrentTenant() tenantId: string) {
    return this.rolesService.findAll(tenantId);
  }

  @Get('permissions')
  @ApiOperation({ summary: 'Get all available permissions' })
  getPermissions() {
    return this.rolesService.getPermissions();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get role by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.rolesService.findOne(tenantId, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update role' })
  update(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() updateDto: UpdateRoleDto,
  ) {
    return this.rolesService.update(tenantId, id, updateDto);
  }

  @Put(':id/permissions')
  @ApiOperation({ summary: 'Assign permissions to role' })
  assignPermissions(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() assignDto: AssignPermissionsDto,
  ) {
    return this.rolesService.assignPermissions(tenantId, id, assignDto.permissionIds);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete role' })
  remove(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.rolesService.remove(tenantId, id);
  }
}