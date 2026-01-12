// ============================================
// FILE: backend/src/modules/sales/dto/create-invoice.dto.ts
// Location: backend/src/modules/sales/dto/create-invoice.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDate,
  IsArray,
  ValidateNested,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';

export class InvoiceLineDto {
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

export class CreateInvoiceDto {
  @ApiProperty()
  @IsUUID()
  customerId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  salesOrderId?: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  dueDate: Date;

  @ApiProperty({ type: [InvoiceLineDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceLineDto)
  lines: InvoiceLineDto[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}