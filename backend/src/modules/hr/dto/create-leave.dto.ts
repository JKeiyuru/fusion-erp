// ============================================
// FILE: backend/src/modules/hr/dto/create-leave.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsEnum, IsDate, IsString, IsOptional } from 'class-validator';
import { LeaveType } from '@prisma/client';
import { Type } from 'class-transformer';

export class CreateLeaveDto {
  @ApiProperty()
  @IsUUID()
  employeeId: string;

  @ApiProperty({ enum: LeaveType })
  @IsEnum(LeaveType)
  type: LeaveType;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  reason?: string;
}