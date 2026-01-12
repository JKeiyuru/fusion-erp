// FILE: backend/src/modules/tenancy/tenancy.module.ts
import { Module } from '@nestjs/common';
import { TenancyController } from './tenancy.controller';
import { TenancyService } from './tenancy.service';

@Module({
  controllers: [TenancyController],
  providers: [TenancyService],
  exports: [TenancyService],
})
export class TenancyModule {}

// FILE: backend/src/modules/tenancy/tenancy.controller.ts
import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { TenantGuard } from '../../common/guards/tenant.guard';
import { CurrentTenant } from '../../common/decorators/tenant.decorator';
import { TenancyService } from './tenancy.service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('tenancy')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('tenancy')
export class TenancyController {
  constructor(private tenancyService: TenancyService) {}

  @Get('company')
  @ApiOperation({ summary: 'Get company details' })
  getCompany(@CurrentTenant() tenantId: string) {
    return this.tenancyService.getCompany(tenantId);
  }

  @Put('company')
  @ApiOperation({ summary: 'Update company details' })
  updateCompany(@CurrentTenant() tenantId: string, @Body() updateDto: UpdateCompanyDto) {
    return this.tenancyService.updateCompany(tenantId, updateDto);
  }

  @Get('modules')
  @ApiOperation({ summary: 'Get enabled modules' })
  getModules(@CurrentTenant() tenantId: string) {
    return this.tenancyService.getModules(tenantId);
  }

  @Put('modules/:code/toggle')
  @ApiOperation({ summary: 'Toggle module status' })
  toggleModule(@CurrentTenant() tenantId: string, @Body() code: string) {
    return this.tenancyService.toggleModule(tenantId, code);
  }
}