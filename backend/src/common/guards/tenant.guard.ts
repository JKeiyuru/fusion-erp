// ============================================
// FILE: backend/src/common/guards/tenant.guard.ts
// Location: backend/src/common/guards/tenant.guard.ts
// ============================================
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user || !user.companyId) {
      throw new ForbiddenException('No tenant context found');
    }
    
    request.tenantId = user.companyId;
    return true;
  }
}
