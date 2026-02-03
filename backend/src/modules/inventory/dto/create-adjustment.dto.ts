// ============================================
// FILE: backend/src/modules/inventory/dto/create-adjustment.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateAdjustmentDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty()
  @IsUUID()
  warehouseId: string;

  @ApiProperty()
  @IsNumber()
  newQuantity: number;

  @ApiProperty()
  @IsString()
  reason: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}