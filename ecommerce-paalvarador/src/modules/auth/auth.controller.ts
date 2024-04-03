import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(): string {
    return 'Esta accion debe permitir logear al usuario con sus credenciales';
  }

  @Post('register')
  register(): string {
    return 'Esta acción debe permitir al usuario registrar una nueva cuenta';
  }
}
