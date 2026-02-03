import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
        company: {
          select: {
            id: true,
            name: true,
            isActive: true,
          },
        },
      },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('User not found or inactive');
    }

    if (!user.company.isActive) {
      throw new UnauthorizedException('Company is inactive');
    }

    // Extract permissions from roles
    const permissions = [];
    if (user.roles && user.roles.length > 0) {
      // You'll need to fetch permissions if needed
      // For now, we're just including basic role info
    }

    const { password, refreshToken, ...sanitizedUser } = user;
    
    // Add computed fields to the sanitized user
    return {
      ...sanitizedUser,
      roleNames: user.roles.map(userRole => userRole.role.name),
    };
  }
}