import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.getUsers();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'Esta accion debe agregar un nuevo usuario';
  }
}
