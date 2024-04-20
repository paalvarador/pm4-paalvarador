import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Product } from './products.entity';
import { Order } from './orders.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'order_details',
})
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: uuid = uuid();

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

  // Columnas para createdAt, updatedAt y deletedAt
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
