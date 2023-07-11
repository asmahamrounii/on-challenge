import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class ProductionHostService {
  constructor(private readonly configService: ConfigService) {}

  getProductionHost(): string {
    return this.configService.get<string>('PROD_HOST')
  }
}
