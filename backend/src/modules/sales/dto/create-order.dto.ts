
// FILE: backend/src/modules/sales/dto/create-sales-order.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDate, IsArray, ValidateNested, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class SalesOrderLineDto {
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

export class CreateSalesOrderDto {
  @ApiProperty()
  @IsUUID()
  customerId: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  expectedDate?: Date;

  @ApiProperty({ type: [SalesOrderLineDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SalesOrderLineDto)
  lines: SalesOrderLineDto[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}