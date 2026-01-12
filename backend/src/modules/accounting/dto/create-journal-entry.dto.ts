// ============================================
// FILE: backend/src/modules/accounting/dto/create-journal-entry.dto.ts
// Location: backend/src/modules/accounting/dto/create-journal-entry.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDate,
  IsArray,
  ValidateNested,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';

export class JournalLineDto {
  @ApiProperty()
  @IsUUID()
  accountId: string;

  @ApiProperty()
  @IsNumber()
  debit: number;

  @ApiProperty()
  @IsNumber()
  credit: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}

export class CreateJournalEntryDto {
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  reference?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: [JournalLineDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => JournalLineDto)
  lines: JournalLineDto[];
}