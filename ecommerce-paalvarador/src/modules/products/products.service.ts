import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/products.entity';
import { ProductsRespository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRespository) {}

  async getProducts() {
    return await this.productsRepository.getProducts();
  }

  async getProductById(id: string) {
    return await this.productsRepository.getProductById(id);
  }

  async createProduct(product: Product) {
    return await this.productsRepository.createProduct(product);
  }

  async createProductBySeeder(data: any) {
    return await this.productsRepository.crateProductsBySeeder(data);
  }

  async updateProductByStock(product: Product, valueStock: number) {
    return this.productsRepository.updateProductByStock(product, valueStock);
  }

  async updateProduct(id: string, updates: Partial<Product>) {
    return this.productsRepository.updateProduct(id, updates);
  }

  async deleteProductById(id: string) {
    return this.productsRepository.deleteProductById(id);
  }
}
