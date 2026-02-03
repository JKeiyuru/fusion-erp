import { Module } from '@nestjs/common';
import { FinancialReportsController } from './controllers/financial-reports.controller';
import { OperationalReportsController } from './controllers/operational-reports.controller';
import { FinancialReportsService } from './services/financial-reports.service';
import { OperationalReportsService } from './services/operational-reports.service';

@Module({
  controllers: [
    FinancialReportsController,
    OperationalReportsController,
  ],
  providers: [
    FinancialReportsService,
    OperationalReportsService,
  ],
  exports: [
    FinancialReportsService,
    OperationalReportsService,
  ],
})
export class ReportingModule {}