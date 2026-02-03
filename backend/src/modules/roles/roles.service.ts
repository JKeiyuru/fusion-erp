import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateRoleDto, AssignPermissionsDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateRoleDto) {
    const existing = await this.prisma.role.findUnique({
      where: {
        companyId_name: {
          companyId: tenantId,
          name: createDto.name,
        },
      },
    });

    if (existing) {
      throw new ConflictException('Role name already exists');
    }

    return this.prisma.role.create({
      data: {
        companyId: tenantId,
        ...createDto,
      },
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.role.findMany({
      where: { companyId: tenantId },
      include: {
        _count: {
          select: {
            users: true,
            permissions: true,
          },
        },
      },
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
                email: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    if (!role) {
      throw new NotFoundException('Role not found');
    }

    return role;
  }

  async assignPermissions(roleId: string, dto: AssignPermissionsDto) {
    // Remove existing permissions
    await this.prisma.rolePermission.deleteMany({
      where: { roleId },
    });

    // Add new permissions
    if (dto.permissionIds.length > 0) {
      await this.prisma.rolePermission.createMany({
        data: dto.permissionIds.map((permissionId) => ({
          roleId,
          permissionId,
        })),
      });
    }

    return this.prisma.role.findUnique({
      where: { id: roleId },
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  async assignRoleToUser(userId: string, roleId: string) {
    const existing = await this.prisma.userRole.findUnique({
      where: {
        userId_roleId: {
          userId,
          roleId,
        },
      },
    });

    if (existing) {
      throw new ConflictException('User already has this role');
    }

    return this.prisma.userRole.create({
      data: { userId, roleId },
    });
  }

  async removeRoleFromUser(userId: string, roleId: string) {
    return this.prisma.userRole.delete({
      where: {
        userId_roleId: {
          userId,
          roleId,
        },
      },
    });
  }

  async getAllPermissions() {
    return this.prisma.permission.findMany({
      orderBy: [{ module: 'asc' }, { name: 'asc' }],
    });
  }
}