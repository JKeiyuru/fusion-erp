// ============================================
// FILE: backend/src/modules/auth/dto/refresh-token.dto.ts
// Location: backend/src/modules/auth/dto/refresh-token.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty()
  @IsString()
  refreshToken: string;
}