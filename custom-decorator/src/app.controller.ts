import {
  Controller,
  Get,
  Headers,
  ParseIntPipe,
  Query,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyHeaders } from './MyHeaders.decorator';
import { MyQuery } from './MyQuery.decorator';
import { Ddd } from './ddd.decorator';
import { Eee } from './eee.decorator';

// @Controller()
// @Ddd()
@Eee('eee', 'guang')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bbb')
  @Aaa('admin', 'user')
  @UseGuards(AaaGuard)
  getBbb(): string {
    return 'bbb';
  }

  @Bbb('ccc', 'admin')
  getCcc(): string {
    return 'hello4';
  }

  @Get('ddd')
  getDdd(@Ccc('name') ccc: string): string {
    return ccc;
  }

  @Get('eee')
  getEee(
    @Headers('Accept') accept: string,
    @MyHeaders('cache-control') cacheControl: string,
  ) {
    return { accept, cacheControl };
  }

  @Get('fff')
  getFff(
    @MyQuery('page', new ParseIntPipe()) page: string,
    @Query('page', new ParseIntPipe()) page2: string,
  ) {
    return { page, page2 };
  }
}
