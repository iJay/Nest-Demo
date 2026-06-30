import {
  Controller,
  Get,
  Header,
  Headers,
  HostParam,
  HttpCode,
  Next,
  Redirect,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

// 只有 host 满足 xx.0.0.1 的时候才会路由到这个 controller
@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class AaaController {
  @Get('bbb')
  hello(@HostParam('host') host: string) {
    return `hello ${host}`;
  }

  @Get('ccc')
  ccc(@Req() req: Request) {
    console.log('req url', req.url);
    console.log('req method', req.method);
    console.log('req hostname', req.hostname);
    console.log('req query', req.query);
    console.log('req ip', req.ip);
    return 'ccc';
  }

  @Get('ddd')
  ddd(@Res() res: Response) {
    // 这时候 Nest 就不会再把 handler 返回值作为响应内容了,需要自己返回响应
    // Nest 这么设计是为了避免你自己返回的响应和 Nest 返回的响应的冲突。
    // 如果你不会自己返回响应，可以通过 passthrough 参数告诉 Nest。
    // return 'ddd';
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        message: 'ddd',
        errCode: 0,
        data: null,
      }),
    );
  }

  @Get('eee')
  eee(@Next() next: NextFunction) {
    // 除了注入 @Res 不会返回响应外，注入 @Next 也不会
    // Nest 不会处理注入 @Next 的 handler 的返回值
    console.log('handle1');
    next();
    return 'eee111';
  }

  // 当有两个 handler 来处理同一个路由的时候，可以在第一个 handler 里注入 next，调用它来把请求转发到第二个 handler
  @Get('eee')
  eee2() {
    console.log('handle2');
    return 'eee222';
  }

  @Get('fff')
  // handler 默认返回的是 200 的状态码，可以通过 @HttpCode 修改它
  @HttpCode(404)
  fff() {
    return 'hello';
  }

  @Get('ggg')
  // 可以修改 response header，通过 @Header 装饰器
  @Header('aaa', 'bbb')
  // 这里的Headers是获取请求头的某个值，也可以获取全部请求头
  ggg(@Headers('accept') accept: string) {
    console.log('accept', accept);
    return 'hello';
  }

  @Get('hhh')
  // 通过 @Redirect 装饰器来指定路由重定向的 url
  @Redirect('https://www.baidu.com')
  hhh() {
    return 'hhh';
  }

  @Get('iii')
  // 或者在返回值的地方设置 url
  @Redirect()
  async jump() {
    return {
      statusCode: 302,
      url: 'https://www.baidu.com',
    };
  }

  @Get('jjj')
  @Render('user')
  jjj() {
    return {
      name: '张三',
      age: 18,
      gender: '男',
    };
  }
}
