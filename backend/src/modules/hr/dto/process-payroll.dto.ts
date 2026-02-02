// FILE: backend/src/modules/hr/dto/process-payroll.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsOptional } from 'class-validator';

export class ProcessPayrollDto {
  @ApiProperty({ example: '2024-01' })
  @IsString()
  period: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  employeeIds?: string[];
}