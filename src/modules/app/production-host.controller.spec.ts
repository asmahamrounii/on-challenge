import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductionHostController } from './production-host.controller';
import { ProductionHostService } from './production-host.service';

describe('ProductionHostController', () => {
  let controller: ProductionHostController;
  let service: ProductionHostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductionHostController],
      providers: [ProductionHostService],
      imports: [ConfigModule.forRoot()],
    }).compile();

    controller = module.get<ProductionHostController>(ProductionHostController);
    service = module.get<ProductionHostService>(ProductionHostService);
  });

  describe('getProductionHost', () => {
    it('should return the production host value', () => {
      const expectedResult = 'production';

      jest.spyOn(service, 'getProductionHost').mockReturnValue(expectedResult);

      const result = controller.getProductionHost();

      expect(result).toBe(expectedResult);
    });
  });
});
