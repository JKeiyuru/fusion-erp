
// ============================================
// FILE: backend/src/modules/accounting/dto/create-account.dto.ts
// Location: backend/src/modules/accounting/dto/create-account.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsBoolean, IsUUID } from 'class-validator';
import { AccountType } from '@prisma/client';

export class CreateAccountDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ enum: AccountType })
  @IsEnum(AccountType)
  type: AccountType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  parentId?: string;

  @ApiProperty({ default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
