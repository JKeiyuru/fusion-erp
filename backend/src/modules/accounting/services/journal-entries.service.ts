// ============================================
// FILE: backend/src/modules/accounting/services/journal-entries.service.ts
// Location: backend/src/modules/accounting/services/journal-entries.service.ts
// ============================================
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateJournalEntryDto } from '../dto/create-journal-entry.dto';
import { JournalEntryStatus } from '@prisma/client';

@Injectable()
export class JournalEntriesService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, userId: string, createDto: CreateJournalEntryDto) {
    // Validate lines balance
    const totalDebit = createDto.lines.reduce((sum, line) => sum + line.debit, 0);
    const totalCredit = createDto.lines.reduce((sum, line) => sum + line.credit, 0);

    if (Math.abs(totalDebit - totalCredit) > 0.01) {
      throw new BadRequestException('Journal entry is not balanced');
    }

    // Validate accounts exist
    const accountIds = createDto.lines.map((line) => line.accountId);
    const accounts = await this.prisma.account.findMany({
      where: {
        id: { in: accountIds },
        companyId: tenantId,
      },
    });

    if (accounts.length !== accountIds.length) {
      throw new NotFoundException('One or more accounts not found');
    }

    // Generate entry number
    const count = await this.prisma.journalEntry.count({
      where: { companyId: tenantId },
    });
    const entryNumber = `JE-${String(count + 1).padStart(6, '0')}`;

    // Create entry with lines
    return this.prisma.journalEntry.create({
      data: {
        companyId: tenantId,
        entryNumber,
        date: createDto.date,
        reference: createDto.reference,
        description: createDto.description,
        createdBy: userId,
        lines: {
          create: createDto.lines,
        },
      },
      include: {
        lines: {
          include: {
            account: true,
          },
        },
        creator: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });
  }

  async findAll(
    tenantId: string,
    options: {
      status?: string;
      startDate?: string;
      endDate?: string;
      page?: number;
      limit?: number;
    },
  ) {
    const page = options.page || 1;
    const limit = options.limit || 50;
    const skip = (page - 1) * limit;

    const where: any = { companyId: tenantId };

    if (options.status) {
      where.status = options.status;
    }

    if (options.startDate || options.endDate) {
      where.date = {};
      if (options.startDate) where.date.gte = new Date(options.startDate);
      if (options.endDate) where.date.lte = new Date(options.endDate);
    }

    const [entries, total] = await Promise.all([
      this.prisma.journalEntry.findMany({
        where,
        skip,
        take: limit,
        include: {
          creator: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
          _count: {
            select: {
              lines: true,
            },
          },
        },
        orderBy: { date: 'desc' },
      }),
      this.prisma.journalEntry.count({ where }),
    ]);

    return {
      data: entries,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(tenantId: string, id: string) {
    const entry = await this.prisma.journalEntry.findFirst({
      where: { id, companyId: tenantId },
      include: {
        lines: {
          include: {
            account: true,
          },
        },
        creator: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    if (!entry) {
      throw new NotFoundException('Journal entry not found');
    }

    return entry;
  }

  async post(tenantId: string, id: string) {
    const entry = await this.findOne(tenantId, id);

    if (entry.status !== 'DRAFT') {
      throw new BadRequestException('Only draft entries can be posted');
    }

    // Update entry status and post date
    const posted = await this.prisma.journalEntry.update({
      where: { id },
      data: {
        status: JournalEntryStatus.POSTED,
        postedAt: new Date(),
      },
      include: {
        lines: {
          include: {
            account: true,
          },
        },
      },
    });

    // Update account balances
    for (const line of posted.lines) {
      const balanceChange = line.debit.toNumber() - line.credit.toNumber();
      
      await this.prisma.account.update({
        where: { id: line.accountId },
        data: {
          balance: {
            increment: balanceChange,
          },
        },
      });
    }

    return posted;
  }

  async cancel(tenantId: string, id: string) {
    const entry = await this.findOne(tenantId, id);

    if (entry.status === 'CANCELLED') {
      throw new BadRequestException('Entry is already cancelled');
    }

    // If entry was posted, reverse account balances
    if (entry.status === 'POSTED') {
      for (const line of entry.lines) {
        const balanceChange = line.debit.toNumber() - line.credit.toNumber();
        
        await this.prisma.account.update({
          where: { id: line.accountId },
          data: {
            balance: {
              decrement: balanceChange,
            },
          },
        });
      }
    }

    return this.prisma.journalEntry.update({
      where: { id },
      data: { status: JournalEntryStatus.CANCELLED },
    });
  }
}