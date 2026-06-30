import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request: Request = context.switchToHttp().getRequest();
    console.log(`${request.method} ${request.url} starts, ${now}`);
    return next.handle().pipe(
      tap(() => {
        const after = Date.now();
        const duration = after - now;
        console.log(
          `${request.method} ${request.url} completes, ${after} . total cost: ${duration}ms`,
        );
      }),
    );
  }
}
