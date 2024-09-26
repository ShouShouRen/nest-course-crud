import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseIntercept, AbnormalFilter } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalInterceptors(new ResponseIntercept());

  app.useGlobalFilters(new AbnormalFilter());

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
