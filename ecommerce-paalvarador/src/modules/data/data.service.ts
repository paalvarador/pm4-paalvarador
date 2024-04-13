import { Injectable } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { ProductsService } from '../products/products.service';
import data from '../../../data.json';

@Injectable()
export class DataLoadService {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly productsService: ProductsService,
  ) {}

  async loadAndSeedData() {
    await this.categoriesService.createCategoryBySeeder(data);
    await this.productsService.createProductBySeeder(data);
  }
}
