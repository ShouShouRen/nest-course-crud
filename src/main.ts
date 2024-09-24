import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseIntercept } from './common/responseIntercept';
import { AbnormalFilter } from './common/abnormalFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalInterceptors(new ResponseIntercept());

  app.useGlobalFilters(new AbnormalFilter());

  await app.listen(3000);
}
bootstrap();
