import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsDate, IsOptional, IsString, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductionOrderDto {
  @ApiProperty()
  @IsUUID()
  bomId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  scheduledDate: Date;

  @ApiProperty()
  @IsUUID()
  warehouseId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  @IsBoolean()
  forceProduce?: boolean;
}

export class CompleteProductionOrderDto {
  @ApiProperty()
  @IsNumber()
  producedQuantity: number;
}