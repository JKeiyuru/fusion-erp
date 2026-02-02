// FILE: backend/src/modules/integrations/integrations.module.ts
import { Module } from '@nestjs/common';
import { EtimsService } from './etims/etims.service';
import { MpesaService } from './mpesa/mpesa.service';

@Module({
  providers: [EtimsService, MpesaService],
  exports: [EtimsService, MpesaService],
})
export class IntegrationsModule {}