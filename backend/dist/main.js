/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const bull_1 = __webpack_require__(/*! @nestjs/bull */ "@nestjs/bull");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
const tenancy_module_1 = __webpack_require__(/*! ./modules/tenancy/tenancy.module */ "./src/modules/tenancy/tenancy.module.ts");
const users_module_1 = __webpack_require__(/*! ./modules/users/users.module */ "./src/modules/users/users.module.ts");
const roles_module_1 = __webpack_require__(/*! ./modules/roles/roles.module */ "./src/modules/roles/roles.module.ts");
const accounting_module_1 = __webpack_require__(/*! ./modules/accounting/accounting.module */ "./src/modules/accounting/accounting.module.ts");
const sales_module_1 = __webpack_require__(/*! ./modules/sales/sales.module */ "./src/modules/sales/sales.module.ts");
const inventory_module_1 = __webpack_require__(/*! ./modules/inventory/inventory.module */ "./src/modules/inventory/inventory.module.ts");
const pos_module_1 = __webpack_require__(/*! ./modules/pos/pos.module */ "./src/modules/pos/pos.module.ts");
const manufacturing_module_1 = __webpack_require__(/*! ./modules/manufacturing/manufacturing.module */ "./src/modules/manufacturing/manufacturing.module.ts");
const hr_module_1 = __webpack_require__(/*! ./modules/hr/hr.module */ "./src/modules/hr/hr.module.ts");
const procurement_module_1 = __webpack_require__(/*! ./modules/procurement/procurement.module */ "./src/modules/procurement/procurement.module.ts");
const integrations_module_1 = __webpack_require__(/*! ./modules/integrations/integrations.module */ "./src/modules/integrations/integrations.module.ts");
const reporting_module_1 = __webpack_require__(/*! ./modules/reporting/reporting.module */ "./src/modules/reporting/reporting.module.ts");
const audit_module_1 = __webpack_require__(/*! ./modules/audit/audit.module */ "./src/modules/audit/audit.module.ts");
const events_module_1 = __webpack_require__(/*! ./events/events.module */ "./src/events/events.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60000,
                    limit: 100,
                },
            ]),
            bull_1.BullModule.forRoot({
                redis: {
                    host: process.env.REDIS_HOST || 'localhost',
                    port: parseInt(process.env.REDIS_PORT) || 6379,
                    password: process.env.REDIS_PASSWORD,
                },
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            tenancy_module_1.TenancyModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            accounting_module_1.AccountingModule,
            sales_module_1.SalesModule,
            inventory_module_1.InventoryModule,
            pos_module_1.PosModule,
            manufacturing_module_1.ManufacturingModule,
            hr_module_1.HrModule,
            procurement_module_1.ProcurementModule,
            integrations_module_1.IntegrationsModule,
            reporting_module_1.ReportingModule,
            audit_module_1.AuditModule,
            events_module_1.EventsModule,
        ],
    })
], AppModule);


/***/ }),

/***/ "./src/common/decorators/current-user.decorator.ts":
/*!*********************************************************!*\
  !*** ./src/common/decorators/current-user.decorator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),

/***/ "./src/common/decorators/public.decorator.ts":
/*!***************************************************!*\
  !*** ./src/common/decorators/public.decorator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),

/***/ "./src/events/events.module.ts":
/*!*************************************!*\
  !*** ./src/events/events.module.ts ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/accounting/accounting.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/accounting/accounting.module.ts ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/audit/audit.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/audit/audit.module.ts ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./src/modules/auth/dto/login.dto.ts");
const register_dto_1 = __webpack_require__(/*! ./dto/register.dto */ "./src/modules/auth/dto/register.dto.ts");
const refresh_token_dto_1 = __webpack_require__(/*! ./dto/refresh-token.dto */ "./src/modules/auth/dto/refresh-token.dto.ts");
const public_decorator_1 = __webpack_require__(/*! ../../common/decorators/public.decorator */ "./src/common/decorators/public.decorator.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../../common/decorators/current-user.decorator */ "./src/common/decorators/current-user.decorator.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        return this.authService.register(registerDto);
    }
    async login(loginDto) {
        return this.authService.login(loginDto);
    }
    async refresh(refreshDto) {
        return this.authService.refreshToken(refreshDto.refreshToken);
    }
    async logout(user) {
        return this.authService.logout(user.id);
    }
    async getProfile(user) {
        return this.authService.getProfile(user.id);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register new company and admin user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('refresh'),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh access token' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof refresh_token_dto_1.RefreshTokenDto !== "undefined" && refresh_token_dto_1.RefreshTokenDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Logout user' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user profile' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./src/modules/auth/strategies/jwt.strategy.ts");
const refresh_token_strategy_1 = __webpack_require__(/*! ./strategies/refresh-token.strategy */ "./src/modules/auth/strategies/refresh-token.strategy.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: configService.get('JWT_EXPIRATION') || '15m',
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, refresh_token_strategy_1.RefreshTokenStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const prisma_service_1 = __webpack_require__(/*! ../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let AuthService = class AuthService {
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async register(registerDto) {
        const existingCompany = await this.prisma.company.findUnique({
            where: { email: registerDto.companyEmail },
        });
        if (existingCompany) {
            throw new common_1.ConflictException('Company email already registered');
        }
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const result = await this.prisma.$transaction(async (prisma) => {
            const company = await prisma.company.create({
                data: {
                    name: registerDto.companyName,
                    email: registerDto.companyEmail,
                    phone: registerDto.companyPhone,
                    kraPin: registerDto.kraPin,
                    currency: 'KES',
                    timezone: 'Africa/Nairobi',
                    settings: {},
                },
            });
            const adminRole = await prisma.role.create({
                data: {
                    companyId: company.id,
                    name: 'Admin',
                    description: 'System Administrator',
                    isSystem: true,
                },
            });
            const user = await prisma.user.create({
                data: {
                    companyId: company.id,
                    email: registerDto.email,
                    password: hashedPassword,
                    firstName: registerDto.firstName,
                    lastName: registerDto.lastName,
                    phone: registerDto.phone,
                },
            });
            await prisma.userRole.create({
                data: {
                    userId: user.id,
                    roleId: adminRole.id,
                },
            });
            const defaultModules = [
                'accounting',
                'sales',
                'inventory',
                'reporting',
            ];
            await Promise.all(defaultModules.map((moduleCode) => prisma.tenantModule.create({
                data: {
                    companyId: company.id,
                    moduleCode,
                    enabled: true,
                },
            })));
            await this.createDefaultChartOfAccounts(company.id);
            return { company, user };
        });
        const tokens = await this.generateTokens(result.user.id, result.company.id);
        await this.updateRefreshToken(result.user.id, tokens.refreshToken);
        return {
            user: {
                id: result.user.id,
                email: result.user.email,
                firstName: result.user.firstName,
                lastName: result.user.lastName,
                companyId: result.company.id,
                companyName: result.company.name,
            },
            ...tokens,
        };
    }
    async login(loginDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: loginDto.email,
                company: {
                    isActive: true,
                },
            },
            include: {
                company: true,
                roles: {
                    include: {
                        role: {
                            include: {
                                permissions: {
                                    include: {
                                        permission: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.isActive) {
            throw new common_1.UnauthorizedException('Account is inactive');
        }
        const tokens = await this.generateTokens(user.id, user.companyId);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() },
        });
        return {
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                companyId: user.companyId,
                companyName: user.company.name,
                roles: user.roles.map((ur) => ur.role.name),
            },
            ...tokens,
        };
    }
    async refreshToken(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
            });
            const user = await this.prisma.user.findUnique({
                where: { id: payload.sub },
            });
            if (!user || user.refreshToken !== refreshToken) {
                throw new common_1.UnauthorizedException('Invalid refresh token');
            }
            const tokens = await this.generateTokens(user.id, user.companyId);
            await this.updateRefreshToken(user.id, tokens.refreshToken);
            return tokens;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
    async logout(userId) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null },
        });
        return { message: 'Logged out successfully' };
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                company: true,
                roles: {
                    include: {
                        role: {
                            include: {
                                permissions: {
                                    include: {
                                        permission: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const permissions = user.roles.flatMap((ur) => ur.role.permissions.map((rp) => rp.permission.code));
        return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            avatar: user.avatar,
            company: {
                id: user.company.id,
                name: user.company.name,
                email: user.company.email,
                logo: user.company.logo,
            },
            roles: user.roles.map((ur) => ur.role.name),
            permissions,
        };
    }
    async generateTokens(userId, companyId) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({ sub: userId, companyId }, {
                secret: this.configService.get('JWT_SECRET'),
                expiresIn: this.configService.get('JWT_EXPIRATION'),
            }),
            this.jwtService.signAsync({ sub: userId, companyId }, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
                expiresIn: this.configService.get('JWT_REFRESH_EXPIRATION'),
            }),
        ]);
        return { accessToken, refreshToken };
    }
    async updateRefreshToken(userId, refreshToken) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken },
        });
    }
    async createDefaultChartOfAccounts(companyId) {
        const accounts = [
            { code: '1000', name: 'Assets', type: 'ASSET', parentId: null },
            { code: '1100', name: 'Current Assets', type: 'ASSET', parent: '1000' },
            { code: '1110', name: 'Cash and Cash Equivalents', type: 'ASSET', parent: '1100' },
            { code: '1120', name: 'Accounts Receivable', type: 'ASSET', parent: '1100' },
            { code: '1130', name: 'Inventory', type: 'ASSET', parent: '1100' },
            { code: '1200', name: 'Fixed Assets', type: 'ASSET', parent: '1000' },
            { code: '2000', name: 'Liabilities', type: 'LIABILITY', parentId: null },
            { code: '2100', name: 'Current Liabilities', type: 'LIABILITY', parent: '2000' },
            { code: '2110', name: 'Accounts Payable', type: 'LIABILITY', parent: '2100' },
            { code: '2120', name: 'VAT Payable', type: 'LIABILITY', parent: '2100' },
            { code: '3000', name: 'Equity', type: 'EQUITY', parentId: null },
            { code: '3100', name: 'Retained Earnings', type: 'EQUITY', parent: '3000' },
            { code: '4000', name: 'Income', type: 'INCOME', parentId: null },
            { code: '4100', name: 'Sales Revenue', type: 'INCOME', parent: '4000' },
            { code: '5000', name: 'Expenses', type: 'EXPENSE', parentId: null },
            { code: '5100', name: 'Cost of Goods Sold', type: 'EXPENSE', parent: '5000' },
            { code: '5200', name: 'Operating Expenses', type: 'EXPENSE', parent: '5000' },
        ];
        const createdAccounts = new Map();
        for (const account of accounts) {
            const parentId = account.parent
                ? createdAccounts.get(account.parent)
                : null;
            const created = await this.prisma.account.create({
                data: {
                    companyId,
                    code: account.code,
                    name: account.name,
                    type: account.type,
                    parentId,
                },
            });
            createdAccounts.set(account.code, created.id);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthService);


/***/ }),

/***/ "./src/modules/auth/dto/login.dto.ts":
/*!*******************************************!*\
  !*** ./src/modules/auth/dto/login.dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin@company.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password123' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/modules/auth/dto/refresh-token.dto.ts":
/*!***************************************************!*\
  !*** ./src/modules/auth/dto/refresh-token.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RefreshTokenDto {
}
exports.RefreshTokenDto = RefreshTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);


/***/ }),

/***/ "./src/modules/auth/dto/register.dto.ts":
/*!**********************************************!*\
  !*** ./src/modules/auth/dto/register.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'My Company Ltd' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'info@mycompany.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "companyEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+254712345678' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "companyPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A001234567P' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "kraPin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john@mycompany.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+254712345678' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password123' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/modules/auth/strategies/jwt.strategy.ts":
/*!*****************************************************!*\
  !*** ./src/modules/auth/strategies/jwt.strategy.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService, prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.configService = configService;
        this.prisma = prisma;
    }
    async validate(payload) {
        const user = await this.prisma.user.findUnique({
            where: { id: payload.sub },
        });
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException();
        }
        return {
            id: user.id,
            email: user.email,
            companyId: user.companyId,
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object])
], JwtStrategy);


/***/ }),

/***/ "./src/modules/auth/strategies/refresh-token.strategy.ts":
/*!***************************************************************!*\
  !*** ./src/modules/auth/strategies/refresh-token.strategy.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let RefreshTokenStrategy = class RefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_REFRESH_SECRET'),
        });
        this.configService = configService;
    }
    async validate(payload) {
        return {
            id: payload.sub,
            companyId: payload.companyId,
        };
    }
};
exports.RefreshTokenStrategy = RefreshTokenStrategy;
exports.RefreshTokenStrategy = RefreshTokenStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], RefreshTokenStrategy);


/***/ }),

/***/ "./src/modules/hr/hr.module.ts":
/*!*************************************!*\
  !*** ./src/modules/hr/hr.module.ts ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/integrations/integrations.module.ts":
/*!*********************************************************!*\
  !*** ./src/modules/integrations/integrations.module.ts ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/inventory/inventory.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/inventory/inventory.module.ts ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/manufacturing/manufacturing.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/manufacturing/manufacturing.module.ts ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/pos/pos.module.ts":
/*!***************************************!*\
  !*** ./src/modules/pos/pos.module.ts ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/procurement/procurement.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/procurement/procurement.module.ts ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/reporting/reporting.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/reporting/reporting.module.ts ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/roles/roles.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/roles/roles.module.ts ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/sales/sales.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/sales/sales.module.ts ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/tenancy/tenancy.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/tenancy/tenancy.module.ts ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/users/users.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/users/users.module.ts ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/prisma/prisma.module.ts":
/*!*************************************!*\
  !*** ./src/prisma/prisma.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./src/prisma/prisma.service.ts");
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);


/***/ }),

/***/ "./src/prisma/prisma.service.ts":
/*!**************************************!*\
  !*** ./src/prisma/prisma.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor() {
        super({
            log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
        });
    }
    async onModuleInit() {
        await this.$connect();
        console.log('✅ Database connected');
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async withTenant(tenantId, callback) {
        return this.$transaction(async (prisma) => {
            await prisma.$executeRaw `SELECT set_config('app.tenant_id', ${tenantId}, true)`;
            return callback(prisma);
        });
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);


/***/ }),

/***/ "@nestjs/bull":
/*!*******************************!*\
  !*** external "@nestjs/bull" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/bull");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/throttler":
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("class-validator");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-jwt");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const compression = __webpack_require__(/*! compression */ "compression");
const helmet_1 = __webpack_require__(/*! helmet */ "helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    app.use(compression());
    app.enableCors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3001',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    app.setGlobalPrefix('api/v1');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Fusion ERP API')
        .setDescription('Enterprise Resource Planning System for Kenyan Businesses')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('auth', 'Authentication endpoints')
        .addTag('tenancy', 'Multi-tenant management')
        .addTag('accounting', 'Accounting and Finance')
        .addTag('sales', 'Sales and CRM')
        .addTag('inventory', 'Inventory Management')
        .addTag('pos', 'Point of Sale')
        .addTag('manufacturing', 'Manufacturing')
        .addTag('hr', 'Human Resources')
        .addTag('procurement', 'Procurement')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`🚀 Fusion ERP Backend running on http://localhost:${port}`);
    console.log(`📚 API Documentation: http://localhost:${port}/api/docs`);
}
bootstrap();

})();

/******/ })()
;