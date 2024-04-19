import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { Product } from 'src/entities/products.entity';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from '../auth/roles.enum';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(@Query('page') page?: 1, @Query('limit') limit?: 5) {
    console.log(`page: ${page}`);
    console.log(`limit: ${limit}`);
    return await this.productsService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.productsService.getProductById(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  async createProduct(@Body() createProduct: CreateProductDto) {
    const product = new Product();
    product.name = createProduct.name;
    product.description = createProduct.description;
    product.price = createProduct.price;
    product.stock = createProduct.stock;
    product.imgUrl = createProduct.imgUrl;

    return await this.productsService.createProduct(product);
  }

  @Post('seeder')
  async createProductsBySeeder(data: any) {
    return await this.productsService.createProductBySeeder(data);
  }

  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  async updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProdcut: Partial<Product>,
  ) {
    return await this.productsService.updateProduct(id, updateProdcut);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return await this.productsService.deleteProductById(id);
  }
}
