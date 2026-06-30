import { Controller, Get, Headers, Inject, Ip, Optional, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1') // A controller's purpose is to handle specific requests for the application
export class AppController {
  // 构造方式注入
  constructor(private readonly appService: AppService) {}

  // 属性注入
  @Inject(AppService)
  private readonly appService2: AppService;

  @Optional()
  @Inject('Guang')
  private readonly guang: Record<string, unknown>;

  @Get('hello')
  getHello(
    // 通过 @Headers 装饰器取某个请求头 或者全部请求头
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, any>,
    @Ip() ip: string,
    @Session() session: Record<string, any>,
  ): string {
    console.log('session', session);
    console.log('accept', accept);
    console.log('headers', headers);
    console.log('ip', ip);
    // 在 session 对象里存储信息
    if (!session.count) {
      session.count = 0;
    }
    session.count++;
    return `${this.appService2.getHello()} ${session.count}`;
  }
}
