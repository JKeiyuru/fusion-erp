// ============================================
// FILE: backend/src/modules/inventory/inventory.module.ts
// Location: backend/src/modules/inventory/inventory.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { WarehousesController } from './controllers/warehouses.controller';
import { StockMovementsController } from './controllers/stock-movements.controller';
import { ProductsService } from './services/products.service';
import { WarehousesService } from './services/warehouses.service';
import { StockMovementsService } from './services/stock-movements.service';

@Module({
  controllers: [
    ProductsController,
    WarehousesController,
    StockMovementsController,
  ],
  providers: [
    ProductsService,
    WarehousesService,
    StockMovementsService,
  ],
  exports: [ProductsService, StockMovementsService],
})
export class InventoryModule {}