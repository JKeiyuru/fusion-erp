import { Module } from '@nestjs/common';
import { MpesaController } from './mpesa/mpesa.controller';
import { EtimsController } from './etims/etims.controller';
import { MpesaService } from './mpesa/mpesa.service';
import { EtimsService } from './etims/etims.service';
import { EmailService } from './notifications/email.service';
import { SmsService } from './notifications/sms.service';

@Module({
  controllers: [
    MpesaController,
    EtimsController,
  ],
  providers: [
    MpesaService,
    EtimsService,
    EmailService,
    SmsService,
  ],
  exports: [
    MpesaService,
    EtimsService,
    EmailService,
    SmsService,
  ],
})
export class IntegrationsModule {}