// ============================================
// FILE: backend/src/modules/hr/dto/process-payroll.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDate, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class ProcessPayrollDto {
  @ApiProperty()
  @IsUUID()
  employeeId: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  periodStart: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  periodEnd: Date;

  @ApiProperty({ required: false, default: 0 })
  @IsOptional()
  @IsNumber()
  allowances?: number;

  @ApiProperty({ required: false, default: 0 })
  @IsOptional()
  @IsNumber()
  otherDeductions?: number;
}

export class BulkProcessPayrollDto {
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  periodStart: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  periodEnd: Date;

  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  employeeIds?: string[];
}
