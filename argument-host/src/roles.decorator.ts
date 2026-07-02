import { SetMetadata } from '@nestjs/common';
import { Role } from './role';

export const Roles = (...roles: Role[]) => SetMetadata('role', roles);
