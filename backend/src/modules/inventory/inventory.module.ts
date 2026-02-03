// ============================================
// FILE: backend/src/modules/inventory/inventory.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { WarehousesController } from './controllers/warehouses.controller';
import { StockMovementsController } from './controllers/stock-movements.controller';
import { AdjustmentsController } from './controllers/adjustments.controller';
import { ProductsService } from './services/products.service';
import { WarehousesService } from './services/warehouses.service';
import { StockMovementsService } from './services/stock-movements.service';
import { AdjustmentsService } from './services/adjustments.service';

@Module({
  controllers: [
    ProductsController,
    WarehousesController,
    StockMovementsController,
    AdjustmentsController,
  ],
  providers: [
    ProductsService,
    WarehousesService,
    StockMovementsService,
    AdjustmentsService,
  ],
  exports: [
    ProductsService,
    WarehousesService,
    StockMovementsService,
    AdjustmentsService,
  ],
})
export class InventoryModule {}