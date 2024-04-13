import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(email: string, password: string) {
    // Lógica para verificar si la contraseña es correcta
    const user = await this.usersService.getUserByEmail(email);
    console.log(`authService user: ${user}`);

    if (!user) {
      return -1;
    }

    const result = this.usersService.loginUser(email, password);

    if (!result) {
      return -1;
    }

    return result;
  }
}
