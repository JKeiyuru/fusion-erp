// ============================================
// FILE: backend/src/modules/tenancy/tenancy.service.ts
// Location: backend/src/modules/tenancy/tenancy.service.ts
// ============================================
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class TenancyService {
  constructor(private prisma: PrismaService) {}

  async getCompany(tenantId: string) {
    const company = await this.prisma.company.findUnique({
      where: { id: tenantId },
      include: {
        modules: true,
        _count: {
          select: {
            users: true,
            customers: true,
            products: true,
          },
        },
      },
    });
    if (!company) throw new NotFoundException('Company not found');
    return company;
  }

  async updateCompany(tenantId: string, updateDto: UpdateCompanyDto) {
    return this.prisma.company.update({
      where: { id: tenantId },
      data: updateDto,
    });
  }

  async getModules(tenantId: string) {
    return this.prisma.tenantModule.findMany({
      where: { companyId: tenantId },
    });
  }

  async toggleModule(tenantId: string, code: string) {
    const module = await this.prisma.tenantModule.findUnique({
      where: { companyId_moduleCode: { companyId: tenantId, moduleCode: code } },
    });

    if (module) {
      return this.prisma.tenantModule.update({
        where: { id: module.id },
        data: { enabled: !module.enabled },
      });
    } else {
      return this.prisma.tenantModule.create({
        data: { companyId: tenantId, moduleCode: code, enabled: true },
      });
    }
  }
}
