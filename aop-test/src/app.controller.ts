import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';

@Controller()
// @UseInterceptors(TimeInterceptor) // 在 controller 级别启动，作用于下面的全部 handler
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('handler getHello...');
    return this.appService.getHello();
  }

  @Get('aaa')
  @UseGuards(LoginGuard)
  aaa(): string {
    console.log('aaa...');
    return 'aaa';
  }

  @Get('bbb')
  // @UseInterceptors(TimeInterceptor)
  bbb(): string {
    console.log('bbb...');
    return 'bbb';
  }
}
