// ============================================
// FILE: backend/src/modules/sales/sales.module.ts
// Location: backend/src/modules/sales/sales.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { QuotationsController } from './controllers/quotations.controller';
import { OrdersController } from './controllers/orders.controller';
import { InvoicesController } from './controllers/invoices.controller';
import { CustomersService } from './services/customers.service';
import { QuotationsService } from './services/quotations.service';
import { OrdersService } from './services/orders.service';
import { InvoicesService } from './services/invoices.service';

@Module({
  controllers: [
    CustomersController,
    QuotationsController,
    OrdersController,
    InvoicesController,
  ],
  providers: [
    CustomersService,
    QuotationsService,
    OrdersService,
    InvoicesService,
  ],
  exports: [
    CustomersService,
    InvoicesService,
  ],
})
export class SalesModule {}