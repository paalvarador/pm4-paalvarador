import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from 'src/entities/users.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    // Lógica para verificar si la contraseña es correcta
    const user = await this.usersService.getUserByEmail(email);

    if (!user) {
      throw new BadRequestException('Login incorrecto');
    }

    const login = await bcrypt.compare(password, user.password);
    if (!login) {
      throw new BadRequestException('Login incorrecto');
    }

    const userPayload = {
      sub: user.id,
      id: user.id,
      email: user.email,
      role: user.role,
    };

    // Crear un token de acceso que dure una hora y devolver dicho token
    const token = this.jwtService.sign(userPayload);

    return { token: token };
  }

  async signup(user: Partial<User>) {
    const { email, password } = user;

    const userExist = await this.usersService.getUserByEmail(email);

    if (userExist) {
      throw new BadRequestException(
        'El email que se quiere registrar ya existe',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      throw new Error('El password no pudo ser encriptado');
    }

    const newUser = await this.usersService.createUser({
      ...user,
      password: hashedPassword,
    });
    delete newUser.repeatPassword;

    console.log(`newUser: ${JSON.stringify(newUser)}`);

    return newUser;
  }
}
