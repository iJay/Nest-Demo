import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LogInterceptor } from './common/interceptor/log-interceptor/log.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AaaController } from './aaa.controller';

@Global() // 如果模块被很多地方都引用，为了方便，可以用 @Global 把它声明为全局的，这样它 exports 的 provider 就可以直接注入了
@Module({
  imports: [UserModule], // the list of modules that are required by this module
  controllers: [AppController, AaaController], // the set of controllers defined in this module which have to be instantiated
  providers: [
    AppService,
    {
      provide: 'Guang',
      useFactory: () => {
        return {
          name: 'Guang',
        };
      },
    },
  ], // the providers that will be instantiated by the Nest injector and that may be shared at least across this module
  exports: [AppService, 'Guang'], // the subset of providers that are provided by this module and should be available in other modules which import this module.
})
export class AppModule {}
