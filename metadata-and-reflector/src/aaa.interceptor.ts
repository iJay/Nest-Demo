import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AaaInterceptor implements NestInterceptor {
  @Inject(Reflector)
  private readonly reflector: Reflector;
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('interceptor executed');
    console.log('context: ', Reflect.ownKeys(context));
    console.log(this.reflector.get('role', context.getHandler()));
    console.log(this.reflector.get('role', context.getClass()));
    console.log(
      this.reflector.getAll('role', [context.getHandler(), context.getClass()]),
    );
    console.log(
      this.reflector.getAllAndMerge('role', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    console.log(
      this.reflector.getAllAndOverride('role', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    return next.handle();
  }
}
