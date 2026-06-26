import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 构造器参数注入
  constructor(private readonly appService: AppService) {}

  // @Inject(AppService) // 属性的方式注入
  // private readonly appService: AppService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
