// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, { cors: true });
//   app.setGlobalPrefix('api');
//
//   const options = new DocumentBuilder()
//     .setTitle('RoadFlow App')
//     .setDescription('Документация REST API')
//     .setVersion('1.0')
//     // .setBasePath('api')
//     // .addBearerAuth()
//     .build();
//
//   const document = SwaggerModule.createDocument(app, options);
//   SwaggerModule.setup('/api/docs', app, document);
//
//   await app.listen(3000);
// }
//
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  await app.listen(port || 3000, () => {
    console.log(`App started on port: ${port}`);
  });
}

bootstrap();
