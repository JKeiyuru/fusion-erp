// FILE: backend/src/modules/users/users.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateUserDto) {
    const existing = await this.prisma.user.findUnique({
      where: { companyId_email: { companyId: tenantId, email: createDto.email } },
    });
    if (existing) throw new ConflictException('User email already exists');

    const hashedPassword = await bcrypt.hash(createDto.password, 10);

    return this.prisma.user.create({
      data: {
        companyId: tenantId,
        email: createDto.email,
        password: hashedPassword,
        firstName: createDto.firstName,
        lastName: createDto.lastName,
        phone: createDto.phone,
      },
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.user.findMany({
      where: { companyId: tenantId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        isActive: true,
        lastLoginAt: true,
        createdAt: true,
        roles: {
          include: {
            role: true,
          },
        },
      },
    });
  }

  async findOne(tenantId: string, id: string) {
    const user = await this.prisma.user.findFirst({
      where: { id, companyId: tenantId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        avatar: true,
        isActive: true,
        lastLoginAt: true,
        createdAt: true,
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
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(tenantId: string, id: string, updateDto: UpdateUserDto) {
    await this.findOne(tenantId, id);

    const data: any = { ...updateDto };
    if (updateDto.password) {
      data.password = await bcrypt.hash(updateDto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id);
    return this.prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
