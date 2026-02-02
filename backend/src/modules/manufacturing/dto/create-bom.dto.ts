// ============================================
// FILE: backend/src/modules/manufacturing/dto/create-bom.dto.ts
// Location: backend/src/modules/manufacturing/dto/create-bom.dto.ts
// ============================================
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsUUID, IsString, IsNumber, IsArray, ValidateNested, IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class BomLineDto {
  @ApiProperty()
  @IsUUID()
  componentId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;
}

export class CreateBomDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty({ type: [BomLineDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BomLineDto)
  lines: BomLineDto[];

  @ApiProperty({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateBomDto extends PartialType(CreateBomDto) {}