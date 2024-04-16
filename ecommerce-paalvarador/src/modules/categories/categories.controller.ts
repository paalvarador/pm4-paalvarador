import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from 'src/entities/catgories.entity';
import { CreateCategoryDto } from 'src/dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories() {
    return await this.categoriesService.getCategories();
  }

  @Post()
  async createCategories(@Body() createCategory: CreateCategoryDto) {
    const category = new Category();
    category.name = createCategory.name;

    return await this.categoriesService.createCategory(category);
  }

  @Put(':id')
  async updateCategory(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() category: Category,
  ) {
    category.id = id;
    return await this.categoriesService.updateCategory(category);
  }

  @Post('seeder')
  async createCategoriesBySeeder(data: any) {
    return await this.categoriesService.createCategoryBySeeder(data);
  }
}
