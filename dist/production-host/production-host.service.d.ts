import { ConfigService } from '@nestjs/config';
export declare class ProductionHostService {
    private readonly configService;
    constructor(configService: ConfigService);
    getProductionHost(): string;
}
