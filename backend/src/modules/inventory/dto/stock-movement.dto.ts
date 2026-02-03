// ============================================
// FILE: backend/src/modules/inventory/dto/stock-movement.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsEnum, IsNumber, IsOptional, IsString, IsDate } from 'class-validator';
import { StockMovementType } from '@prisma/client';
import { Type } from 'class-transformer';

export class CreateStockMovementDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty()
  @IsUUID()
  warehouseId: string;

  @ApiProperty({ enum: StockMovementType })
  @IsEnum(StockMovementType)
  type: StockMovementType;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  reference?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: Date;
}
