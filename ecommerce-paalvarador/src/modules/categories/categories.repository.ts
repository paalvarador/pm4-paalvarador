import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/catgories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async getCategories() {
    return this.categoriesRepository.find();
  }

  async getCategoriesByName(name: string) {
    return this.categoriesRepository.findOne({ where: { name } });
  }

  async addCategory(category: Category) {
    console.log(`categories.addCategory(${category})`);
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
    return this.categoriesRepository.find();
  }
}
