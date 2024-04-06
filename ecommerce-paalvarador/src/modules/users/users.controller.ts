import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from 'src/interfaces/user.interface';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getUsers(@Query('page') page?: 1, @Query('limit') limit?: 5) {
    console.log(`page: ${page}`);
    console.log(`limit: ${limit}`);
    return this.usersService.getUsers();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async getUserById(@Param('id') id: string) {
    return await this.usersService.getUserById(Number(id));
  }

  @Post()
  async createUser(@Body() createUser: IUser) {
    return await this.usersService.createUser(createUser);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateUser(@Param('id') id: string, @Body() updateUserDto: IUser) {
    return await this.usersService.updateUserById(Number(id), updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteUser(@Param('id') id: string) {
    return await this.usersService.deleteUserById(Number(id));
  }
}
