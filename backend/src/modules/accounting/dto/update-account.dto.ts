// ============================================
// FILE: backend/src/modules/accounting/dto/update-account.dto.ts
// Location: backend/src/modules/accounting/dto/update-account.dto.ts
// ============================================
import { PartialType } from '@nestjs/swagger';
import { CreateAccountDto } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}