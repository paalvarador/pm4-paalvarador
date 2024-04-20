import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginUserDto } from '../../dto/login-user.dto';
import { validate } from 'class-validator';
import { CreateUserDto } from '../../dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const { email, password } = loginUserDto;

    const errors = await validate(loginUserDto);
    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: errors });
    }

    const response = await this.authService.login(email, password);

    if (!response) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'Email o password incorrectos' });
    } else {
      res.status(HttpStatus.OK).json(response);
    }
  }

  @Post('signup')
  async signup(@Body() createUser: CreateUserDto, @Res() res: Response) {
    const { password, repeatPassword } = createUser;

    if (password !== repeatPassword) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'El password no coincide' });
    } else {
      const response = await this.authService.signup(createUser);
      res.status(HttpStatus.OK).json(response);
    }
  }
}
