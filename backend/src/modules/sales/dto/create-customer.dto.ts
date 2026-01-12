// ============================================
// FILE: backend/src/modules/sales/dto/create-customer.dto.ts
// Location: backend/src/modules/sales/dto/create-customer.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  kraPin?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  creditLimit?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  paymentTerms?: number;

  @ApiProperty({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}