// FILE: backend/src/modules/inventory/dto/create-product.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsEnum, IsOptional, IsBoolean, IsUUID } from 'class-validator';
import { ProductType } from '@prisma/client';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  sku: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ enum: ProductType })
  @IsEnum(ProductType)
  type: ProductType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @ApiProperty()
  @IsNumber()
  costPrice: number;

  @ApiProperty()
  @IsNumber()
  sellingPrice: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  barcode?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiProperty({ default: true })
  @IsOptional()
  @IsBoolean()
  trackInventory?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  reorderLevel?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  reorderQuantity?: number;

  @ApiProperty({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}