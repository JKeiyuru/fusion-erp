// FILE: backend/src/modules/procurement/dto/create-purchase-order.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDate, IsArray, ValidateNested, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class PurchaseOrderLineDto {
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

export class CreatePurchaseOrderDto {
  @ApiProperty()
  @IsUUID()
  supplierId: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  expectedDate?: Date;

  @ApiProperty({ type: [PurchaseOrderLineDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PurchaseOrderLineDto)
  lines: PurchaseOrderLineDto[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}