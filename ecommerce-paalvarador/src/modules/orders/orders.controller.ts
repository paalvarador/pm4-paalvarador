import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getOrders(@Query('page') page?: 1, @Query('limit') limit?: 5) {
    console.log(`page: ${page}`);
    console.log(`limit: ${limit}`);
    return await this.ordersService.getOrders();
  }

  @Get('id')
  @UseGuards(AuthGuard)
  async getOrderById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.ordersService.getOrderById(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  async addOrder(@Body() createOrder: CreateOrderDto) {
    return await this.ordersService.addOrder(createOrder);
  }
}
