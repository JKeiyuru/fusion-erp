// ============================================
// FILE: backend/src/modules/accounting/accounting.module.ts
// Location: backend/src/modules/accounting/accounting.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { AccountsController } from './controllers/accounts.controller';
import { JournalEntriesController } from './controllers/journal-entries.controller';
import { ReportsController } from './controllers/reports.controller';
import { AccountsService } from './services/accounts.service';
import { JournalEntriesService } from './services/journal-entries.service';
import { ReportsService } from './services/reports.service';

@Module({
  controllers: [
    AccountsController,
    JournalEntriesController,
    ReportsController,
  ],
  providers: [
    AccountsService,
    JournalEntriesService,
    ReportsService,
  ],
  exports: [
    AccountsService,
    JournalEntriesService,
  ],
})
export class AccountingModule {}