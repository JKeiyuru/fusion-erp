import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsBoolean, IsUUID } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  unitPrice?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  salePrice?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  reorderLevel?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  reorderQty?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}