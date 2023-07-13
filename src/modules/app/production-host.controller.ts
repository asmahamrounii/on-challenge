import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { OnRunningHeaderInterceptor } from '../../interceptors/on-running-header.interceptor';
import { ProductionHostService } from './production-host.service';

@Controller()
@UseInterceptors(new OnRunningHeaderInterceptor())
export class ProductionHostController {
  constructor(private readonly productionHostService: ProductionHostService) {}

  @ApiResponse({ status: 200, description: 'Success' })
  @Get('getProductionHost')
  getProductionHost(): string {
    return this.productionHostService.getProductionHost();
  }  
}
