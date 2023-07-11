import { HttpStatus, INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { AppModule } from '../src/modules/app/app.module';
import * as request from 'supertest';

describe('ProductionHostController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return the production host value', () => {
    return request(app.getHttpServer())
      .get('/getProductionHost')
      .expect(HttpStatus.OK)
      .expect((res) => {
        expect(res.header['on-running']).toBe('always');
        expect(res.text).toBe('production');
      });
  });
});
