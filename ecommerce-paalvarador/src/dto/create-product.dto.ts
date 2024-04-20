import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty({ message: 'El nombre del product no puede estar vacio' })
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'La descripción del producto no puede estar vacía' })
  @ApiProperty()
  description: string;

  @IsDecimal()
  @IsNotEmpty({ message: 'Debe existir el precio del producto' })
  @ApiProperty()
  price: number;

  @IsNotEmpty()
  @ApiProperty()
  stock: number;

  @IsString()
  @ApiProperty()
  imgUrl: string;
}
