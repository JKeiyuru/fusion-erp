// FILE: backend/src/modules/hr/dto/create-employee.dto.ts
import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsEnum,
  IsNumber,
  IsDate,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { EmploymentStatus } from '@prisma/client';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsString()
  employeeNumber: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nationalId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  kraPin?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nssfNo?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nhifNo?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  department?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  hireDate: Date;

  @ApiProperty()
  @IsNumber()
  salary: number;

  @ApiProperty({ enum: EmploymentStatus, default: 'ACTIVE' })
  @IsOptional()
  @IsEnum(EmploymentStatus)
  status?: EmploymentStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  bankAccount?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  bankName?: string;
}

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
