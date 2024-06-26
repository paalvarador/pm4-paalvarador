import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetail } from '../../entities/order-details.entity';

@Controller()
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Get()
  async getOrderDetails(@Query('page') page?: 1, @Query('limit') limit?: 5) {
    console.log(`page: ${page}`);
    console.log(`limit: ${limit}`);
    return await this.orderDetailsService.getOrderDetails();
  }

  @Get('id')
  async getOrderDetailById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.orderDetailsService.getOrderDetailById(id);
  }

  @Post()
  async addOrderDetail(@Body() createOrderDetail: OrderDetail) {
    return await this.orderDetailsService.addOrderDetail(createOrderDetail);
  }
}
