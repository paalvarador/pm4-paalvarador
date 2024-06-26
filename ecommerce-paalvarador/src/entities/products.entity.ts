import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './catgories.entity';

@Entity({
  name: 'products',
})
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: uuid = uuid();

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({ type: 'text', default: 'http://localhost/imagen.jpg' })
  imgUrl: string;

  // Relacion 1:N con table Categories
  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  // Columnas para createdAt, updatedAt y deletedAt
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
