import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsNumber, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class BomComponentDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiProperty({ required: false, default: 0 })
  @IsOptional()
  @IsNumber()
  wastagePercentage?: number;
}

export class CreateBomDto {
  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty({ required: false, default: '1.0' })
  @IsOptional()
  @IsString()
  version?: string;

  @ApiProperty({ type: [BomComponentDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BomComponentDto)
  components: BomComponentDto[];
}