import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/app.config';

async function bootstrap() {
  const { port } = envs;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2'); // Set the global prefix for all routes

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(port);
  console.log(`Application is running on port: ${port}`);
}
bootstrap();
