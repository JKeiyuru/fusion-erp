// ============================================
// FILE: backend/src/modules/hr/controllers/employees.controller.ts
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
import { EmployeesService } from '../services/employees.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../dto/create-employee.dto';

@ApiTags('hr')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('hr/employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  create(@CurrentTenant() tenantId: string, @Body() createDto: CreateEmployeeDto) {
    return this.employeesService.create(tenantId, createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employees' })
  findAll(
    @CurrentTenant() tenantId: string,
    @Query('search') search?: string,
    @Query('department') department?: string,
    @Query('isActive') isActive?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.employeesService.findAll(tenantId, {
      search,
      department,
      isActive,
      page,
      limit,
    });
  }

  @Get('departments')
  @ApiOperation({ summary: 'Get all departments' })
  getDepartments(@CurrentTenant() tenantId: string) {
    return this.employeesService.getDepartments(tenantId);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get employee statistics' })
  getStats(@CurrentTenant() tenantId: string) {
    return this.employeesService.getEmployeeStats(tenantId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee by ID' })
  findOne(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.employeesService.findOne(tenantId, id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update employee' })
  update(
    @CurrentTenant() tenantId: string,
    @Param('id') id: string,
    @Body() updateDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(tenantId, id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete employee' })
  remove(@CurrentTenant() tenantId: string, @Param('id') id: string) {
    return this.employeesService.remove(tenantId, id);
  }
}
