import { ProductionHostService } from './production-host.service';
export declare class ProductionHostController {
    private readonly productionHostService;
    constructor(productionHostService: ProductionHostService);
    getProductionHost(): string;
}
