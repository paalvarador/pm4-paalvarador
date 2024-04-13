import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { Order } from 'src/entities/orders.entity';

@Injectable()
export class OrdersService {
  constructor(private ordersRepository: OrdersRepository) {}

  async getOrders() {
    return await this.ordersRepository.getOrders();
  }

  async getOrderById(id: string) {
    return await this.ordersRepository.getOrderById(id);
  }

  async addOrder(order: Order) {
    return await this.ordersRepository.addOrder(order);
  }
}
