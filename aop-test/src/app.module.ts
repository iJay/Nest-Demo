import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    // 用 provider 的方式声明的 Guard 是在 IoC 容器里的，可以注入别的 provider
    // {
    //   provide: APP_GUARD,
    //   useClass: LoginGuard,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ValidatePipe,
    },
    {
      provide: APP_FILTER,
      useClass: TestFilter,
    },
  ],
})
export class AppModule implements NestModule {
  // 在 configure 方法里配置 LogMiddleware 在哪些路由生效。
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('aaa');
  }
}
