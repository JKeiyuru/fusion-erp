import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { SalesModule } from './modules/sales/sales.module';
import { AccountingModule } from './modules/accounting/accounting.module';
import { PosModule } from './modules/pos/pos.module';
import { ProcurementModule } from './modules/procurement/procurement.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { ManufacturingModule } from './modules/manufacturing/manufacturing.module';
import { HrModule } from './modules/hr/hr.module';
import { AuditModule } from './modules/audit/audit.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { ReportingModule } from './modules/reporting/reporting.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    SalesModule,
    AccountingModule,
    PosModule,
    ProcurementModule,
    InventoryModule,
    ManufacturingModule,
    HrModule,
    AuditModule,
    IntegrationsModule,
    ReportingModule,
    RolesModule,
  ],
})
export class AppModule {}