import { Injectable } from '@nestjs/common';
import { IProduct } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: IProduct[] = [];

  create(product: IProduct) {
    this.products.push(product);
  }

  findAll(): IProduct[] {
    return this.products;
  }
}
