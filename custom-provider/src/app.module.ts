import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'app_service', // 通过 provide 指定 token
      useClass: AppService, // 通过 useClass 指定对象的类，Nest 会自动对它做实例化后用来注入。
    },
    {
      provide: 'person', // 除了指定 class 外，还可以直接指定一个值，让 IoC 容器来注入
      useValue: {
        name: 'aaa',
        age: 20,
      },
    },
    {
      provide: 'person2',
      useFactory: () => {
        return { name: 'bbb', desc: 'cccc' };
      },
    },
    {
      provide: 'person3', // 使用 useFactory，它的参数也注入 IOC 容器中的对象，然后动态返回 provider 的对象
      useFactory: (
        person: { name: string; age: number },
        appService: AppService,
      ) => {
        return {
          name: person.name,
          age: person.age,
          desc: appService.getHello(),
        };
      },
      inject: ['person', 'app_service'],
    },
    {
      provide: 'person4',
      useExisting: 'person2', // 用 useExisting 给已有的 token，指定一个新 token
    },
    {
      provide: 'person5',
      // 这个 useFactory 支持异步操作
      // Nest 会等拿到异步方法的结果之后再注入
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        return {
          name: 'ddd',
          desc: 'eeee',
        };
      },
    },
  ],
})
export class AppModule {}
