import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from 'src/entities/users.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { Role } from './roles.enum';

describe('AuthService', () => {
  let authService: AuthService;

  const mockUser: CreateUserDto = {
    name: 'Pablo Alvarado',
    email: 'pabloAlvarado@gmail.com',
    password: 'Pablo&Alvarado1985',
    repeatPassword: 'Pablo%Alvarado1985',
    address: 'Av. Loja',
    city: 'San Francisco',
    country: 'United States',
    phone: '09837283728',
    role: Role.User,
  };

  beforeEach(async () => {
    const mockUsersService: Partial<UsersService> = {
      getUserByEmail: () => Promise.resolve(undefined),
      createUser: (user: Omit<User, 'id'>): Promise<User> =>
        Promise.resolve({
          ...user,
          id: '1234-slow92312-asdf9234=12alsdf',
          role: 'Admin',
        }),
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('Crear una instancia de AuthService', async () => {
    expect(authService).toBeDefined();
  });

  it('Crear un nuevo usuario', async () => {
    const user = await authService.signup(mockUser);
    expect(user).toBeDefined();
    expect(user.password).not.toEqual(mockUser.password);
  });
});
