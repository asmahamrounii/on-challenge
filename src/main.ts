import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { OnRunningHeaderInterceptor } from './interceptors/on-running-header.interceptor';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new OnRunningHeaderInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Nest ON Challenge')
    .setDescription('Production Value API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}

bootstrap();
