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
    return this.usersRepository.find();
  }

  async getUserById(id: string) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async getUserByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email: email } });
  }

  async createUser(user: User) {
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
