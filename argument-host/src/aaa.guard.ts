import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './role';

@Injectable()
export class AaaGuard implements CanActivate {
  @Inject(Reflector)
  private readonly reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requireRoles = this.reflector.get<Role[]>(
      'role',
      context.getHandler(),
    );
    if (!requireRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const roles = request.query?.users?.split(',') ?? [];
    console.log(roles);
    return requireRoles.some((role) => roles && roles.includes(role));
  }
}
