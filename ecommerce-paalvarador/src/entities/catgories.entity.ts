import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Product } from './products.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'categories',
})
export class Category {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: uuid = uuid();

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  @ApiProperty()
  name: string;

  // Relacion (1 Categoria puede tener 1 o varios productos)
  @OneToMany(() => Product, (product) => product.category)
  @ApiProperty()
  products: Product[];

  // Columnas para createdAt, updatedAt y deletedAt
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
