// FILE: backend/src/modules/roles/roles.service.ts
import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateRoleDto, UpdateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateRoleDto) {
    const existing = await this.prisma.role.findUnique({
      where: { companyId_name: { companyId: tenantId, name: createDto.name } },
    });
    if (existing) throw new ConflictException('Role name already exists');

    return this.prisma.role.create({
      data: { companyId: tenantId, ...createDto },
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.role.findMany({
      where: { companyId: tenantId },
      include: {
        _count: {
          select: { users: true, permissions: true },
        },
      },
    });
  }

  async getPermissions() {
    return this.prisma.permission.findMany({
      orderBy: [{ module: 'asc' }, { action: 'asc' }],
    });
  }

  async findOne(tenantId: string, id: string) {
    const role = await this.prisma.role.findFirst({
      where: { id, companyId: tenantId },
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
        users: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
        },
      },
    });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  async update(tenantId: string, id: string, updateDto: UpdateRoleDto) {
    const role = await this.findOne(tenantId, id);
    if (role.isSystem) {
      throw new BadRequestException('Cannot modify system roles');
    }
    return this.prisma.role.update({ where: { id }, data: updateDto });
  }

  async assignPermissions(tenantId: string, roleId: string, permissionIds: string[]) {
    await this.findOne(tenantId, roleId);

    // Delete existing permissions
    await this.prisma.rolePermission.deleteMany({ where: { roleId } });

    // Create new permissions
    await this.prisma.rolePermission.createMany({
      data: permissionIds.map((permissionId) => ({
        roleId,
        permissionId,
      })),
    });

    return this.findOne(tenantId, roleId);
  }

  async remove(tenantId: string, id: string) {
    const role = await this.findOne(tenantId, id);
    if (role.isSystem) {
      throw new BadRequestException('Cannot delete system roles');
    }
    if (role.users.length > 0) {
      throw new BadRequestException('Cannot delete role with assigned users');
    }
    return this.prisma.role.delete({ where: { id } });
  }
}