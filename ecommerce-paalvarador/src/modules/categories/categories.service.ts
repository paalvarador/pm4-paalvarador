import { Injectable } from '@nestjs/common';
import { Category } from 'src/entities/catgories.entity';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async getCategories() {
    return await this.categoriesRepository.getCategories();
  }

  async getCategoriesById(id: string) {
    return await this.categoriesRepository.getCategoriesById(id);
  }

  async getCategoriesByName(name: string) {
    return await this.categoriesRepository.getCategoriesByName(name);
  }

  async createCategory(category: Category) {
    return await this.categoriesRepository.addCategory(category);
  }

  async updateCategory(category: Category) {
    return await this.categoriesRepository.updateCategory(category);
  }

  async createCategoryBySeeder(data: any) {
    return await this.categoriesRepository.addCategoryBySeeder(data);
  }
}
