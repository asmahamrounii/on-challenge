"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const on_running_header_interceptor_1 = require("./interceptors/on-running-header.interceptor");
const app_module_1 = require("./modules/app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new on_running_header_interceptor_1.OnRunningHeaderInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nest ON Challenge')
        .setDescription('Production Value API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map