import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../common/guards/tenant.guard';
import { CurrentTenant } from '../../common/decorators/tenant.decorator';
import { RolesService } from './roles.service';
import { CreateRoleDto, AssignPermissionsDto } from './dto/create-role.dto';

@ApiTags('roles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateRoleDto) {
    return this.rolesService.create(tenantId, createDto);
  }

  @Get()
  findAll(@CurrentTenant() tenantId: string) {
    return this.rolesService.findAll(tenantId);
  }

  @Get('permissions')
  getAllPermissions() {
    return this.rolesService.getAllPermissions();
  }

  @Get(':id')
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.rolesService.findOne(tenantId, id);
  }

  @Post(':id/permissions')
  assignPermissions(
    @Param('id') id: string,
    @Body() dto: AssignPermissionsDto,
  ) {
    return this.rolesService.assignPermissions(id, dto);
  }

  @Post(':roleId/users/:userId')
  assignRoleToUser(
    @Param('roleId') roleId: string,
    @Param('userId') userId: string,
  ) {
    return this.rolesService.assignRoleToUser(userId, roleId);
  }

  @Delete(':roleId/users/:userId')
  removeRoleFromUser(
    @Param('roleId') roleId: string,
    @Param('userId') userId: string,
  ) {
    return this.rolesService.removeRoleFromUser(userId, roleId);
  }
}