// ============================================
// FILE: backend/src/common/interceptors/tenant.interceptor.ts
// Location: backend/src/common/interceptors/tenant.interceptor.ts
// ============================================
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TenantInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (user && user.companyId) {
      request.tenantId = user.companyId;
    }

    return next.handle();
  }
}
