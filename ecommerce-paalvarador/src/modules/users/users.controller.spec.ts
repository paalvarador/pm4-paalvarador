import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { AuthGuard } from '../auth/auth.guard';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

describe('UsersController', () => {
  let usersController: UsersController;
  let mockUsersService: UsersService;
  let mockAuthGuard: AuthGuard;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        JwtService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: AuthGuard, useValue: mockAuthGuard },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
  });

  it('Debe estar definido', () => {
    expect(usersController).toBeDefined();
  });
});
