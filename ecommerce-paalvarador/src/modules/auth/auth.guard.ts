import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1] ?? '';
    console.log({ token });

    if (!token) {
      throw new UnauthorizedException('Se requerie el Bearer token');
    }

    try {
      console.log('Entro en la linea 25 del guardian');
      const secret = process.env.JWT_SECRET;
      const payload = this.jwtService.verify(token, { secret });
      payload.roles = ['admin'];
      request.user = payload;
      console.log(`request.user: ${JSON.stringify(request.user)}`);
      console.log(`llego a la linea 31 del guardian y devuelvo true`);
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token invalido');
    }
  }
}
