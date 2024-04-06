import { Injectable } from '@nestjs/common';
import { ProductsRespository } from './products.repository';
import { IProduct } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRespository) {}

  getProducts() {
    return this.productsRepository.getProducts();
  }

  getProductById(id: number) {
    return this.productsRepository.getProductById(id);
  }

  createProduct(product: IProduct) {
    return this.productsRepository.createProduct(product);
  }

  updateProductById(id: number, product: IProduct) {
    return this.productsRepository.updateProductById(id, product);
  }

  deleteProductById(id: number) {
    return this.productsRepository.deleteProductById(id);
  }
}
