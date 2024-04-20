import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../../entities/catgories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async getCategories() {
    const categories = await this.categoriesRepository.find();
    console.log(`categories: ${JSON.stringify(categories)}`);
    return categories;
  }

  async getCategoriesById(id: string) {
    return await this.categoriesRepository.findOne({ where: { id } });
  }

  async getCategoriesByName(name: string) {
    return await this.categoriesRepository.findOne({ where: { name } });
  }

  async addCategory(category: Category) {
    return await this.categoriesRepository.save(category);
  }

  async updateCategory(category: Category) {
    const existingCategory = await this.categoriesRepository.findOne(
      category.id,
    );
    if (!existingCategory) {
      throw new Error(`No se encontró la categoria con ID: ${category.id}`);
    }
    existingCategory.name = category.name;
    return await this.categoriesRepository.save(existingCategory);
  }

  async addCategoryBySeeder(data: any) {
    for (const product of data) {
      try {
        // Creo una instancia de category y le guardo la propiedad name
        const category = new Category();
        category.name = product.category;

        // Guardo la category en la base de datos
        await this.categoriesRepository.save(category);
      } catch (error) {
        if (error.code === '23505') {
          console.error(`La category ${product.category} yá existe`);
        } else {
          throw error;
        }
      }
    }

    // Obtener todas las categorias de la base y devolverlas como respuesta
    return await this.categoriesRepository.find();
  }
}
