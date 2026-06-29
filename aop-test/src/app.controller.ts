import {
  Controller,
  Get,
  ParseBoolPipe,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Controller()
// @UsePipes(ValidatePipe) // 这里整个 Controller 都生效
// @UseInterceptors(TimeInterceptor) // 在 controller 级别启动，作用于下面的全部 handler
// @UseFilters(TestFilter) // 在 controller 级别启动，作用于下面的全部 handler
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
  bbb(@Query('bbb') bbb: number): string {
    console.log('bbb...', bbb);
    return 'bbb';
  }

  @Get('ccc')
  // @UseFilters(TestFilter)
  ccc(@Query('num') num: number) {
    // 这里只对某个参数生效
    return num + 1;
  }
}
