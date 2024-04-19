import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers() {
    const users = await this.usersRepository.find();

    for (const user of users) {
      delete user.role;
    }

    return users;
  }

  async getUserById(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    delete user.role;

    return user;
  }

  async getUserByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email: email } });
  }

  async createUser(user: any) {
    try {
      const newUser = await this.usersRepository.save(user);
      delete newUser.password;

      return newUser;
    } catch (error) {
      if (error.code === '23505') {
        console.log(`El usuario con email ${user.email} ya existe`);
      } else {
        throw error;
      }
    }
  }

  async updateUserById(id: string, user: User) {
    return `Función aun no implementada para userId: ${id} y user: ${user}`;
  }

  async deleteUserById(id: string) {
    return `Función aún no implementada para userId: ${id}`;
  }
}
