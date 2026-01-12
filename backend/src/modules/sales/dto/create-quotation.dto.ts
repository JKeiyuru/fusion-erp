// FILE: backend/src/modules/sales/dto/create-quotation.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDate, IsArray, ValidateNested, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class QuotationLineDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty()
  @IsString()
  description: string;

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

export class CreateQuotationDto {
  @ApiProperty()
  @IsUUID()
  customerId: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  validUntil: Date;

  @ApiProperty({ type: [QuotationLineDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuotationLineDto)
  lines: QuotationLineDto[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}