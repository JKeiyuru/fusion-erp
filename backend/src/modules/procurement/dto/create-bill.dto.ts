// FILE: backend/src/modules/procurement/dto/create-bill.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDate, IsArray, ValidateNested, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class BillLineDto {
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

export class CreateBillDto {
  @ApiProperty()
  @IsUUID()
  supplierId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  purchaseOrderId?: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  dueDate: Date;

  @ApiProperty({ type: [BillLineDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BillLineDto)
  lines: BillLineDto[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}
