import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginUserDto } from 'src/dto/login-user.dto';
import { validate } from 'class-validator';

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

    if (response === -1) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'Email o password incorrectos' });
    } else {
      res.status(HttpStatus.OK).json({ response: 'Login correcto' });
    }
  }
}
