import { Injectable } from '@nestjs/common';
import { OrderDetailsRepository } from './order-details.respository';
import { OrderDetail } from 'src/entities/order-details.entity';

@Injectable()
export class OrderDetailsService {
  constructor(private orderDetailsRepository: OrderDetailsRepository) {}

  async getOrderDetails() {
    return await this.orderDetailsRepository.getOrderDetails();
  }

  async getOrderDetailById(id: string) {
    return await this.orderDetailsRepository.getOrderDetailById(id);
  }

  async getOrderDetailsByOrderId(orderId: string) {
    return await this.orderDetailsRepository.getOrderDetailByOrderId(orderId);
  }

  async addOrderDetail(orderDetail: OrderDetail) {
    return this.orderDetailsRepository.addOrderDetail(orderDetail);
  }
}
