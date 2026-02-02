// FILE: backend/src/modules/roles/dto/create-role.dto.ts
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}

export class AssignPermissionsDto {
  @ApiProperty()
  @IsArray()
  permissionIds: string[];
}