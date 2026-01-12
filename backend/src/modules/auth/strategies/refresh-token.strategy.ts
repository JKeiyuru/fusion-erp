// ============================================
// FILE: backend/src/modules/auth/strategies/refresh-token.strategy.ts
// Location: backend/src/modules/auth/strategies/refresh-token.strategy.ts
// ============================================
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_REFRESH_SECRET'),
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      companyId: payload.companyId,
    };
  }
}