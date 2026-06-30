import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoginCheckGuard implements CanActivate {
  @Inject(UserService)
  private readonly userService: UserService;

  @Inject(Reflector)
  private readonly reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log(this.userService.findOne(1));
    const methodMetadata =
      this.reflector.get<string[]>('role', context.getHandler()) || [];
    if (methodMetadata.length > 0) {
      const result = methodMetadata.some((role) => {
        if (role === 'admin') {
          return true;
        }
        return false;
      });
      if (!result) {
        throw new UnauthorizedException('Unauthorized');
      }
    }
    return true;
  }
}
