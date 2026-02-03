import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class FinancialReportsService {
  constructor(private prisma: PrismaService) {}

  async profitAndLoss(tenantId: string, startDate: Date, endDate: Date) {
    const journalLines = await this.prisma.journalLine.findMany({
      where: {
        entry: {
          companyId: tenantId,
          status: 'POSTED',
          date: {
            gte: startDate,
            lte: endDate,
          },
        },
      },
      include: {
        account: true,
      },
    });

    const income = journalLines
      .filter((l) => l.account.type === 'INCOME')
      .reduce((sum, l) => sum + l.credit.toNumber() - l.debit.toNumber(), 0);

    const expenses = journalLines
      .filter((l) => l.account.type === 'EXPENSE')
      .reduce((sum, l) => sum + l.debit.toNumber() - l.credit.toNumber(), 0);

    const netProfit = income - expenses;

    return {
      period: { startDate, endDate },
      income,
      expenses,
      netProfit,
      margin: income > 0 ? (netProfit / income) * 100 : 0,
    };
  }

  async balanceSheet(tenantId: string, asOfDate: Date) {
    const accounts = await this.prisma.account.findMany({
      where: {
        companyId: tenantId,
        isActive: true,
      },
    });

    const assets = accounts
      .filter((a) => a.type === 'ASSET')
      .reduce((sum, a) => sum + a.balance.toNumber(), 0);

    const liabilities = accounts
      .filter((a) => a.type === 'LIABILITY')
      .reduce((sum, a) => sum + a.balance.toNumber(), 0);

    const equity = accounts
      .filter((a) => a.type === 'EQUITY')
      .reduce((sum, a) => sum + a.balance.toNumber(), 0);

    return {
      asOfDate,
      assets,
      liabilities,
      equity,
      totalLiabilitiesAndEquity: liabilities + equity,
    };
  }

  async cashFlow(tenantId: string, startDate: Date, endDate: Date) {
    const entries = await this.prisma.journalEntry.findMany({
      where: {
        companyId: tenantId,
        status: 'POSTED',
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        lines: {
          include: {
            account: true,
          },
        },
      },
    });

    let operating = 0;
    let investing = 0;
    let financing = 0;

    entries.forEach((entry) => {
      entry.lines.forEach((line) => {
        const amount = line.debit.toNumber() - line.credit.toNumber();
        
        // Simplified categorization
        if (line.account.type === 'INCOME' || line.account.type === 'EXPENSE') {
          operating += amount;
        } else if (line.account.code.startsWith('15')) { // Fixed assets
          investing += amount;
        } else if (line.account.code.startsWith('2')) { // Liabilities
          financing += amount;
        }
      });
    });

    return {
      period: { startDate, endDate },
      operating,
      investing,
      financing,
      netChange: operating + investing + financing,
    };
  }

  async salesAnalysis(tenantId: string, startDate: Date, endDate: Date) {
    const invoices = await this.prisma.invoice.findMany({
      where: {
        companyId: tenantId,
        date: {
          gte: startDate,
          lte: endDate,
        },
        status: { not: 'CANCELLED' },
      },
      include: {
        customer: true,
        lines: {
          include: {
            product: true,
          },
        },
      },
    });

    const totalSales = invoices.reduce((sum, inv) => sum + inv.total.toNumber(), 0);
    const totalPaid = invoices.reduce((sum, inv) => sum + inv.paidAmount.toNumber(), 0);

    const byCustomer = invoices.reduce((acc, inv) => {
      const key = inv.customer.name;
      if (!acc[key]) acc[key] = 0;
      acc[key] += inv.total.toNumber();
      return acc;
    }, {} as Record<string, number>);

    const byProduct = invoices.flatMap((inv) => inv.lines).reduce((acc, line) => {
      const key = line.product.name;
      if (!acc[key]) acc[key] = { quantity: 0, amount: 0 };
      acc[key].quantity += line.quantity.toNumber();
      acc[key].amount += line.amount.toNumber();
      return acc;
    }, {} as Record<string, { quantity: number; amount: number }>);

    return {
      period: { startDate, endDate },
      totalInvoices: invoices.length,
      totalSales,
      totalPaid,
      outstanding: totalSales - totalPaid,
      byCustomer,
      byProduct,
    };
  }
}