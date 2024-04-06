import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { IUser } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  getUsers() {
    return this.usersRepository.getUsers();
  }

  getUserById(id: number) {
    return this.usersRepository.getUserById(id);
  }

  createUser(user: IUser) {
    return this.usersRepository.createUser(user);
  }

  updateUserById(id: number, user: IUser) {
    return this.usersRepository.updateUserById(id, user);
  }

  deleteUserById(id: number) {
    return this.usersRepository.deleteUserById(id);
  }
}
