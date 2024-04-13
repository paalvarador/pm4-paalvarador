import { Injectable } from '@nestjs/common';
import { Category } from 'src/entities/catgories.entity';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  getCategories() {
    return this.categoriesRepository.getCategories();
  }

  getCategoriesByName(name: string) {
    return this.categoriesRepository.getCategoriesByName(name);
  }

  createCategory(category: Category) {
    return this.categoriesRepository.addCategory(category);
  }

  createCategoryBySeeder(data: any) {
    return this.categoriesRepository.addCategoryBySeeder(data);
  }
}
