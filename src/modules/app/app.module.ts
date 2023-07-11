import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProductionHostController } from './production-host.controller';
import { ProductionHostService } from './production-host.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // allowed for all the modules in application
    }),
  ],
  controllers: [AppController, ProductionHostController],
  providers: [AppService, ProductionHostService],
})
export class AppModule {}
