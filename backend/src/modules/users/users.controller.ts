// FILE: backend/src/modules/users/users.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../common/guards/tenant.guard';
import { CurrentTenant } from '../../common/decorators/tenant.decorator';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateUserDto) {
    return this.usersService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  findAll(@CurrentTenant() tenantId: string) {
    return this.usersService.findAll(tenantId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.usersService.findOne(tenantId, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user' })
  update(@CurrentTenant() tenantId: string, @Param('id') id: string, @Body() updateDto: UpdateUserDto) {
    return this.usersService.update(tenantId, id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  remove(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.usersService.remove(tenantId, id);
  }
}