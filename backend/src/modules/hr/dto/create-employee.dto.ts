// ============================================
// FILE: backend/src/modules/hr/dto/create-employee.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsString()
  employeeNo: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

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
  nssf?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nhif?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  department?: string;

  @ApiProperty()
  @IsNumber()
  salary: number;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  hireDate: Date;
}

export class UpdateEmployeeDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  lastName?: string;

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
  position?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  department?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  salary?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  hireDate?: Date;
}