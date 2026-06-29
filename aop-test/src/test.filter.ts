import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  // ForbiddenException, // 这里如果是@nestjs/common的这个异常，在Guard中就会被捕捉到
} from '@nestjs/common';
import { Response } from 'express';
import { ForbiddenException } from './ForbiddenException';

@Catch(ForbiddenException) // 拦截什么异常用 @Catch 装饰器来声明，然后在 catch 方法返回对应的响应，给用户更友好的提示
export class TestFilter implements ExceptionFilter {
  catch(exception: ForbiddenException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    response.status(403).json({
      statusCode: 403,
      message: 'TestFilter: ' + exception.message,
    });
  }
}
