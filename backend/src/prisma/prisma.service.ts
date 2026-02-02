// ============================================
// FILE: backend/src/prisma/prisma.service.ts
// Location: backend/src/prisma/prisma.service.ts
// COMPLETE FIXED VERSION
// ============================================
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  bom: any;
  constructor() {
    super({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Database connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Tenant-specific query helpers
  async withTenant<T>(tenantId: string, callback: (prisma: any) => Promise<T>): Promise<T> {
    return this.$transaction(async (prisma) => {
      // Set tenant context
      await prisma.$executeRaw`SELECT set_config('app.tenant_id', ${tenantId}, true)`;
      return callback(prisma);
    });
  }
}
