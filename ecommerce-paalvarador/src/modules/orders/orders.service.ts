import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from 'src/dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private ordersRepository: OrdersRepository) {}

  async getOrders() {
    return await this.ordersRepository.getOrders();
  }

  async getOrderById(id: string) {
    return await this.ordersRepository.getOrderById(id);
  }

  async addOrder(order: CreateOrderDto) {
    return await this.ordersRepository.addOrder(order);
  }
}
