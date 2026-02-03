import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class OperationalReportsService {
  constructor(private prisma: PrismaService) {}

  async inventoryValuation(tenantId: string) {
    const products = await this.prisma.product.findMany({
      where: {
        companyId: tenantId,
        isActive: true,
        trackInventory: true,
      },
      include: {
        stock: true,
      },
    });

    const valuation = products.map((product) => {
      const totalStock = product.stock.reduce(
        (sum, stock) => sum + stock.quantity.toNumber(),
        0,
      );
      const value = totalStock * product.costPrice.toNumber();

      return {
        sku: product.sku,
        name: product.name,
        quantity: totalStock,
        costPrice: product.costPrice.toNumber(),
        value,
      };
    });

    const totalValue = valuation.reduce((sum, item) => sum + item.value, 0);

    return {
      items: valuation,
      totalValue,
    };
  }

  async stockMovementReport(tenantId: string, startDate: Date, endDate: Date) {
    const movements = await this.prisma.stockMovement.findMany({
      where: {
        companyId: tenantId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        product: true,
        warehouse: true,
      },
      orderBy: {
        date: 'desc',
      },
    });

    const summary = {
      totalMovements: movements.length,
      totalIn: movements
        .filter((m) => m.type === 'IN')
        .reduce((sum, m) => sum + m.quantity.toNumber(), 0),
      totalOut: movements
        .filter((m) => m.type === 'OUT')
        .reduce((sum, m) => sum + m.quantity.toNumber(), 0),
      movements: movements.map((m) => ({
        date: m.date,
        type: m.type,
        product: m.product.name,
        warehouse: m.warehouse.name,
        quantity: m.quantity.toNumber(),
        reference: m.reference,
      })),
    };

    return summary;
  }

  async purchaseAnalysis(tenantId: string, startDate: Date, endDate: Date) {
    const bills = await this.prisma.bill.findMany({
      where: {
        companyId: tenantId,
        date: {
          gte: startDate,
          lte: endDate,
        },
        status: { not: 'CANCELLED' },
      },
      include: {
        supplier: true,
        lines: {
          include: {
            product: true,
          },
        },
      },
    });

    const totalPurchases = bills.reduce((sum, bill) => sum + bill.total.toNumber(), 0);
    const totalPaid = bills.reduce((sum, bill) => sum + bill.paidAmount.toNumber(), 0);

    const bySupplier = bills.reduce((acc, bill) => {
      const key = bill.supplier.name;
      if (!acc[key]) acc[key] = 0;
      acc[key] += bill.total.toNumber();
      return acc;
    }, {} as Record<string, number>);

    return {
      period: { startDate, endDate },
      totalBills: bills.length,
      totalPurchases,
      totalPaid,
      outstanding: totalPurchases - totalPaid,
      bySupplier,
    };
  }
}