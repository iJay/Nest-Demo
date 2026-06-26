import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
// import { LoginGuard } from './login.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局中间件
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('before...', req.url);
    next();
    console.log('after...');
  });
  // 这种方式是手动 new 的 Guard 实例，不在 IoC 容器里
  // app.useGlobalGuards(new LoginGuard());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
