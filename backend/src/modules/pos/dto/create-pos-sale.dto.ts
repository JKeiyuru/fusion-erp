// FILE: backend/src/modules/pos/dto/create-pos-sale.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsArray,
  ValidateNested,
  IsNumber,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod } from '@prisma/client';

export class PosSaleLineDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  unitPrice: number;

  @ApiProperty()
  @IsNumber()
  taxRate: number;
}

export class CreatePosSaleDto {
  @ApiProperty()
  @IsUUID()
  sessionId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  customerId?: string;

  @ApiProperty({ enum: PaymentMethod })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  mpesaCode?: string;

  @ApiProperty({ type: [PosSaleLineDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PosSaleLineDto)
  lines: PosSaleLineDto[];
}
