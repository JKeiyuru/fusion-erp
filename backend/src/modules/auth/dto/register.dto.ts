// ============================================
// FILE: backend/src/modules/auth/dto/register.dto.ts
// Location: backend/src/modules/auth/dto/register.dto.ts
// ============================================
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'My Company Ltd' })
  @IsString()
  companyName: string;

  @ApiProperty({ example: 'info@mycompany.com' })
  @IsEmail()
  companyEmail: string;

  @ApiProperty({ example: '+254712345678' })
  @IsOptional()
  @IsString()
  companyPhone?: string;

  @ApiProperty({ example: 'A001234567P' })
  @IsOptional()
  @IsString()
  kraPin?: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'john@mycompany.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '+254712345678' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(6)
  password: string;
}