import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

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
  async getOrderById(@Param('id') id: string) {
    return await this.ordersService.getOrderById(id);
  }

  @Post()
  async addOrder(@Body() createOrder: any) {
    return await this.ordersService.addOrder(createOrder);
  }
}
