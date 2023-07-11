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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionHostController = void 0;
const common_1 = require("@nestjs/common");
const on_running_header_interceptor_1 = require("../interceptors/on-running-header.interceptor");
const production_host_service_1 = require("./production-host.service");
let ProductionHostController = class ProductionHostController {
    constructor(productionHostService) {
        this.productionHostService = productionHostService;
    }
    getProductionHost() {
        return this.productionHostService.getProductionHost();
    }
};
__decorate([
    (0, common_1.Get)('getProductionHost'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductionHostController.prototype, "getProductionHost", null);
ProductionHostController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseInterceptors)(new on_running_header_interceptor_1.OnRunningHeaderInterceptor()),
    __metadata("design:paramtypes", [production_host_service_1.ProductionHostService])
], ProductionHostController);
exports.ProductionHostController = ProductionHostController;
//# sourceMappingURL=production-host.controller.js.map