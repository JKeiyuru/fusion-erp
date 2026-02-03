// ============================================
// FILE: backend/src/modules/accounting/services/accounts.service.ts
// Location: backend/src/modules/accounting/services/accounts.service.ts
// ============================================
import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAccountDto } from '../accounting/dto/create-account.dto';
import { UpdateAccountDto } from '../accounting/dto/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, createDto: CreateAccountDto) {
    // Check if account code exists
    const existing = await this.prisma.account.findUnique({
      where: {
        companyId_code: {
          companyId: tenantId,
          code: createDto.code,
        },
      },
    });

    if (existing) {
      throw new ConflictException('Account code already exists');
    }

    // Verify parent account if provided
    if (createDto.parentId) {
      const parent = await this.prisma.account.findFirst({
        where: { id: createDto.parentId, companyId: tenantId },
      });

      if (!parent) {
        throw new NotFoundException('Parent account not found');
      }
    }

    return this.prisma.account.create({
      data: {
        companyId: tenantId,
        ...createDto,
      },
    });
  }

  async findAll(tenantId: string, type?: string) {
    const where: any = { companyId: tenantId };

    if (type) {
      where.type = type;
    }

    return this.prisma.account.findMany({
      where,
      include: {
        parent: true,
        _count: {
          select: {
            children: true,
          },
        },
      },
      orderBy: { code: 'asc' },
    });
  }

  async getTree(tenantId: string) {
    const accounts = await this.prisma.account.findMany({
      where: { companyId: tenantId },
      orderBy: { code: 'asc' },
    });

    // Build hierarchical tree
    const accountMap = new Map();
    const tree: any[] = [];

    accounts.forEach((account) => {
      accountMap.set(account.id, { ...account, children: [] });
    });

    accounts.forEach((account) => {
      const node = accountMap.get(account.id);
      if (account.parentId) {
        const parent = accountMap.get(account.parentId);
        if (parent) {
          parent.children.push(node);
        }
      } else {
        tree.push(node);
      }
    });

    return tree;
  }

  async findOne(tenantId: string, id: string) {
    const account = await this.prisma.account.findFirst({
      where: { id, companyId: tenantId },
      include: {
        parent: true,
        children: true,
        journalLines: {
          take: 10,
          orderBy: { entry: { date: 'desc' } },
          include: {
            entry: true,
          },
        },
      },
    });

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    return account;
  }

  async update(tenantId: string, id: string, updateDto: UpdateAccountDto) {
    await this.findOne(tenantId, id);

    // Verify parent if being updated
    if (updateDto.parentId) {
      if (updateDto.parentId === id) {
        throw new BadRequestException('Account cannot be its own parent');
      }

      const parent = await this.prisma.account.findFirst({
        where: { id: updateDto.parentId, companyId: tenantId },
      });

      if (!parent) {
        throw new NotFoundException('Parent account not found');
      }
    }

    return this.prisma.account.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id);

    // Check if account has children
    const hasChildren = await this.prisma.account.count({
      where: { parentId: id },
    });

    if (hasChildren > 0) {
      throw new BadRequestException('Cannot delete account with sub-accounts');
    }

    // Check if account has transactions
    const hasTransactions = await this.prisma.journalLine.count({
      where: { accountId: id },
    });

    if (hasTransactions > 0) {
      // Deactivate instead of delete
      return this.prisma.account.update({
        where: { id },
        data: { isActive: false },
      });
    }

    return this.prisma.account.delete({ where: { id } });
  }

  async getBalance(
    tenantId: string,
    accountId: string,
    startDate?: string,
    endDate?: string,
  ) {
    await this.findOne(tenantId, accountId);

    const where: any = {
      accountId,
      entry: {
        companyId: tenantId,
        status: 'POSTED',
      },
    };

    if (startDate || endDate) {
      where.entry.date = {};
      if (startDate) where.entry.date.gte = new Date(startDate);
      if (endDate) where.entry.date.lte = new Date(endDate);
    }

    const lines = await this.prisma.journalLine.findMany({
      where,
      select: {
        debit: true,
        credit: true,
      },
    });

    const totalDebit = lines.reduce((sum, line) => sum + line.debit.toNumber(), 0);
    const totalCredit = lines.reduce((sum, line) => sum + line.credit.toNumber(), 0);
    const balance = totalDebit - totalCredit;

    return {
      accountId,
      totalDebit,
      totalCredit,
      balance,
      startDate,
      endDate,
    };
  }
}