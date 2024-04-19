import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Role } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const role = user.role;

    const valid = user && role === Role.Admin;

    if (!valid) {
      throw new ForbiddenException(
        'No tiene permisos y no esta autorizado ingresar a esta ruta',
      );
    }

    return valid;
  }
}
