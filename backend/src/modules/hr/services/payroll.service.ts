// ============================================
// FILE: backend/src/modules/hr/services/payroll.service.ts
// ============================================
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ProcessPayrollDto } from '../dto/process-payroll.dto';
import { PayrollStatus } from '@prisma/client';

@Injectable()
export class PayrollService {
  constructor(private prisma: PrismaService) {}

  async processPayroll(tenantId: string, processDto: ProcessPayrollDto) {
    const employee = await this.prisma.employee.findFirst({
      where: {
        id: processDto.employeeId,
        companyId: tenantId,
        isActive: true,
      },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found or inactive');
    }

    // Check for existing payroll in this period
    const existing = await this.prisma.payrollRun.findFirst({
      where: {
        employeeId: processDto.employeeId,
        periodStart: processDto.periodStart,
        periodEnd: processDto.periodEnd,
      },
    });

    if (existing) {
      throw new BadRequestException('Payroll already processed for this period');
    }

    const basicSalary = employee.salary.toNumber();
    const allowances = processDto.allowances || 0;
    const grossPay = basicSalary + allowances;

    // Calculate Kenya statutory deductions
    const paye = this.calculatePAYE(grossPay);
    const nhif = this.calculateNHIF(grossPay);
    const nssf = this.calculateNSSF(grossPay);

    const totalDeductions = paye + nhif + nssf + (processDto.otherDeductions || 0);
    const netPay = grossPay - totalDeductions;

    return this.prisma.payrollRun.create({
      data: {
        employeeId: processDto.employeeId,
        periodStart: processDto.periodStart,
        periodEnd: processDto.periodEnd,
        basicSalary,
        allowances,
        grossPay,
        paye,
        nhif,
        nssf,
        deductions: processDto.otherDeductions || 0,
        netPay,
        status: PayrollStatus.DRAFT,
      },
      include: {
        employee: true,
      },
    });
  }

  async findAll(tenantId: string, options: any) {
    const page = options.page || 1;
    const limit = options.limit || 20;
    const skip = (page - 1) * limit;
    const where: any = {
      employee: {
        companyId: tenantId,
      },
    };

    if (options.employeeId) {
      where.employeeId = options.employeeId;
    }

    if (options.status) {
      where.status = options.status;
    }

    if (options.periodStart || options.periodEnd) {
      where.periodStart = {};
      if (options.periodStart) where.periodStart.gte = new Date(options.periodStart);
      if (options.periodEnd) where.periodEnd = { lte: new Date(options.periodEnd) };
    }

    const [payrolls, total] = await Promise.all([
      this.prisma.payrollRun.findMany({
        where,
        skip,
        take: limit,
        include: {
          employee: true,
        },
        orderBy: { periodEnd: 'desc' },
      }),
      this.prisma.payrollRun.count({ where }),
    ]);

    return {
      data: payrolls,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const payroll = await this.prisma.payrollRun.findUnique({
      where: { id },
      include: {
        employee: true,
      },
    });

    if (!payroll) {
      throw new NotFoundException('Payroll record not found');
    }

    return payroll;
  }

  async approve(id: string) {
    const payroll = await this.findOne(id);

    if (payroll.status !== PayrollStatus.DRAFT) {
      throw new BadRequestException('Only draft payroll can be approved');
    }

    return this.prisma.payrollRun.update({
      where: { id },
      data: { status: PayrollStatus.APPROVED },
    });
  }

  async pay(id: string) {
    const payroll = await this.findOne(id);

    if (payroll.status !== PayrollStatus.APPROVED) {
      throw new BadRequestException('Only approved payroll can be marked as paid');
    }

    return this.prisma.payrollRun.update({
      where: { id },
      data: {
        status: PayrollStatus.PAID,
        paidAt: new Date(),
      },
    });
  }

  async getPayrollSummary(tenantId: string, periodStart: Date, periodEnd: Date) {
    const payrolls = await this.prisma.payrollRun.findMany({
      where: {
        employee: {
          companyId: tenantId,
        },
        periodStart: { gte: periodStart },
        periodEnd: { lte: periodEnd },
      },
      include: {
        employee: true,
      },
    });

    const summary = {
      totalEmployees: payrolls.length,
      totalGrossPay: 0,
      totalPAYE: 0,
      totalNHIF: 0,
      totalNSSF: 0,
      totalDeductions: 0,
      totalNetPay: 0,
      byStatus: {
        draft: 0,
        approved: 0,
        paid: 0,
      },
    };

    payrolls.forEach((p) => {
      summary.totalGrossPay += p.grossPay.toNumber();
      summary.totalPAYE += p.paye.toNumber();
      summary.totalNHIF += p.nhif.toNumber();
      summary.totalNSSF += p.nssf.toNumber();
      summary.totalDeductions += p.deductions.toNumber();
      summary.totalNetPay += p.netPay.toNumber();
      summary.byStatus[p.status.toLowerCase()] += 1;
    });

    return summary;
  }

  // Kenya PAYE Calculation (2024 rates)
  private calculatePAYE(grossPay: number): number {
    const taxablePay = grossPay - this.calculateNSSF(grossPay);
    let tax = 0;

    // Personal Relief
    const personalRelief = 2400 / 12; // KES 2,400 per month

    // PAYE Bands (2024)
    if (taxablePay <= 24000) {
      tax = taxablePay * 0.10;
    } else if (taxablePay <= 32333) {
      tax = 24000 * 0.10 + (taxablePay - 24000) * 0.25;
    } else if (taxablePay <= 500000) {
      tax = 24000 * 0.10 + 8333 * 0.25 + (taxablePay - 32333) * 0.30;
    } else if (taxablePay <= 800000) {
      tax = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + (taxablePay - 500000) * 0.325;
    } else {
      tax = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + 300000 * 0.325 + (taxablePay - 800000) * 0.35;
    }

    tax -= personalRelief;
    return Math.max(0, Math.round(tax));
  }

  // Kenya NHIF Calculation (2024 rates)
  private calculateNHIF(grossPay: number): number {
    if (grossPay < 6000) return 150;
    if (grossPay < 8000) return 300;
    if (grossPay < 12000) return 400;
    if (grossPay < 15000) return 500;
    if (grossPay < 20000) return 600;
    if (grossPay < 25000) return 750;
    if (grossPay < 30000) return 850;
    if (grossPay < 35000) return 900;
    if (grossPay < 40000) return 950;
    if (grossPay < 45000) return 1000;
    if (grossPay < 50000) return 1100;
    if (grossPay < 60000) return 1200;
    if (grossPay < 70000) return 1300;
    if (grossPay < 80000) return 1400;
    if (grossPay < 90000) return 1500;
    if (grossPay < 100000) return 1600;
    return 1700;
  }

  // Kenya NSSF Calculation (2024 rates - new tiered system)
  private calculateNSSF(grossPay: number): number {
    const tier1Limit = 7000;
    const tier2Limit = 36000;
    const rate = 0.06; // 6% each (employee + employer, but we calculate employee only)

    let nssf = 0;

    // Tier 1: First KES 7,000
    if (grossPay <= tier1Limit) {
      nssf = grossPay * rate;
    } else {
      nssf = tier1Limit * rate;

      // Tier 2: KES 7,001 to KES 36,000
      if (grossPay > tier1Limit) {
        const tier2Amount = Math.min(grossPay - tier1Limit, tier2Limit - tier1Limit);
        nssf += tier2Amount * rate;
      }
    }

    return Math.round(nssf);
  }

  async bulkProcessPayroll(
    tenantId: string,
    periodStart: Date,
    periodEnd: Date,
    employeeIds?: string[],
  ) {
    const where: any = {
      companyId: tenantId,
      isActive: true,
    };

    if (employeeIds && employeeIds.length > 0) {
      where.id = { in: employeeIds };
    }

    const employees = await this.prisma.employee.findMany({ where });

    const results = await Promise.allSettled(
      employees.map((employee) =>
        this.processPayroll(tenantId, {
          employeeId: employee.id,
          periodStart,
          periodEnd,
          allowances: 0,
          otherDeductions: 0,
        }),
      ),
    );

    const successful = results.filter((r) => r.status === 'fulfilled').length;
    const failed = results.filter((r) => r.status === 'rejected').length;

    return {
      total: employees.length,
      successful,
      failed,
      results: results.map((r, i) => ({
        employeeId: employees[i].id,
        employeeName: `${employees[i].firstName} ${employees[i].lastName}`,
        status: r.status,
        error: r.status === 'rejected' ? r.reason.message : null,
      })),
    };
  }
}