import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from 'src/entities/catgories.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories() {
    return await this.categoriesService.getCategories();
  }

  @Post()
  async createCategories(@Body() createCategory: Category) {
    return await this.categoriesService.createCategory(createCategory);
  }

  @Post('seeder')
  async createCategoriesBySeeder(data: any) {
    return await this.categoriesService.createCategoryBySeeder(data);
  }
}
