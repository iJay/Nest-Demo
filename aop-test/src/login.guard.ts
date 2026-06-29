import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(AppService)
  private appService: AppService;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(
      '----loginGuard check----',
      context.getClass(),
      context.getHandler(),
      this.appService.getHello(),
    );
    return false; // 如果返回 false，则请求不会继续往下执行。
  }
}
