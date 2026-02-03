/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
const sales_module_1 = __webpack_require__(/*! ./modules/sales/sales.module */ "./src/modules/sales/sales.module.ts");
const accounting_module_1 = __webpack_require__(/*! ./modules/accounting/accounting.module */ "./src/modules/accounting/accounting.module.ts");
const pos_module_1 = __webpack_require__(/*! ./modules/pos/pos.module */ "./src/modules/pos/pos.module.ts");
const procurement_module_1 = __webpack_require__(/*! ./modules/procurement/procurement.module */ "./src/modules/procurement/procurement.module.ts");
const inventory_module_1 = __webpack_require__(/*! ./modules/inventory/inventory.module */ "./src/modules/inventory/inventory.module.ts");
const manufacturing_module_1 = __webpack_require__(/*! ./modules/manufacturing/manufacturing.module */ "./src/modules/manufacturing/manufacturing.module.ts");
const hr_module_1 = __webpack_require__(/*! ./modules/hr/hr.module */ "./src/modules/hr/hr.module.ts");
const audit_module_1 = __webpack_require__(/*! ./modules/audit/audit.module */ "./src/modules/audit/audit.module.ts");
const integrations_module_1 = __webpack_require__(/*! ./modules/integrations/integrations.module */ "./src/modules/integrations/integrations.module.ts");
const reporting_module_1 = __webpack_require__(/*! ./modules/reporting/reporting.module */ "./src/modules/reporting/reporting.module.ts");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const roles_module_1 = __webpack_require__(/*! ./modules/roles/roles.module */ "./src/modules/roles/roles.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            event_emitter_1.EventEmitterModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            sales_module_1.SalesModule,
            accounting_module_1.AccountingModule,
            pos_module_1.PosModule,
            procurement_module_1.ProcurementModule,
            inventory_module_1.InventoryModule,
            manufacturing_module_1.ManufacturingModule,
            hr_module_1.HrModule,
            audit_module_1.AuditModule,
            integrations_module_1.IntegrationsModule,
            reporting_module_1.ReportingModule,
            roles_module_1.RolesModule,
        ],
    })
], AppModule);


/***/ }),

/***/ "./src/common/decorators/current-user.decorator.ts":
/*!*********************************************************!*\
  !*** ./src/common/decorators/current-user.decorator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),

/***/ "./src/common/decorators/tenant.decorator.ts":
/*!***************************************************!*\
  !*** ./src/common/decorators/tenant.decorator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentTenant = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentTenant = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.tenantId;
});


/***/ }),

/***/ "./src/common/guards/jwt-auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/common/guards/jwt-auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const public_decorator_1 = __webpack_require__(/*! ../decorators/public.decorator */ "./src/common/decorators/public.decorator.ts");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], JwtAuthGuard);


/***/ }),

/***/ "./src/common/guards/tenant.guard.ts":
/*!*******************************************!*\
  !*** ./src/common/guards/tenant.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let TenantGuard = class TenantGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user || !user.companyId) {
            throw new common_1.ForbiddenException('No tenant context found');
        }
        request.tenantId = user.companyId;
        return true;
    }
};
exports.TenantGuard = TenantGuard;
exports.TenantGuard = TenantGuard = __decorate([
    (0, common_1.Injectable)()
], TenantGuard);


/***/ }),

/***/ "./src/modules/accounting/accounting.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/accounting/accounting.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const accounts_controller_1 = __webpack_require__(/*! ./controllers/accounts.controller */ "./src/modules/accounting/controllers/accounts.controller.ts");
const journal_entries_controller_1 = __webpack_require__(/*! ./controllers/journal-entries.controller */ "./src/modules/accounting/controllers/journal-entries.controller.ts");
const reports_controller_1 = __webpack_require__(/*! ./controllers/reports.controller */ "./src/modules/accounting/controllers/reports.controller.ts");
const accounts_service_1 = __webpack_require__(/*! ./services/accounts.service */ "./src/modules/accounting/services/accounts.service.ts");
const journal_entries_service_1 = __webpack_require__(/*! ./services/journal-entries.service */ "./src/modules/accounting/services/journal-entries.service.ts");
const reports_service_1 = __webpack_require__(/*! ./services/reports.service */ "./src/modules/accounting/services/reports.service.ts");
let AccountingModule = class AccountingModule {
};
exports.AccountingModule = AccountingModule;
exports.AccountingModule = AccountingModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            accounts_controller_1.AccountsController,
            journal_entries_controller_1.JournalEntriesController,
            reports_controller_1.ReportsController,
        ],
        providers: [
            accounts_service_1.AccountsService,
            journal_entries_service_1.JournalEntriesService,
            reports_service_1.ReportsService,
        ],
        exports: [
            accounts_service_1.AccountsService,
            journal_entries_service_1.JournalEntriesService,
        ],
    })
], AccountingModule);


/***/ }),

/***/ "./src/modules/accounting/controllers/accounts.controller.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/accounting/controllers/accounts.controller.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const accounts_service_1 = __webpack_require__(/*! ../services/accounts.service */ "./src/modules/accounting/services/accounts.service.ts");
const create_account_dto_1 = __webpack_require__(/*! ../dto/create-account.dto */ "./src/modules/accounting/dto/create-account.dto.ts");
const update_account_dto_1 = __webpack_require__(/*! ../dto/update-account.dto */ "./src/modules/accounting/dto/update-account.dto.ts");
let AccountsController = class AccountsController {
    constructor(accountsService) {
        this.accountsService = accountsService;
    }
    create(tenantId, createDto) {
        return this.accountsService.create(tenantId, createDto);
    }
    findAll(tenantId, type) {
        return this.accountsService.findAll(tenantId, type);
    }
    getTree(tenantId) {
        return this.accountsService.getTree(tenantId);
    }
    findOne(tenantId, id) {
        return this.accountsService.findOne(tenantId, id);
    }
    getBalance(tenantId, id, startDate, endDate) {
        return this.accountsService.getBalance(tenantId, id, startDate, endDate);
    }
    update(tenantId, id, updateDto) {
        return this.accountsService.update(tenantId, id, updateDto);
    }
    remove(tenantId, id) {
        return this.accountsService.remove(tenantId, id);
    }
};
exports.AccountsController = AccountsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new account' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_account_dto_1.CreateAccountDto !== "undefined" && create_account_dto_1.CreateAccountDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all accounts (Chart of Accounts)' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('tree'),
    (0, swagger_1.ApiOperation)({ summary: 'Get accounts as hierarchical tree' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "getTree", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get account by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/balance'),
    (0, swagger_1.ApiOperation)({ summary: 'Get account balance' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)('startDate')),
    __param(3, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "getBalance", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update account' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof update_account_dto_1.UpdateAccountDto !== "undefined" && update_account_dto_1.UpdateAccountDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete account' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AccountsController.prototype, "remove", null);
exports.AccountsController = AccountsController = __decorate([
    (0, swagger_1.ApiTags)('accounting'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('accounting/accounts'),
    __metadata("design:paramtypes", [typeof (_a = typeof accounts_service_1.AccountsService !== "undefined" && accounts_service_1.AccountsService) === "function" ? _a : Object])
], AccountsController);


/***/ }),

/***/ "./src/modules/accounting/controllers/journal-entries.controller.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/accounting/controllers/journal-entries.controller.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JournalEntriesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../../../common/decorators/current-user.decorator */ "./src/common/decorators/current-user.decorator.ts");
const journal_entries_service_1 = __webpack_require__(/*! ../services/journal-entries.service */ "./src/modules/accounting/services/journal-entries.service.ts");
const create_journal_entry_dto_1 = __webpack_require__(/*! ../dto/create-journal-entry.dto */ "./src/modules/accounting/dto/create-journal-entry.dto.ts");
let JournalEntriesController = class JournalEntriesController {
    constructor(journalEntriesService) {
        this.journalEntriesService = journalEntriesService;
    }
    create(tenantId, user, createDto) {
        return this.journalEntriesService.create(tenantId, user.id, createDto);
    }
    findAll(tenantId, status, startDate, endDate, page, limit) {
        return this.journalEntriesService.findAll(tenantId, {
            status,
            startDate,
            endDate,
            page,
            limit,
        });
    }
    findOne(tenantId, id) {
        return this.journalEntriesService.findOne(tenantId, id);
    }
    post(tenantId, id) {
        return this.journalEntriesService.post(tenantId, id);
    }
    cancel(tenantId, id) {
        return this.journalEntriesService.cancel(tenantId, id);
    }
};
exports.JournalEntriesController = JournalEntriesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new journal entry' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, typeof (_b = typeof create_journal_entry_dto_1.CreateJournalEntryDto !== "undefined" && create_journal_entry_dto_1.CreateJournalEntryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], JournalEntriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all journal entries' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('startDate')),
    __param(3, (0, common_1.Query)('endDate')),
    __param(4, (0, common_1.Query)('page')),
    __param(5, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], JournalEntriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get journal entry by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], JournalEntriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/post'),
    (0, swagger_1.ApiOperation)({ summary: 'Post journal entry' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], JournalEntriesController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(':id/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel journal entry' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], JournalEntriesController.prototype, "cancel", null);
exports.JournalEntriesController = JournalEntriesController = __decorate([
    (0, swagger_1.ApiTags)('accounting'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('accounting/journal-entries'),
    __metadata("design:paramtypes", [typeof (_a = typeof journal_entries_service_1.JournalEntriesService !== "undefined" && journal_entries_service_1.JournalEntriesService) === "function" ? _a : Object])
], JournalEntriesController);


/***/ }),

/***/ "./src/modules/accounting/controllers/reports.controller.ts":
/*!******************************************************************!*\
  !*** ./src/modules/accounting/controllers/reports.controller.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const reports_service_1 = __webpack_require__(/*! ../services/reports.service */ "./src/modules/accounting/services/reports.service.ts");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    getBalanceSheet(tenantId, date) {
        return this.reportsService.getBalanceSheet(tenantId, date);
    }
    getIncomeStatement(tenantId, startDate, endDate) {
        return this.reportsService.getIncomeStatement(tenantId, startDate, endDate);
    }
    getTrialBalance(tenantId, startDate, endDate) {
        return this.reportsService.getTrialBalance(tenantId, startDate, endDate);
    }
    getGeneralLedger(tenantId, accountId, startDate, endDate) {
        return this.reportsService.getGeneralLedger(tenantId, accountId, startDate, endDate);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)('balance-sheet'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Balance Sheet' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "getBalanceSheet", null);
__decorate([
    (0, common_1.Get)('income-statement'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Income Statement (P&L)' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "getIncomeStatement", null);
__decorate([
    (0, common_1.Get)('trial-balance'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Trial Balance' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "getTrialBalance", null);
__decorate([
    (0, common_1.Get)('general-ledger'),
    (0, swagger_1.ApiOperation)({ summary: 'Get General Ledger' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('accountId')),
    __param(2, (0, common_1.Query)('startDate')),
    __param(3, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "getGeneralLedger", null);
exports.ReportsController = ReportsController = __decorate([
    (0, swagger_1.ApiTags)('accounting'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('accounting/reports'),
    __metadata("design:paramtypes", [typeof (_a = typeof reports_service_1.ReportsService !== "undefined" && reports_service_1.ReportsService) === "function" ? _a : Object])
], ReportsController);


/***/ }),

/***/ "./src/modules/accounting/dto/create-account.dto.ts":
/*!**********************************************************!*\
  !*** ./src/modules/accounting/dto/create-account.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateAccountDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class CreateAccountDto {
}
exports.CreateAccountDto = CreateAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.AccountType }),
    (0, class_validator_1.IsEnum)(client_1.AccountType),
    __metadata("design:type", typeof (_a = typeof client_1.AccountType !== "undefined" && client_1.AccountType) === "function" ? _a : Object)
], CreateAccountDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "parentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateAccountDto.prototype, "isActive", void 0);


/***/ }),

/***/ "./src/modules/accounting/dto/create-journal-entry.dto.ts":
/*!****************************************************************!*\
  !*** ./src/modules/accounting/dto/create-journal-entry.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateJournalEntryDto = exports.JournalLineDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class JournalLineDto {
}
exports.JournalLineDto = JournalLineDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], JournalLineDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], JournalLineDto.prototype, "debit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], JournalLineDto.prototype, "credit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], JournalLineDto.prototype, "description", void 0);
class CreateJournalEntryDto {
}
exports.CreateJournalEntryDto = CreateJournalEntryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateJournalEntryDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJournalEntryDto.prototype, "reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJournalEntryDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [JournalLineDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => JournalLineDto),
    __metadata("design:type", Array)
], CreateJournalEntryDto.prototype, "lines", void 0);


/***/ }),

/***/ "./src/modules/accounting/dto/update-account.dto.ts":
/*!**********************************************************!*\
  !*** ./src/modules/accounting/dto/update-account.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAccountDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_account_dto_1 = __webpack_require__(/*! ./create-account.dto */ "./src/modules/accounting/dto/create-account.dto.ts");
class UpdateAccountDto extends (0, swagger_1.PartialType)(create_account_dto_1.CreateAccountDto) {
}
exports.UpdateAccountDto = UpdateAccountDto;


/***/ }),

/***/ "./src/modules/accounting/services/accounts.service.ts":
/*!*************************************************************!*\
  !*** ./src/modules/accounting/services/accounts.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.AccountsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let AccountsService = class AccountsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const existing = await this.prisma.account.findUnique({
            where: {
                companyId_code: {
                    companyId: tenantId,
                    code: createDto.code,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Account code already exists');
        }
        if (createDto.parentId) {
            const parent = await this.prisma.account.findFirst({
                where: { id: createDto.parentId, companyId: tenantId },
            });
            if (!parent) {
                throw new common_1.NotFoundException('Parent account not found');
            }
        }
        return this.prisma.account.create({
            data: {
                companyId: tenantId,
                ...createDto,
            },
        });
    }
    async findAll(tenantId, type) {
        const where = { companyId: tenantId };
        if (type) {
            where.type = type;
        }
        return this.prisma.account.findMany({
            where,
            include: {
                parent: true,
                _count: {
                    select: {
                        children: true,
                    },
                },
            },
            orderBy: { code: 'asc' },
        });
    }
    async getTree(tenantId) {
        const accounts = await this.prisma.account.findMany({
            where: { companyId: tenantId },
            orderBy: { code: 'asc' },
        });
        const accountMap = new Map();
        const tree = [];
        accounts.forEach((account) => {
            accountMap.set(account.id, { ...account, children: [] });
        });
        accounts.forEach((account) => {
            const node = accountMap.get(account.id);
            if (account.parentId) {
                const parent = accountMap.get(account.parentId);
                if (parent) {
                    parent.children.push(node);
                }
            }
            else {
                tree.push(node);
            }
        });
        return tree;
    }
    async findOne(tenantId, id) {
        const account = await this.prisma.account.findFirst({
            where: { id, companyId: tenantId },
            include: {
                parent: true,
                children: true,
                journalLines: {
                    take: 10,
                    orderBy: { entry: { date: 'desc' } },
                    include: {
                        entry: true,
                    },
                },
            },
        });
        if (!account) {
            throw new common_1.NotFoundException('Account not found');
        }
        return account;
    }
    async update(tenantId, id, updateDto) {
        await this.findOne(tenantId, id);
        if (updateDto.parentId) {
            if (updateDto.parentId === id) {
                throw new common_1.BadRequestException('Account cannot be its own parent');
            }
            const parent = await this.prisma.account.findFirst({
                where: { id: updateDto.parentId, companyId: tenantId },
            });
            if (!parent) {
                throw new common_1.NotFoundException('Parent account not found');
            }
        }
        return this.prisma.account.update({
            where: { id },
            data: updateDto,
        });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        const hasChildren = await this.prisma.account.count({
            where: { parentId: id },
        });
        if (hasChildren > 0) {
            throw new common_1.BadRequestException('Cannot delete account with sub-accounts');
        }
        const hasTransactions = await this.prisma.journalLine.count({
            where: { accountId: id },
        });
        if (hasTransactions > 0) {
            return this.prisma.account.update({
                where: { id },
                data: { isActive: false },
            });
        }
        return this.prisma.account.delete({ where: { id } });
    }
    async getBalance(tenantId, accountId, startDate, endDate) {
        await this.findOne(tenantId, accountId);
        const where = {
            accountId,
            entry: {
                companyId: tenantId,
                status: 'POSTED',
            },
        };
        if (startDate || endDate) {
            where.entry.date = {};
            if (startDate)
                where.entry.date.gte = new Date(startDate);
            if (endDate)
                where.entry.date.lte = new Date(endDate);
        }
        const lines = await this.prisma.journalLine.findMany({
            where,
            select: {
                debit: true,
                credit: true,
            },
        });
        const totalDebit = lines.reduce((sum, line) => sum + line.debit.toNumber(), 0);
        const totalCredit = lines.reduce((sum, line) => sum + line.credit.toNumber(), 0);
        const balance = totalDebit - totalCredit;
        return {
            accountId,
            totalDebit,
            totalCredit,
            balance,
            startDate,
            endDate,
        };
    }
};
exports.AccountsService = AccountsService;
exports.AccountsService = AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], AccountsService);


/***/ }),

/***/ "./src/modules/accounting/services/journal-entries.service.ts":
/*!********************************************************************!*\
  !*** ./src/modules/accounting/services/journal-entries.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.JournalEntriesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let JournalEntriesService = class JournalEntriesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, userId, createDto) {
        const totalDebit = createDto.lines.reduce((sum, line) => sum + line.debit, 0);
        const totalCredit = createDto.lines.reduce((sum, line) => sum + line.credit, 0);
        if (Math.abs(totalDebit - totalCredit) > 0.01) {
            throw new common_1.BadRequestException('Journal entry is not balanced');
        }
        const accountIds = createDto.lines.map((line) => line.accountId);
        const accounts = await this.prisma.account.findMany({
            where: {
                id: { in: accountIds },
                companyId: tenantId,
            },
        });
        if (accounts.length !== accountIds.length) {
            throw new common_1.NotFoundException('One or more accounts not found');
        }
        const count = await this.prisma.journalEntry.count({
            where: { companyId: tenantId },
        });
        const entryNumber = `JE-${String(count + 1).padStart(6, '0')}`;
        return this.prisma.journalEntry.create({
            data: {
                companyId: tenantId,
                entryNumber,
                date: createDto.date,
                reference: createDto.reference,
                description: createDto.description,
                createdBy: userId,
                lines: {
                    create: createDto.lines,
                },
            },
            include: {
                lines: {
                    include: {
                        account: true,
                    },
                },
                creator: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 50;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.status) {
            where.status = options.status;
        }
        if (options.startDate || options.endDate) {
            where.date = {};
            if (options.startDate)
                where.date.gte = new Date(options.startDate);
            if (options.endDate)
                where.date.lte = new Date(options.endDate);
        }
        const [entries, total] = await Promise.all([
            this.prisma.journalEntry.findMany({
                where,
                skip,
                take: limit,
                include: {
                    creator: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    },
                    _count: {
                        select: {
                            lines: true,
                        },
                    },
                },
                orderBy: { date: 'desc' },
            }),
            this.prisma.journalEntry.count({ where }),
        ]);
        return {
            data: entries,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(tenantId, id) {
        const entry = await this.prisma.journalEntry.findFirst({
            where: { id, companyId: tenantId },
            include: {
                lines: {
                    include: {
                        account: true,
                    },
                },
                creator: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
            },
        });
        if (!entry) {
            throw new common_1.NotFoundException('Journal entry not found');
        }
        return entry;
    }
    async post(tenantId, id) {
        const entry = await this.findOne(tenantId, id);
        if (entry.status !== 'DRAFT') {
            throw new common_1.BadRequestException('Only draft entries can be posted');
        }
        const posted = await this.prisma.journalEntry.update({
            where: { id },
            data: {
                status: client_1.JournalEntryStatus.POSTED,
                postedAt: new Date(),
            },
            include: {
                lines: {
                    include: {
                        account: true,
                    },
                },
            },
        });
        for (const line of posted.lines) {
            const balanceChange = line.debit.toNumber() - line.credit.toNumber();
            await this.prisma.account.update({
                where: { id: line.accountId },
                data: {
                    balance: {
                        increment: balanceChange,
                    },
                },
            });
        }
        return posted;
    }
    async cancel(tenantId, id) {
        const entry = await this.findOne(tenantId, id);
        if (entry.status === 'CANCELLED') {
            throw new common_1.BadRequestException('Entry is already cancelled');
        }
        if (entry.status === 'POSTED') {
            for (const line of entry.lines) {
                const balanceChange = line.debit.toNumber() - line.credit.toNumber();
                await this.prisma.account.update({
                    where: { id: line.accountId },
                    data: {
                        balance: {
                            decrement: balanceChange,
                        },
                    },
                });
            }
        }
        return this.prisma.journalEntry.update({
            where: { id },
            data: { status: client_1.JournalEntryStatus.CANCELLED },
        });
    }
};
exports.JournalEntriesService = JournalEntriesService;
exports.JournalEntriesService = JournalEntriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], JournalEntriesService);


/***/ }),

/***/ "./src/modules/accounting/services/reports.service.ts":
/*!************************************************************!*\
  !*** ./src/modules/accounting/services/reports.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.ReportsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let ReportsService = class ReportsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getBalanceSheet(tenantId, date) {
        const asOfDate = date ? new Date(date) : new Date();
        const accounts = await this.prisma.account.findMany({
            where: { companyId: tenantId, isActive: true },
            include: {
                journalLines: {
                    where: {
                        entry: {
                            status: 'POSTED',
                            date: { lte: asOfDate },
                        },
                    },
                },
            },
        });
        const assets = accounts.filter((a) => a.type === 'ASSET');
        const liabilities = accounts.filter((a) => a.type === 'LIABILITY');
        const equity = accounts.filter((a) => a.type === 'EQUITY');
        const calculateBalance = (account) => {
            return account.journalLines.reduce((sum, line) => sum + (line.debit.toNumber() - line.credit.toNumber()), 0);
        };
        const totalAssets = assets.reduce((sum, a) => sum + calculateBalance(a), 0);
        const totalLiabilities = liabilities.reduce((sum, a) => sum + Math.abs(calculateBalance(a)), 0);
        const totalEquity = equity.reduce((sum, a) => sum + Math.abs(calculateBalance(a)), 0);
        return {
            asOfDate,
            assets: {
                accounts: assets.map((a) => ({
                    code: a.code,
                    name: a.name,
                    balance: calculateBalance(a),
                })),
                total: totalAssets,
            },
            liabilities: {
                accounts: liabilities.map((a) => ({
                    code: a.code,
                    name: a.name,
                    balance: Math.abs(calculateBalance(a)),
                })),
                total: totalLiabilities,
            },
            equity: {
                accounts: equity.map((a) => ({
                    code: a.code,
                    name: a.name,
                    balance: Math.abs(calculateBalance(a)),
                })),
                total: totalEquity,
            },
            balanceCheck: totalAssets - (totalLiabilities + totalEquity),
        };
    }
    async getIncomeStatement(tenantId, startDate, endDate) {
        const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), 0, 1);
        const end = endDate ? new Date(endDate) : new Date();
        const accounts = await this.prisma.account.findMany({
            where: {
                companyId: tenantId,
                type: { in: ['INCOME', 'EXPENSE'] },
                isActive: true,
            },
            include: {
                journalLines: {
                    where: {
                        entry: {
                            status: 'POSTED',
                            date: { gte: start, lte: end },
                        },
                    },
                },
            },
        });
        const income = accounts.filter((a) => a.type === 'INCOME');
        const expenses = accounts.filter((a) => a.type === 'EXPENSE');
        const calculateBalance = (account) => {
            return account.journalLines.reduce((sum, line) => sum + (line.credit.toNumber() - line.debit.toNumber()), 0);
        };
        const totalIncome = income.reduce((sum, a) => sum + calculateBalance(a), 0);
        const totalExpenses = expenses.reduce((sum, a) => sum + Math.abs(calculateBalance(a)), 0);
        const netIncome = totalIncome - totalExpenses;
        return {
            period: { start, end },
            income: {
                accounts: income.map((a) => ({
                    code: a.code,
                    name: a.name,
                    amount: calculateBalance(a),
                })),
                total: totalIncome,
            },
            expenses: {
                accounts: expenses.map((a) => ({
                    code: a.code,
                    name: a.name,
                    amount: Math.abs(calculateBalance(a)),
                })),
                total: totalExpenses,
            },
            netIncome,
        };
    }
    async getTrialBalance(tenantId, startDate, endDate) {
        const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), 0, 1);
        const end = endDate ? new Date(endDate) : new Date();
        const accounts = await this.prisma.account.findMany({
            where: { companyId: tenantId, isActive: true },
            include: {
                journalLines: {
                    where: {
                        entry: {
                            status: 'POSTED',
                            date: { gte: start, lte: end },
                        },
                    },
                },
            },
            orderBy: { code: 'asc' },
        });
        let totalDebit = 0;
        let totalCredit = 0;
        const balances = accounts.map((account) => {
            const debit = account.journalLines.reduce((sum, line) => sum + line.debit.toNumber(), 0);
            const credit = account.journalLines.reduce((sum, line) => sum + line.credit.toNumber(), 0);
            totalDebit += debit;
            totalCredit += credit;
            return {
                code: account.code,
                name: account.name,
                type: account.type,
                debit,
                credit,
                balance: debit - credit,
            };
        });
        return {
            period: { start, end },
            accounts: balances,
            totals: {
                debit: totalDebit,
                credit: totalCredit,
                difference: totalDebit - totalCredit,
            },
        };
    }
    async getGeneralLedger(tenantId, accountId, startDate, endDate) {
        const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), 0, 1);
        const end = endDate ? new Date(endDate) : new Date();
        const account = await this.prisma.account.findFirst({
            where: { id: accountId, companyId: tenantId },
        });
        if (!account) {
            throw new common_1.NotFoundException('Account not found');
        }
        const lines = await this.prisma.journalLine.findMany({
            where: {
                accountId,
                entry: {
                    companyId: tenantId,
                    status: 'POSTED',
                    date: { gte: start, lte: end },
                },
            },
            include: {
                entry: true,
            },
            orderBy: { entry: { date: 'asc' } },
        });
        let runningBalance = 0;
        const transactions = lines.map((line) => {
            const debit = line.debit.toNumber();
            const credit = line.credit.toNumber();
            runningBalance += debit - credit;
            return {
                date: line.entry.date,
                reference: line.entry.reference,
                description: line.description || line.entry.description,
                debit,
                credit,
                balance: runningBalance,
            };
        });
        return {
            account: {
                code: account.code,
                name: account.name,
                type: account.type,
            },
            period: { start, end },
            transactions,
            summary: {
                openingBalance: 0,
                totalDebit: lines.reduce((sum, l) => sum + l.debit.toNumber(), 0),
                totalCredit: lines.reduce((sum, l) => sum + l.credit.toNumber(), 0),
                closingBalance: runningBalance,
            },
        };
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ReportsService);


/***/ }),

/***/ "./src/modules/audit/audit.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/audit/audit.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const audit_service_1 = __webpack_require__(/*! ./audit.service */ "./src/modules/audit/audit.service.ts");
let AuditController = class AuditController {
    constructor(auditService) {
        this.auditService = auditService;
    }
    findAll(tenantId, userId, entity, action, startDate, endDate, page, limit) {
        return this.auditService.findAll(tenantId, {
            userId,
            entity,
            action,
            startDate,
            endDate,
            page,
            limit,
        });
    }
    getEntityHistory(tenantId, entity, entityId) {
        return this.auditService.getEntityHistory(tenantId, entity, entityId);
    }
    getUserActivity(tenantId, userId, days) {
        return this.auditService.getUserActivity(tenantId, userId, Number(days) || 30);
    }
    getSummary(tenantId, days) {
        return this.auditService.getActivitySummary(tenantId, Number(days) || 7);
    }
};
exports.AuditController = AuditController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all audit logs' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('userId')),
    __param(2, (0, common_1.Query)('entity')),
    __param(3, (0, common_1.Query)('action')),
    __param(4, (0, common_1.Query)('startDate')),
    __param(5, (0, common_1.Query)('endDate')),
    __param(6, (0, common_1.Query)('page')),
    __param(7, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], AuditController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('entity/:entity/:entityId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get entity history' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('entity')),
    __param(2, (0, common_1.Param)('entityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AuditController.prototype, "getEntityHistory", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user activity' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Query)('days')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], AuditController.prototype, "getUserActivity", null);
__decorate([
    (0, common_1.Get)('summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get activity summary' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('days')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], AuditController.prototype, "getSummary", null);
exports.AuditController = AuditController = __decorate([
    (0, swagger_1.ApiTags)('audit'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('audit'),
    __metadata("design:paramtypes", [typeof (_a = typeof audit_service_1.AuditService !== "undefined" && audit_service_1.AuditService) === "function" ? _a : Object])
], AuditController);


/***/ }),

/***/ "./src/modules/audit/audit.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/audit/audit.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const audit_controller_1 = __webpack_require__(/*! ./audit.controller */ "./src/modules/audit/audit.controller.ts");
const audit_service_1 = __webpack_require__(/*! ./audit.service */ "./src/modules/audit/audit.service.ts");
let AuditModule = class AuditModule {
};
exports.AuditModule = AuditModule;
exports.AuditModule = AuditModule = __decorate([
    (0, common_1.Module)({
        controllers: [audit_controller_1.AuditController],
        providers: [audit_service_1.AuditService],
        exports: [audit_service_1.AuditService],
    })
], AuditModule);


/***/ }),

/***/ "./src/modules/audit/audit.service.ts":
/*!********************************************!*\
  !*** ./src/modules/audit/audit.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.AuditService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let AuditService = class AuditService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async log(tenantId, userId, action, entity, entityId, changes = null, ipAddress, userAgent) {
        return this.prisma.auditLog.create({
            data: {
                companyId: tenantId,
                userId,
                action,
                entity,
                entityId,
                changes,
                ipAddress,
                userAgent,
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 50;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.userId) {
            where.userId = options.userId;
        }
        if (options.entity) {
            where.entity = options.entity;
        }
        if (options.action) {
            where.action = { contains: options.action, mode: 'insensitive' };
        }
        if (options.startDate || options.endDate) {
            where.createdAt = {};
            if (options.startDate)
                where.createdAt.gte = new Date(options.startDate);
            if (options.endDate)
                where.createdAt.lte = new Date(options.endDate);
        }
        const [logs, total] = await Promise.all([
            this.prisma.auditLog.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.auditLog.count({ where }),
        ]);
        return {
            data: logs,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async getEntityHistory(tenantId, entity, entityId) {
        return this.prisma.auditLog.findMany({
            where: {
                companyId: tenantId,
                entity,
                entityId,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getUserActivity(tenantId, userId, days = 30) {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        return this.prisma.auditLog.findMany({
            where: {
                companyId: tenantId,
                userId,
                createdAt: { gte: startDate },
            },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }
    async getActivitySummary(tenantId, days = 7) {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const logs = await this.prisma.auditLog.findMany({
            where: {
                companyId: tenantId,
                createdAt: { gte: startDate },
            },
        });
        const summary = {
            totalActions: logs.length,
            byEntity: {},
            byAction: {},
            byUser: {},
        };
        logs.forEach((log) => {
            summary.byEntity[log.entity] = (summary.byEntity[log.entity] || 0) + 1;
            summary.byAction[log.action] = (summary.byAction[log.action] || 0) + 1;
            if (log.userId) {
                summary.byUser[log.userId] = (summary.byUser[log.userId] || 0) + 1;
            }
        });
        return summary;
    }
};
exports.AuditService = AuditService;
exports.AuditService = AuditService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], AuditService);


/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const dto_1 = __webpack_require__(/*! ./dto */ "./src/modules/auth/dto/index.ts");
const public_decorator_1 = __webpack_require__(/*! ../../common/decorators/public.decorator */ "./src/common/decorators/public.decorator.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../../common/decorators/current-user.decorator */ "./src/common/decorators/current-user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(dto) {
        return this.authService.register(dto);
    }
    async login(dto) {
        return this.authService.login(dto);
    }
    async refresh(dto) {
        return { message: 'Refresh token endpoint - implement token validation' };
    }
    async logout(userId) {
        return this.authService.logout(userId);
    }
    async getMe(user) {
        return { data: user };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.RegisterDto !== "undefined" && dto_1.RegisterDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login user' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.LoginDto !== "undefined" && dto_1.LoginDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh access token' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.RefreshTokenDto !== "undefined" && dto_1.RefreshTokenDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Logout user' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getMe", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    async validateUser(email, password, tenantId) {
        const user = await this.prisma.user.findFirst({
            where: {
                email,
                companyId: tenantId,
                isActive: true,
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
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return null;
        }
        return user;
    }
    async register(registerDto) {
        const existingCompany = await this.prisma.company.findUnique({
            where: { email: registerDto.companyName },
        });
        if (existingCompany) {
            throw new common_1.ConflictException('Company email already registered');
        }
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const result = await this.prisma.$transaction(async (prisma) => {
            const company = await prisma.company.create({
                data: {
                    name: registerDto.companyName,
                    email: registerDto.companyName,
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

/***/ "./src/modules/auth/dto/index.ts":
/*!***************************************!*\
  !*** ./src/modules/auth/dto/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./register.dto */ "./src/modules/auth/dto/register.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./login.dto */ "./src/modules/auth/dto/login.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./refresh-token.dto */ "./src/modules/auth/dto/refresh-token.dto.ts"), exports);


/***/ }),

/***/ "./src/modules/auth/dto/login.dto.ts":
/*!*******************************************!*\
  !*** ./src/modules/auth/dto/login.dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/modules/auth/dto/refresh-token.dto.ts":
/*!***************************************************!*\
  !*** ./src/modules/auth/dto/refresh-token.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);


/***/ }),

/***/ "./src/modules/auth/dto/register.dto.ts":
/*!**********************************************!*\
  !*** ./src/modules/auth/dto/register.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "companyPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "kraPin", void 0);


/***/ }),

/***/ "./src/modules/auth/strategies/jwt.strategy.ts":
/*!*****************************************************!*\
  !*** ./src/modules/auth/strategies/jwt.strategy.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(config, prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET'),
            ignoreExpiration: false,
        });
        this.config = config;
        this.prisma = prisma;
    }
    async validate(payload) {
        const user = await this.prisma.user.findUnique({
            where: { id: payload.sub },
            include: {
                roles: {
                    include: {
                        role: true,
                    },
                },
                company: {
                    select: {
                        id: true,
                        name: true,
                        isActive: true,
                    },
                },
            },
        });
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException('User not found or inactive');
        }
        if (!user.company.isActive) {
            throw new common_1.UnauthorizedException('Company is inactive');
        }
        const permissions = [];
        if (user.roles && user.roles.length > 0) {
        }
        const { password, refreshToken, ...sanitizedUser } = user;
        return {
            ...sanitizedUser,
            roleNames: user.roles.map(userRole => userRole.role.name),
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

/***/ "./src/modules/hr/controllers/employees.controller.ts":
/*!************************************************************!*\
  !*** ./src/modules/hr/controllers/employees.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmployeesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const employees_service_1 = __webpack_require__(/*! ../services/employees.service */ "./src/modules/hr/services/employees.service.ts");
const create_employee_dto_1 = __webpack_require__(/*! ../dto/create-employee.dto */ "./src/modules/hr/dto/create-employee.dto.ts");
let EmployeesController = class EmployeesController {
    constructor(employeesService) {
        this.employeesService = employeesService;
    }
    create(tenantId, createDto) {
        return this.employeesService.create(tenantId, createDto);
    }
    findAll(tenantId, search, department, isActive, page, limit) {
        return this.employeesService.findAll(tenantId, {
            search,
            department,
            isActive,
            page,
            limit,
        });
    }
    getDepartments(tenantId) {
        return this.employeesService.getDepartments(tenantId);
    }
    getStats(tenantId) {
        return this.employeesService.getEmployeeStats(tenantId);
    }
    findOne(tenantId, id) {
        return this.employeesService.findOne(tenantId, id);
    }
    update(tenantId, id, updateDto) {
        return this.employeesService.update(tenantId, id, updateDto);
    }
    remove(tenantId, id) {
        return this.employeesService.remove(tenantId, id);
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new employee' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_employee_dto_1.CreateEmployeeDto !== "undefined" && create_employee_dto_1.CreateEmployeeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all employees' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('department')),
    __param(3, (0, common_1.Query)('isActive')),
    __param(4, (0, common_1.Query)('page')),
    __param(5, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('departments'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all departments' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "getDepartments", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get employee statistics' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get employee by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update employee' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof create_employee_dto_1.UpdateEmployeeDto !== "undefined" && create_employee_dto_1.UpdateEmployeeDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete employee' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "remove", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, swagger_1.ApiTags)('hr'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('hr/employees'),
    __metadata("design:paramtypes", [typeof (_a = typeof employees_service_1.EmployeesService !== "undefined" && employees_service_1.EmployeesService) === "function" ? _a : Object])
], EmployeesController);


/***/ }),

/***/ "./src/modules/hr/controllers/leave.controller.ts":
/*!********************************************************!*\
  !*** ./src/modules/hr/controllers/leave.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeaveController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const leave_service_1 = __webpack_require__(/*! ../services/leave.service */ "./src/modules/hr/services/leave.service.ts");
const create_leave_dto_1 = __webpack_require__(/*! ../dto/create-leave.dto */ "./src/modules/hr/dto/create-leave.dto.ts");
let LeaveController = class LeaveController {
    constructor(leaveService) {
        this.leaveService = leaveService;
    }
    create(tenantId, createDto) {
        return this.leaveService.create(tenantId, createDto);
    }
    findAll(tenantId, employeeId, status, type, page, limit) {
        return this.leaveService.findAll(tenantId, {
            employeeId,
            status,
            type,
            page,
            limit,
        });
    }
    getBalance(tenantId, employeeId, year) {
        return this.leaveService.getLeaveBalance(tenantId, employeeId, Number(year));
    }
    getSummary(tenantId, year) {
        return this.leaveService.getLeaveSummary(tenantId, Number(year));
    }
    findOne(id) {
        return this.leaveService.findOne(id);
    }
    approve(id) {
        return this.leaveService.approve(id);
    }
    reject(id) {
        return this.leaveService.reject(id);
    }
};
exports.LeaveController = LeaveController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a leave request' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_leave_dto_1.CreateLeaveDto !== "undefined" && create_leave_dto_1.CreateLeaveDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], LeaveController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all leave records' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('employeeId')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('type')),
    __param(4, (0, common_1.Query)('page')),
    __param(5, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], LeaveController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('balance/:employeeId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get leave balance for an employee' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('employeeId')),
    __param(2, (0, common_1.Query)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], LeaveController.prototype, "getBalance", null);
__decorate([
    (0, common_1.Get)('summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get leave summary' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], LeaveController.prototype, "getSummary", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get leave record by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeaveController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/approve'),
    (0, swagger_1.ApiOperation)({ summary: 'Approve leave request' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeaveController.prototype, "approve", null);
__decorate([
    (0, common_1.Put)(':id/reject'),
    (0, swagger_1.ApiOperation)({ summary: 'Reject leave request' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeaveController.prototype, "reject", null);
exports.LeaveController = LeaveController = __decorate([
    (0, swagger_1.ApiTags)('hr'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('hr/leave'),
    __metadata("design:paramtypes", [typeof (_a = typeof leave_service_1.LeaveService !== "undefined" && leave_service_1.LeaveService) === "function" ? _a : Object])
], LeaveController);


/***/ }),

/***/ "./src/modules/hr/controllers/payroll.controller.ts":
/*!**********************************************************!*\
  !*** ./src/modules/hr/controllers/payroll.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayrollController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const payroll_service_1 = __webpack_require__(/*! ../services/payroll.service */ "./src/modules/hr/services/payroll.service.ts");
const process_payroll_dto_1 = __webpack_require__(/*! ../dto/process-payroll.dto */ "./src/modules/hr/dto/process-payroll.dto.ts");
let PayrollController = class PayrollController {
    constructor(payrollService) {
        this.payrollService = payrollService;
    }
    processPayroll(tenantId, processDto) {
        return this.payrollService.processPayroll(tenantId, processDto);
    }
    bulkProcess(tenantId, bulkDto) {
        return this.payrollService.bulkProcessPayroll(tenantId, bulkDto.periodStart, bulkDto.periodEnd, bulkDto.employeeIds);
    }
    findAll(tenantId, employeeId, status, periodStart, periodEnd, page, limit) {
        return this.payrollService.findAll(tenantId, {
            employeeId,
            status,
            periodStart,
            periodEnd,
            page,
            limit,
        });
    }
    getSummary(tenantId, periodStart, periodEnd) {
        return this.payrollService.getPayrollSummary(tenantId, new Date(periodStart), new Date(periodEnd));
    }
    findOne(id) {
        return this.payrollService.findOne(id);
    }
    approve(id) {
        return this.payrollService.approve(id);
    }
    pay(id) {
        return this.payrollService.pay(id);
    }
};
exports.PayrollController = PayrollController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Process payroll for an employee' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof process_payroll_dto_1.ProcessPayrollDto !== "undefined" && process_payroll_dto_1.ProcessPayrollDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "processPayroll", null);
__decorate([
    (0, common_1.Post)('bulk'),
    (0, swagger_1.ApiOperation)({ summary: 'Process payroll for multiple employees' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof process_payroll_dto_1.BulkProcessPayrollDto !== "undefined" && process_payroll_dto_1.BulkProcessPayrollDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "bulkProcess", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all payroll records' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('employeeId')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('periodStart')),
    __param(4, (0, common_1.Query)('periodEnd')),
    __param(5, (0, common_1.Query)('page')),
    __param(6, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payroll summary for a period' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('periodStart')),
    __param(2, (0, common_1.Query)('periodEnd')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "getSummary", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payroll record by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/approve'),
    (0, swagger_1.ApiOperation)({ summary: 'Approve payroll' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "approve", null);
__decorate([
    (0, common_1.Put)(':id/pay'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark payroll as paid' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "pay", null);
exports.PayrollController = PayrollController = __decorate([
    (0, swagger_1.ApiTags)('hr'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('hr/payroll'),
    __metadata("design:paramtypes", [typeof (_a = typeof payroll_service_1.PayrollService !== "undefined" && payroll_service_1.PayrollService) === "function" ? _a : Object])
], PayrollController);


/***/ }),

/***/ "./src/modules/hr/dto/create-employee.dto.ts":
/*!***************************************************!*\
  !*** ./src/modules/hr/dto/create-employee.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.UpdateEmployeeDto = exports.CreateEmployeeDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateEmployeeDto {
}
exports.CreateEmployeeDto = CreateEmployeeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "employeeNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "kraPin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "nssf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "nhif", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEmployeeDto.prototype, "salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateEmployeeDto.prototype, "hireDate", void 0);
class UpdateEmployeeDto {
}
exports.UpdateEmployeeDto = UpdateEmployeeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmployeeDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmployeeDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateEmployeeDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmployeeDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmployeeDto.prototype, "kraPin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmployeeDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmployeeDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateEmployeeDto.prototype, "salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpdateEmployeeDto.prototype, "hireDate", void 0);


/***/ }),

/***/ "./src/modules/hr/dto/create-leave.dto.ts":
/*!************************************************!*\
  !*** ./src/modules/hr/dto/create-leave.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateLeaveDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateLeaveDto {
}
exports.CreateLeaveDto = CreateLeaveDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.LeaveType }),
    (0, class_validator_1.IsEnum)(client_1.LeaveType),
    __metadata("design:type", typeof (_a = typeof client_1.LeaveType !== "undefined" && client_1.LeaveType) === "function" ? _a : Object)
], CreateLeaveDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateLeaveDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateLeaveDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLeaveDto.prototype, "reason", void 0);


/***/ }),

/***/ "./src/modules/hr/dto/process-payroll.dto.ts":
/*!***************************************************!*\
  !*** ./src/modules/hr/dto/process-payroll.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BulkProcessPayrollDto = exports.ProcessPayrollDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class ProcessPayrollDto {
}
exports.ProcessPayrollDto = ProcessPayrollDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ProcessPayrollDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ProcessPayrollDto.prototype, "periodStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ProcessPayrollDto.prototype, "periodEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProcessPayrollDto.prototype, "allowances", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProcessPayrollDto.prototype, "otherDeductions", void 0);
class BulkProcessPayrollDto {
}
exports.BulkProcessPayrollDto = BulkProcessPayrollDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], BulkProcessPayrollDto.prototype, "periodStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], BulkProcessPayrollDto.prototype, "periodEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: [String] }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], BulkProcessPayrollDto.prototype, "employeeIds", void 0);


/***/ }),

/***/ "./src/modules/hr/hr.module.ts":
/*!*************************************!*\
  !*** ./src/modules/hr/hr.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HrModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const employees_controller_1 = __webpack_require__(/*! ./controllers/employees.controller */ "./src/modules/hr/controllers/employees.controller.ts");
const payroll_controller_1 = __webpack_require__(/*! ./controllers/payroll.controller */ "./src/modules/hr/controllers/payroll.controller.ts");
const leave_controller_1 = __webpack_require__(/*! ./controllers/leave.controller */ "./src/modules/hr/controllers/leave.controller.ts");
const employees_service_1 = __webpack_require__(/*! ./services/employees.service */ "./src/modules/hr/services/employees.service.ts");
const payroll_service_1 = __webpack_require__(/*! ./services/payroll.service */ "./src/modules/hr/services/payroll.service.ts");
const leave_service_1 = __webpack_require__(/*! ./services/leave.service */ "./src/modules/hr/services/leave.service.ts");
let HrModule = class HrModule {
};
exports.HrModule = HrModule;
exports.HrModule = HrModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            employees_controller_1.EmployeesController,
            payroll_controller_1.PayrollController,
            leave_controller_1.LeaveController,
        ],
        providers: [
            employees_service_1.EmployeesService,
            payroll_service_1.PayrollService,
            leave_service_1.LeaveService,
        ],
        exports: [
            employees_service_1.EmployeesService,
            payroll_service_1.PayrollService,
            leave_service_1.LeaveService,
        ],
    })
], HrModule);


/***/ }),

/***/ "./src/modules/hr/services/employees.service.ts":
/*!******************************************************!*\
  !*** ./src/modules/hr/services/employees.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.EmployeesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let EmployeesService = class EmployeesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const existing = await this.prisma.employee.findUnique({
            where: {
                companyId_employeeNo: {
                    companyId: tenantId,
                    employeeNo: createDto.employeeNo,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Employee number already exists');
        }
        if (createDto.kraPin && !this.isValidKraPin(createDto.kraPin)) {
            throw new common_1.ConflictException('Invalid KRA PIN format');
        }
        return this.prisma.employee.create({
            data: {
                companyId: tenantId,
                ...createDto,
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.search) {
            where.OR = [
                { firstName: { contains: options.search, mode: 'insensitive' } },
                { lastName: { contains: options.search, mode: 'insensitive' } },
                { employeeNo: { contains: options.search, mode: 'insensitive' } },
                { email: { contains: options.search, mode: 'insensitive' } },
            ];
        }
        if (options.department) {
            where.department = options.department;
        }
        if (options.isActive !== undefined) {
            where.isActive = options.isActive === 'true';
        }
        const [employees, total] = await Promise.all([
            this.prisma.employee.findMany({
                where,
                skip,
                take: limit,
                orderBy: { employeeNo: 'asc' },
            }),
            this.prisma.employee.count({ where }),
        ]);
        return {
            data: employees,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(tenantId, id) {
        const employee = await this.prisma.employee.findFirst({
            where: { id, companyId: tenantId },
            include: {
                payrollRuns: {
                    orderBy: { periodEnd: 'desc' },
                    take: 12,
                },
                leaveRecords: {
                    orderBy: { createdAt: 'desc' },
                    take: 10,
                },
            },
        });
        if (!employee) {
            throw new common_1.NotFoundException('Employee not found');
        }
        return employee;
    }
    async update(tenantId, id, updateDto) {
        await this.findOne(tenantId, id);
        if (updateDto.kraPin && !this.isValidKraPin(updateDto.kraPin)) {
            throw new common_1.ConflictException('Invalid KRA PIN format');
        }
        return this.prisma.employee.update({
            where: { id },
            data: updateDto,
        });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        const hasPayroll = await this.prisma.payrollRun.count({
            where: { employeeId: id },
        });
        if (hasPayroll > 0) {
            return this.prisma.employee.update({
                where: { id },
                data: { isActive: false },
            });
        }
        return this.prisma.employee.delete({ where: { id } });
    }
    async getDepartments(tenantId) {
        const departments = await this.prisma.employee.findMany({
            where: {
                companyId: tenantId,
                department: { not: null },
                isActive: true,
            },
            select: {
                department: true,
            },
            distinct: ['department'],
        });
        return departments
            .map((d) => d.department)
            .filter(Boolean)
            .sort();
    }
    async getEmployeeStats(tenantId) {
        const [total, active, byDepartment] = await Promise.all([
            this.prisma.employee.count({
                where: { companyId: tenantId },
            }),
            this.prisma.employee.count({
                where: { companyId: tenantId, isActive: true },
            }),
            this.prisma.employee.groupBy({
                by: ['department'],
                where: {
                    companyId: tenantId,
                    isActive: true,
                    department: { not: null },
                },
                _count: true,
            }),
        ]);
        return {
            total,
            active,
            inactive: total - active,
            byDepartment: byDepartment.map((d) => ({
                department: d.department,
                count: d._count,
            })),
        };
    }
    isValidKraPin(pin) {
        const kraPattern = /^[A-Z]\d{9}[A-Z]$/;
        return kraPattern.test(pin);
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], EmployeesService);


/***/ }),

/***/ "./src/modules/hr/services/leave.service.ts":
/*!**************************************************!*\
  !*** ./src/modules/hr/services/leave.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.LeaveService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let LeaveService = class LeaveService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const employee = await this.prisma.employee.findFirst({
            where: {
                id: createDto.employeeId,
                companyId: tenantId,
                isActive: true,
            },
        });
        if (!employee) {
            throw new common_1.NotFoundException('Employee not found');
        }
        if (createDto.endDate <= createDto.startDate) {
            throw new common_1.BadRequestException('End date must be after start date');
        }
        const days = this.calculateWorkingDays(createDto.startDate, createDto.endDate);
        const overlapping = await this.prisma.leaveRecord.findFirst({
            where: {
                employeeId: createDto.employeeId,
                status: { in: [client_1.LeaveStatus.PENDING, client_1.LeaveStatus.APPROVED] },
                OR: [
                    {
                        startDate: { lte: createDto.endDate },
                        endDate: { gte: createDto.startDate },
                    },
                ],
            },
        });
        if (overlapping) {
            throw new common_1.BadRequestException('Employee has overlapping leave request');
        }
        return this.prisma.leaveRecord.create({
            data: {
                employeeId: createDto.employeeId,
                type: createDto.type,
                startDate: createDto.startDate,
                endDate: createDto.endDate,
                days,
                reason: createDto.reason,
                status: client_1.LeaveStatus.PENDING,
            },
            include: {
                employee: true,
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = {
            employee: {
                companyId: tenantId,
            },
        };
        if (options.employeeId) {
            where.employeeId = options.employeeId;
        }
        if (options.status) {
            where.status = options.status;
        }
        if (options.type) {
            where.type = options.type;
        }
        const [leaves, total] = await Promise.all([
            this.prisma.leaveRecord.findMany({
                where,
                skip,
                take: limit,
                include: {
                    employee: true,
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.leaveRecord.count({ where }),
        ]);
        return {
            data: leaves,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(id) {
        const leave = await this.prisma.leaveRecord.findUnique({
            where: { id },
            include: {
                employee: true,
            },
        });
        if (!leave) {
            throw new common_1.NotFoundException('Leave record not found');
        }
        return leave;
    }
    async approve(id) {
        const leave = await this.findOne(id);
        if (leave.status !== client_1.LeaveStatus.PENDING) {
            throw new common_1.BadRequestException('Only pending leave can be approved');
        }
        return this.prisma.leaveRecord.update({
            where: { id },
            data: { status: client_1.LeaveStatus.APPROVED },
        });
    }
    async reject(id) {
        const leave = await this.findOne(id);
        if (leave.status !== client_1.LeaveStatus.PENDING) {
            throw new common_1.BadRequestException('Only pending leave can be rejected');
        }
        return this.prisma.leaveRecord.update({
            where: { id },
            data: { status: client_1.LeaveStatus.REJECTED },
        });
    }
    async getLeaveBalance(tenantId, employeeId, year) {
        const employee = await this.prisma.employee.findFirst({
            where: { id: employeeId, companyId: tenantId },
        });
        if (!employee) {
            throw new common_1.NotFoundException('Employee not found');
        }
        const annualLeaveEntitlement = 21;
        const startOfYear = new Date(year, 0, 1);
        const endOfYear = new Date(year, 11, 31);
        const approvedLeaves = await this.prisma.leaveRecord.findMany({
            where: {
                employeeId,
                status: client_1.LeaveStatus.APPROVED,
                startDate: { gte: startOfYear },
                endDate: { lte: endOfYear },
            },
        });
        const takenByType = approvedLeaves.reduce((acc, leave) => {
            acc[leave.type] = (acc[leave.type] || 0) + leave.days;
            return acc;
        }, {});
        return {
            employeeId,
            year,
            annualLeaveEntitlement,
            taken: takenByType,
            totalTaken: approvedLeaves.reduce((sum, leave) => sum + leave.days, 0),
            remaining: annualLeaveEntitlement - (takenByType.ANNUAL || 0),
        };
    }
    async getLeaveSummary(tenantId, year) {
        const startOfYear = new Date(year, 0, 1);
        const endOfYear = new Date(year, 11, 31);
        const leaves = await this.prisma.leaveRecord.findMany({
            where: {
                employee: {
                    companyId: tenantId,
                },
                startDate: { gte: startOfYear },
                endDate: { lte: endOfYear },
            },
            include: {
                employee: true,
            },
        });
        const summary = {
            totalRequests: leaves.length,
            byStatus: {
                pending: 0,
                approved: 0,
                rejected: 0,
            },
            byType: {
                ANNUAL: 0,
                SICK: 0,
                MATERNITY: 0,
                PATERNITY: 0,
                UNPAID: 0,
            },
            totalDays: 0,
        };
        leaves.forEach((leave) => {
            summary.byStatus[leave.status.toLowerCase()] += 1;
            summary.byType[leave.type] = (summary.byType[leave.type] || 0) + leave.days;
            if (leave.status === client_1.LeaveStatus.APPROVED) {
                summary.totalDays += leave.days;
            }
        });
        return summary;
    }
    calculateWorkingDays(startDate, endDate) {
        let days = 0;
        const current = new Date(startDate);
        while (current <= endDate) {
            const dayOfWeek = current.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                days++;
            }
            current.setDate(current.getDate() + 1);
        }
        return days;
    }
};
exports.LeaveService = LeaveService;
exports.LeaveService = LeaveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], LeaveService);


/***/ }),

/***/ "./src/modules/hr/services/payroll.service.ts":
/*!****************************************************!*\
  !*** ./src/modules/hr/services/payroll.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.PayrollService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PayrollService = class PayrollService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async processPayroll(tenantId, processDto) {
        const employee = await this.prisma.employee.findFirst({
            where: {
                id: processDto.employeeId,
                companyId: tenantId,
                isActive: true,
            },
        });
        if (!employee) {
            throw new common_1.NotFoundException('Employee not found or inactive');
        }
        const existing = await this.prisma.payrollRun.findFirst({
            where: {
                employeeId: processDto.employeeId,
                periodStart: processDto.periodStart,
                periodEnd: processDto.periodEnd,
            },
        });
        if (existing) {
            throw new common_1.BadRequestException('Payroll already processed for this period');
        }
        const basicSalary = employee.salary.toNumber();
        const allowances = processDto.allowances || 0;
        const grossPay = basicSalary + allowances;
        const paye = this.calculatePAYE(grossPay);
        const nhif = this.calculateNHIF(grossPay);
        const nssf = this.calculateNSSF(grossPay);
        const totalDeductions = paye + nhif + nssf + (processDto.otherDeductions || 0);
        const netPay = grossPay - totalDeductions;
        return this.prisma.payrollRun.create({
            data: {
                employeeId: processDto.employeeId,
                periodStart: processDto.periodStart,
                periodEnd: processDto.periodEnd,
                basicSalary,
                allowances,
                grossPay,
                paye,
                nhif,
                nssf,
                deductions: processDto.otherDeductions || 0,
                netPay,
                status: client_1.PayrollStatus.DRAFT,
            },
            include: {
                employee: true,
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = {
            employee: {
                companyId: tenantId,
            },
        };
        if (options.employeeId) {
            where.employeeId = options.employeeId;
        }
        if (options.status) {
            where.status = options.status;
        }
        if (options.periodStart || options.periodEnd) {
            where.periodStart = {};
            if (options.periodStart)
                where.periodStart.gte = new Date(options.periodStart);
            if (options.periodEnd)
                where.periodEnd = { lte: new Date(options.periodEnd) };
        }
        const [payrolls, total] = await Promise.all([
            this.prisma.payrollRun.findMany({
                where,
                skip,
                take: limit,
                include: {
                    employee: true,
                },
                orderBy: { periodEnd: 'desc' },
            }),
            this.prisma.payrollRun.count({ where }),
        ]);
        return {
            data: payrolls,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(id) {
        const payroll = await this.prisma.payrollRun.findUnique({
            where: { id },
            include: {
                employee: true,
            },
        });
        if (!payroll) {
            throw new common_1.NotFoundException('Payroll record not found');
        }
        return payroll;
    }
    async approve(id) {
        const payroll = await this.findOne(id);
        if (payroll.status !== client_1.PayrollStatus.DRAFT) {
            throw new common_1.BadRequestException('Only draft payroll can be approved');
        }
        return this.prisma.payrollRun.update({
            where: { id },
            data: { status: client_1.PayrollStatus.APPROVED },
        });
    }
    async pay(id) {
        const payroll = await this.findOne(id);
        if (payroll.status !== client_1.PayrollStatus.APPROVED) {
            throw new common_1.BadRequestException('Only approved payroll can be marked as paid');
        }
        return this.prisma.payrollRun.update({
            where: { id },
            data: {
                status: client_1.PayrollStatus.PAID,
                paidAt: new Date(),
            },
        });
    }
    async getPayrollSummary(tenantId, periodStart, periodEnd) {
        const payrolls = await this.prisma.payrollRun.findMany({
            where: {
                employee: {
                    companyId: tenantId,
                },
                periodStart: { gte: periodStart },
                periodEnd: { lte: periodEnd },
            },
            include: {
                employee: true,
            },
        });
        const summary = {
            totalEmployees: payrolls.length,
            totalGrossPay: 0,
            totalPAYE: 0,
            totalNHIF: 0,
            totalNSSF: 0,
            totalDeductions: 0,
            totalNetPay: 0,
            byStatus: {
                draft: 0,
                approved: 0,
                paid: 0,
            },
        };
        payrolls.forEach((p) => {
            summary.totalGrossPay += p.grossPay.toNumber();
            summary.totalPAYE += p.paye.toNumber();
            summary.totalNHIF += p.nhif.toNumber();
            summary.totalNSSF += p.nssf.toNumber();
            summary.totalDeductions += p.deductions.toNumber();
            summary.totalNetPay += p.netPay.toNumber();
            summary.byStatus[p.status.toLowerCase()] += 1;
        });
        return summary;
    }
    calculatePAYE(grossPay) {
        const taxablePay = grossPay - this.calculateNSSF(grossPay);
        let tax = 0;
        const personalRelief = 2400 / 12;
        if (taxablePay <= 24000) {
            tax = taxablePay * 0.10;
        }
        else if (taxablePay <= 32333) {
            tax = 24000 * 0.10 + (taxablePay - 24000) * 0.25;
        }
        else if (taxablePay <= 500000) {
            tax = 24000 * 0.10 + 8333 * 0.25 + (taxablePay - 32333) * 0.30;
        }
        else if (taxablePay <= 800000) {
            tax = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + (taxablePay - 500000) * 0.325;
        }
        else {
            tax = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + 300000 * 0.325 + (taxablePay - 800000) * 0.35;
        }
        tax -= personalRelief;
        return Math.max(0, Math.round(tax));
    }
    calculateNHIF(grossPay) {
        if (grossPay < 6000)
            return 150;
        if (grossPay < 8000)
            return 300;
        if (grossPay < 12000)
            return 400;
        if (grossPay < 15000)
            return 500;
        if (grossPay < 20000)
            return 600;
        if (grossPay < 25000)
            return 750;
        if (grossPay < 30000)
            return 850;
        if (grossPay < 35000)
            return 900;
        if (grossPay < 40000)
            return 950;
        if (grossPay < 45000)
            return 1000;
        if (grossPay < 50000)
            return 1100;
        if (grossPay < 60000)
            return 1200;
        if (grossPay < 70000)
            return 1300;
        if (grossPay < 80000)
            return 1400;
        if (grossPay < 90000)
            return 1500;
        if (grossPay < 100000)
            return 1600;
        return 1700;
    }
    calculateNSSF(grossPay) {
        const tier1Limit = 7000;
        const tier2Limit = 36000;
        const rate = 0.06;
        let nssf = 0;
        if (grossPay <= tier1Limit) {
            nssf = grossPay * rate;
        }
        else {
            nssf = tier1Limit * rate;
            if (grossPay > tier1Limit) {
                const tier2Amount = Math.min(grossPay - tier1Limit, tier2Limit - tier1Limit);
                nssf += tier2Amount * rate;
            }
        }
        return Math.round(nssf);
    }
    async bulkProcessPayroll(tenantId, periodStart, periodEnd, employeeIds) {
        const where = {
            companyId: tenantId,
            isActive: true,
        };
        if (employeeIds && employeeIds.length > 0) {
            where.id = { in: employeeIds };
        }
        const employees = await this.prisma.employee.findMany({ where });
        const results = await Promise.allSettled(employees.map((employee) => this.processPayroll(tenantId, {
            employeeId: employee.id,
            periodStart,
            periodEnd,
            allowances: 0,
            otherDeductions: 0,
        })));
        const successful = results.filter((r) => r.status === 'fulfilled').length;
        const failed = results.filter((r) => r.status === 'rejected').length;
        return {
            total: employees.length,
            successful,
            failed,
            results: results.map((r, i) => ({
                employeeId: employees[i].id,
                employeeName: `${employees[i].firstName} ${employees[i].lastName}`,
                status: r.status,
                error: r.status === 'rejected' ? r.reason.message : null,
            })),
        };
    }
};
exports.PayrollService = PayrollService;
exports.PayrollService = PayrollService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PayrollService);


/***/ }),

/***/ "./src/modules/integrations/etims/etims.controller.ts":
/*!************************************************************!*\
  !*** ./src/modules/integrations/etims/etims.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EtimsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const etims_service_1 = __webpack_require__(/*! ./etims.service */ "./src/modules/integrations/etims/etims.service.ts");
let EtimsController = class EtimsController {
    constructor(etimsService) {
        this.etimsService = etimsService;
    }
    submitInvoice(invoiceId) {
        return this.etimsService.submitInvoice(invoiceId);
    }
    getStatus(invoiceNumber) {
        return this.etimsService.getInvoiceStatus(invoiceNumber);
    }
};
exports.EtimsController = EtimsController;
__decorate([
    (0, common_1.Post)('submit/:invoiceId'),
    __param(0, (0, common_1.Param)('invoiceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EtimsController.prototype, "submitInvoice", null);
__decorate([
    (0, common_1.Get)('status/:invoiceNumber'),
    __param(0, (0, common_1.Param)('invoiceNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EtimsController.prototype, "getStatus", null);
exports.EtimsController = EtimsController = __decorate([
    (0, swagger_1.ApiTags)('integrations'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('integrations/etims'),
    __metadata("design:paramtypes", [typeof (_a = typeof etims_service_1.EtimsService !== "undefined" && etims_service_1.EtimsService) === "function" ? _a : Object])
], EtimsController);


/***/ }),

/***/ "./src/modules/integrations/etims/etims.service.ts":
/*!*********************************************************!*\
  !*** ./src/modules/integrations/etims/etims.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.EtimsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let EtimsService = class EtimsService {
    constructor(config, prisma) {
        this.config = config;
        this.prisma = prisma;
        this.apiUrl = this.config.get('ETIMS_API_URL');
        this.apiKey = this.config.get('ETIMS_API_KEY');
        this.pin = this.config.get('ETIMS_PIN');
    }
    async submitInvoice(invoiceId) {
        const invoice = await this.prisma.invoice.findUnique({
            where: { id: invoiceId },
            include: {
                company: true,
                customer: true,
                lines: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        if (!invoice) {
            throw new common_1.BadRequestException('Invoice not found');
        }
        const payload = {
            tpin: this.pin,
            bhfId: '00',
            invcNo: invoice.invoiceNumber,
            orgInvcNo: '',
            custTpin: invoice.customer.kraPin || '',
            custNm: invoice.customer.name,
            salesTyCd: 'N',
            rcptTyCd: 'S',
            pmtTyCd: 'CASH',
            salesSttsCd: '02',
            cfmDt: invoice.date.toISOString().split('T')[0].replace(/-/g, ''),
            salesDt: invoice.date.toISOString().split('T')[0].replace(/-/g, ''),
            stockRlsDt: invoice.date.toISOString().split('T')[0].replace(/-/g, ''),
            totItemCnt: invoice.lines.length,
            taxblAmtA: invoice.subtotal.toNumber(),
            taxblAmtB: 0,
            taxblAmtC: 0,
            taxblAmtD: 0,
            taxRtA: 16,
            taxRtB: 0,
            taxRtC: 0,
            taxRtD: 0,
            taxAmtA: invoice.taxAmount.toNumber(),
            taxAmtB: 0,
            taxAmtC: 0,
            taxAmtD: 0,
            totTaxblAmt: invoice.subtotal.toNumber(),
            totTaxAmt: invoice.taxAmount.toNumber(),
            totAmt: invoice.total.toNumber(),
            itemList: invoice.lines.map((line, index) => ({
                itemSeq: index + 1,
                itemCd: line.product.sku,
                itemClsCd: '50101501',
                itemNm: line.product.name,
                bcd: line.product.barcode || '',
                pkgUnitCd: 'NT',
                pkg: line.quantity.toNumber(),
                qtyUnitCd: 'U',
                qty: line.quantity.toNumber(),
                prc: line.unitPrice.toNumber(),
                splyAmt: line.amount.toNumber(),
                dcRt: 0,
                dcAmt: 0,
                taxblAmt: line.amount.toNumber(),
                taxTyCd: 'A',
                taxAmt: (line.amount.toNumber() * line.taxRate.toNumber()) / 100,
                totAmt: line.amount.toNumber() * (1 + line.taxRate.toNumber() / 100),
            })),
        };
        try {
            const response = await axios_1.default.post(`${this.apiUrl}/trnsSales/saveSales`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'key': this.apiKey,
                },
            });
            await this.prisma.invoice.update({
                where: { id: invoiceId },
                data: {
                    notes: JSON.stringify({
                        etims: response.data,
                    }),
                },
            });
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.response?.data?.msg || 'eTIMS submission failed');
        }
    }
    async getInvoiceStatus(invoiceNumber) {
        try {
            const response = await axios_1.default.post(`${this.apiUrl}/trnsSales/selectTrnsSalesList`, {
                tpin: this.pin,
                bhfId: '00',
                invcNo: invoiceNumber,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'key': this.apiKey,
                },
            });
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to get invoice status from eTIMS');
        }
    }
};
exports.EtimsService = EtimsService;
exports.EtimsService = EtimsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object])
], EtimsService);


/***/ }),

/***/ "./src/modules/integrations/integrations.module.ts":
/*!*********************************************************!*\
  !*** ./src/modules/integrations/integrations.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntegrationsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mpesa_controller_1 = __webpack_require__(/*! ./mpesa/mpesa.controller */ "./src/modules/integrations/mpesa/mpesa.controller.ts");
const etims_controller_1 = __webpack_require__(/*! ./etims/etims.controller */ "./src/modules/integrations/etims/etims.controller.ts");
const mpesa_service_1 = __webpack_require__(/*! ./mpesa/mpesa.service */ "./src/modules/integrations/mpesa/mpesa.service.ts");
const etims_service_1 = __webpack_require__(/*! ./etims/etims.service */ "./src/modules/integrations/etims/etims.service.ts");
const email_service_1 = __webpack_require__(/*! ./notifications/email.service */ "./src/modules/integrations/notifications/email.service.ts");
const sms_service_1 = __webpack_require__(/*! ./notifications/sms.service */ "./src/modules/integrations/notifications/sms.service.ts");
let IntegrationsModule = class IntegrationsModule {
};
exports.IntegrationsModule = IntegrationsModule;
exports.IntegrationsModule = IntegrationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            mpesa_controller_1.MpesaController,
            etims_controller_1.EtimsController,
        ],
        providers: [
            mpesa_service_1.MpesaService,
            etims_service_1.EtimsService,
            email_service_1.EmailService,
            sms_service_1.SmsService,
        ],
        exports: [
            mpesa_service_1.MpesaService,
            etims_service_1.EtimsService,
            email_service_1.EmailService,
            sms_service_1.SmsService,
        ],
    })
], IntegrationsModule);


/***/ }),

/***/ "./src/modules/integrations/mpesa/mpesa.controller.ts":
/*!************************************************************!*\
  !*** ./src/modules/integrations/mpesa/mpesa.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MpesaController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const mpesa_service_1 = __webpack_require__(/*! ./mpesa.service */ "./src/modules/integrations/mpesa/mpesa.service.ts");
let MpesaController = class MpesaController {
    constructor(mpesaService) {
        this.mpesaService = mpesaService;
    }
    initiateSTKPush(phoneNumber, amount, accountReference, description) {
        return this.mpesaService.initiateSTKPush(phoneNumber, amount, accountReference, description);
    }
    querySTK(checkoutRequestID) {
        return this.mpesaService.querySTKStatus(checkoutRequestID);
    }
    handleCallback(callbackData) {
        return this.mpesaService.handleCallback(callbackData);
    }
    handleC2BConfirmation(confirmationData) {
        return this.mpesaService.handleC2BConfirmation(confirmationData);
    }
    handleC2BValidation(validationData) {
        return { ResultCode: 0, ResultDesc: 'Accepted' };
    }
};
exports.MpesaController = MpesaController;
__decorate([
    (0, common_1.Post)('stk-push'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)('phoneNumber')),
    __param(1, (0, common_1.Body)('amount')),
    __param(2, (0, common_1.Body)('accountReference')),
    __param(3, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "initiateSTKPush", null);
__decorate([
    (0, common_1.Get)('stk-query/:checkoutRequestID'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('checkoutRequestID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "querySTK", null);
__decorate([
    (0, common_1.Post)('callback'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "handleCallback", null);
__decorate([
    (0, common_1.Post)('c2b/confirmation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "handleC2BConfirmation", null);
__decorate([
    (0, common_1.Post)('c2b/validation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MpesaController.prototype, "handleC2BValidation", null);
exports.MpesaController = MpesaController = __decorate([
    (0, swagger_1.ApiTags)('integrations'),
    (0, common_1.Controller)('integrations/mpesa'),
    __metadata("design:paramtypes", [typeof (_a = typeof mpesa_service_1.MpesaService !== "undefined" && mpesa_service_1.MpesaService) === "function" ? _a : Object])
], MpesaController);


/***/ }),

/***/ "./src/modules/integrations/mpesa/mpesa.service.ts":
/*!*********************************************************!*\
  !*** ./src/modules/integrations/mpesa/mpesa.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.MpesaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let MpesaService = class MpesaService {
    constructor(config, prisma) {
        this.config = config;
        this.prisma = prisma;
        this.consumerKey = this.config.get('MPESA_CONSUMER_KEY');
        this.consumerSecret = this.config.get('MPESA_CONSUMER_SECRET');
        this.shortcode = this.config.get('MPESA_SHORTCODE');
        this.passkey = this.config.get('MPESA_PASSKEY');
        this.callbackUrl = this.config.get('MPESA_CALLBACK_URL');
        this.environment = this.config.get('MPESA_ENVIRONMENT', 'sandbox');
    }
    async getAccessToken() {
        const auth = Buffer.from(`${this.consumerKey}:${this.consumerSecret}`).toString('base64');
        const url = this.environment === 'production'
            ? 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
            : 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Authorization: `Basic ${auth}`,
                },
            });
            return response.data.access_token;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to get M-Pesa access token');
        }
    }
    async initiateSTKPush(phoneNumber, amount, accountReference, description) {
        const token = await this.getAccessToken();
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
        const password = Buffer.from(`${this.shortcode}${this.passkey}${timestamp}`).toString('base64');
        const formattedPhone = phoneNumber.startsWith('0')
            ? `254${phoneNumber.slice(1)}`
            : phoneNumber.startsWith('+254')
                ? phoneNumber.slice(1)
                : phoneNumber;
        const url = this.environment === 'production'
            ? 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
            : 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        const payload = {
            BusinessShortCode: this.shortcode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: Math.round(amount),
            PartyA: formattedPhone,
            PartyB: this.shortcode,
            PhoneNumber: formattedPhone,
            CallBackURL: this.callbackUrl,
            AccountReference: accountReference,
            TransactionDesc: description,
        };
        try {
            const response = await axios_1.default.post(url, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return {
                success: true,
                merchantRequestID: response.data.MerchantRequestID,
                checkoutRequestID: response.data.CheckoutRequestID,
                responseCode: response.data.ResponseCode,
                responseDescription: response.data.ResponseDescription,
                customerMessage: response.data.CustomerMessage,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.response?.data?.errorMessage || 'STK Push failed');
        }
    }
    async querySTKStatus(checkoutRequestID) {
        const token = await this.getAccessToken();
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
        const password = Buffer.from(`${this.shortcode}${this.passkey}${timestamp}`).toString('base64');
        const url = this.environment === 'production'
            ? 'https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query'
            : 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query';
        const payload = {
            BusinessShortCode: this.shortcode,
            Password: password,
            Timestamp: timestamp,
            CheckoutRequestID: checkoutRequestID,
        };
        try {
            const response = await axios_1.default.post(url, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to query STK status');
        }
    }
    async handleCallback(callbackData) {
        const { Body } = callbackData;
        const { stkCallback } = Body;
        if (stkCallback.ResultCode === 0) {
            const items = stkCallback.CallbackMetadata.Item;
            const amount = items.find((i) => i.Name === 'Amount')?.Value;
            const mpesaReceiptNumber = items.find((i) => i.Name === 'MpesaReceiptNumber')?.Value;
            const phoneNumber = items.find((i) => i.Name === 'PhoneNumber')?.Value;
            return {
                success: true,
                amount,
                mpesaCode: mpesaReceiptNumber,
                phoneNumber,
                merchantRequestID: stkCallback.MerchantRequestID,
                checkoutRequestID: stkCallback.CheckoutRequestID,
            };
        }
        else {
            return {
                success: false,
                resultCode: stkCallback.ResultCode,
                resultDesc: stkCallback.ResultDesc,
            };
        }
    }
    async registerC2BUrls(validationUrl, confirmationUrl) {
        const token = await this.getAccessToken();
        const url = this.environment === 'production'
            ? 'https://api.safaricom.co.ke/mpesa/c2b/v1/registerurl'
            : 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl';
        const payload = {
            ShortCode: this.shortcode,
            ResponseType: 'Completed',
            ConfirmationURL: confirmationUrl,
            ValidationURL: validationUrl,
        };
        try {
            const response = await axios_1.default.post(url, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to register C2B URLs');
        }
    }
    async handleC2BConfirmation(confirmationData) {
        const { TransactionType, TransID, TransTime, TransAmount, BusinessShortCode, BillRefNumber, InvoiceNumber, OrgAccountBalance, ThirdPartyTransID, MSISDN, FirstName, MiddleName, LastName, } = confirmationData;
        return {
            ResultCode: 0,
            ResultDesc: 'Accepted',
        };
    }
    async b2cPayment(phoneNumber, amount, remarks) {
        const token = await this.getAccessToken();
        const url = this.environment === 'production'
            ? 'https://api.safaricom.co.ke/mpesa/b2c/v1/paymentrequest'
            : 'https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest';
        const formattedPhone = phoneNumber.startsWith('0')
            ? `254${phoneNumber.slice(1)}`
            : phoneNumber;
        const payload = {
            InitiatorName: this.config.get('MPESA_INITIATOR_NAME'),
            SecurityCredential: this.config.get('MPESA_SECURITY_CREDENTIAL'),
            CommandID: 'BusinessPayment',
            Amount: Math.round(amount),
            PartyA: this.shortcode,
            PartyB: formattedPhone,
            Remarks: remarks,
            QueueTimeOutURL: `${this.callbackUrl}/b2c/timeout`,
            ResultURL: `${this.callbackUrl}/b2c/result`,
            Occasion: remarks,
        };
        try {
            const response = await axios_1.default.post(url, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException('B2C payment failed');
        }
    }
};
exports.MpesaService = MpesaService;
exports.MpesaService = MpesaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object])
], MpesaService);


/***/ }),

/***/ "./src/modules/integrations/notifications/email.service.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/integrations/notifications/email.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.EmailService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");
let EmailService = class EmailService {
    constructor(config) {
        this.config = config;
        this.transporter = nodemailer.createTransport({
            host: this.config.get('SMTP_HOST'),
            port: this.config.get('SMTP_PORT'),
            secure: false,
            auth: {
                user: this.config.get('SMTP_USER'),
                pass: this.config.get('SMTP_PASS'),
            },
        });
    }
    async sendEmail(to, subject, html) {
        try {
            await this.transporter.sendMail({
                from: this.config.get('SMTP_FROM', 'noreply@fusionerp.com'),
                to,
                subject,
                html,
            });
            return { success: true };
        }
        catch (error) {
            console.error('Email error:', error);
            return { success: false, error: error.message };
        }
    }
    async sendInvoiceEmail(invoice, customerEmail) {
        const html = `
      <h2>Invoice ${invoice.invoiceNumber}</h2>
      <p>Dear ${invoice.customer.name},</p>
      <p>Please find attached your invoice for KES ${invoice.total.toLocaleString()}.</p>
      <p>Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}</p>
      <p>Thank you for your business!</p>
    `;
        return this.sendEmail(customerEmail, `Invoice ${invoice.invoiceNumber}`, html);
    }
    async sendPaymentConfirmation(payment, customerEmail) {
        const html = `
      <h2>Payment Confirmation</h2>
      <p>We have received your payment of KES ${payment.amount.toLocaleString()}.</p>
      <p>M-Pesa Code: ${payment.mpesaCode}</p>
      <p>Thank you!</p>
    `;
        return this.sendEmail(customerEmail, 'Payment Confirmation', html);
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], EmailService);


/***/ }),

/***/ "./src/modules/integrations/notifications/sms.service.ts":
/*!***************************************************************!*\
  !*** ./src/modules/integrations/notifications/sms.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.SmsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const axios_1 = __webpack_require__(/*! axios */ "axios");
let SmsService = class SmsService {
    constructor(config) {
        this.config = config;
        this.username = this.config.get('AT_USERNAME');
        this.apiKey = this.config.get('AT_API_KEY');
        this.shortCode = this.config.get('AT_SHORTCODE', 'FUSIONERP');
    }
    async sendSms(to, message) {
        try {
            const response = await axios_1.default.post('https://api.africastalking.com/version1/messaging', {
                username: this.username,
                to,
                message,
                from: this.shortCode,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'apiKey': this.apiKey,
                },
            });
            return {
                success: true,
                data: response.data,
            };
        }
        catch (error) {
            console.error('SMS error:', error);
            return {
                success: false,
                error: error.message,
            };
        }
    }
    async sendInvoiceSms(invoice, phoneNumber) {
        const message = `Invoice ${invoice.invoiceNumber} for KES ${invoice.total.toLocaleString()} has been sent. Due: ${new Date(invoice.dueDate).toLocaleDateString()}. Thank you!`;
        return this.sendSms(phoneNumber, message);
    }
    async sendPaymentConfirmation(payment, phoneNumber) {
        const message = `Payment of KES ${payment.amount.toLocaleString()} received. M-Pesa Code: ${payment.mpesaCode}. Thank you!`;
        return this.sendSms(phoneNumber, message);
    }
    async sendLowStockAlert(product, phoneNumber) {
        const message = `Low Stock Alert: ${product.name} (${product.sku}) is below reorder level. Current stock: ${product.currentStock}`;
        return this.sendSms(phoneNumber, message);
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], SmsService);


/***/ }),

/***/ "./src/modules/inventory/controllers/adjustments.controller.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/inventory/controllers/adjustments.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdjustmentsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const adjustments_service_1 = __webpack_require__(/*! ../services/adjustments.service */ "./src/modules/inventory/services/adjustments.service.ts");
const create_adjustment_dto_1 = __webpack_require__(/*! ../dto/create-adjustment.dto */ "./src/modules/inventory/dto/create-adjustment.dto.ts");
let AdjustmentsController = class AdjustmentsController {
    constructor(adjustmentsService) {
        this.adjustmentsService = adjustmentsService;
    }
    create(tenantId, req, createDto) {
        return this.adjustmentsService.create(tenantId, req.user.id, createDto);
    }
    findAll(tenantId, productId, warehouseId, page, limit) {
        return this.adjustmentsService.findAll(tenantId, {
            productId,
            warehouseId,
            page,
            limit,
        });
    }
};
exports.AdjustmentsController = AdjustmentsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a stock adjustment' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, typeof (_b = typeof create_adjustment_dto_1.CreateAdjustmentDto !== "undefined" && create_adjustment_dto_1.CreateAdjustmentDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AdjustmentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all stock adjustments' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('productId')),
    __param(2, (0, common_1.Query)('warehouseId')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], AdjustmentsController.prototype, "findAll", null);
exports.AdjustmentsController = AdjustmentsController = __decorate([
    (0, swagger_1.ApiTags)('inventory'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('inventory/adjustments'),
    __metadata("design:paramtypes", [typeof (_a = typeof adjustments_service_1.AdjustmentsService !== "undefined" && adjustments_service_1.AdjustmentsService) === "function" ? _a : Object])
], AdjustmentsController);


/***/ }),

/***/ "./src/modules/inventory/controllers/products.controller.ts":
/*!******************************************************************!*\
  !*** ./src/modules/inventory/controllers/products.controller.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const products_service_1 = __webpack_require__(/*! ../services/products.service */ "./src/modules/inventory/services/products.service.ts");
const create_product_dto_1 = __webpack_require__(/*! ../dto/create-product.dto */ "./src/modules/inventory/dto/create-product.dto.ts");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(tenantId, createDto) {
        return this.productsService.create(tenantId, createDto);
    }
    findAll(tenantId, search, categoryId, type, isActive, page, limit) {
        return this.productsService.findAll(tenantId, {
            search,
            categoryId,
            type,
            isActive,
            page,
            limit,
        });
    }
    getLowStock(tenantId) {
        return this.productsService.getLowStockProducts(tenantId);
    }
    findOne(tenantId, id) {
        return this.productsService.findOne(tenantId, id);
    }
    getStock(tenantId, id) {
        return this.productsService.getStock(tenantId, id);
    }
    update(tenantId, id, updateDto) {
        return this.productsService.update(tenantId, id, updateDto);
    }
    remove(tenantId, id) {
        return this.productsService.remove(tenantId, id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_product_dto_1.CreateProductDto !== "undefined" && create_product_dto_1.CreateProductDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all products' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('categoryId')),
    __param(3, (0, common_1.Query)('type')),
    __param(4, (0, common_1.Query)('isActive')),
    __param(5, (0, common_1.Query)('page')),
    __param(6, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('low-stock'),
    (0, swagger_1.ApiOperation)({ summary: 'Get low stock products' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getLowStock", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get product by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/stock'),
    (0, swagger_1.ApiOperation)({ summary: 'Get product stock levels' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getStock", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update product' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof create_product_dto_1.UpdateProductDto !== "undefined" && create_product_dto_1.UpdateProductDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete product' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('inventory'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('inventory/products'),
    __metadata("design:paramtypes", [typeof (_a = typeof products_service_1.ProductsService !== "undefined" && products_service_1.ProductsService) === "function" ? _a : Object])
], ProductsController);


/***/ }),

/***/ "./src/modules/inventory/controllers/stock-movements.controller.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/inventory/controllers/stock-movements.controller.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StockMovementsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const stock_movements_service_1 = __webpack_require__(/*! ../services/stock-movements.service */ "./src/modules/inventory/services/stock-movements.service.ts");
const stock_movement_dto_1 = __webpack_require__(/*! ../dto/stock-movement.dto */ "./src/modules/inventory/dto/stock-movement.dto.ts");
let StockMovementsController = class StockMovementsController {
    constructor(stockMovementsService) {
        this.stockMovementsService = stockMovementsService;
    }
    create(tenantId, createDto) {
        return this.stockMovementsService.create(tenantId, createDto);
    }
    findAll(tenantId, productId, warehouseId, type, startDate, endDate, page, limit) {
        return this.stockMovementsService.findAll(tenantId, {
            productId,
            warehouseId,
            type,
            startDate,
            endDate,
            page,
            limit,
        });
    }
    findOne(tenantId, id) {
        return this.stockMovementsService.findOne(tenantId, id);
    }
};
exports.StockMovementsController = StockMovementsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a stock movement' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof stock_movement_dto_1.CreateStockMovementDto !== "undefined" && stock_movement_dto_1.CreateStockMovementDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], StockMovementsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all stock movements' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('productId')),
    __param(2, (0, common_1.Query)('warehouseId')),
    __param(3, (0, common_1.Query)('type')),
    __param(4, (0, common_1.Query)('startDate')),
    __param(5, (0, common_1.Query)('endDate')),
    __param(6, (0, common_1.Query)('page')),
    __param(7, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], StockMovementsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get stock movement by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StockMovementsController.prototype, "findOne", null);
exports.StockMovementsController = StockMovementsController = __decorate([
    (0, swagger_1.ApiTags)('inventory'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('inventory/stock-movements'),
    __metadata("design:paramtypes", [typeof (_a = typeof stock_movements_service_1.StockMovementsService !== "undefined" && stock_movements_service_1.StockMovementsService) === "function" ? _a : Object])
], StockMovementsController);


/***/ }),

/***/ "./src/modules/inventory/controllers/warehouses.controller.ts":
/*!********************************************************************!*\
  !*** ./src/modules/inventory/controllers/warehouses.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WarehousesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const warehouses_service_1 = __webpack_require__(/*! ../services/warehouses.service */ "./src/modules/inventory/services/warehouses.service.ts");
const create_warehouse_dto_1 = __webpack_require__(/*! ../dto/create-warehouse.dto */ "./src/modules/inventory/dto/create-warehouse.dto.ts");
let WarehousesController = class WarehousesController {
    constructor(warehousesService) {
        this.warehousesService = warehousesService;
    }
    create(tenantId, createDto) {
        return this.warehousesService.create(tenantId, createDto);
    }
    findAll(tenantId) {
        return this.warehousesService.findAll(tenantId);
    }
    findOne(tenantId, id) {
        return this.warehousesService.findOne(tenantId, id);
    }
    update(tenantId, id, updateDto) {
        return this.warehousesService.update(tenantId, id, updateDto);
    }
    remove(tenantId, id) {
        return this.warehousesService.remove(tenantId, id);
    }
};
exports.WarehousesController = WarehousesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new warehouse' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_warehouse_dto_1.CreateWarehouseDto !== "undefined" && create_warehouse_dto_1.CreateWarehouseDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], WarehousesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all warehouses' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WarehousesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get warehouse by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WarehousesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update warehouse' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof create_warehouse_dto_1.UpdateWarehouseDto !== "undefined" && create_warehouse_dto_1.UpdateWarehouseDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], WarehousesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete warehouse' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WarehousesController.prototype, "remove", null);
exports.WarehousesController = WarehousesController = __decorate([
    (0, swagger_1.ApiTags)('inventory'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('inventory/warehouses'),
    __metadata("design:paramtypes", [typeof (_a = typeof warehouses_service_1.WarehousesService !== "undefined" && warehouses_service_1.WarehousesService) === "function" ? _a : Object])
], WarehousesController);


/***/ }),

/***/ "./src/modules/inventory/dto/create-adjustment.dto.ts":
/*!************************************************************!*\
  !*** ./src/modules/inventory/dto/create-adjustment.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateAdjustmentDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateAdjustmentDto {
}
exports.CreateAdjustmentDto = CreateAdjustmentDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAdjustmentDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAdjustmentDto.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAdjustmentDto.prototype, "newQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdjustmentDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdjustmentDto.prototype, "notes", void 0);


/***/ }),

/***/ "./src/modules/inventory/dto/create-product.dto.ts":
/*!*********************************************************!*\
  !*** ./src/modules/inventory/dto/create-product.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.UpdateProductDto = exports.CreateProductDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.ProductType }),
    (0, class_validator_1.IsEnum)(client_1.ProductType),
    __metadata("design:type", typeof (_a = typeof client_1.ProductType !== "undefined" && client_1.ProductType) === "function" ? _a : Object)
], CreateProductDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "costPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "sellingPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "barcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "trackInventory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "reorderLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "reorderQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "isActive", void 0);
class UpdateProductDto {
}
exports.UpdateProductDto = UpdateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "costPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "sellingPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "reorderLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "reorderQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateProductDto.prototype, "isActive", void 0);


/***/ }),

/***/ "./src/modules/inventory/dto/create-warehouse.dto.ts":
/*!***********************************************************!*\
  !*** ./src/modules/inventory/dto/create-warehouse.dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.UpdateWarehouseDto = exports.CreateWarehouseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateWarehouseDto {
}
exports.CreateWarehouseDto = CreateWarehouseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWarehouseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWarehouseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWarehouseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWarehouseDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWarehouseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateWarehouseDto.prototype, "isActive", void 0);
class UpdateWarehouseDto {
}
exports.UpdateWarehouseDto = UpdateWarehouseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWarehouseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWarehouseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWarehouseDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWarehouseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateWarehouseDto.prototype, "isActive", void 0);


/***/ }),

/***/ "./src/modules/inventory/dto/stock-movement.dto.ts":
/*!*********************************************************!*\
  !*** ./src/modules/inventory/dto/stock-movement.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateStockMovementDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateStockMovementDto {
}
exports.CreateStockMovementDto = CreateStockMovementDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockMovementDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateStockMovementDto.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.StockMovementType }),
    (0, class_validator_1.IsEnum)(client_1.StockMovementType),
    __metadata("design:type", typeof (_a = typeof client_1.StockMovementType !== "undefined" && client_1.StockMovementType) === "function" ? _a : Object)
], CreateStockMovementDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStockMovementDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockMovementDto.prototype, "reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStockMovementDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateStockMovementDto.prototype, "date", void 0);


/***/ }),

/***/ "./src/modules/inventory/inventory.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/inventory/inventory.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InventoryModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_controller_1 = __webpack_require__(/*! ./controllers/products.controller */ "./src/modules/inventory/controllers/products.controller.ts");
const warehouses_controller_1 = __webpack_require__(/*! ./controllers/warehouses.controller */ "./src/modules/inventory/controllers/warehouses.controller.ts");
const stock_movements_controller_1 = __webpack_require__(/*! ./controllers/stock-movements.controller */ "./src/modules/inventory/controllers/stock-movements.controller.ts");
const adjustments_controller_1 = __webpack_require__(/*! ./controllers/adjustments.controller */ "./src/modules/inventory/controllers/adjustments.controller.ts");
const products_service_1 = __webpack_require__(/*! ./services/products.service */ "./src/modules/inventory/services/products.service.ts");
const warehouses_service_1 = __webpack_require__(/*! ./services/warehouses.service */ "./src/modules/inventory/services/warehouses.service.ts");
const stock_movements_service_1 = __webpack_require__(/*! ./services/stock-movements.service */ "./src/modules/inventory/services/stock-movements.service.ts");
const adjustments_service_1 = __webpack_require__(/*! ./services/adjustments.service */ "./src/modules/inventory/services/adjustments.service.ts");
let InventoryModule = class InventoryModule {
};
exports.InventoryModule = InventoryModule;
exports.InventoryModule = InventoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            products_controller_1.ProductsController,
            warehouses_controller_1.WarehousesController,
            stock_movements_controller_1.StockMovementsController,
            adjustments_controller_1.AdjustmentsController,
        ],
        providers: [
            products_service_1.ProductsService,
            warehouses_service_1.WarehousesService,
            stock_movements_service_1.StockMovementsService,
            adjustments_service_1.AdjustmentsService,
        ],
        exports: [
            products_service_1.ProductsService,
            warehouses_service_1.WarehousesService,
            stock_movements_service_1.StockMovementsService,
            adjustments_service_1.AdjustmentsService,
        ],
    })
], InventoryModule);


/***/ }),

/***/ "./src/modules/inventory/services/adjustments.service.ts":
/*!***************************************************************!*\
  !*** ./src/modules/inventory/services/adjustments.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.AdjustmentsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let AdjustmentsService = class AdjustmentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, userId, createDto) {
        const [product, warehouse] = await Promise.all([
            this.prisma.product.findFirst({
                where: { id: createDto.productId, companyId: tenantId },
            }),
            this.prisma.warehouse.findFirst({
                where: { id: createDto.warehouseId, companyId: tenantId },
            }),
        ]);
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        if (!warehouse) {
            throw new common_1.NotFoundException('Warehouse not found');
        }
        return this.prisma.$transaction(async (prisma) => {
            const currentStock = await prisma.stock.findUnique({
                where: {
                    productId_warehouseId: {
                        productId: createDto.productId,
                        warehouseId: createDto.warehouseId,
                    },
                },
            });
            const oldQuantity = currentStock?.quantity.toNumber() || 0;
            const difference = createDto.newQuantity - oldQuantity;
            const adjustment = await prisma.stockAdjustment.create({
                data: {
                    companyId: tenantId,
                    productId: createDto.productId,
                    warehouseId: createDto.warehouseId,
                    oldQuantity,
                    newQuantity: createDto.newQuantity,
                    difference,
                    reason: createDto.reason,
                    notes: createDto.notes,
                    adjustedBy: userId,
                },
                include: {
                    product: true,
                    warehouse: true,
                    adjustedByUser: {
                        select: {
                            firstName: true,
                            lastName: true,
                            email: true,
                        },
                    },
                },
            });
            await prisma.stock.upsert({
                where: {
                    productId_warehouseId: {
                        productId: createDto.productId,
                        warehouseId: createDto.warehouseId,
                    },
                },
                create: {
                    productId: createDto.productId,
                    warehouseId: createDto.warehouseId,
                    quantity: createDto.newQuantity,
                    reservedQuantity: 0,
                },
                update: {
                    quantity: createDto.newQuantity,
                },
            });
            await prisma.stockMovement.create({
                data: {
                    companyId: tenantId,
                    productId: createDto.productId,
                    warehouseId: createDto.warehouseId,
                    type: difference > 0 ? 'IN' : 'OUT',
                    quantity: Math.abs(difference),
                    reference: `ADJ-${adjustment.id.substring(0, 8)}`,
                    notes: `Stock adjustment: ${createDto.reason}`,
                    date: new Date(),
                },
            });
            return adjustment;
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.productId) {
            where.productId = options.productId;
        }
        if (options.warehouseId) {
            where.warehouseId = options.warehouseId;
        }
        const [adjustments, total] = await Promise.all([
            this.prisma.stockAdjustment.findMany({
                where,
                skip,
                take: limit,
                include: {
                    product: true,
                    warehouse: true,
                    adjustedByUser: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.stockAdjustment.count({ where }),
        ]);
        return {
            data: adjustments,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
};
exports.AdjustmentsService = AdjustmentsService;
exports.AdjustmentsService = AdjustmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], AdjustmentsService);


/***/ }),

/***/ "./src/modules/inventory/services/products.service.ts":
/*!************************************************************!*\
  !*** ./src/modules/inventory/services/products.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.ProductsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const existing = await this.prisma.product.findUnique({
            where: {
                companyId_sku: {
                    companyId: tenantId,
                    sku: createDto.sku,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Product SKU already exists');
        }
        return this.prisma.product.create({
            data: {
                companyId: tenantId,
                ...createDto,
            },
            include: {
                category: true,
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.search) {
            where.OR = [
                { name: { contains: options.search, mode: 'insensitive' } },
                { sku: { contains: options.search, mode: 'insensitive' } },
                { barcode: { contains: options.search, mode: 'insensitive' } },
            ];
        }
        if (options.categoryId) {
            where.categoryId = options.categoryId;
        }
        if (options.type) {
            where.type = options.type;
        }
        if (options.isActive !== undefined) {
            where.isActive = options.isActive === 'true';
        }
        const [products, total] = await Promise.all([
            this.prisma.product.findMany({
                where,
                skip,
                take: limit,
                include: {
                    category: true,
                    stock: {
                        include: {
                            warehouse: true,
                        },
                    },
                },
                orderBy: { name: 'asc' },
            }),
            this.prisma.product.count({ where }),
        ]);
        return {
            data: products,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(tenantId, id) {
        const product = await this.prisma.product.findFirst({
            where: { id, companyId: tenantId },
            include: {
                category: true,
                stock: {
                    include: {
                        warehouse: true,
                    },
                },
                bom: {
                    include: {
                        components: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return product;
    }
    async update(tenantId, id, updateDto) {
        await this.findOne(tenantId, id);
        return this.prisma.product.update({
            where: { id },
            data: updateDto,
            include: {
                category: true,
                stock: {
                    include: {
                        warehouse: true,
                    },
                },
            },
        });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        const hasTransactions = await this.prisma.product.findFirst({
            where: {
                id,
                OR: [
                    { invoiceLines: { some: {} } },
                    { salesOrderLines: { some: {} } },
                    { purchaseOrderLines: { some: {} } },
                ],
            },
        });
        if (hasTransactions) {
            return this.prisma.product.update({
                where: { id },
                data: { isActive: false },
            });
        }
        return this.prisma.product.delete({ where: { id } });
    }
    async getStock(tenantId, productId) {
        await this.findOne(tenantId, productId);
        const stock = await this.prisma.stock.findMany({
            where: { productId },
            include: {
                warehouse: true,
            },
        });
        const totalQuantity = stock.reduce((sum, stock) => sum + stock.quantity.toNumber(), 0);
        const totalReserved = stock.reduce((sum, stock) => sum + stock.reservedQuantity.toNumber(), 0);
        return {
            productId,
            totalQuantity,
            totalReserved,
            availableQuantity: totalQuantity - totalReserved,
            byWarehouse: stock.map((stock) => ({
                warehouseId: stock.warehouseId,
                warehouseName: stock.warehouse.name,
                quantity: stock.quantity.toNumber(),
                reservedQuantity: stock.reservedQuantity.toNumber(),
                availableQuantity: stock.quantity.toNumber() - stock.reservedQuantity.toNumber(),
            })),
        };
    }
    async getLowStockProducts(tenantId) {
        const products = await this.prisma.product.findMany({
            where: {
                companyId: tenantId,
                isActive: true,
                trackInventory: true,
            },
            include: {
                stock: true,
            },
        });
        const lowStockProducts = products.filter((product) => {
            const totalStock = product.stock.reduce((sum, stock) => sum + stock.quantity.toNumber(), 0);
            return (product.reorderLevel &&
                totalStock <= product.reorderLevel.toNumber());
        });
        return lowStockProducts.map((product) => ({
            id: product.id,
            name: product.name,
            sku: product.sku,
            currentStock: product.stock.reduce((sum, stock) => sum + stock.quantity.toNumber(), 0),
            reorderLevel: product.reorderLevel?.toNumber() || 0,
            reorderQuantity: product.reorderQuantity?.toNumber() || 0,
        }));
    }
    async bulkUpdatePrices(tenantId, productIds, priceAdjustment) {
        const products = await this.prisma.product.findMany({
            where: {
                id: { in: productIds },
                companyId: tenantId,
            },
        });
        const updates = products.map((product) => {
            let newPrice = product.sellingPrice.toNumber();
            if (priceAdjustment.type === 'percentage') {
                newPrice += (newPrice * priceAdjustment.value) / 100;
            }
            else {
                newPrice += priceAdjustment.value;
            }
            return this.prisma.product.update({
                where: { id: product.id },
                data: { sellingPrice: newPrice },
            });
        });
        return Promise.all(updates);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ProductsService);


/***/ }),

/***/ "./src/modules/inventory/services/stock-movements.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/inventory/services/stock-movements.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.StockMovementsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let StockMovementsService = class StockMovementsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const [product, warehouse] = await Promise.all([
            this.prisma.product.findFirst({
                where: { id: createDto.productId, companyId: tenantId },
            }),
            this.prisma.warehouse.findFirst({
                where: { id: createDto.warehouseId, companyId: tenantId },
            }),
        ]);
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        if (!warehouse) {
            throw new common_1.NotFoundException('Warehouse not found');
        }
        return this.prisma.$transaction(async (prisma) => {
            const movement = await prisma.stockMovement.create({
                data: {
                    companyId: tenantId,
                    ...createDto,
                    date: createDto.date || new Date(),
                },
                include: {
                    product: true,
                    warehouse: true,
                },
            });
            const stockUpdate = createDto.type === 'IN'
                ? { increment: createDto.quantity }
                : { decrement: createDto.quantity };
            await prisma.stock.upsert({
                where: {
                    productId_warehouseId: {
                        productId: createDto.productId,
                        warehouseId: createDto.warehouseId,
                    },
                },
                create: {
                    productId: createDto.productId,
                    warehouseId: createDto.warehouseId,
                    quantity: createDto.type === 'IN' ? createDto.quantity : 0,
                    reservedQuantity: 0,
                },
                update: {
                    quantity: stockUpdate,
                },
            });
            return movement;
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 50;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.productId) {
            where.productId = options.productId;
        }
        if (options.warehouseId) {
            where.warehouseId = options.warehouseId;
        }
        if (options.type) {
            where.type = options.type;
        }
        if (options.startDate || options.endDate) {
            where.date = {};
            if (options.startDate)
                where.date.gte = new Date(options.startDate);
            if (options.endDate)
                where.date.lte = new Date(options.endDate);
        }
        const [movements, total] = await Promise.all([
            this.prisma.stockMovement.findMany({
                where,
                skip,
                take: limit,
                include: {
                    product: true,
                    warehouse: true,
                },
                orderBy: { date: 'desc' },
            }),
            this.prisma.stockMovement.count({ where }),
        ]);
        return {
            data: movements,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(tenantId, id) {
        const movement = await this.prisma.stockMovement.findFirst({
            where: { id, companyId: tenantId },
            include: {
                product: true,
                warehouse: true,
            },
        });
        if (!movement) {
            throw new common_1.NotFoundException('Stock movement not found');
        }
        return movement;
    }
};
exports.StockMovementsService = StockMovementsService;
exports.StockMovementsService = StockMovementsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], StockMovementsService);


/***/ }),

/***/ "./src/modules/inventory/services/warehouses.service.ts":
/*!**************************************************************!*\
  !*** ./src/modules/inventory/services/warehouses.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.WarehousesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let WarehousesService = class WarehousesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const existing = await this.prisma.warehouse.findUnique({
            where: {
                companyId_code: {
                    companyId: tenantId,
                    code: createDto.code,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Warehouse code already exists');
        }
        return this.prisma.warehouse.create({
            data: {
                companyId: tenantId,
                ...createDto,
            },
        });
    }
    async findAll(tenantId) {
        return this.prisma.warehouse.findMany({
            where: { companyId: tenantId },
            include: {
                _count: {
                    select: {
                        stock: true,
                    },
                },
            },
            orderBy: { name: 'asc' },
        });
    }
    async findOne(tenantId, id) {
        const warehouse = await this.prisma.warehouse.findFirst({
            where: { id, companyId: tenantId },
            include: {
                stock: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        if (!warehouse) {
            throw new common_1.NotFoundException('Warehouse not found');
        }
        return warehouse;
    }
    async update(tenantId, id, updateDto) {
        await this.findOne(tenantId, id);
        return this.prisma.warehouse.update({
            where: { id },
            data: updateDto,
        });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        const hasStock = await this.prisma.stock.count({
            where: { warehouseId: id, quantity: { gt: 0 } },
        });
        if (hasStock > 0) {
            throw new common_1.ConflictException('Cannot delete warehouse with stock');
        }
        return this.prisma.warehouse.delete({ where: { id } });
    }
};
exports.WarehousesService = WarehousesService;
exports.WarehousesService = WarehousesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], WarehousesService);


/***/ }),

/***/ "./src/modules/manufacturing/controllers/bom.controller.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/manufacturing/controllers/bom.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BomController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const bom_service_1 = __webpack_require__(/*! ../services/bom.service */ "./src/modules/manufacturing/services/bom.service.ts");
const create_bom_dto_1 = __webpack_require__(/*! ../dto/create-bom.dto */ "./src/modules/manufacturing/dto/create-bom.dto.ts");
let BomController = class BomController {
    constructor(bomService) {
        this.bomService = bomService;
    }
    create(tenantId, createDto) {
        return this.bomService.create(tenantId, createDto);
    }
    findAll(tenantId, productId, page, limit) {
        return this.bomService.findAll(tenantId, { productId, page, limit });
    }
    findOne(tenantId, id) {
        return this.bomService.findOne(tenantId, id);
    }
    update(tenantId, id, updateDto) {
        return this.bomService.update(tenantId, id, updateDto);
    }
    remove(tenantId, id) {
        return this.bomService.remove(tenantId, id);
    }
    calculateCost(tenantId, id) {
        return this.bomService.calculateCost(tenantId, id);
    }
};
exports.BomController = BomController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Bill of Materials' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_bom_dto_1.CreateBomDto !== "undefined" && create_bom_dto_1.CreateBomDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], BomController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Bills of Materials' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('productId')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], BomController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get BOM by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BomController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update BOM' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof create_bom_dto_1.UpdateBomDto !== "undefined" && create_bom_dto_1.UpdateBomDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], BomController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete BOM' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BomController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/cost'),
    (0, swagger_1.ApiOperation)({ summary: 'Calculate BOM cost' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BomController.prototype, "calculateCost", null);
exports.BomController = BomController = __decorate([
    (0, swagger_1.ApiTags)('manufacturing'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('manufacturing/bom'),
    __metadata("design:paramtypes", [typeof (_a = typeof bom_service_1.BomService !== "undefined" && bom_service_1.BomService) === "function" ? _a : Object])
], BomController);


/***/ }),

/***/ "./src/modules/manufacturing/controllers/production-orders.controller.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/manufacturing/controllers/production-orders.controller.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductionOrdersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const production_orders_service_1 = __webpack_require__(/*! ../services/production-orders.service */ "./src/modules/manufacturing/services/production-orders.service.ts");
const create_production_order_dto_1 = __webpack_require__(/*! ../dto/create-production-order.dto */ "./src/modules/manufacturing/dto/create-production-order.dto.ts");
let ProductionOrdersController = class ProductionOrdersController {
    constructor(productionOrdersService) {
        this.productionOrdersService = productionOrdersService;
    }
    create(tenantId, createDto) {
        return this.productionOrdersService.create(tenantId, createDto);
    }
    findAll(tenantId, status, productId, page, limit) {
        return this.productionOrdersService.findAll(tenantId, { status, productId, page, limit });
    }
    findOne(tenantId, id) {
        return this.productionOrdersService.findOne(tenantId, id);
    }
    confirm(tenantId, id) {
        return this.productionOrdersService.confirm(tenantId, id);
    }
    start(tenantId, id) {
        return this.productionOrdersService.start(tenantId, id);
    }
    complete(tenantId, id, completeDto) {
        return this.productionOrdersService.complete(tenantId, id, completeDto.producedQuantity);
    }
    cancel(tenantId, id) {
        return this.productionOrdersService.cancel(tenantId, id);
    }
};
exports.ProductionOrdersController = ProductionOrdersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new production order' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_production_order_dto_1.CreateProductionOrderDto !== "undefined" && create_production_order_dto_1.CreateProductionOrderDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all production orders' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('productId')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get production order by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/confirm'),
    (0, swagger_1.ApiOperation)({ summary: 'Confirm production order' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "confirm", null);
__decorate([
    (0, common_1.Put)(':id/start'),
    (0, swagger_1.ApiOperation)({ summary: 'Start production' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "start", null);
__decorate([
    (0, common_1.Put)(':id/complete'),
    (0, swagger_1.ApiOperation)({ summary: 'Complete production order' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof create_production_order_dto_1.CompleteProductionOrderDto !== "undefined" && create_production_order_dto_1.CompleteProductionOrderDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "complete", null);
__decorate([
    (0, common_1.Put)(':id/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel production order' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "cancel", null);
exports.ProductionOrdersController = ProductionOrdersController = __decorate([
    (0, swagger_1.ApiTags)('manufacturing'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('manufacturing/production-orders'),
    __metadata("design:paramtypes", [typeof (_a = typeof production_orders_service_1.ProductionOrdersService !== "undefined" && production_orders_service_1.ProductionOrdersService) === "function" ? _a : Object])
], ProductionOrdersController);


/***/ }),

/***/ "./src/modules/manufacturing/dto/create-bom.dto.ts":
/*!*********************************************************!*\
  !*** ./src/modules/manufacturing/dto/create-bom.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateBomDto = exports.BomComponentDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class BomComponentDto {
}
exports.BomComponentDto = BomComponentDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BomComponentDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BomComponentDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BomComponentDto.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BomComponentDto.prototype, "wastagePercentage", void 0);
class CreateBomDto {
}
exports.CreateBomDto = CreateBomDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateBomDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: '1.0' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBomDto.prototype, "version", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [BomComponentDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BomComponentDto),
    __metadata("design:type", Array)
], CreateBomDto.prototype, "components", void 0);


/***/ }),

/***/ "./src/modules/manufacturing/dto/create-production-order.dto.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/manufacturing/dto/create-production-order.dto.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CompleteProductionOrderDto = exports.CreateProductionOrderDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class CreateProductionOrderDto {
}
exports.CreateProductionOrderDto = CreateProductionOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateProductionOrderDto.prototype, "bomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductionOrderDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateProductionOrderDto.prototype, "scheduledDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateProductionOrderDto.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductionOrderDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductionOrderDto.prototype, "forceProduce", void 0);
class CompleteProductionOrderDto {
}
exports.CompleteProductionOrderDto = CompleteProductionOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CompleteProductionOrderDto.prototype, "producedQuantity", void 0);


/***/ }),

/***/ "./src/modules/manufacturing/manufacturing.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/manufacturing/manufacturing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManufacturingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bom_controller_1 = __webpack_require__(/*! ./controllers/bom.controller */ "./src/modules/manufacturing/controllers/bom.controller.ts");
const production_orders_controller_1 = __webpack_require__(/*! ./controllers/production-orders.controller */ "./src/modules/manufacturing/controllers/production-orders.controller.ts");
const bom_service_1 = __webpack_require__(/*! ./services/bom.service */ "./src/modules/manufacturing/services/bom.service.ts");
const production_orders_service_1 = __webpack_require__(/*! ./services/production-orders.service */ "./src/modules/manufacturing/services/production-orders.service.ts");
let ManufacturingModule = class ManufacturingModule {
};
exports.ManufacturingModule = ManufacturingModule;
exports.ManufacturingModule = ManufacturingModule = __decorate([
    (0, common_1.Module)({
        controllers: [bom_controller_1.BomController, production_orders_controller_1.ProductionOrdersController],
        providers: [bom_service_1.BomService, production_orders_service_1.ProductionOrdersService],
        exports: [bom_service_1.BomService, production_orders_service_1.ProductionOrdersService],
    })
], ManufacturingModule);


/***/ }),

/***/ "./src/modules/manufacturing/services/bom.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/manufacturing/services/bom.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.BomService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let BomService = class BomService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const existing = await this.prisma.bom.findFirst({
            where: {
                companyId: tenantId,
                productId: createDto.productId,
                isActive: true,
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Active BOM already exists for this product');
        }
        const componentIds = createDto.components.map(c => c.productId);
        const components = await this.prisma.product.findMany({
            where: {
                id: { in: componentIds },
                companyId: tenantId,
            },
        });
        if (components.length !== componentIds.length) {
            throw new common_1.NotFoundException('One or more component products not found');
        }
        const count = await this.prisma.bom.count({
            where: { companyId: tenantId },
        });
        const bomNumber = `BOM-${String(count + 1).padStart(6, '0')}`;
        return this.prisma.bom.create({
            data: {
                companyId: tenantId,
                bomNumber,
                productId: createDto.productId,
                version: createDto.version || '1.0',
                isActive: true,
                components: {
                    create: createDto.components.map((comp) => ({
                        productId: comp.productId,
                        quantity: comp.quantity,
                        unit: comp.unit,
                        wastagePercentage: comp.wastagePercentage || 0,
                    })),
                },
            },
            include: {
                product: true,
                components: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.productId) {
            where.productId = options.productId;
        }
        if (options.isActive !== undefined) {
            where.isActive = options.isActive === 'true';
        }
        const [boms, total] = await Promise.all([
            this.prisma.bom.findMany({
                where,
                skip,
                take: limit,
                include: {
                    product: true,
                    _count: {
                        select: {
                            components: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.bom.count({ where }),
        ]);
        return {
            data: boms,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(tenantId, id) {
        const bom = await this.prisma.bom.findFirst({
            where: { id, companyId: tenantId },
            include: {
                product: true,
                components: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        if (!bom) {
            throw new common_1.NotFoundException('BOM not found');
        }
        return bom;
    }
    async update(tenantId, id, updateDto) {
        await this.findOne(tenantId, id);
        return this.prisma.bom.update({
            where: { id },
            data: {
                version: updateDto.version,
                isActive: updateDto.isActive,
                components: updateDto.components
                    ? {
                        deleteMany: {},
                        create: updateDto.components.map((comp) => ({
                            productId: comp.productId,
                            quantity: comp.quantity,
                            unit: comp.unit,
                            wastagePercentage: comp.wastagePercentage || 0,
                        })),
                    }
                    : undefined,
            },
            include: {
                product: true,
                components: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        return this.prisma.bom.update({
            where: { id },
            data: { isActive: false },
        });
    }
    async calculateCost(tenantId, bomId) {
        const bom = await this.findOne(tenantId, bomId);
        let totalCost = 0;
        for (const component of bom.components) {
            const product = await this.prisma.product.findUnique({
                where: { id: component.productId },
            });
            if (product) {
                const componentCost = product.costPrice.toNumber() * component.quantity.toNumber();
                const wastage = (componentCost * component.wastagePercentage.toNumber()) / 100;
                totalCost += componentCost + wastage;
            }
        }
        return {
            bomId,
            totalCost,
            components: bom.components.map((comp) => ({
                productId: comp.productId,
                productName: comp.product.name,
                quantity: comp.quantity.toNumber(),
                unitCost: comp.product.costPrice.toNumber(),
                totalCost: comp.product.costPrice.toNumber() * comp.quantity.toNumber(),
                wastagePercentage: comp.wastagePercentage.toNumber(),
            })),
        };
    }
    async checkAvailability(tenantId, bomId, quantityToProduce) {
        const bom = await this.findOne(tenantId, bomId);
        const availability = [];
        for (const component of bom.components) {
            const requiredQty = component.quantity.toNumber() * quantityToProduce;
            const stock = await this.prisma.stock.findMany({
                where: {
                    productId: component.productId,
                },
            });
            const availableQty = stock.reduce((sum, stock) => sum + stock.quantity.toNumber(), 0);
            availability.push({
                productId: component.productId,
                productName: component.product.name,
                requiredQuantity: requiredQty,
                availableQuantity: availableQty,
                isAvailable: availableQty >= requiredQty,
                shortage: Math.max(0, requiredQty - availableQty),
            });
        }
        const allAvailable = availability.every((item) => item.isAvailable);
        return {
            bomId,
            quantityToProduce,
            allAvailable,
            components: availability,
        };
    }
};
exports.BomService = BomService;
exports.BomService = BomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], BomService);


/***/ }),

/***/ "./src/modules/manufacturing/services/production-orders.service.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/manufacturing/services/production-orders.service.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.ProductionOrdersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let ProductionOrdersService = class ProductionOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const bom = await this.prisma.bom.findFirst({
            where: {
                id: createDto.bomId,
                companyId: tenantId,
                isActive: true,
            },
            include: {
                components: {
                    include: {
                        product: true,
                    },
                },
                product: true,
            },
        });
        if (!bom) {
            throw new common_1.NotFoundException('BOM not found or inactive');
        }
        const count = await this.prisma.productionOrder.count({
            where: { companyId: tenantId },
        });
        const orderNumber = `PRO-${String(count + 1).padStart(6, '0')}`;
        const shortages = [];
        for (const component of bom.components) {
            const requiredQty = component.quantity.toNumber() * createDto.quantity;
            const stock = await this.prisma.stock.findMany({
                where: { productId: component.productId },
            });
            const availableQty = stock.reduce((sum, stock) => sum + stock.quantity.toNumber(), 0);
            if (availableQty < requiredQty) {
                shortages.push({
                    product: component.product.name,
                    required: requiredQty,
                    available: availableQty,
                    shortage: requiredQty - availableQty,
                });
            }
        }
        if (shortages.length > 0 && !createDto.forceProduce) {
            throw new common_1.BadRequestException({
                message: 'Insufficient components',
                shortages,
            });
        }
        return this.prisma.productionOrder.create({
            data: {
                companyId: tenantId,
                orderNumber,
                bomId: createDto.bomId,
                productId: bom.productId,
                quantity: createDto.quantity,
                scheduledDate: createDto.scheduledDate,
                warehouseId: createDto.warehouseId,
                notes: createDto.notes,
                status: client_1.ProductionOrderStatus.DRAFT,
            },
            include: {
                bom: {
                    include: {
                        product: true,
                        components: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
                warehouse: true,
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.status) {
            where.status = options.status;
        }
        if (options.productId) {
            where.productId = options.productId;
        }
        const [orders, total] = await Promise.all([
            this.prisma.productionOrder.findMany({
                where,
                skip,
                take: limit,
                include: {
                    bom: {
                        include: {
                            product: true,
                        },
                    },
                    warehouse: true,
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.productionOrder.count({ where }),
        ]);
        return {
            data: orders,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(tenantId, id) {
        const order = await this.prisma.productionOrder.findFirst({
            where: { id, companyId: tenantId },
            include: {
                bom: {
                    include: {
                        product: true,
                        components: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
                warehouse: true,
            },
        });
        if (!order) {
            throw new common_1.NotFoundException('Production order not found');
        }
        return order;
    }
    async confirm(tenantId, id) {
        const order = await this.findOne(tenantId, id);
        if (order.status !== client_1.ProductionOrderStatus.DRAFT) {
            throw new common_1.BadRequestException('Only draft orders can be confirmed');
        }
        return this.prisma.productionOrder.update({
            where: { id },
            data: {
                status: client_1.ProductionOrderStatus.CONFIRMED,
                confirmedAt: new Date(),
            },
        });
    }
    async start(tenantId, id) {
        const order = await this.findOne(tenantId, id);
        if (order.status !== client_1.ProductionOrderStatus.CONFIRMED) {
            throw new common_1.BadRequestException('Only confirmed orders can be started');
        }
        await this.reserveComponents(tenantId, order);
        return this.prisma.productionOrder.update({
            where: { id },
            data: {
                status: client_1.ProductionOrderStatus.IN_PROGRESS,
                startedAt: new Date(),
            },
        });
    }
    async complete(tenantId, id, producedQuantity) {
        const order = await this.findOne(tenantId, id);
        if (order.status !== client_1.ProductionOrderStatus.IN_PROGRESS) {
            throw new common_1.BadRequestException('Only in-progress orders can be completed');
        }
        await this.prisma.$transaction(async (prisma) => {
            for (const component of order.bom.components) {
                const consumedQty = component.quantity.toNumber() * producedQuantity;
                const stock = await prisma.stock.findMany({
                    where: {
                        productId: component.productId,
                        quantity: { gt: 0 },
                    },
                    orderBy: { createdAt: 'asc' },
                });
                let remainingToConsume = consumedQty;
                for (const stock of stock) {
                    if (remainingToConsume <= 0)
                        break;
                    const consumeFromThis = Math.min(stock.quantity.toNumber(), remainingToConsume);
                    await prisma.stock.update({
                        where: {
                            productId_warehouseId: {
                                productId: stock.productId,
                                warehouseId: stock.warehouseId,
                            },
                        },
                        data: {
                            quantity: { decrement: consumeFromThis },
                        },
                    });
                    await prisma.stockMovement.create({
                        data: {
                            companyId: tenantId,
                            productId: component.productId,
                            warehouseId: stock.warehouseId,
                            type: 'OUT',
                            quantity: consumeFromThis,
                            reference: order.orderNumber,
                            notes: `Consumed for production order ${order.orderNumber}`,
                            date: new Date(),
                        },
                    });
                    remainingToConsume -= consumeFromThis;
                }
            }
            await prisma.stock.upsert({
                where: {
                    productId_warehouseId: {
                        productId: order.productId,
                        warehouseId: order.warehouseId,
                    },
                },
                create: {
                    productId: order.productId,
                    warehouseId: order.warehouseId,
                    quantity: producedQuantity,
                    reservedQuantity: 0,
                },
                update: {
                    quantity: { increment: producedQuantity },
                },
            });
            await prisma.stockMovement.create({
                data: {
                    companyId: tenantId,
                    productId: order.productId,
                    warehouseId: order.warehouseId,
                    type: 'IN',
                    quantity: producedQuantity,
                    reference: order.orderNumber,
                    notes: `Produced from order ${order.orderNumber}`,
                    date: new Date(),
                },
            });
            await prisma.productionOrder.update({
                where: { id },
                data: {
                    status: client_1.ProductionOrderStatus.COMPLETED,
                    completedAt: new Date(),
                    producedQuantity,
                },
            });
        });
        return this.findOne(tenantId, id);
    }
    async cancel(tenantId, id) {
        const order = await this.findOne(tenantId, id);
        if (order.status === client_1.ProductionOrderStatus.COMPLETED) {
            throw new common_1.BadRequestException('Cannot cancel completed orders');
        }
        if (order.status === client_1.ProductionOrderStatus.IN_PROGRESS) {
            await this.releaseComponents(tenantId, order);
        }
        return this.prisma.productionOrder.update({
            where: { id },
            data: {
                status: client_1.ProductionOrderStatus.CANCELLED,
            },
        });
    }
    async reserveComponents(tenantId, order) {
        for (const component of order.bom.components) {
            const requiredQty = component.quantity.toNumber() * order.quantity.toNumber();
            const stock = await this.prisma.stock.findMany({
                where: {
                    productId: component.productId,
                    quantity: { gt: 0 },
                },
                orderBy: { createdAt: 'asc' },
            });
            let remainingToReserve = requiredQty;
            for (const stock of stock) {
                if (remainingToReserve <= 0)
                    break;
                const reserveFromThis = Math.min(stock.quantity.toNumber(), remainingToReserve);
                await this.prisma.stock.update({
                    where: {
                        productId_warehouseId: {
                            productId: stock.productId,
                            warehouseId: stock.warehouseId,
                        },
                    },
                    data: {
                        reservedQuantity: { increment: reserveFromThis },
                    },
                });
                remainingToReserve -= reserveFromThis;
            }
        }
    }
    async releaseComponents(tenantId, order) {
        for (const component of order.bom.components) {
            const reservedQty = component.quantity.toNumber() * order.quantity.toNumber();
            const stock = await this.prisma.stock.findMany({
                where: {
                    productId: component.productId,
                    reservedQuantity: { gt: 0 },
                },
            });
            let remainingToRelease = reservedQty;
            for (const stock of stock) {
                if (remainingToRelease <= 0)
                    break;
                const releaseFromThis = Math.min(stock.reservedQuantity.toNumber(), remainingToRelease);
                await this.prisma.stock.update({
                    where: {
                        productId_warehouseId: {
                            productId: stock.productId,
                            warehouseId: stock.warehouseId,
                        },
                    },
                    data: {
                        reservedQuantity: { decrement: releaseFromThis },
                    },
                });
                remainingToRelease -= releaseFromThis;
            }
        }
    }
};
exports.ProductionOrdersService = ProductionOrdersService;
exports.ProductionOrdersService = ProductionOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ProductionOrdersService);


/***/ }),

/***/ "./src/modules/pos/controllers/sales.controller.ts":
/*!*********************************************************!*\
  !*** ./src/modules/pos/controllers/sales.controller.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const sales_service_1 = __webpack_require__(/*! ../services/sales.service */ "./src/modules/pos/services/sales.service.ts");
const create_pos_sale_dto_1 = __webpack_require__(/*! ../dto/create-pos-sale.dto */ "./src/modules/pos/dto/create-pos-sale.dto.ts");
let SalesController = class SalesController {
    constructor(salesService) {
        this.salesService = salesService;
    }
    create(tenantId, createDto) {
        return this.salesService.create(tenantId, createDto);
    }
    findAll(tenantId, sessionId, startDate, endDate, page, limit) {
        return this.salesService.findAll(tenantId, {
            sessionId,
            startDate,
            endDate,
            page,
            limit,
        });
    }
    findOne(tenantId, id) {
        return this.salesService.findOne(tenantId, id);
    }
    getReceipt(tenantId, id) {
        return this.salesService.getReceipt(tenantId, id);
    }
};
exports.SalesController = SalesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a POS sale' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_pos_sale_dto_1.CreatePosSaleDto !== "undefined" && create_pos_sale_dto_1.CreatePosSaleDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get POS sales' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('sessionId')),
    __param(2, (0, common_1.Query)('startDate')),
    __param(3, (0, common_1.Query)('endDate')),
    __param(4, (0, common_1.Query)('page')),
    __param(5, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get POS sale by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/receipt'),
    (0, swagger_1.ApiOperation)({ summary: 'Get sale receipt' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SalesController.prototype, "getReceipt", null);
exports.SalesController = SalesController = __decorate([
    (0, swagger_1.ApiTags)('pos'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('pos/sales'),
    __metadata("design:paramtypes", [typeof (_a = typeof sales_service_1.SalesService !== "undefined" && sales_service_1.SalesService) === "function" ? _a : Object])
], SalesController);


/***/ }),

/***/ "./src/modules/pos/controllers/sessions.controller.ts":
/*!************************************************************!*\
  !*** ./src/modules/pos/controllers/sessions.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../../../common/decorators/current-user.decorator */ "./src/common/decorators/current-user.decorator.ts");
const sessions_service_1 = __webpack_require__(/*! ../services/sessions.service */ "./src/modules/pos/services/sessions.service.ts");
const open_session_dto_1 = __webpack_require__(/*! ../dto/open-session.dto */ "./src/modules/pos/dto/open-session.dto.ts");
const close_session_dto_1 = __webpack_require__(/*! ../dto/close-session.dto */ "./src/modules/pos/dto/close-session.dto.ts");
let SessionsController = class SessionsController {
    constructor(sessionsService) {
        this.sessionsService = sessionsService;
    }
    open(tenantId, user, openDto) {
        return this.sessionsService.open(tenantId, user.id, openDto);
    }
    close(tenantId, id, closeDto) {
        return this.sessionsService.close(tenantId, id, closeDto);
    }
    getActive(tenantId, user) {
        return this.sessionsService.getActive(tenantId, user.id);
    }
    findAll(tenantId) {
        return this.sessionsService.findAll(tenantId);
    }
    findOne(tenantId, id) {
        return this.sessionsService.findOne(tenantId, id);
    }
};
exports.SessionsController = SessionsController;
__decorate([
    (0, common_1.Post)('open'),
    (0, swagger_1.ApiOperation)({ summary: 'Open a new POS session' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, typeof (_b = typeof open_session_dto_1.OpenSessionDto !== "undefined" && open_session_dto_1.OpenSessionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SessionsController.prototype, "open", null);
__decorate([
    (0, common_1.Put)(':id/close'),
    (0, swagger_1.ApiOperation)({ summary: 'Close POS session' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof close_session_dto_1.CloseSessionDto !== "undefined" && close_session_dto_1.CloseSessionDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], SessionsController.prototype, "close", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Get active session for current user' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SessionsController.prototype, "getActive", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all sessions' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SessionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get session by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SessionsController.prototype, "findOne", null);
exports.SessionsController = SessionsController = __decorate([
    (0, swagger_1.ApiTags)('pos'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('pos/sessions'),
    __metadata("design:paramtypes", [typeof (_a = typeof sessions_service_1.SessionsService !== "undefined" && sessions_service_1.SessionsService) === "function" ? _a : Object])
], SessionsController);


/***/ }),

/***/ "./src/modules/pos/dto/close-session.dto.ts":
/*!**************************************************!*\
  !*** ./src/modules/pos/dto/close-session.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CloseSessionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CloseSessionDto {
}
exports.CloseSessionDto = CloseSessionDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CloseSessionDto.prototype, "closingCash", void 0);


/***/ }),

/***/ "./src/modules/pos/dto/create-pos-sale.dto.ts":
/*!****************************************************!*\
  !*** ./src/modules/pos/dto/create-pos-sale.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreatePosSaleDto = exports.PosSaleLineDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class PosSaleLineDto {
}
exports.PosSaleLineDto = PosSaleLineDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PosSaleLineDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PosSaleLineDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PosSaleLineDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PosSaleLineDto.prototype, "taxRate", void 0);
class CreatePosSaleDto {
}
exports.CreatePosSaleDto = CreatePosSaleDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePosSaleDto.prototype, "sessionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePosSaleDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.PaymentMethod }),
    (0, class_validator_1.IsEnum)(client_1.PaymentMethod),
    __metadata("design:type", typeof (_a = typeof client_1.PaymentMethod !== "undefined" && client_1.PaymentMethod) === "function" ? _a : Object)
], CreatePosSaleDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePosSaleDto.prototype, "mpesaCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PosSaleLineDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PosSaleLineDto),
    __metadata("design:type", Array)
], CreatePosSaleDto.prototype, "lines", void 0);


/***/ }),

/***/ "./src/modules/pos/dto/open-session.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/pos/dto/open-session.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.OpenSessionDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class OpenSessionDto {
}
exports.OpenSessionDto = OpenSessionDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OpenSessionDto.prototype, "openingCash", void 0);


/***/ }),

/***/ "./src/modules/pos/pos.module.ts":
/*!***************************************!*\
  !*** ./src/modules/pos/pos.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sessions_controller_1 = __webpack_require__(/*! ./controllers/sessions.controller */ "./src/modules/pos/controllers/sessions.controller.ts");
const sales_controller_1 = __webpack_require__(/*! ./controllers/sales.controller */ "./src/modules/pos/controllers/sales.controller.ts");
const sessions_service_1 = __webpack_require__(/*! ./services/sessions.service */ "./src/modules/pos/services/sessions.service.ts");
const sales_service_1 = __webpack_require__(/*! ./services/sales.service */ "./src/modules/pos/services/sales.service.ts");
let PosModule = class PosModule {
};
exports.PosModule = PosModule;
exports.PosModule = PosModule = __decorate([
    (0, common_1.Module)({
        controllers: [sessions_controller_1.SessionsController, sales_controller_1.SalesController],
        providers: [sessions_service_1.SessionsService, sales_service_1.SalesService],
        exports: [sales_service_1.SalesService],
    })
], PosModule);


/***/ }),

/***/ "./src/modules/pos/services/sales.service.ts":
/*!***************************************************!*\
  !*** ./src/modules/pos/services/sales.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.SalesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let SalesService = class SalesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const session = await this.prisma.posSession.findFirst({
            where: {
                id: createDto.sessionId,
                companyId: tenantId,
                status: 'OPEN',
            },
        });
        if (!session) {
            throw new common_1.NotFoundException('Active session not found');
        }
        const count = await this.prisma.posSale.count({
            where: { companyId: tenantId },
        });
        const saleNumber = `SALE-${String(count + 1).padStart(6, '0')}`;
        let subtotal = 0;
        let taxAmount = 0;
        for (const line of createDto.lines) {
            const lineAmount = line.quantity * line.unitPrice;
            const lineTax = (lineAmount * line.taxRate) / 100;
            subtotal += lineAmount;
            taxAmount += lineTax;
        }
        const total = subtotal + taxAmount;
        return this.prisma.$transaction(async (prisma) => {
            const sale = await prisma.posSale.create({
                data: {
                    companyId: tenantId,
                    sessionId: createDto.sessionId,
                    saleNumber,
                    customerId: createDto.customerId,
                    date: new Date(),
                    subtotal,
                    taxAmount,
                    total,
                    paymentMethod: createDto.paymentMethod,
                    mpesaCode: createDto.mpesaCode,
                    lines: {
                        create: createDto.lines.map((line) => ({
                            productId: line.productId,
                            quantity: line.quantity,
                            unitPrice: line.unitPrice,
                            taxRate: line.taxRate,
                            amount: line.quantity * line.unitPrice,
                        })),
                    },
                },
                include: {
                    customer: true,
                    lines: {
                        include: {
                            product: true,
                        },
                    },
                },
            });
            for (const line of createDto.lines) {
                const stock = await prisma.stock.findFirst({
                    where: {
                        productId: line.productId,
                        quantity: { gte: line.quantity },
                    },
                });
                if (!stock) {
                    throw new common_1.BadRequestException(`Insufficient stock for product ${line.productId}`);
                }
                await prisma.stock.update({
                    where: {
                        productId_warehouseId: {
                            productId: line.productId,
                            warehouseId: stock.warehouseId,
                        },
                    },
                    data: {
                        quantity: {
                            decrement: line.quantity,
                        },
                    },
                });
                await prisma.stockMovement.create({
                    data: {
                        companyId: tenantId,
                        productId: line.productId,
                        warehouseId: stock.warehouseId,
                        type: 'OUT',
                        quantity: line.quantity,
                        reference: sale.saleNumber,
                        notes: 'POS Sale',
                        date: new Date(),
                    },
                });
            }
            return sale;
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 50;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.sessionId) {
            where.sessionId = options.sessionId;
        }
        if (options.startDate || options.endDate) {
            where.date = {};
            if (options.startDate)
                where.date.gte = new Date(options.startDate);
            if (options.endDate)
                where.date.lte = new Date(options.endDate);
        }
        const [sales, total] = await Promise.all([
            this.prisma.posSale.findMany({
                where,
                skip,
                take: limit,
                include: {
                    customer: true,
                    _count: {
                        select: {
                            lines: true,
                        },
                    },
                },
                orderBy: { date: 'desc' },
            }),
            this.prisma.posSale.count({ where }),
        ]);
        return {
            data: sales,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(tenantId, id) {
        const sale = await this.prisma.posSale.findFirst({
            where: { id, companyId: tenantId },
            include: {
                session: true,
                customer: true,
                lines: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        if (!sale) {
            throw new common_1.NotFoundException('Sale not found');
        }
        return sale;
    }
    async getReceipt(tenantId, saleId) {
        const sale = await this.findOne(tenantId, saleId);
        const company = await this.prisma.company.findUnique({
            where: { id: tenantId },
        });
        return {
            company: {
                name: company.name,
                phone: company.phone,
                email: company.email,
                address: company.address,
                kraPin: company.kraPin,
            },
            sale,
            printedAt: new Date(),
        };
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], SalesService);


/***/ }),

/***/ "./src/modules/pos/services/sessions.service.ts":
/*!******************************************************!*\
  !*** ./src/modules/pos/services/sessions.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.SessionsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let SessionsService = class SessionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async open(tenantId, userId, openDto) {
        const activeSession = await this.prisma.posSession.findFirst({
            where: {
                companyId: tenantId,
                userId,
                status: 'OPEN',
            },
        });
        if (activeSession) {
            throw new common_1.BadRequestException('User already has an active session');
        }
        const count = await this.prisma.posSession.count({
            where: { companyId: tenantId },
        });
        const sessionNumber = `POS-${String(count + 1).padStart(6, '0')}`;
        return this.prisma.posSession.create({
            data: {
                companyId: tenantId,
                sessionNumber,
                userId,
                openedAt: new Date(),
                openingCash: openDto.openingCash,
                status: 'OPEN',
            },
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
            },
        });
    }
    async close(tenantId, sessionId, closeDto) {
        const session = await this.findOne(tenantId, sessionId);
        if (session.status !== 'OPEN') {
            throw new common_1.BadRequestException('Session is not open');
        }
        const sales = await this.prisma.posSale.findMany({
            where: { sessionId },
        });
        const totalSales = sales.reduce((sum, sale) => sum + sale.total.toNumber(), 0);
        return this.prisma.posSession.update({
            where: { id: sessionId },
            data: {
                closedAt: new Date(),
                closingCash: closeDto.closingCash,
                totalSales,
                status: 'CLOSED',
            },
            include: {
                _count: {
                    select: {
                        sales: true,
                    },
                },
            },
        });
    }
    async getActive(tenantId, userId) {
        const session = await this.prisma.posSession.findFirst({
            where: {
                companyId: tenantId,
                userId,
                status: 'OPEN',
            },
            include: {
                sales: {
                    orderBy: { date: 'desc' },
                    take: 20,
                },
                _count: {
                    select: {
                        sales: true,
                    },
                },
            },
        });
        if (!session) {
            return null;
        }
        return {
            ...session,
            currentSales: session.sales.reduce((sum, sale) => sum + sale.total.toNumber(), 0),
        };
    }
    async findAll(tenantId) {
        return this.prisma.posSession.findMany({
            where: { companyId: tenantId },
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                    },
                },
                _count: {
                    select: {
                        sales: true,
                    },
                },
            },
            orderBy: { openedAt: 'desc' },
        });
    }
    async findOne(tenantId, id) {
        const session = await this.prisma.posSession.findFirst({
            where: { id, companyId: tenantId },
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
                sales: {
                    include: {
                        customer: true,
                        lines: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
        });
        if (!session) {
            throw new common_1.NotFoundException('Session not found');
        }
        return session;
    }
};
exports.SessionsService = SessionsService;
exports.SessionsService = SessionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], SessionsService);


/***/ }),

/***/ "./src/modules/procurement/controllers/bills.controller.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/procurement/controllers/bills.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BillsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const bills_service_1 = __webpack_require__(/*! ../services/bills.service */ "./src/modules/procurement/services/bills.service.ts");
const create_bill_dto_1 = __webpack_require__(/*! ../dto/create-bill.dto */ "./src/modules/procurement/dto/create-bill.dto.ts");
let BillsController = class BillsController {
    constructor(billsService) {
        this.billsService = billsService;
    }
    create(tenantId, createDto) {
        return this.billsService.create(tenantId, createDto);
    }
    findAll(tenantId, options) {
        return this.billsService.findAll(tenantId, options);
    }
    findOne(tenantId, id) {
        return this.billsService.findOne(tenantId, id);
    }
    submit(tenantId, id) {
        return this.billsService.submit(tenantId, id);
    }
};
exports.BillsController = BillsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new bill' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_bill_dto_1.CreateBillDto !== "undefined" && create_bill_dto_1.CreateBillDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all bills' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get bill by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/submit'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit bill' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "submit", null);
exports.BillsController = BillsController = __decorate([
    (0, swagger_1.ApiTags)('procurement'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('procurement/bills'),
    __metadata("design:paramtypes", [typeof (_a = typeof bills_service_1.BillsService !== "undefined" && bills_service_1.BillsService) === "function" ? _a : Object])
], BillsController);


/***/ }),

/***/ "./src/modules/procurement/controllers/purchase-orders.controller.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/procurement/controllers/purchase-orders.controller.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PurchaseOrdersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const purchase_orders_service_1 = __webpack_require__(/*! ../services/purchase-orders.service */ "./src/modules/procurement/services/purchase-orders.service.ts");
const create_purchase_order_dto_1 = __webpack_require__(/*! ../dto/create-purchase-order.dto */ "./src/modules/procurement/dto/create-purchase-order.dto.ts");
let PurchaseOrdersController = class PurchaseOrdersController {
    constructor(purchaseOrdersService) {
        this.purchaseOrdersService = purchaseOrdersService;
    }
    create(tenantId, createDto) {
        return this.purchaseOrdersService.create(tenantId, createDto);
    }
    findAll(tenantId, options) {
        return this.purchaseOrdersService.findAll(tenantId, options);
    }
    findOne(tenantId, id) {
        return this.purchaseOrdersService.findOne(tenantId, id);
    }
    send(tenantId, id) {
        return this.purchaseOrdersService.send(tenantId, id);
    }
    receive(tenantId, id) {
        return this.purchaseOrdersService.receive(tenantId, id);
    }
};
exports.PurchaseOrdersController = PurchaseOrdersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new purchase order' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_purchase_order_dto_1.CreatePurchaseOrderDto !== "undefined" && create_purchase_order_dto_1.CreatePurchaseOrderDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all purchase orders' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get purchase order by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/send'),
    (0, swagger_1.ApiOperation)({ summary: 'Send purchase order to supplier' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "send", null);
__decorate([
    (0, common_1.Put)(':id/receive'),
    (0, swagger_1.ApiOperation)({ summary: 'Receive purchase order' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "receive", null);
exports.PurchaseOrdersController = PurchaseOrdersController = __decorate([
    (0, swagger_1.ApiTags)('procurement'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('procurement/purchase-orders'),
    __metadata("design:paramtypes", [typeof (_a = typeof purchase_orders_service_1.PurchaseOrdersService !== "undefined" && purchase_orders_service_1.PurchaseOrdersService) === "function" ? _a : Object])
], PurchaseOrdersController);


/***/ }),

/***/ "./src/modules/procurement/controllers/suppliers.controller.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/procurement/controllers/suppliers.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuppliersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const suppliers_service_1 = __webpack_require__(/*! ../services/suppliers.service */ "./src/modules/procurement/services/suppliers.service.ts");
const create_supplier_dto_1 = __webpack_require__(/*! ../dto/create-supplier.dto */ "./src/modules/procurement/dto/create-supplier.dto.ts");
const update_supplier_dto_1 = __webpack_require__(/*! ../dto/update-supplier.dto */ "./src/modules/procurement/dto/update-supplier.dto.ts");
let SuppliersController = class SuppliersController {
    constructor(suppliersService) {
        this.suppliersService = suppliersService;
    }
    create(tenantId, createDto) {
        return this.suppliersService.create(tenantId, createDto);
    }
    findAll(tenantId, search, page, limit) {
        return this.suppliersService.findAll(tenantId, { search, page, limit });
    }
    findOne(tenantId, id) {
        return this.suppliersService.findOne(tenantId, id);
    }
    update(tenantId, id, updateDto) {
        return this.suppliersService.update(tenantId, id, updateDto);
    }
    remove(tenantId, id) {
        return this.suppliersService.remove(tenantId, id);
    }
};
exports.SuppliersController = SuppliersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new supplier' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_supplier_dto_1.CreateSupplierDto !== "undefined" && create_supplier_dto_1.CreateSupplierDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SuppliersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all suppliers' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], SuppliersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get supplier by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SuppliersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update supplier' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof update_supplier_dto_1.UpdateSupplierDto !== "undefined" && update_supplier_dto_1.UpdateSupplierDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], SuppliersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete supplier' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SuppliersController.prototype, "remove", null);
exports.SuppliersController = SuppliersController = __decorate([
    (0, swagger_1.ApiTags)('procurement'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('procurement/suppliers'),
    __metadata("design:paramtypes", [typeof (_a = typeof suppliers_service_1.SuppliersService !== "undefined" && suppliers_service_1.SuppliersService) === "function" ? _a : Object])
], SuppliersController);


/***/ }),

/***/ "./src/modules/procurement/dto/create-bill.dto.ts":
/*!********************************************************!*\
  !*** ./src/modules/procurement/dto/create-bill.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateBillDto = exports.BillLineDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class BillLineDto {
}
exports.BillLineDto = BillLineDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BillLineDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BillLineDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BillLineDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BillLineDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BillLineDto.prototype, "taxRate", void 0);
class CreateBillDto {
}
exports.CreateBillDto = CreateBillDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateBillDto.prototype, "supplierId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateBillDto.prototype, "purchaseOrderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateBillDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateBillDto.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [BillLineDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BillLineDto),
    __metadata("design:type", Array)
], CreateBillDto.prototype, "lines", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBillDto.prototype, "notes", void 0);


/***/ }),

/***/ "./src/modules/procurement/dto/create-purchase-order.dto.ts":
/*!******************************************************************!*\
  !*** ./src/modules/procurement/dto/create-purchase-order.dto.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreatePurchaseOrderDto = exports.PurchaseOrderLineDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class PurchaseOrderLineDto {
}
exports.PurchaseOrderLineDto = PurchaseOrderLineDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PurchaseOrderLineDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PurchaseOrderLineDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PurchaseOrderLineDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PurchaseOrderLineDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PurchaseOrderLineDto.prototype, "taxRate", void 0);
class CreatePurchaseOrderDto {
}
exports.CreatePurchaseOrderDto = CreatePurchaseOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreatePurchaseOrderDto.prototype, "supplierId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreatePurchaseOrderDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreatePurchaseOrderDto.prototype, "expectedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PurchaseOrderLineDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PurchaseOrderLineDto),
    __metadata("design:type", Array)
], CreatePurchaseOrderDto.prototype, "lines", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePurchaseOrderDto.prototype, "notes", void 0);


/***/ }),

/***/ "./src/modules/procurement/dto/create-supplier.dto.ts":
/*!************************************************************!*\
  !*** ./src/modules/procurement/dto/create-supplier.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateSupplierDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateSupplierDto {
}
exports.CreateSupplierDto = CreateSupplierDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "kraPin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSupplierDto.prototype, "paymentTerms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateSupplierDto.prototype, "isActive", void 0);


/***/ }),

/***/ "./src/modules/procurement/dto/update-supplier.dto.ts":
/*!************************************************************!*\
  !*** ./src/modules/procurement/dto/update-supplier.dto.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSupplierDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_supplier_dto_1 = __webpack_require__(/*! ./create-supplier.dto */ "./src/modules/procurement/dto/create-supplier.dto.ts");
class UpdateSupplierDto extends (0, swagger_1.PartialType)(create_supplier_dto_1.CreateSupplierDto) {
}
exports.UpdateSupplierDto = UpdateSupplierDto;


/***/ }),

/***/ "./src/modules/procurement/procurement.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/procurement/procurement.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProcurementModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const suppliers_controller_1 = __webpack_require__(/*! ./controllers/suppliers.controller */ "./src/modules/procurement/controllers/suppliers.controller.ts");
const purchase_orders_controller_1 = __webpack_require__(/*! ./controllers/purchase-orders.controller */ "./src/modules/procurement/controllers/purchase-orders.controller.ts");
const bills_controller_1 = __webpack_require__(/*! ./controllers/bills.controller */ "./src/modules/procurement/controllers/bills.controller.ts");
const suppliers_service_1 = __webpack_require__(/*! ./services/suppliers.service */ "./src/modules/procurement/services/suppliers.service.ts");
const purchase_orders_service_1 = __webpack_require__(/*! ./services/purchase-orders.service */ "./src/modules/procurement/services/purchase-orders.service.ts");
const bills_service_1 = __webpack_require__(/*! ./services/bills.service */ "./src/modules/procurement/services/bills.service.ts");
let ProcurementModule = class ProcurementModule {
};
exports.ProcurementModule = ProcurementModule;
exports.ProcurementModule = ProcurementModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            suppliers_controller_1.SuppliersController,
            purchase_orders_controller_1.PurchaseOrdersController,
            bills_controller_1.BillsController,
        ],
        providers: [
            suppliers_service_1.SuppliersService,
            purchase_orders_service_1.PurchaseOrdersService,
            bills_service_1.BillsService,
        ],
        exports: [bills_service_1.BillsService],
    })
], ProcurementModule);


/***/ }),

/***/ "./src/modules/procurement/services/bills.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/procurement/services/bills.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.BillsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let BillsService = class BillsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const count = await this.prisma.bill.count({ where: { companyId: tenantId } });
        const billNumber = `BILL-${String(count + 1).padStart(6, '0')}`;
        let subtotal = 0;
        let taxAmount = 0;
        for (const line of createDto.lines) {
            const lineAmount = line.quantity * line.unitPrice;
            const lineTax = (lineAmount * line.taxRate) / 100;
            subtotal += lineAmount;
            taxAmount += lineTax;
        }
        return this.prisma.bill.create({
            data: {
                companyId: tenantId,
                billNumber,
                supplierId: createDto.supplierId,
                purchaseOrderId: createDto.purchaseOrderId,
                date: createDto.date,
                dueDate: createDto.dueDate,
                subtotal,
                taxAmount,
                total: subtotal + taxAmount,
                notes: createDto.notes,
                lines: {
                    create: createDto.lines.map((line) => ({
                        productId: line.productId,
                        description: line.description,
                        quantity: line.quantity,
                        unitPrice: line.unitPrice,
                        taxRate: line.taxRate,
                        amount: line.quantity * line.unitPrice,
                    })),
                },
            },
            include: { supplier: true, lines: { include: { product: true } } },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.status)
            where.status = options.status;
        if (options.supplierId)
            where.supplierId = options.supplierId;
        const [bills, total] = await Promise.all([
            this.prisma.bill.findMany({
                where,
                skip,
                take: limit,
                include: { supplier: true },
                orderBy: { date: 'desc' },
            }),
            this.prisma.bill.count({ where }),
        ]);
        return { data: bills, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async findOne(tenantId, id) {
        const bill = await this.prisma.bill.findFirst({
            where: { id, companyId: tenantId },
            include: { supplier: true, purchaseOrder: true, lines: { include: { product: true } } },
        });
        if (!bill)
            throw new common_1.NotFoundException('Bill not found');
        return bill;
    }
    async submit(tenantId, id) {
        await this.findOne(tenantId, id);
        return this.prisma.bill.update({
            where: { id },
            data: { status: client_1.BillStatus.SUBMITTED },
        });
    }
};
exports.BillsService = BillsService;
exports.BillsService = BillsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], BillsService);


/***/ }),

/***/ "./src/modules/procurement/services/purchase-orders.service.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/procurement/services/purchase-orders.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.PurchaseOrdersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PurchaseOrdersService = class PurchaseOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const count = await this.prisma.purchaseOrder.count({ where: { companyId: tenantId } });
        const orderNumber = `PO-${String(count + 1).padStart(6, '0')}`;
        let subtotal = 0;
        let taxAmount = 0;
        for (const line of createDto.lines) {
            const lineAmount = line.quantity * line.unitPrice;
            const lineTax = (lineAmount * line.taxRate) / 100;
            subtotal += lineAmount;
            taxAmount += lineTax;
        }
        return this.prisma.purchaseOrder.create({
            data: {
                companyId: tenantId,
                orderNumber,
                supplierId: createDto.supplierId,
                date: createDto.date,
                expectedDate: createDto.expectedDate,
                subtotal,
                taxAmount,
                total: subtotal + taxAmount,
                notes: createDto.notes,
                lines: {
                    create: createDto.lines.map((line) => ({
                        productId: line.productId,
                        description: line.description,
                        quantity: line.quantity,
                        unitPrice: line.unitPrice,
                        taxRate: line.taxRate,
                        amount: line.quantity * line.unitPrice,
                    })),
                },
            },
            include: { supplier: true, lines: { include: { product: true } } },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.status)
            where.status = options.status;
        if (options.supplierId)
            where.supplierId = options.supplierId;
        const [orders, total] = await Promise.all([
            this.prisma.purchaseOrder.findMany({
                where,
                skip,
                take: limit,
                include: { supplier: true },
                orderBy: { date: 'desc' },
            }),
            this.prisma.purchaseOrder.count({ where }),
        ]);
        return { data: orders, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async findOne(tenantId, id) {
        const order = await this.prisma.purchaseOrder.findFirst({
            where: { id, companyId: tenantId },
            include: { supplier: true, lines: { include: { product: true } } },
        });
        if (!order)
            throw new common_1.NotFoundException('Purchase order not found');
        return order;
    }
    async send(tenantId, id) {
        await this.findOne(tenantId, id);
        return this.prisma.purchaseOrder.update({
            where: { id },
            data: { status: client_1.PurchaseOrderStatus.SENT },
        });
    }
    async receive(tenantId, id) {
        const order = await this.findOne(tenantId, id);
        await this.prisma.$transaction(async (prisma) => {
            for (const line of order.lines) {
                const warehouse = await prisma.warehouse.findFirst({
                    where: { companyId: tenantId, isActive: true },
                });
                if (warehouse) {
                    const stock = await prisma.stock.upsert({
                        where: {
                            productId_warehouseId: {
                                productId: line.productId,
                                warehouseId: warehouse.id,
                            },
                        },
                        create: {
                            productId: line.productId,
                            warehouseId: warehouse.id,
                            quantity: line.quantity,
                            reservedQuantity: 0,
                        },
                        update: {
                            quantity: { increment: line.quantity },
                        },
                    });
                    await prisma.stockMovement.create({
                        data: {
                            companyId: tenantId,
                            productId: line.productId,
                            warehouseId: warehouse.id,
                            type: 'IN',
                            quantity: line.quantity,
                            reference: order.orderNumber,
                            notes: 'Purchase Order Receipt',
                            date: new Date(),
                        },
                    });
                }
            }
            return prisma.purchaseOrder.update({
                where: { id },
                data: { status: client_1.PurchaseOrderStatus.RECEIVED },
            });
        });
        return this.findOne(tenantId, id);
    }
};
exports.PurchaseOrdersService = PurchaseOrdersService;
exports.PurchaseOrdersService = PurchaseOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PurchaseOrdersService);


/***/ }),

/***/ "./src/modules/procurement/services/suppliers.service.ts":
/*!***************************************************************!*\
  !*** ./src/modules/procurement/services/suppliers.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.SuppliersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let SuppliersService = class SuppliersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const existing = await this.prisma.supplier.findUnique({
            where: { companyId_code: { companyId: tenantId, code: createDto.code } },
        });
        if (existing)
            throw new common_1.ConflictException('Supplier code already exists');
        return this.prisma.supplier.create({
            data: { companyId: tenantId, ...createDto },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.search) {
            where.OR = [
                { name: { contains: options.search, mode: 'insensitive' } },
                { code: { contains: options.search, mode: 'insensitive' } },
            ];
        }
        const [suppliers, total] = await Promise.all([
            this.prisma.supplier.findMany({ where, skip, take: limit, orderBy: { name: 'asc' } }),
            this.prisma.supplier.count({ where }),
        ]);
        return { data: suppliers, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async findOne(tenantId, id) {
        const supplier = await this.prisma.supplier.findFirst({
            where: { id, companyId: tenantId },
            include: {
                _count: { select: { purchaseOrders: true, bills: true } },
            },
        });
        if (!supplier)
            throw new common_1.NotFoundException('Supplier not found');
        return supplier;
    }
    async update(tenantId, id, updateDto) {
        await this.findOne(tenantId, id);
        return this.prisma.supplier.update({ where: { id }, data: updateDto });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        const hasTransactions = await this.prisma.supplier.findFirst({
            where: { id, OR: [{ purchaseOrders: { some: {} } }, { bills: { some: {} } }] },
        });
        if (hasTransactions) {
            return this.prisma.supplier.update({ where: { id }, data: { isActive: false } });
        }
        return this.prisma.supplier.delete({ where: { id } });
    }
};
exports.SuppliersService = SuppliersService;
exports.SuppliersService = SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], SuppliersService);


/***/ }),

/***/ "./src/modules/reporting/controllers/financial-reports.controller.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/reporting/controllers/financial-reports.controller.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinancialReportsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const financial_reports_service_1 = __webpack_require__(/*! ../services/financial-reports.service */ "./src/modules/reporting/services/financial-reports.service.ts");
let FinancialReportsController = class FinancialReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    profitAndLoss(tenantId, startDate, endDate) {
        return this.reportsService.profitAndLoss(tenantId, new Date(startDate), new Date(endDate));
    }
    balanceSheet(tenantId, asOfDate) {
        return this.reportsService.balanceSheet(tenantId, new Date(asOfDate));
    }
    cashFlow(tenantId, startDate, endDate) {
        return this.reportsService.cashFlow(tenantId, new Date(startDate), new Date(endDate));
    }
    salesAnalysis(tenantId, startDate, endDate) {
        return this.reportsService.salesAnalysis(tenantId, new Date(startDate), new Date(endDate));
    }
};
exports.FinancialReportsController = FinancialReportsController;
__decorate([
    (0, common_1.Get)('profit-and-loss'),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], FinancialReportsController.prototype, "profitAndLoss", null);
__decorate([
    (0, common_1.Get)('balance-sheet'),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('asOfDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinancialReportsController.prototype, "balanceSheet", null);
__decorate([
    (0, common_1.Get)('cash-flow'),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], FinancialReportsController.prototype, "cashFlow", null);
__decorate([
    (0, common_1.Get)('sales-analysis'),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], FinancialReportsController.prototype, "salesAnalysis", null);
exports.FinancialReportsController = FinancialReportsController = __decorate([
    (0, swagger_1.ApiTags)('reporting'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('reporting/financial'),
    __metadata("design:paramtypes", [typeof (_a = typeof financial_reports_service_1.FinancialReportsService !== "undefined" && financial_reports_service_1.FinancialReportsService) === "function" ? _a : Object])
], FinancialReportsController);


/***/ }),

/***/ "./src/modules/reporting/controllers/operational-reports.controller.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/reporting/controllers/operational-reports.controller.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperationalReportsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const operational_reports_service_1 = __webpack_require__(/*! ../services/operational-reports.service */ "./src/modules/reporting/services/operational-reports.service.ts");
let OperationalReportsController = class OperationalReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    inventoryValuation(tenantId) {
        return this.reportsService.inventoryValuation(tenantId);
    }
    stockMovements(tenantId, startDate, endDate) {
        return this.reportsService.stockMovementReport(tenantId, new Date(startDate), new Date(endDate));
    }
    purchaseAnalysis(tenantId, startDate, endDate) {
        return this.reportsService.purchaseAnalysis(tenantId, new Date(startDate), new Date(endDate));
    }
};
exports.OperationalReportsController = OperationalReportsController;
__decorate([
    (0, common_1.Get)('inventory-valuation'),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OperationalReportsController.prototype, "inventoryValuation", null);
__decorate([
    (0, common_1.Get)('stock-movements'),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], OperationalReportsController.prototype, "stockMovements", null);
__decorate([
    (0, common_1.Get)('purchase-analysis'),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], OperationalReportsController.prototype, "purchaseAnalysis", null);
exports.OperationalReportsController = OperationalReportsController = __decorate([
    (0, swagger_1.ApiTags)('reporting'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('reporting/operational'),
    __metadata("design:paramtypes", [typeof (_a = typeof operational_reports_service_1.OperationalReportsService !== "undefined" && operational_reports_service_1.OperationalReportsService) === "function" ? _a : Object])
], OperationalReportsController);


/***/ }),

/***/ "./src/modules/reporting/reporting.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/reporting/reporting.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const financial_reports_controller_1 = __webpack_require__(/*! ./controllers/financial-reports.controller */ "./src/modules/reporting/controllers/financial-reports.controller.ts");
const operational_reports_controller_1 = __webpack_require__(/*! ./controllers/operational-reports.controller */ "./src/modules/reporting/controllers/operational-reports.controller.ts");
const financial_reports_service_1 = __webpack_require__(/*! ./services/financial-reports.service */ "./src/modules/reporting/services/financial-reports.service.ts");
const operational_reports_service_1 = __webpack_require__(/*! ./services/operational-reports.service */ "./src/modules/reporting/services/operational-reports.service.ts");
let ReportingModule = class ReportingModule {
};
exports.ReportingModule = ReportingModule;
exports.ReportingModule = ReportingModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            financial_reports_controller_1.FinancialReportsController,
            operational_reports_controller_1.OperationalReportsController,
        ],
        providers: [
            financial_reports_service_1.FinancialReportsService,
            operational_reports_service_1.OperationalReportsService,
        ],
        exports: [
            financial_reports_service_1.FinancialReportsService,
            operational_reports_service_1.OperationalReportsService,
        ],
    })
], ReportingModule);


/***/ }),

/***/ "./src/modules/reporting/services/financial-reports.service.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/reporting/services/financial-reports.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.FinancialReportsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let FinancialReportsService = class FinancialReportsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async profitAndLoss(tenantId, startDate, endDate) {
        const journalLines = await this.prisma.journalLine.findMany({
            where: {
                entry: {
                    companyId: tenantId,
                    status: 'POSTED',
                    date: {
                        gte: startDate,
                        lte: endDate,
                    },
                },
            },
            include: {
                account: true,
            },
        });
        const income = journalLines
            .filter((l) => l.account.type === 'INCOME')
            .reduce((sum, l) => sum + l.credit.toNumber() - l.debit.toNumber(), 0);
        const expenses = journalLines
            .filter((l) => l.account.type === 'EXPENSE')
            .reduce((sum, l) => sum + l.debit.toNumber() - l.credit.toNumber(), 0);
        const netProfit = income - expenses;
        return {
            period: { startDate, endDate },
            income,
            expenses,
            netProfit,
            margin: income > 0 ? (netProfit / income) * 100 : 0,
        };
    }
    async balanceSheet(tenantId, asOfDate) {
        const accounts = await this.prisma.account.findMany({
            where: {
                companyId: tenantId,
                isActive: true,
            },
        });
        const assets = accounts
            .filter((a) => a.type === 'ASSET')
            .reduce((sum, a) => sum + a.balance.toNumber(), 0);
        const liabilities = accounts
            .filter((a) => a.type === 'LIABILITY')
            .reduce((sum, a) => sum + a.balance.toNumber(), 0);
        const equity = accounts
            .filter((a) => a.type === 'EQUITY')
            .reduce((sum, a) => sum + a.balance.toNumber(), 0);
        return {
            asOfDate,
            assets,
            liabilities,
            equity,
            totalLiabilitiesAndEquity: liabilities + equity,
        };
    }
    async cashFlow(tenantId, startDate, endDate) {
        const entries = await this.prisma.journalEntry.findMany({
            where: {
                companyId: tenantId,
                status: 'POSTED',
                date: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            include: {
                lines: {
                    include: {
                        account: true,
                    },
                },
            },
        });
        let operating = 0;
        let investing = 0;
        let financing = 0;
        entries.forEach((entry) => {
            entry.lines.forEach((line) => {
                const amount = line.debit.toNumber() - line.credit.toNumber();
                if (line.account.type === 'INCOME' || line.account.type === 'EXPENSE') {
                    operating += amount;
                }
                else if (line.account.code.startsWith('15')) {
                    investing += amount;
                }
                else if (line.account.code.startsWith('2')) {
                    financing += amount;
                }
            });
        });
        return {
            period: { startDate, endDate },
            operating,
            investing,
            financing,
            netChange: operating + investing + financing,
        };
    }
    async salesAnalysis(tenantId, startDate, endDate) {
        const invoices = await this.prisma.invoice.findMany({
            where: {
                companyId: tenantId,
                date: {
                    gte: startDate,
                    lte: endDate,
                },
                status: { not: 'CANCELLED' },
            },
            include: {
                customer: true,
                lines: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        const totalSales = invoices.reduce((sum, inv) => sum + inv.total.toNumber(), 0);
        const totalPaid = invoices.reduce((sum, inv) => sum + inv.paidAmount.toNumber(), 0);
        const byCustomer = invoices.reduce((acc, inv) => {
            const key = inv.customer.name;
            if (!acc[key])
                acc[key] = 0;
            acc[key] += inv.total.toNumber();
            return acc;
        }, {});
        const byProduct = invoices.flatMap((inv) => inv.lines).reduce((acc, line) => {
            const key = line.product.name;
            if (!acc[key])
                acc[key] = { quantity: 0, amount: 0 };
            acc[key].quantity += line.quantity.toNumber();
            acc[key].amount += line.amount.toNumber();
            return acc;
        }, {});
        return {
            period: { startDate, endDate },
            totalInvoices: invoices.length,
            totalSales,
            totalPaid,
            outstanding: totalSales - totalPaid,
            byCustomer,
            byProduct,
        };
    }
};
exports.FinancialReportsService = FinancialReportsService;
exports.FinancialReportsService = FinancialReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], FinancialReportsService);


/***/ }),

/***/ "./src/modules/reporting/services/operational-reports.service.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/reporting/services/operational-reports.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.OperationalReportsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let OperationalReportsService = class OperationalReportsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async inventoryValuation(tenantId) {
        const products = await this.prisma.product.findMany({
            where: {
                companyId: tenantId,
                isActive: true,
                trackInventory: true,
            },
            include: {
                stock: true,
            },
        });
        const valuation = products.map((product) => {
            const totalStock = product.stock.reduce((sum, stock) => sum + stock.quantity.toNumber(), 0);
            const value = totalStock * product.costPrice.toNumber();
            return {
                sku: product.sku,
                name: product.name,
                quantity: totalStock,
                costPrice: product.costPrice.toNumber(),
                value,
            };
        });
        const totalValue = valuation.reduce((sum, item) => sum + item.value, 0);
        return {
            items: valuation,
            totalValue,
        };
    }
    async stockMovementReport(tenantId, startDate, endDate) {
        const movements = await this.prisma.stockMovement.findMany({
            where: {
                companyId: tenantId,
                date: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            include: {
                product: true,
                warehouse: true,
            },
            orderBy: {
                date: 'desc',
            },
        });
        const summary = {
            totalMovements: movements.length,
            totalIn: movements
                .filter((m) => m.type === 'IN')
                .reduce((sum, m) => sum + m.quantity.toNumber(), 0),
            totalOut: movements
                .filter((m) => m.type === 'OUT')
                .reduce((sum, m) => sum + m.quantity.toNumber(), 0),
            movements: movements.map((m) => ({
                date: m.date,
                type: m.type,
                product: m.product.name,
                warehouse: m.warehouse.name,
                quantity: m.quantity.toNumber(),
                reference: m.reference,
            })),
        };
        return summary;
    }
    async purchaseAnalysis(tenantId, startDate, endDate) {
        const bills = await this.prisma.bill.findMany({
            where: {
                companyId: tenantId,
                date: {
                    gte: startDate,
                    lte: endDate,
                },
                status: { not: 'CANCELLED' },
            },
            include: {
                supplier: true,
                lines: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        const totalPurchases = bills.reduce((sum, bill) => sum + bill.total.toNumber(), 0);
        const totalPaid = bills.reduce((sum, bill) => sum + bill.paidAmount.toNumber(), 0);
        const bySupplier = bills.reduce((acc, bill) => {
            const key = bill.supplier.name;
            if (!acc[key])
                acc[key] = 0;
            acc[key] += bill.total.toNumber();
            return acc;
        }, {});
        return {
            period: { startDate, endDate },
            totalBills: bills.length,
            totalPurchases,
            totalPaid,
            outstanding: totalPurchases - totalPaid,
            bySupplier,
        };
    }
};
exports.OperationalReportsService = OperationalReportsService;
exports.OperationalReportsService = OperationalReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], OperationalReportsService);


/***/ }),

/***/ "./src/modules/roles/dto/create-role.dto.ts":
/*!**************************************************!*\
  !*** ./src/modules/roles/dto/create-role.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.AssignPermissionsDto = exports.CreateRoleDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateRoleDto {
}
exports.CreateRoleDto = CreateRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
class AssignPermissionsDto {
}
exports.AssignPermissionsDto = AssignPermissionsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], AssignPermissionsDto.prototype, "permissionIds", void 0);


/***/ }),

/***/ "./src/modules/roles/roles.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/roles/roles.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const roles_service_1 = __webpack_require__(/*! ./roles.service */ "./src/modules/roles/roles.service.ts");
const create_role_dto_1 = __webpack_require__(/*! ./dto/create-role.dto */ "./src/modules/roles/dto/create-role.dto.ts");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    create(tenantId, createDto) {
        return this.rolesService.create(tenantId, createDto);
    }
    findAll(tenantId) {
        return this.rolesService.findAll(tenantId);
    }
    getAllPermissions() {
        return this.rolesService.getAllPermissions();
    }
    findOne(tenantId, id) {
        return this.rolesService.findOne(tenantId, id);
    }
    assignPermissions(id, dto) {
        return this.rolesService.assignPermissions(id, dto);
    }
    assignRoleToUser(roleId, userId) {
        return this.rolesService.assignRoleToUser(userId, roleId);
    }
    removeRoleFromUser(roleId, userId) {
        return this.rolesService.removeRoleFromUser(userId, roleId);
    }
};
exports.RolesController = RolesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_role_dto_1.CreateRoleDto !== "undefined" && create_role_dto_1.CreateRoleDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('permissions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "getAllPermissions", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/permissions'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof create_role_dto_1.AssignPermissionsDto !== "undefined" && create_role_dto_1.AssignPermissionsDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "assignPermissions", null);
__decorate([
    (0, common_1.Post)(':roleId/users/:userId'),
    __param(0, (0, common_1.Param)('roleId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "assignRoleToUser", null);
__decorate([
    (0, common_1.Delete)(':roleId/users/:userId'),
    __param(0, (0, common_1.Param)('roleId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "removeRoleFromUser", null);
exports.RolesController = RolesController = __decorate([
    (0, swagger_1.ApiTags)('roles'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [typeof (_a = typeof roles_service_1.RolesService !== "undefined" && roles_service_1.RolesService) === "function" ? _a : Object])
], RolesController);


/***/ }),

/***/ "./src/modules/roles/roles.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/roles/roles.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const roles_controller_1 = __webpack_require__(/*! ./roles.controller */ "./src/modules/roles/roles.controller.ts");
const roles_service_1 = __webpack_require__(/*! ./roles.service */ "./src/modules/roles/roles.service.ts");
let RolesModule = class RolesModule {
};
exports.RolesModule = RolesModule;
exports.RolesModule = RolesModule = __decorate([
    (0, common_1.Module)({
        controllers: [roles_controller_1.RolesController],
        providers: [roles_service_1.RolesService],
        exports: [roles_service_1.RolesService],
    })
], RolesModule);


/***/ }),

/***/ "./src/modules/roles/roles.service.ts":
/*!********************************************!*\
  !*** ./src/modules/roles/roles.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.RolesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let RolesService = class RolesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const existing = await this.prisma.role.findUnique({
            where: {
                companyId_name: {
                    companyId: tenantId,
                    name: createDto.name,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Role name already exists');
        }
        return this.prisma.role.create({
            data: {
                companyId: tenantId,
                ...createDto,
            },
        });
    }
    async findAll(tenantId) {
        return this.prisma.role.findMany({
            where: { companyId: tenantId },
            include: {
                _count: {
                    select: {
                        users: true,
                        permissions: true,
                    },
                },
            },
        });
    }
    async findOne(tenantId, id) {
        const role = await this.prisma.role.findFirst({
            where: { id, companyId: tenantId },
            include: {
                permissions: {
                    include: {
                        permission: true,
                    },
                },
                users: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                email: true,
                                firstName: true,
                                lastName: true,
                            },
                        },
                    },
                },
            },
        });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        return role;
    }
    async assignPermissions(roleId, dto) {
        await this.prisma.rolePermission.deleteMany({
            where: { roleId },
        });
        if (dto.permissionIds.length > 0) {
            await this.prisma.rolePermission.createMany({
                data: dto.permissionIds.map((permissionId) => ({
                    roleId,
                    permissionId,
                })),
            });
        }
        return this.prisma.role.findUnique({
            where: { id: roleId },
            include: {
                permissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });
    }
    async assignRoleToUser(userId, roleId) {
        const existing = await this.prisma.userRole.findUnique({
            where: {
                userId_roleId: {
                    userId,
                    roleId,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('User already has this role');
        }
        return this.prisma.userRole.create({
            data: { userId, roleId },
        });
    }
    async removeRoleFromUser(userId, roleId) {
        return this.prisma.userRole.delete({
            where: {
                userId_roleId: {
                    userId,
                    roleId,
                },
            },
        });
    }
    async getAllPermissions() {
        return this.prisma.permission.findMany({
            orderBy: [{ module: 'asc' }, { name: 'asc' }],
        });
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], RolesService);


/***/ }),

/***/ "./src/modules/sales/controllers/customers.controller.ts":
/*!***************************************************************!*\
  !*** ./src/modules/sales/controllers/customers.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const customers_service_1 = __webpack_require__(/*! ../services/customers.service */ "./src/modules/sales/services/customers.service.ts");
const create_customer_dto_1 = __webpack_require__(/*! ../dto/create-customer.dto */ "./src/modules/sales/dto/create-customer.dto.ts");
const update_customer_dto_1 = __webpack_require__(/*! ../dto/update-customer.dto */ "./src/modules/sales/dto/update-customer.dto.ts");
let CustomersController = class CustomersController {
    constructor(customersService) {
        this.customersService = customersService;
    }
    create(tenantId, createDto) {
        return this.customersService.create(tenantId, createDto);
    }
    findAll(tenantId, search, page, limit) {
        return this.customersService.findAll(tenantId, { search, page, limit });
    }
    findOne(tenantId, id) {
        return this.customersService.findOne(tenantId, id);
    }
    update(tenantId, id, updateDto) {
        return this.customersService.update(tenantId, id, updateDto);
    }
    remove(tenantId, id) {
        return this.customersService.remove(tenantId, id);
    }
    getInvoices(tenantId, id) {
        return this.customersService.getInvoices(tenantId, id);
    }
    getBalance(tenantId, id) {
        return this.customersService.getBalance(tenantId, id);
    }
};
exports.CustomersController = CustomersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new customer' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_customer_dto_1.CreateCustomerDto !== "undefined" && create_customer_dto_1.CreateCustomerDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all customers' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get customer by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update customer' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof update_customer_dto_1.UpdateCustomerDto !== "undefined" && update_customer_dto_1.UpdateCustomerDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete customer' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/invoices'),
    (0, swagger_1.ApiOperation)({ summary: 'Get customer invoices' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "getInvoices", null);
__decorate([
    (0, common_1.Get)(':id/balance'),
    (0, swagger_1.ApiOperation)({ summary: 'Get customer balance' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "getBalance", null);
exports.CustomersController = CustomersController = __decorate([
    (0, swagger_1.ApiTags)('sales'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('sales/customers'),
    __metadata("design:paramtypes", [typeof (_a = typeof customers_service_1.CustomersService !== "undefined" && customers_service_1.CustomersService) === "function" ? _a : Object])
], CustomersController);


/***/ }),

/***/ "./src/modules/sales/controllers/invoices.controller.ts":
/*!**************************************************************!*\
  !*** ./src/modules/sales/controllers/invoices.controller.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const invoices_service_1 = __webpack_require__(/*! ../services/invoices.service */ "./src/modules/sales/services/invoices.service.ts");
const create_invoice_dto_1 = __webpack_require__(/*! ../dto/create-invoice.dto */ "./src/modules/sales/dto/create-invoice.dto.ts");
let InvoicesController = class InvoicesController {
    constructor(invoicesService) {
        this.invoicesService = invoicesService;
    }
    create(tenantId, createDto) {
        return this.invoicesService.create(tenantId, createDto);
    }
    findAll(tenantId, status, customerId, page, limit) {
        return this.invoicesService.findAll(tenantId, { status, customerId, page, limit });
    }
    findOne(tenantId, id) {
        return this.invoicesService.findOne(tenantId, id);
    }
    send(tenantId, id) {
        return this.invoicesService.send(tenantId, id);
    }
    cancel(tenantId, id) {
        return this.invoicesService.cancel(tenantId, id);
    }
    generatePdf(tenantId, id) {
        return this.invoicesService.generatePdf(tenantId, id);
    }
};
exports.InvoicesController = InvoicesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new invoice' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_invoice_dto_1.CreateInvoiceDto !== "undefined" && create_invoice_dto_1.CreateInvoiceDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all invoices' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('customerId')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get invoice by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/send'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark invoice as sent' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "send", null);
__decorate([
    (0, common_1.Put)(':id/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel invoice' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "cancel", null);
__decorate([
    (0, common_1.Get)(':id/pdf'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate invoice PDF' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "generatePdf", null);
exports.InvoicesController = InvoicesController = __decorate([
    (0, swagger_1.ApiTags)('sales'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('sales/invoices'),
    __metadata("design:paramtypes", [typeof (_a = typeof invoices_service_1.InvoicesService !== "undefined" && invoices_service_1.InvoicesService) === "function" ? _a : Object])
], InvoicesController);


/***/ }),

/***/ "./src/modules/sales/controllers/orders.controller.ts":
/*!************************************************************!*\
  !*** ./src/modules/sales/controllers/orders.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const orders_service_1 = __webpack_require__(/*! ../services/orders.service */ "./src/modules/sales/services/orders.service.ts");
const create_order_dto_1 = __webpack_require__(/*! ../dto/create-order.dto */ "./src/modules/sales/dto/create-order.dto.ts");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    create(tenantId, createDto) {
        return this.ordersService.create(tenantId, createDto);
    }
    findAll(tenantId, options) {
        return this.ordersService.findAll(tenantId, options);
    }
    findOne(tenantId, id) {
        return this.ordersService.findOne(tenantId, id);
    }
    confirm(tenantId, id) {
        return this.ordersService.confirm(tenantId, id);
    }
    complete(tenantId, id) {
        return this.ordersService.complete(tenantId, id);
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new sales order' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_order_dto_1.CreateSalesOrderDto !== "undefined" && create_order_dto_1.CreateSalesOrderDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all sales orders' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get sales order by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/confirm'),
    (0, swagger_1.ApiOperation)({ summary: 'Confirm sales order' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "confirm", null);
__decorate([
    (0, common_1.Put)(':id/complete'),
    (0, swagger_1.ApiOperation)({ summary: 'Complete sales order' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "complete", null);
exports.OrdersController = OrdersController = __decorate([
    (0, swagger_1.ApiTags)('sales'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('sales/orders'),
    __metadata("design:paramtypes", [typeof (_a = typeof orders_service_1.OrdersService !== "undefined" && orders_service_1.OrdersService) === "function" ? _a : Object])
], OrdersController);


/***/ }),

/***/ "./src/modules/sales/controllers/quotations.controller.ts":
/*!****************************************************************!*\
  !*** ./src/modules/sales/controllers/quotations.controller.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuotationsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const tenant_guard_1 = __webpack_require__(/*! ../../../common/guards/tenant.guard */ "./src/common/guards/tenant.guard.ts");
const tenant_decorator_1 = __webpack_require__(/*! ../../../common/decorators/tenant.decorator */ "./src/common/decorators/tenant.decorator.ts");
const quotations_service_1 = __webpack_require__(/*! ../services/quotations.service */ "./src/modules/sales/services/quotations.service.ts");
const create_quotation_dto_1 = __webpack_require__(/*! ../dto/create-quotation.dto */ "./src/modules/sales/dto/create-quotation.dto.ts");
let QuotationsController = class QuotationsController {
    constructor(quotationsService) {
        this.quotationsService = quotationsService;
    }
    create(tenantId, createDto) {
        return this.quotationsService.create(tenantId, createDto);
    }
    findAll(tenantId, status, customerId, page, limit) {
        return this.quotationsService.findAll(tenantId, { status, customerId, page, limit });
    }
    findOne(tenantId, id) {
        return this.quotationsService.findOne(tenantId, id);
    }
    send(tenantId, id) {
        return this.quotationsService.send(tenantId, id);
    }
    accept(tenantId, id) {
        return this.quotationsService.accept(tenantId, id);
    }
    reject(tenantId, id) {
        return this.quotationsService.reject(tenantId, id);
    }
};
exports.QuotationsController = QuotationsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new quotation' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof create_quotation_dto_1.CreateQuotationDto !== "undefined" && create_quotation_dto_1.CreateQuotationDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], QuotationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all quotations' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('customerId')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], QuotationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get quotation by ID' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], QuotationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/send'),
    (0, swagger_1.ApiOperation)({ summary: 'Send quotation to customer' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], QuotationsController.prototype, "send", null);
__decorate([
    (0, common_1.Put)(':id/accept'),
    (0, swagger_1.ApiOperation)({ summary: 'Accept quotation' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], QuotationsController.prototype, "accept", null);
__decorate([
    (0, common_1.Put)(':id/reject'),
    (0, swagger_1.ApiOperation)({ summary: 'Reject quotation' }),
    __param(0, (0, tenant_decorator_1.CurrentTenant)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], QuotationsController.prototype, "reject", null);
exports.QuotationsController = QuotationsController = __decorate([
    (0, swagger_1.ApiTags)('sales'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, tenant_guard_1.TenantGuard),
    (0, common_1.Controller)('sales/quotations'),
    __metadata("design:paramtypes", [typeof (_a = typeof quotations_service_1.QuotationsService !== "undefined" && quotations_service_1.QuotationsService) === "function" ? _a : Object])
], QuotationsController);


/***/ }),

/***/ "./src/modules/sales/dto/create-customer.dto.ts":
/*!******************************************************!*\
  !*** ./src/modules/sales/dto/create-customer.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateCustomerDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateCustomerDto {
}
exports.CreateCustomerDto = CreateCustomerDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "kraPin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCustomerDto.prototype, "creditLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCustomerDto.prototype, "paymentTerms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCustomerDto.prototype, "isActive", void 0);


/***/ }),

/***/ "./src/modules/sales/dto/create-invoice.dto.ts":
/*!*****************************************************!*\
  !*** ./src/modules/sales/dto/create-invoice.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateInvoiceDto = exports.InvoiceLineDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class InvoiceLineDto {
}
exports.InvoiceLineDto = InvoiceLineDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], InvoiceLineDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvoiceLineDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InvoiceLineDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InvoiceLineDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InvoiceLineDto.prototype, "taxRate", void 0);
class CreateInvoiceDto {
}
exports.CreateInvoiceDto = CreateInvoiceDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "salesOrderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateInvoiceDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateInvoiceDto.prototype, "dueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [InvoiceLineDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => InvoiceLineDto),
    __metadata("design:type", Array)
], CreateInvoiceDto.prototype, "lines", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "notes", void 0);


/***/ }),

/***/ "./src/modules/sales/dto/create-order.dto.ts":
/*!***************************************************!*\
  !*** ./src/modules/sales/dto/create-order.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateSalesOrderDto = exports.SalesOrderLineDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class SalesOrderLineDto {
}
exports.SalesOrderLineDto = SalesOrderLineDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SalesOrderLineDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SalesOrderLineDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SalesOrderLineDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SalesOrderLineDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SalesOrderLineDto.prototype, "taxRate", void 0);
class CreateSalesOrderDto {
}
exports.CreateSalesOrderDto = CreateSalesOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateSalesOrderDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateSalesOrderDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateSalesOrderDto.prototype, "expectedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SalesOrderLineDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SalesOrderLineDto),
    __metadata("design:type", Array)
], CreateSalesOrderDto.prototype, "lines", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSalesOrderDto.prototype, "notes", void 0);


/***/ }),

/***/ "./src/modules/sales/dto/create-quotation.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/sales/dto/create-quotation.dto.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CreateQuotationDto = exports.QuotationLineDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class QuotationLineDto {
}
exports.QuotationLineDto = QuotationLineDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], QuotationLineDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuotationLineDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QuotationLineDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QuotationLineDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QuotationLineDto.prototype, "taxRate", void 0);
class CreateQuotationDto {
}
exports.CreateQuotationDto = CreateQuotationDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateQuotationDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateQuotationDto.prototype, "validUntil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [QuotationLineDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => QuotationLineDto),
    __metadata("design:type", Array)
], CreateQuotationDto.prototype, "lines", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "notes", void 0);


/***/ }),

/***/ "./src/modules/sales/dto/update-customer.dto.ts":
/*!******************************************************!*\
  !*** ./src/modules/sales/dto/update-customer.dto.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCustomerDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_customer_dto_1 = __webpack_require__(/*! ./create-customer.dto */ "./src/modules/sales/dto/create-customer.dto.ts");
class UpdateCustomerDto extends (0, swagger_1.PartialType)(create_customer_dto_1.CreateCustomerDto) {
}
exports.UpdateCustomerDto = UpdateCustomerDto;


/***/ }),

/***/ "./src/modules/sales/sales.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/sales/sales.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const customers_controller_1 = __webpack_require__(/*! ./controllers/customers.controller */ "./src/modules/sales/controllers/customers.controller.ts");
const quotations_controller_1 = __webpack_require__(/*! ./controllers/quotations.controller */ "./src/modules/sales/controllers/quotations.controller.ts");
const orders_controller_1 = __webpack_require__(/*! ./controllers/orders.controller */ "./src/modules/sales/controllers/orders.controller.ts");
const invoices_controller_1 = __webpack_require__(/*! ./controllers/invoices.controller */ "./src/modules/sales/controllers/invoices.controller.ts");
const customers_service_1 = __webpack_require__(/*! ./services/customers.service */ "./src/modules/sales/services/customers.service.ts");
const quotations_service_1 = __webpack_require__(/*! ./services/quotations.service */ "./src/modules/sales/services/quotations.service.ts");
const orders_service_1 = __webpack_require__(/*! ./services/orders.service */ "./src/modules/sales/services/orders.service.ts");
const invoices_service_1 = __webpack_require__(/*! ./services/invoices.service */ "./src/modules/sales/services/invoices.service.ts");
let SalesModule = class SalesModule {
};
exports.SalesModule = SalesModule;
exports.SalesModule = SalesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            event_emitter_1.EventEmitterModule.forRoot(),
        ],
        controllers: [
            customers_controller_1.CustomersController,
            quotations_controller_1.QuotationsController,
            orders_controller_1.OrdersController,
            invoices_controller_1.InvoicesController,
        ],
        providers: [
            customers_service_1.CustomersService,
            quotations_service_1.QuotationsService,
            orders_service_1.OrdersService,
            invoices_service_1.InvoicesService,
        ],
        exports: [
            customers_service_1.CustomersService,
            invoices_service_1.InvoicesService,
        ],
    })
], SalesModule);


/***/ }),

/***/ "./src/modules/sales/services/customers.service.ts":
/*!*********************************************************!*\
  !*** ./src/modules/sales/services/customers.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.CustomersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let CustomersService = class CustomersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const existing = await this.prisma.customer.findUnique({
            where: {
                companyId_code: {
                    companyId: tenantId,
                    code: createDto.code,
                },
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Customer code already exists');
        }
        return this.prisma.customer.create({
            data: {
                companyId: tenantId,
                ...createDto,
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.search) {
            where.OR = [
                { name: { contains: options.search, mode: 'insensitive' } },
                { code: { contains: options.search, mode: 'insensitive' } },
                { email: { contains: options.search, mode: 'insensitive' } },
                { phone: { contains: options.search, mode: 'insensitive' } },
            ];
        }
        const [customers, total] = await Promise.all([
            this.prisma.customer.findMany({
                where,
                skip,
                take: limit,
                orderBy: { name: 'asc' },
            }),
            this.prisma.customer.count({ where }),
        ]);
        return {
            data: customers,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(tenantId, id) {
        const customer = await this.prisma.customer.findFirst({
            where: { id, companyId: tenantId },
            include: {
                _count: {
                    select: {
                        invoices: true,
                        quotations: true,
                        salesOrders: true,
                    },
                },
            },
        });
        if (!customer) {
            throw new common_1.NotFoundException('Customer not found');
        }
        return customer;
    }
    async update(tenantId, id, updateDto) {
        await this.findOne(tenantId, id);
        return this.prisma.customer.update({
            where: { id },
            data: updateDto,
        });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        const hasTransactions = await this.prisma.customer.findFirst({
            where: {
                id,
                OR: [
                    { invoices: { some: {} } },
                    { quotations: { some: {} } },
                    { salesOrders: { some: {} } },
                ],
            },
        });
        if (hasTransactions) {
            return this.prisma.customer.update({
                where: { id },
                data: { isActive: false },
            });
        }
        return this.prisma.customer.delete({ where: { id } });
    }
    async getInvoices(tenantId, customerId) {
        await this.findOne(tenantId, customerId);
        return this.prisma.invoice.findMany({
            where: {
                companyId: tenantId,
                customerId,
            },
            include: {
                lines: {
                    include: {
                        product: true,
                    },
                },
            },
            orderBy: { date: 'desc' },
        });
    }
    async getBalance(tenantId, customerId) {
        await this.findOne(tenantId, customerId);
        const invoices = await this.prisma.invoice.findMany({
            where: {
                companyId: tenantId,
                customerId,
                status: {
                    in: ['SENT', 'PARTIALLY_PAID', 'OVERDUE'],
                },
            },
            select: {
                total: true,
                paidAmount: true,
            },
        });
        const totalDue = invoices.reduce((sum, inv) => sum + (inv.total.toNumber() - inv.paidAmount.toNumber()), 0);
        return { balance: totalDue };
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], CustomersService);


/***/ }),

/***/ "./src/modules/sales/services/invoices.service.ts":
/*!********************************************************!*\
  !*** ./src/modules/sales/services/invoices.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.InvoicesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
let InvoicesService = class InvoicesService {
    constructor(prisma, eventEmitter) {
        this.prisma = prisma;
        this.eventEmitter = eventEmitter;
    }
    async create(tenantId, createDto) {
        const count = await this.prisma.invoice.count({
            where: { companyId: tenantId },
        });
        const invoiceNumber = `INV-${String(count + 1).padStart(6, '0')}`;
        let subtotal = 0;
        let taxAmount = 0;
        for (const line of createDto.lines) {
            const lineAmount = line.quantity * line.unitPrice;
            const lineTax = (lineAmount * line.taxRate) / 100;
            subtotal += lineAmount;
            taxAmount += lineTax;
        }
        const total = subtotal + taxAmount;
        const invoice = await this.prisma.invoice.create({
            data: {
                companyId: tenantId,
                invoiceNumber,
                customerId: createDto.customerId,
                salesOrderId: createDto.salesOrderId,
                date: createDto.date,
                dueDate: createDto.dueDate,
                subtotal,
                taxAmount,
                total,
                notes: createDto.notes,
                lines: {
                    create: createDto.lines.map((line) => ({
                        productId: line.productId,
                        description: line.description,
                        quantity: line.quantity,
                        unitPrice: line.unitPrice,
                        taxRate: line.taxRate,
                        amount: line.quantity * line.unitPrice,
                    })),
                },
            },
            include: {
                customer: true,
                lines: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        this.eventEmitter.emit('invoice.created', { tenantId, invoice });
        return invoice;
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.status) {
            where.status = options.status;
        }
        if (options.customerId) {
            where.customerId = options.customerId;
        }
        const [invoices, total] = await Promise.all([
            this.prisma.invoice.findMany({
                where,
                skip,
                take: limit,
                include: {
                    customer: true,
                    _count: {
                        select: {
                            lines: true,
                            payments: true,
                        },
                    },
                },
                orderBy: { date: 'desc' },
            }),
            this.prisma.invoice.count({ where }),
        ]);
        return {
            data: invoices,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(tenantId, id) {
        const invoice = await this.prisma.invoice.findFirst({
            where: { id, companyId: tenantId },
            include: {
                customer: true,
                salesOrder: true,
                lines: {
                    include: {
                        product: true,
                    },
                },
                payments: true,
            },
        });
        if (!invoice) {
            throw new common_1.NotFoundException('Invoice not found');
        }
        return invoice;
    }
    async send(tenantId, id) {
        const invoice = await this.findOne(tenantId, id);
        if (invoice.status !== 'DRAFT') {
            throw new common_1.BadRequestException('Only draft invoices can be sent');
        }
        const updated = await this.prisma.invoice.update({
            where: { id },
            data: { status: client_1.InvoiceStatus.SENT },
            include: {
                customer: true,
                lines: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        this.eventEmitter.emit('invoice.sent', { tenantId, invoice: updated });
        return updated;
    }
    async cancel(tenantId, id) {
        const invoice = await this.findOne(tenantId, id);
        if (invoice.paidAmount.toNumber() > 0) {
            throw new common_1.BadRequestException('Cannot cancel invoice with payments');
        }
        return this.prisma.invoice.update({
            where: { id },
            data: { status: client_1.InvoiceStatus.CANCELLED },
        });
    }
    async generatePdf(tenantId, id) {
        const invoice = await this.findOne(tenantId, id);
        return {
            message: 'PDF generation not implemented yet',
            invoice,
        };
    }
    async recordPayment(tenantId, invoiceId, amount) {
        const invoice = await this.findOne(tenantId, invoiceId);
        const newPaidAmount = invoice.paidAmount.toNumber() + amount;
        const total = invoice.total.toNumber();
        let status = invoice.status;
        if (newPaidAmount >= total) {
            status = client_1.InvoiceStatus.PAID;
        }
        else if (newPaidAmount > 0) {
            status = client_1.InvoiceStatus.PARTIALLY_PAID;
        }
        return this.prisma.invoice.update({
            where: { id: invoiceId },
            data: {
                paidAmount: newPaidAmount,
                status,
            },
        });
    }
};
exports.InvoicesService = InvoicesService;
exports.InvoicesService = InvoicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _b : Object])
], InvoicesService);


/***/ }),

/***/ "./src/modules/sales/services/orders.service.ts":
/*!******************************************************!*\
  !*** ./src/modules/sales/services/orders.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.OrdersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let OrdersService = class OrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const count = await this.prisma.salesOrder.count({ where: { companyId: tenantId } });
        const orderNumber = `SO-${String(count + 1).padStart(6, '0')}`;
        let subtotal = 0;
        let taxAmount = 0;
        for (const line of createDto.lines) {
            const lineAmount = line.quantity * line.unitPrice;
            const lineTax = (lineAmount * line.taxRate) / 100;
            subtotal += lineAmount;
            taxAmount += lineTax;
        }
        return this.prisma.salesOrder.create({
            data: {
                companyId: tenantId,
                orderNumber,
                customerId: createDto.customerId,
                date: createDto.date,
                expectedDate: createDto.expectedDate,
                subtotal,
                taxAmount,
                total: subtotal + taxAmount,
                notes: createDto.notes,
                lines: {
                    create: createDto.lines.map((line) => ({
                        productId: line.productId,
                        description: line.description,
                        quantity: line.quantity,
                        unitPrice: line.unitPrice,
                        taxRate: line.taxRate,
                        amount: line.quantity * line.unitPrice,
                    })),
                },
            },
            include: { customer: true, lines: { include: { product: true } } },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.status)
            where.status = options.status;
        if (options.customerId)
            where.customerId = options.customerId;
        const [orders, total] = await Promise.all([
            this.prisma.salesOrder.findMany({
                where,
                skip,
                take: limit,
                include: { customer: true },
                orderBy: { date: 'desc' },
            }),
            this.prisma.salesOrder.count({ where }),
        ]);
        return { data: orders, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async findOne(tenantId, id) {
        const order = await this.prisma.salesOrder.findFirst({
            where: { id, companyId: tenantId },
            include: { customer: true, lines: { include: { product: true } } },
        });
        if (!order)
            throw new common_1.NotFoundException('Sales order not found');
        return order;
    }
    async confirm(tenantId, id) {
        await this.findOne(tenantId, id);
        return this.prisma.salesOrder.update({
            where: { id },
            data: { status: client_1.SalesOrderStatus.CONFIRMED },
        });
    }
    async complete(tenantId, id) {
        await this.findOne(tenantId, id);
        return this.prisma.salesOrder.update({
            where: { id },
            data: { status: client_1.SalesOrderStatus.COMPLETED },
        });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], OrdersService);


/***/ }),

/***/ "./src/modules/sales/services/quotations.service.ts":
/*!**********************************************************!*\
  !*** ./src/modules/sales/services/quotations.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.QuotationsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let QuotationsService = class QuotationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(tenantId, createDto) {
        const count = await this.prisma.quotation.count({ where: { companyId: tenantId } });
        const quotationNumber = `QT-${String(count + 1).padStart(6, '0')}`;
        let subtotal = 0;
        let taxAmount = 0;
        for (const line of createDto.lines) {
            const lineAmount = line.quantity * line.unitPrice;
            const lineTax = (lineAmount * line.taxRate) / 100;
            subtotal += lineAmount;
            taxAmount += lineTax;
        }
        const total = subtotal + taxAmount;
        return this.prisma.quotation.create({
            data: {
                companyId: tenantId,
                quotationNumber,
                customerId: createDto.customerId,
                date: createDto.date,
                validUntil: createDto.validUntil,
                subtotal,
                taxAmount,
                total,
                notes: createDto.notes,
                lines: {
                    create: createDto.lines.map((line) => ({
                        productId: line.productId,
                        description: line.description,
                        quantity: line.quantity,
                        unitPrice: line.unitPrice,
                        taxRate: line.taxRate,
                        amount: line.quantity * line.unitPrice,
                    })),
                },
            },
            include: {
                customer: true,
                lines: { include: { product: true } },
            },
        });
    }
    async findAll(tenantId, options) {
        const page = options.page || 1;
        const limit = options.limit || 20;
        const skip = (page - 1) * limit;
        const where = { companyId: tenantId };
        if (options.status)
            where.status = options.status;
        if (options.customerId)
            where.customerId = options.customerId;
        const [quotations, total] = await Promise.all([
            this.prisma.quotation.findMany({
                where,
                skip,
                take: limit,
                include: { customer: true, _count: { select: { lines: true } } },
                orderBy: { date: 'desc' },
            }),
            this.prisma.quotation.count({ where }),
        ]);
        return { data: quotations, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async findOne(tenantId, id) {
        const quotation = await this.prisma.quotation.findFirst({
            where: { id, companyId: tenantId },
            include: { customer: true, lines: { include: { product: true } } },
        });
        if (!quotation)
            throw new common_1.NotFoundException('Quotation not found');
        return quotation;
    }
    async send(tenantId, id) {
        const quotation = await this.findOne(tenantId, id);
        if (quotation.status !== 'DRAFT')
            throw new common_1.BadRequestException('Only draft quotations can be sent');
        return this.prisma.quotation.update({
            where: { id },
            data: { status: client_1.QuotationStatus.SENT },
        });
    }
    async accept(tenantId, id) {
        return this.prisma.quotation.update({
            where: { id },
            data: { status: client_1.QuotationStatus.ACCEPTED },
        });
    }
    async reject(tenantId, id) {
        return this.prisma.quotation.update({
            where: { id },
            data: { status: client_1.QuotationStatus.REJECTED },
        });
    }
};
exports.QuotationsService = QuotationsService;
exports.QuotationsService = QuotationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], QuotationsService);


/***/ }),

/***/ "./src/prisma/prisma.module.ts":
/*!*************************************!*\
  !*** ./src/prisma/prisma.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/event-emitter":
/*!****************************************!*\
  !*** external "@nestjs/event-emitter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3001',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.setGlobalPrefix('api/v1');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Fusion ERP API')
        .setDescription('Complete ERP System for Kenyan Businesses')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('auth', 'Authentication & Registration')
        .addTag('sales', 'Sales Management')
        .addTag('accounting', 'Accounting & Finance')
        .addTag('pos', 'Point of Sale')
        .addTag('procurement', 'Procurement & Purchasing')
        .addTag('inventory', 'Inventory Management')
        .addTag('manufacturing', 'Manufacturing & Production')
        .addTag('hr', 'Human Resources & Payroll')
        .addTag('audit', 'Audit Logs')
        .addTag('integrations', 'M-Pesa, eTIMS, Notifications')
        .addTag('reporting', 'Financial & Operational Reports')
        .addTag('roles', 'Roles & Permissions')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`
    🚀 Fusion ERP Backend is running!
    
    📡 API: http://localhost:${port}/api/v1
    📚 Docs: http://localhost:${port}/api/docs
    🌍 Environment: ${process.env.NODE_ENV || 'development'}
    
    Modules loaded:
    ✅ Auth & Multi-tenancy
    ✅ Sales Management
    ✅ Accounting (Double-entry)
    ✅ Point of Sale
    ✅ Procurement
    ✅ Inventory (Multi-warehouse)
    ✅ Manufacturing (BOM & Production)
    ✅ HR & Payroll (Kenya: PAYE, NHIF, NSSF)
    ✅ Audit Logging
    ✅ Integrations (M-Pesa, eTIMS, Email, SMS)
    ✅ Reporting (Financial & Operational)
    ✅ Roles & Permissions
  `);
}
bootstrap();

})();

/******/ })()
;