// ============================================
// FILE: backend/src/modules/manufacturing/dto/create-production-order.dto.ts
// Location: backend/src/modules/manufacturing/dto/create-production-order.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsDate, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductionOrderDto {
  @ApiProperty()
  @IsUUID()
  bomId: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  plannedQuantity: number;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  plannedDate: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class CompleteProductionOrderDto {
  @ApiProperty()
  @IsNumber()
  @Min(1)
  producedQuantity: number;
}