// ============================================
// FILE: backend/src/modules/manufacturing/manufacturing.module.ts
// Location: backend/src/modules/manufacturing/manufacturing.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { BomController } from './controllers/bom.controller';
import { ProductionOrdersController } from './controllers/production-orders.controller';
import { BomService } from './services/bom.service';
import { ProductionOrdersService } from './services/production-orders.service';

@Module({
  controllers: [BomController, ProductionOrdersController],
  providers: [BomService, ProductionOrdersService],
  exports: [BomService, ProductionOrdersService],
})
export class ManufacturingModule {}