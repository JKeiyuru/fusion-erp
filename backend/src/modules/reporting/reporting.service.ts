// ============================================
// FILE: backend/src/modules/reporting/reporting.service.ts
// Location: backend/src/modules/reporting/reporting.service.ts
// COMPLETE FIXED VERSION
// ============================================
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ReportingService {
  constructor(private prisma: PrismaService) {}

  async getDashboard(tenantId: string) {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfYear = new Date(today.getFullYear(), 0, 1);

    const [
      totalCustomers,
      totalProducts,
      totalEmployees,
      monthSales,
      yearSales,
      pendingInvoices,
    ] = await Promise.all([
      this.prisma.customer.count({ where: { companyId: tenantId, isActive: true } }),
      this.prisma.product.count({ where: { companyId: tenantId, isActive: true } }),
      this.prisma.employee.count({ where: { companyId: tenantId, status: 'ACTIVE' } }),
      this.prisma.invoice.aggregate({
        where: {
          companyId: tenantId,
          date: { gte: startOfMonth },
          status: { in: ['SENT', 'PAID', 'PARTIALLY_PAID'] },
        },
        _sum: { total: true },
      }),
      this.prisma.invoice.aggregate({
        where: {
          companyId: tenantId,
          date: { gte: startOfYear },
          status: { in: ['SENT', 'PAID', 'PARTIALLY_PAID'] },
        },
        _sum: { total: true },
      }),
      this.prisma.invoice.count({
        where: {
          companyId: tenantId,
          status: { in: ['SENT', 'PARTIALLY_PAID', 'OVERDUE'] },
        },
      }),
    ]);

    // Calculate low stock products
    const productsWithStock = await this.prisma.product.findMany({
      where: {
        companyId: tenantId,
        reorderLevel: { not: null },
      },
      include: {
        stock: true,
      },
    });

    const lowStockProducts = productsWithStock.filter(product => {
      const totalStock = product.stock.reduce(
        (sum, s) => sum + s.quantity.toNumber(),
        0
      );
      return product.reorderLevel && totalStock <= product.reorderLevel.toNumber();
    }).length;

    return {
      overview: {
        totalCustomers,
        totalProducts,
        totalEmployees,
        lowStockProducts,
      },
      sales: {
        thisMonth: monthSales._sum.total ? monthSales._sum.total.toNumber() : 0,
        thisYear: yearSales._sum.total ? yearSales._sum.total.toNumber() : 0,
        pendingInvoices,
      },
    };
  }

  async getSalesSummary(tenantId: string, startDate?: string, endDate?: string) {
    const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), 0, 1);
    const end = endDate ? new Date(endDate) : new Date();

    const [invoices, payments] = await Promise.all([
      this.prisma.invoice.aggregate({
        where: {
          companyId: tenantId,
          date: { gte: start, lte: end },
        },
        _sum: { total: true, paidAmount: true },
        _count: true,
      }),
      this.prisma.payment.aggregate({
        where: {
          companyId: tenantId,
          date: { gte: start, lte: end },
          status: 'COMPLETED',
        },
        _sum: { amount: true },
      }),
    ]);

    const topProducts = await this.prisma.invoiceLine.groupBy({
      by: ['productId'],
      where: {
        invoice: {
          companyId: tenantId,
          date: { gte: start, lte: end },
        },
      },
      _sum: { quantity: true, amount: true },
      orderBy: { _sum: { amount: 'desc' } },
      take: 10,
    });

    return {
      period: { start, end },
      totalSales: invoices._sum.total ? invoices._sum.total.toNumber() : 0,
      totalPaid: payments._sum.amount ? payments._sum.amount.toNumber() : 0,
      invoiceCount: invoices._count,
      topProducts: await Promise.all(
        topProducts.map(async (item) => {
          const product = await this.prisma.product.findUnique({
            where: { id: item.productId },
          });
          return {
            product: product?.name,
            quantity: item._sum.quantity ? item._sum.quantity.toNumber() : 0,
            amount: item._sum.amount ? item._sum.amount.toNumber() : 0,
          };
        })
      ),
    };
  }

  async getInventorySummary(tenantId: string) {
    const products = await this.prisma.product.findMany({
      where: { companyId: tenantId, type: 'STORABLE' },
      include: { stock: true },
    });

    let totalValue = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;

    products.forEach((product) => {
      const totalQty = product.stock.reduce(
        (sum, s) => sum + s.quantity.toNumber(),
        0
      );
      totalValue += totalQty * product.cost.toNumber();

      if (totalQty === 0) outOfStockCount++;
      else if (product.reorderLevel && totalQty <= product.reorderLevel.toNumber()) {
        lowStockCount++;
      }
    });

    return {
      totalProducts: products.length,
      totalValue,
      lowStockCount,
      outOfStockCount,
    };
  }

  async getFinancialSummary(tenantId: string, startDate?: string, endDate?: string) {
    const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), 0, 1);
    const end = endDate ? new Date(endDate) : new Date();

    const [revenue, expenses, receivables, payables] = await Promise.all([
      this.prisma.invoice.aggregate({
        where: {
          companyId: tenantId,
          date: { gte: start, lte: end },
          status: { in: ['SENT', 'PAID', 'PARTIALLY_PAID'] },
        },
        _sum: { total: true },
      }),
      this.prisma.bill.aggregate({
        where: {
          companyId: tenantId,
          date: { gte: start, lte: end },
        },
        _sum: { total: true },
      }),
      this.prisma.invoice.aggregate({
        where: {
          companyId: tenantId,
          status: { in: ['SENT', 'PARTIALLY_PAID', 'OVERDUE'] },
        },
        _sum: { total: true, paidAmount: true },
      }),
      this.prisma.bill.aggregate({
        where: {
          companyId: tenantId,
          status: { in: ['SUBMITTED', 'PARTIALLY_PAID'] },
        },
        _sum: { total: true, paidAmount: true },
      }),
    ]);

    const revenueTotal = revenue._sum.total ? revenue._sum.total.toNumber() : 0;
    const expensesTotal = expenses._sum.total ? expenses._sum.total.toNumber() : 0;
    const receivablesTotal = receivables._sum.total ? receivables._sum.total.toNumber() : 0;
    const receivablesPaid = receivables._sum.paidAmount ? receivables._sum.paidAmount.toNumber() : 0;
    const payablesTotal = payables._sum.total ? payables._sum.total.toNumber() : 0;
    const payablesPaid = payables._sum.paidAmount ? payables._sum.paidAmount.toNumber() : 0;

    return {
      period: { start, end },
      revenue: revenueTotal,
      expenses: expensesTotal,
      profit: revenueTotal - expensesTotal,
      accountsReceivable: receivablesTotal - receivablesPaid,
      accountsPayable: payablesTotal - payablesPaid,
    };
  }

  async getAgedReceivables(tenantId: string) {
    const invoices = await this.prisma.invoice.findMany({
      where: {
        companyId: tenantId,
        status: { in: ['SENT', 'PARTIALLY_PAID', 'OVERDUE'] },
      },
      include: { customer: true },
    });

    const today = new Date();
    const aged = {
      current: 0,
      days30: 0,
      days60: 0,
      days90: 0,
      over90: 0,
    };

    invoices.forEach((inv) => {
      const balance = inv.total.toNumber() - inv.paidAmount.toNumber();
      const daysOverdue = Math.floor(
        (today.getTime() - inv.dueDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (daysOverdue < 0) aged.current += balance;
      else if (daysOverdue <= 30) aged.days30 += balance;
      else if (daysOverdue <= 60) aged.days60 += balance;
      else if (daysOverdue <= 90) aged.days90 += balance;
      else aged.over90 += balance;
    });

    return aged;
  }

  async getAgedPayables(tenantId: string) {
    const bills = await this.prisma.bill.findMany({
      where: {
        companyId: tenantId,
        status: { in: ['SUBMITTED', 'PARTIALLY_PAID'] },
      },
      include: { supplier: true },
    });

    const today = new Date();
    const aged = {
      current: 0,
      days30: 0,
      days60: 0,
      days90: 0,
      over90: 0,
    };

    bills.forEach((bill) => {
      const balance = bill.total.toNumber() - bill.paidAmount.toNumber();
      const daysOverdue = Math.floor(
        (today.getTime() - bill.dueDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (daysOverdue < 0) aged.current += balance;
      else if (daysOverdue <= 30) aged.days30 += balance;
      else if (daysOverdue <= 60) aged.days60 += balance;
      else if (daysOverdue <= 90) aged.days90 += balance;
      else aged.over90 += balance;
    });

    return aged;
  }
}