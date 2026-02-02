// ============================================
// FILE: backend/src/modules/hr/services/payroll.service.ts
// Location: backend/src/modules/hr/services/payroll.service.ts
// ============================================
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ProcessPayrollDto } from '../dto/process-payroll.dto';
import { PayrollStatus } from '@prisma/client';

@Injectable()
export class PayrollService {
  constructor(private prisma: PrismaService) {}

  async processPayroll(tenantId: string, processDto: ProcessPayrollDto) {
    const where: any = { companyId: tenantId, status: 'ACTIVE' };
    if (processDto.employeeIds && processDto.employeeIds.length > 0) {
      where.id = { in: processDto.employeeIds };
    }

    const employees = await this.prisma.employee.findMany({ where });

    if (employees.length === 0) {
      throw new BadRequestException('No employees found to process');
    }

    const payrollEntries = await Promise.all(
      employees.map(async (employee) => {
        const basicSalary = employee.salary.toNumber();
        
        // Calculate PAYE (simplified - should use KRA tax bands)
        const grossSalary = basicSalary;
        const payeDeduction = this.calculatePAYE(grossSalary);
        
        // NHIF (simplified)
        const nhifDeduction = this.calculateNHIF(grossSalary);
        
        // NSSF (simplified)
        const nssfDeduction = this.calculateNSSF(grossSalary);
        
        const totalDeductions = payeDeduction + nhifDeduction + nssfDeduction;
        const netSalary = grossSalary - totalDeductions;

        return this.prisma.payrollEntry.create({
          data: {
            companyId: tenantId,
            employeeId: employee.id,
            period: processDto.period,
            basicSalary,
            grossSalary,
            payeDeduction,
            nhifDeduction,
            nssfDeduction,
            netSalary,
            status: PayrollStatus.PROCESSED,
          },
        });
      })
    );

    return { processed: payrollEntries.length, entries: payrollEntries };
  }

  private calculatePAYE(grossSalary: number): number {
    // Simplified PAYE calculation
    // TODO: Implement proper KRA tax bands
    if (grossSalary <= 24000) return 0;
    if (grossSalary <= 32333) return (grossSalary - 24000) * 0.1;
    if (grossSalary <= 40000) return 833.3 + (grossSalary - 32333) * 0.15;
    if (grossSalary <= 47333) return 1983.35 + (grossSalary - 40000) * 0.2;
    return 3449.95 + (grossSalary - 47333) * 0.25;
  }

  private calculateNHIF(grossSalary: number): number {
    // Simplified NHIF calculation
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
  }

  private calculateNSSF(grossSalary: number): number {
    // Simplified NSSF calculation (6% of pensionable pay, max 18,000)
    const pensionablePay = Math.min(grossSalary, 18000);
    return pensionablePay * 0.06;
  }

  async findAll(tenantId: string, options: any) {
    const where: any = { companyId: tenantId };
    
    if (options.period) where.period = options.period;
    if (options.employeeId) where.employeeId = options.employeeId;
    if (options.status) where.status = options.status;

    return this.prisma.payrollEntry.findMany({
      where,
      include: { employee: true },
      orderBy: { period: 'desc' },
    });
  }

  async findOne(tenantId: string, id: string) {
    const entry = await this.prisma.payrollEntry.findFirst({
      where: { id, companyId: tenantId },
      include: { employee: true },
    });
    if (!entry) throw new NotFoundException('Payroll entry not found');
    return entry;
  }

  async markAsPaid(tenantId: string, id: string) {
    await this.findOne(tenantId, id);
    return this.prisma.payrollEntry.update({
      where: { id },
      data: {
        status: PayrollStatus.PAID,
        paidDate: new Date(),
      },
    });
  }
}