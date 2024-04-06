import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ICredential } from 'src/interfaces/credential.interface';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async login(@Body() credentials: ICredential, @Res() res: Response) {
    const { email, password } = credentials;

    if (!email || !password) {
      res.status(400).json({ message: 'Email o password incorrectos' });
    }

    const response = await this.authService.login(email, password);

    if (response === -1) {
      res.status(400).json({ message: 'Email o password incorrectos' });
    }

    res.status(200).json({ response: 'Login correcto' });
  }
}
