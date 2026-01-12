// ============================================
// FILE: backend/src/modules/pos/pos.module.ts
// Location: backend/src/modules/pos/pos.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { SessionsController } from './controllers/sessions.controller';
import { SalesController } from './controllers/sales.controller';
import { SessionsService } from './services/sessions.service';
import { SalesService } from './services/sales.service';

@Module({
  controllers: [SessionsController, SalesController],
  providers: [SessionsService, SalesService],
  exports: [SalesService],
})
export class PosModule {}