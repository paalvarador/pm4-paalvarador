import { IsDecimal, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty({ message: 'El nombre del product no puede estar vacio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'La descripción del producto no puede estar vacía' })
  description: string;

  @IsDecimal()
  @IsNotEmpty({ message: 'Debe existir el precio del producto' })
  price: number;

  @IsNotEmpty()
  stock: number;

  @IsString()
  imgUrl: string;
}
