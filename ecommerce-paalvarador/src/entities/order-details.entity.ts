import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Product } from './products.entity';
import { Order } from './orders.entity';

@Entity({
  name: 'order_details',
})
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  // Relacion 1:1 con orders
  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  // Relacion N:N con products
  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
