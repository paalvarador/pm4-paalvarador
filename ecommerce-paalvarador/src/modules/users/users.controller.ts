import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): IUser[] {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'Esta accion debe agregar un nuevo usuario';
  }
}
