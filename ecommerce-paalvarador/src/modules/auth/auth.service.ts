import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  create(): string {
    return 'Creating AuthService';
  }

  findAll(): string {
    return 'Finding All AuthService';
  }
}
