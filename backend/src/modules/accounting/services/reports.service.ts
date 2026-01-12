// ============================================
// FILE: backend/src/modules/accounting/services/reports.service.ts
// Location: backend/src/modules/accounting/services/reports.service.ts
// ============================================
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getBalanceSheet(tenantId: string, date?: string) {
    const asOfDate = date ? new Date(date) : new Date();

    // Get all accounts with their balances
    const accounts = await this.prisma.account.findMany({
      where: { companyId: tenantId, isActive: true },
      include: {
        journalLines: {
          where: {
            entry: {
              status: 'POSTED',
              date: { lte: asOfDate },
            },
          },
        },
      },
    });

    // Calculate balances by type
    const assets = accounts.filter((a) => a.type === 'ASSET');
    const liabilities = accounts.filter((a) => a.type === 'LIABILITY');
    const equity = accounts.filter((a) => a.type === 'EQUITY');

    const calculateBalance = (account: any) => {
      return account.journalLines.reduce(
        (sum: number, line: any) =>
          sum + (line.debit.toNumber() - line.credit.toNumber()),
        0,
      );
    };

    const totalAssets = assets.reduce(
      (sum, a) => sum + calculateBalance(a),
      0,
    );
    const totalLiabilities = liabilities.reduce(
      (sum, a) => sum + Math.abs(calculateBalance(a)),
      0,
    );
    const totalEquity = equity.reduce(
      (sum, a) => sum + Math.abs(calculateBalance(a)),
      0,
    );

    return {
      asOfDate,
      assets: {
        accounts: assets.map((a) => ({
          code: a.code,
          name: a.name,
          balance: calculateBalance(a),
        })),
        total: totalAssets,
      },
      liabilities: {
        accounts: liabilities.map((a) => ({
          code: a.code,
          name: a.name,
          balance: Math.abs(calculateBalance(a)),
        })),
        total: totalLiabilities,
      },
      equity: {
        accounts: equity.map((a) => ({
          code: a.code,
          name: a.name,
          balance: Math.abs(calculateBalance(a)),
        })),
        total: totalEquity,
      },
      balanceCheck: totalAssets - (totalLiabilities + totalEquity),
    };
  }

  async getIncomeStatement(
    tenantId: string,
    startDate?: string,
    endDate?: string,
  ) {
    const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), 0, 1);
    const end = endDate ? new Date(endDate) : new Date();

    const accounts = await this.prisma.account.findMany({
      where: {
        companyId: tenantId,
        type: { in: ['INCOME', 'EXPENSE'] },
        isActive: true,
      },
      include: {
        journalLines: {
          where: {
            entry: {
              status: 'POSTED',
              date: { gte: start, lte: end },
            },
          },
        },
      },
    });

    const income = accounts.filter((a) => a.type === 'INCOME');
    const expenses = accounts.filter((a) => a.type === 'EXPENSE');

    const calculateBalance = (account: any) => {
      return account.journalLines.reduce(
        (sum: number, line: any) =>
          sum + (line.credit.toNumber() - line.debit.toNumber()),
        0,
      );
    };

    const totalIncome = income.reduce((sum, a) => sum + calculateBalance(a), 0);
    const totalExpenses = expenses.reduce(
      (sum, a) => sum + Math.abs(calculateBalance(a)),
      0,
    );
    const netIncome = totalIncome - totalExpenses;

    return {
      period: { start, end },
      income: {
        accounts: income.map((a) => ({
          code: a.code,
          name: a.name,
          amount: calculateBalance(a),
        })),
        total: totalIncome,
      },
      expenses: {
        accounts: expenses.map((a) => ({
          code: a.code,
          name: a.name,
          amount: Math.abs(calculateBalance(a)),
        })),
        total: totalExpenses,
      },
      netIncome,
    };
  }

  async getTrialBalance(
    tenantId: string,
    startDate?: string,
    endDate?: string,
  ) {
    const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), 0, 1);
    const end = endDate ? new Date(endDate) : new Date();

    const accounts = await this.prisma.account.findMany({
      where: { companyId: tenantId, isActive: true },
      include: {
        journalLines: {
          where: {
            entry: {
              status: 'POSTED',
              date: { gte: start, lte: end },
            },
          },
        },
      },
      orderBy: { code: 'asc' },
    });

    let totalDebit = 0;
    let totalCredit = 0;

    const balances = accounts.map((account) => {
      const debit = account.journalLines.reduce(
        (sum, line) => sum + line.debit.toNumber(),
        0,
      );
      const credit = account.journalLines.reduce(
        (sum, line) => sum + line.credit.toNumber(),
        0,
      );

      totalDebit += debit;
      totalCredit += credit;

      return {
        code: account.code,
        name: account.name,
        type: account.type,
        debit,
        credit,
        balance: debit - credit,
      };
    });

    return {
      period: { start, end },
      accounts: balances,
      totals: {
        debit: totalDebit,
        credit: totalCredit,
        difference: totalDebit - totalCredit,
      },
    };
  }

  async getGeneralLedger(
    tenantId: string,
    accountId: string,
    startDate?: string,
    endDate?: string,
  ) {
    const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), 0, 1);
    const end = endDate ? new Date(endDate) : new Date();

    const account = await this.prisma.account.findFirst({
      where: { id: accountId, companyId: tenantId },
    });

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    const lines = await this.prisma.journalLine.findMany({
      where: {
        accountId,
        entry: {
          companyId: tenantId,
          status: 'POSTED',
          date: { gte: start, lte: end },
        },
      },
      include: {
        entry: true,
      },
      orderBy: { entry: { date: 'asc' } },
    });

    let runningBalance = 0;
    const transactions = lines.map((line) => {
      const debit = line.debit.toNumber();
      const credit = line.credit.toNumber();
      runningBalance += debit - credit;

      return {
        date: line.entry.date,
        reference: line.entry.reference,
        description: line.description || line.entry.description,
        debit,
        credit,
        balance: runningBalance,
      };
    });

    return {
      account: {
        code: account.code,
        name: account.name,
        type: account.type,
      },
      period: { start, end },
      transactions,
      summary: {
        openingBalance: 0, // Would need to calculate from before start date
        totalDebit: lines.reduce((sum, l) => sum + l.debit.toNumber(), 0),
        totalCredit: lines.reduce((sum, l) => sum + l.credit.toNumber(), 0),
        closingBalance: runningBalance,
      },
    };
  }
}
