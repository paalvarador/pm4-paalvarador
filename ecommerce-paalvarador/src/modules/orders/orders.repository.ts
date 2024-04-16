import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/orders.entity';
/* import { MoreThan, Repository } from 'typeorm'; */
import { OrderDetailsService } from '../order-details/order-details.service';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
import { Repository } from 'typeorm';
import { OrderDetail } from 'src/entities/order-details.entity';
import { CreateOrderDto } from 'src/dto/create-order.dto';

@Injectable()
export class OrdersRepository {
  constructor(
    private orderDetailsService: OrderDetailsService,
    private usersService: UsersService,
    private productsService: ProductsService,
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
  ) {}

  async getOrders() {
    return await this.ordersRepository.find();
  }

  async getOrderById(id: string) {
    const order = await this.ordersRepository.findOne({ where: { id } });
    const orderDetails =
      await this.orderDetailsService.getOrderDetailsByOrderId(order.id);

    console.log(`orderDetails: ${JSON.stringify(orderDetails)}`);

    return { order, orderDetails };
  }

  async addOrder(order: CreateOrderDto) {
    const { userId, products } = order;

    // 1. Busca un usuario por id
    const user = await this.usersService.getUserById(userId);

    if (!user) return;

    // 2. Crea un registro en la tabla orders con el usuario encontrado
    const orderObj = new Order();
    orderObj.user = user;
    orderObj.date = new Date();
    this.ordersRepository.save(orderObj);

    // 3. Busca los productos por id recibidos en el request actualizando el total de la compra
    // y reduciendo el stock del producto correspondiente. (Al realizar la busqueda de todos los productos
    //aquellos con stock igual a 0 no deben ser mostrados)
    let sumTotal: number = 0;
    const productsArray = [];
    for (const product of products) {
      const { id } = product;
      const productObj = await this.productsService.getProductById(id);

      if (!productObj) {
        return 'Product not found';
      }

      let stock: number = Number(productObj.stock);
      stock -= 1;

      // Actualizo este producto
      await this.productsService.updateProduct(productObj.id, { stock: stock });

      productsArray.push(productObj);
      sumTotal += Number(productObj.price);
    }

    // Una vez procesada esta compra, se crear una instancia de OrderDetails y se almacena el total de la compra
    const orderDetail = new OrderDetail();
    orderDetail.order = orderObj;
    orderDetail.price = Number(sumTotal.toFixed(2));
    orderDetail.products = productsArray;

    this.orderDetailsService.addOrderDetail(orderDetail);

    const result = {};
    result['order_id'] = orderObj.id;
    result['price'] = orderDetail.price;
    result['order_details_id'] = orderDetail.id;

    return result;
  }
}
