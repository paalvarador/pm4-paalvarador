import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from '../auth/auth.guard';
import { Product } from 'src/entities/products.entity';

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
  async getProductById(@Param('id') id: string) {
    return await this.productsService.getProductById(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  async createProduct(@Body() createProduct: Product) {
    return await this.productsService.createProduct(createProduct);
  }

  @Post('seeder')
  async createProductsBySeeder(data: any) {
    return await this.productsService.createProductBySeeder(data);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProdcut: Partial<Product>,
  ) {
    return await this.productsService.updateProduct(id, updateProdcut);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteProduct(@Param('id') id: string) {
    return await this.productsService.deleteProductById(id);
  }
}
