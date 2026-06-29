import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';
// import { LoginGuard } from './login.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局中间件
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('----Global ExpressMiddleware---- before');
    next(); // 这里的next调用只是调用下一个中间件，并不会调用目标 controller 的 handler。
    console.log('----Global ExpressMiddleware---- after');
  });
  // 这种方式是手动 new 的 Guard 实例，不在 IoC 容器里
  // app.useGlobalGuards(new LoginGuard());
  // 支持全局启用，作用于全部 controller
  // app.useGlobalInterceptors(new TimeInterceptor());
  // 全局Pipe
  // app.useGlobalPipes(new ValidatePipe());
  // 全局Filter
  // app.useGlobalFilters(new TestFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
