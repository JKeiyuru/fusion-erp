// ============================================
// FILE: backend/src/modules/pos/dto/close-session.dto.ts
// Location: backend/src/modules/pos/dto/close-session.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CloseSessionDto {
  @ApiProperty()
  @IsNumber()
  closingCash: number;
}