// ============================================
// FILE: backend/src/common/guards/permissions.guard.ts
// Location: backend/src/common/guards/permissions.guard.ts
// ============================================
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermissions) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    // Get user permissions
    const userPermissions = await this.prisma.permission.findMany({
      where: {
        roles: {
          some: {
            role: {
              users: {
                some: {
                  userId: user.id,
                },
              },
            },
          },
        },
      },
    });

    const userPermissionCodes = userPermissions.map((p) => p.code);

    const hasPermission = requiredPermissions.every((permission) =>
      userPermissionCodes.includes(permission),
    );

    if (!hasPermission) {
      throw new ForbiddenException('Insufficient permissions');
    }

    return true;
  }
}