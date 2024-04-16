import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { Product } from 'src/entities/products.entity';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'El userID no puede ser vacio' })
  @IsUUID()
  userId: string;

  @IsArray({ message: 'Los productos deben llegar en un Array' })
  @ArrayMinSize(1, { message: 'Al menos debe llegar un producto' })
  products: Partial<Product[]>;
}
