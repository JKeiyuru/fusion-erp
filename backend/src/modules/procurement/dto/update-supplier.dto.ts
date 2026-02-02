// ============================================
// FILE: backend/src/modules/procurement/dto/update-supplier.dto.ts
// Location: backend/src/modules/procurement/dto/update-supplier.dto.ts
// ============================================
import { PartialType } from '@nestjs/swagger';
import { CreateSupplierDto } from './create-supplier.dto';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {}