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
import { IProduct } from 'src/interfaces/product.interface';
import { AuthGuard } from '../auth/auth.guard';

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
    return await this.productsService.getProductById(Number(id));
  }

  @Post()
  @UseGuards(AuthGuard)
  async createProduct(@Body() createProduct: IProduct) {
    return await this.productsService.createProduct(createProduct);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProduct: IProduct,
  ) {
    return await this.productsService.updateProductById(
      Number(id),
      updateProduct,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteProduct(@Param('id') id: string) {
    return await this.productsService.deleteProductById(Number(id));
  }
}
