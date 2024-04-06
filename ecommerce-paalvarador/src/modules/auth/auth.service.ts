import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

  async login(email: string, password: string) {
    // Lógica para verificar si la contraseña es correcta
    const user = await this.usersRepository.getUserByEmail(email);

    if (Object.keys(user).length === 0) {
      return -1;
    }

    const result = this.usersRepository.loginUser(email, password);

    if (!result) {
      return -1;
    }

    return result;
  }
}
