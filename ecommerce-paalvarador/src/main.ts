import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/logger.middleware';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(logger);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Ecommerce API Documentation')
    .setDescription(
      'Esta es una API desarrollada utilizando NestJS para una ecommerce básica que maneja los modulos de usuarios, productos ordernes, categorias, archivos y detalles de ordenes',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
