import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AaaFilter } from './aaa.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new AaaFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
