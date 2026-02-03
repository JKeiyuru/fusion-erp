import { Controller, Post, Body, Get, Query, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { MpesaService } from './mpesa.service';

@ApiTags('integrations')
@Controller('integrations/mpesa')
export class MpesaController {
  constructor(private mpesaService: MpesaService) {}

  @Post('stk-push')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  initiateSTKPush(
    @Body('phoneNumber') phoneNumber: string,
    @Body('amount') amount: number,
    @Body('accountReference') accountReference: string,
    @Body('description') description: string,
  ) {
    return this.mpesaService.initiateSTKPush(phoneNumber, amount, accountReference, description);
  }

  @Get('stk-query/:checkoutRequestID')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  querySTK(@Param('checkoutRequestID') checkoutRequestID: string) {
    return this.mpesaService.querySTKStatus(checkoutRequestID);
  }

  @Post('callback')
  handleCallback(@Body() callbackData: any) {
    return this.mpesaService.handleCallback(callbackData);
  }

  @Post('c2b/confirmation')
  handleC2BConfirmation(@Body() confirmationData: any) {
    return this.mpesaService.handleC2BConfirmation(confirmationData);
  }

  @Post('c2b/validation')
  handleC2BValidation(@Body() validationData: any) {
    // Always accept in this example
    return { ResultCode: 0, ResultDesc: 'Accepted' };
  }
}