// ============================================
// FILE: backend/src/common/interceptors/audit.interceptor.ts
// ============================================
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuditService } from '../../modules/audit/audit.service';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private auditService: AuditService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body, user, headers } = request;

    // Only audit write operations
    if (!['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
      return next.handle();
    }

    const entity = this.extractEntity(url);
    const action = this.getAction(method);

    return next.handle().pipe(
      tap((data) => {
        if (user && user.companyId) {
          this.auditService.log(
            user.companyId,
            user.id,
            action,
            entity,
            data?.id || null,
            { method, url, body },
            request.ip,
            headers['user-agent'],
          );
        }
      }),
    );
  }

  private extractEntity(url: string): string {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1] || 'unknown';
  }

  private getAction(method: string): string {
    const actions = {
      POST: 'CREATE',
      PUT: 'UPDATE',
      PATCH: 'UPDATE',
      DELETE: 'DELETE',
    };
    return actions[method] || 'ACTION';
  }
}