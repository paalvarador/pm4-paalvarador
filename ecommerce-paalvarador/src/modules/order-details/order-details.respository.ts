import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from '../../entities/order-details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderDetailsRepository {
  constructor(
    @InjectRepository(OrderDetail)
    private orderDetailsRepository: Repository<OrderDetail>,
  ) {}

  async getOrderDetails() {
    return await this.orderDetailsRepository.find();
  }

  async getOrderDetailById(id: string) {
    return await this.orderDetailsRepository.findOne({ where: { id } });
  }

  async getOrderDetailByOrderId(orderId: string) {
    return await this.orderDetailsRepository.findOne({
      where: { order: { id: orderId } },
      relations: ['products'],
    });
  }

  async addOrderDetail(orderDetail: OrderDetail) {
    return await this.orderDetailsRepository.save(orderDetail);
  }
}
