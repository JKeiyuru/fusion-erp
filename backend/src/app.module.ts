// ============================================
// FILE: backend/src/app.module.ts
// Location: backend/src/app.module.ts
// ============================================
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { ThrottlerModule } from '@nestjs/throttler';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { TenancyModule } from './modules/tenancy/tenancy.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { AccountingModule } from './modules/accounting/accounting.module';
import { SalesModule } from './modules/sales/sales.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { PosModule } from './modules/pos/pos.module';
import { ManufacturingModule } from './modules/manufacturing/manufacturing.module';
import { HrModule } from './modules/hr/hr.module';
import { ProcurementModule } from './modules/procurement/procurement.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { ReportingModule } from './modules/reporting/reporting.module';
import { AuditModule } from './modules/audit/audit.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Rate Limiting
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),

    // Queue System (Redis)
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD,
      },
    }),

    // Database
    PrismaModule,

    // Core Modules
    AuthModule,
    TenancyModule,
    UsersModule,
    RolesModule,

    // Business Modules
    AccountingModule,
    SalesModule,
    InventoryModule,
    PosModule,
    ManufacturingModule,
    HrModule,
    ProcurementModule,

    // Supporting Modules
    IntegrationsModule,
    ReportingModule,
    AuditModule,
    EventsModule,
  ],
})
export class AppModule {}