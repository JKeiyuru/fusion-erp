// FILE: backend/src/modules/hr/dto/create-leave-request.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsDate, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLeaveRequestDto {
  @ApiProperty()
  @IsUUID()
  employeeId: string;

  @ApiProperty()
  @IsString()
  leaveType: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @ApiProperty()
  @IsNumber()
  days: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  reason?: string;
}