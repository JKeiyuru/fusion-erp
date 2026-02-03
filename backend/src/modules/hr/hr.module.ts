// ============================================
// FILE: backend/src/modules/hr/hr.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { EmployeesController } from './controllers/employees.controller';
import { PayrollController } from './controllers/payroll.controller';
import { LeaveController } from './controllers/leave.controller';
import { EmployeesService } from './services/employees.service';
import { PayrollService } from './services/payroll.service';
import { LeaveService } from './services/leave.service';

@Module({
  controllers: [
    EmployeesController,
    PayrollController,
    LeaveController,
  ],
  providers: [
    EmployeesService,
    PayrollService,
    LeaveService,
  ],
  exports: [
    EmployeesService,
    PayrollService,
    LeaveService,
  ],
})
export class HrModule {}