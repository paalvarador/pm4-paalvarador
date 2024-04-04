import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.getUsers();
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    console.log(createProductDto);
    return 'Esta accion debe agregar un nuevo producto';
  }
}
