import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('RoadFlow App')
    .setDescription('Документация REST API')
    .setVersion('1.0')
    // .setBasePath('api')
    // .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
