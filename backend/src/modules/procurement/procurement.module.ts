// FILE: backend/src/modules/procurement/procurement.module.ts
import { Module } from '@nestjs/common';
import { SuppliersController } from './controllers/suppliers.controller';
import { PurchaseOrdersController } from './controllers/purchase-orders.controller';
import { BillsController } from './controllers/bills.controller';
import { SuppliersService } from './services/suppliers.service';
import { PurchaseOrdersService } from './services/purchase-orders.service';
import { BillsService } from './services/bills.service';

@Module({
  controllers: [
    SuppliersController,
    PurchaseOrdersController,
    BillsController,
  ],
  providers: [
    SuppliersService,
    PurchaseOrdersService,
    BillsService,
  ],
  exports: [BillsService],
})
export class ProcurementModule {}