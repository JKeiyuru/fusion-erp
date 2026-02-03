// ============================================
// FILE: backend/src/modules/auth/auth.service.ts
// Location: backend/src/modules/auth/auth.service.ts
// ============================================
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  // Add this method for local strategy validation
  async validateUser(email: string, password: string, tenantId?: string): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        companyId: tenantId,
        isActive: true,
      },
      include: {
        company: true,
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  async register(registerDto: RegisterDto) {
    // Check if company email already exists
    const existingCompany = await this.prisma.company.findUnique({
      where: { email: registerDto.companyName },
    });

    if (existingCompany) {
      throw new ConflictException('Company email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Create company and admin user in a transaction
    const result = await this.prisma.$transaction(async (prisma) => {
      // Create company
      const company = await prisma.company.create({
        data: {
          name: registerDto.companyName,
          email: registerDto.companyName,
          phone: registerDto.companyPhone,
          kraPin: registerDto.kraPin,
          currency: 'KES',
          timezone: 'Africa/Nairobi',
          settings: {},
        },
      });

      // Create admin role
      const adminRole = await prisma.role.create({
        data: {
          companyId: company.id,
          name: 'Admin',
          description: 'System Administrator',
          isSystem: true,
        },
      });

      // Create admin user
      const user = await prisma.user.create({
        data: {
          companyId: company.id,
          email: registerDto.email,
          password: hashedPassword,
          firstName: registerDto.firstName,
          lastName: registerDto.lastName,
          phone: registerDto.phone,
        },
      });

      // Assign admin role
      await prisma.userRole.create({
        data: {
          userId: user.id,
          roleId: adminRole.id,
        },
      });

      // Enable default modules
      const defaultModules = [
        'accounting',
        'sales',
        'inventory',
        'reporting',
      ];

      await Promise.all(
        defaultModules.map((moduleCode) =>
          prisma.tenantModule.create({
            data: {
              companyId: company.id,
              moduleCode,
              enabled: true,
            },
          }),
        ),
      );

      // Create default Chart of Accounts
      await this.createDefaultChartOfAccounts(company.id);

      return { company, user };
    });

    // Generate tokens
    const tokens = await this.generateTokens(result.user.id, result.company.id);

    // Save refresh token
    await this.updateRefreshToken(result.user.id, tokens.refreshToken);

    return {
      user: {
        id: result.user.id,
        email: result.user.email,
        firstName: result.user.firstName,
        lastName: result.user.lastName,
        companyId: result.company.id,
        companyName: result.company.name,
      },
      ...tokens,
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: loginDto.email,
        company: {
          isActive: true,
        },
      },
      include: {
        company: true,
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Account is inactive');
    }

    // Generate tokens
    const tokens = await this.generateTokens(user.id, user.companyId);

    // Save refresh token and update last login
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        companyId: user.companyId,
        companyName: user.company.name,
        roles: user.roles.map((ur) => ur.role.name),
      },
      ...tokens,
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user || user.refreshToken !== refreshToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const tokens = await this.generateTokens(user.id, user.companyId);
      await this.updateRefreshToken(user.id, tokens.refreshToken);

      return tokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });

    return { message: 'Logged out successfully' };
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        company: true,
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const permissions = user.roles.flatMap((ur) =>
      ur.role.permissions.map((rp) => rp.permission.code),
    );

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      avatar: user.avatar,
      company: {
        id: user.company.id,
        name: user.company.name,
        email: user.company.email,
        logo: user.company.logo,
      },
      roles: user.roles.map((ur) => ur.role.name),
      permissions,
    };
  }

  private async generateTokens(userId: string, companyId: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, companyId },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: this.configService.get<string>('JWT_EXPIRATION'),
        },
      ),
      this.jwtService.signAsync(
        { sub: userId, companyId },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRATION'),
        },
      ),
    ]);

    return { accessToken, refreshToken };
  }

  private async updateRefreshToken(userId: string, refreshToken: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken },
    });
  }

  private async createDefaultChartOfAccounts(companyId: string) {
    const accounts = [
      // ASSETS
      { code: '1000', name: 'Assets', type: 'ASSET', parentId: null },
      { code: '1100', name: 'Current Assets', type: 'ASSET', parent: '1000' },
      { code: '1110', name: 'Cash and Cash Equivalents', type: 'ASSET', parent: '1100' },
      { code: '1120', name: 'Accounts Receivable', type: 'ASSET', parent: '1100' },
      { code: '1130', name: 'Inventory', type: 'ASSET', parent: '1100' },
      { code: '1200', name: 'Fixed Assets', type: 'ASSET', parent: '1000' },
      
      // LIABILITIES
      { code: '2000', name: 'Liabilities', type: 'LIABILITY', parentId: null },
      { code: '2100', name: 'Current Liabilities', type: 'LIABILITY', parent: '2000' },
      { code: '2110', name: 'Accounts Payable', type: 'LIABILITY', parent: '2100' },
      { code: '2120', name: 'VAT Payable', type: 'LIABILITY', parent: '2100' },
      
      // EQUITY
      { code: '3000', name: 'Equity', type: 'EQUITY', parentId: null },
      { code: '3100', name: 'Retained Earnings', type: 'EQUITY', parent: '3000' },
      
      // INCOME
      { code: '4000', name: 'Income', type: 'INCOME', parentId: null },
      { code: '4100', name: 'Sales Revenue', type: 'INCOME', parent: '4000' },
      
      // EXPENSES
      { code: '5000', name: 'Expenses', type: 'EXPENSE', parentId: null },
      { code: '5100', name: 'Cost of Goods Sold', type: 'EXPENSE', parent: '5000' },
      { code: '5200', name: 'Operating Expenses', type: 'EXPENSE', parent: '5000' },
    ];

    const createdAccounts = new Map();

    for (const account of accounts) {
      const parentId = account.parent 
        ? createdAccounts.get(account.parent)
        : null;

      const created = await this.prisma.account.create({
        data: {
          companyId,
          code: account.code,
          name: account.name,
          type: account.type as any,
          parentId,
        },
      });

      createdAccounts.set(account.code, created.id);
    }
  }
}