import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getUsers() {
    return this.usersRepository.getUsers();
  }

  getUserById(id: string) {
    return this.usersRepository.getUserById(id);
  }

  getUserByEmail(email: string) {
    return this.usersRepository.getUserByEmail(email);
  }

  createUser(user: any) {
    return this.usersRepository.createUser(user);
  }

  updateUserById(id: string, user: any) {
    return this.usersRepository.updateUserById(id, user);
  }

  deleteUserById(id: string) {
    return this.usersRepository.deleteUserById(id);
  }

  async loginUser(email: string, password: string) {
    return `Función aún no implementada para email: ${email} y password: ${password}`;
  }
}
