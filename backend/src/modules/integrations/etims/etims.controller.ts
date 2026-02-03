import { Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { EtimsService } from './etims.service';

@ApiTags('integrations')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('integrations/etims')
export class EtimsController {
  constructor(private etimsService: EtimsService) {}

  @Post('submit/:invoiceId')
  submitInvoice(@Param('invoiceId') invoiceId: string) {
    return this.etimsService.submitInvoice(invoiceId);
  }

  @Get('status/:invoiceNumber')
  getStatus(@Param('invoiceNumber') invoiceNumber: string) {
    return this.etimsService.getInvoiceStatus(invoiceNumber);
  }
}