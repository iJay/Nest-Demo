import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 这里能获取到当前上下文的类和方法
    console.log(
      '---TimeInterceptor in---',
      context.getClass(),
      context.getHandler(),
    );
    const startTime = Date.now();
    // 调用 next.handle() 就会调用目标 Controller
    return next.handle().pipe(
      tap(() => {
        console.log(
          '---TimeInterceptor out--- time cost:',
          Date.now() - startTime,
        );
      }),
    );
  }
}
