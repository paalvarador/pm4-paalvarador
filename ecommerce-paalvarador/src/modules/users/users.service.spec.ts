import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

describe('UsersService', () => {
  let usersService: UsersService;
  let mockUsersRepository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: UsersRepository, useValue: mockUsersRepository },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('Debe estar definido', () => {
    expect(usersService).toBeDefined();
  });
});
