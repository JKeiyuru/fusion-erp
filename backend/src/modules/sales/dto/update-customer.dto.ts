
// ============================================
// FILE: backend/src/modules/sales/dto/update-customer.dto.ts
// Location: backend/src/modules/sales/dto/update-customer.dto.ts
// ============================================
import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}