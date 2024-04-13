import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/products.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class ProductsRespository {
  constructor(
    private readonly categoriesService: CategoriesService,
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async getProducts() {
    return await this.productsRepository.find();
  }

  async getProductById(id: string) {
    return await this.productsRepository
      .createQueryBuilder('products')
      .where('products.id = :id', { id })
      .andWhere('products.stock > :stock', { stock: 0 })
      .getOne();
  }

  async createProduct(product: Product) {
    return await this.productsRepository.save(product);
  }

  async crateProductsBySeeder(data: any) {
    for (const item of data) {
      try {
        // Consultar si la categoria existe en la base de datos
        const category = await this.categoriesService.getCategoriesByName(
          item.category,
        );

        // Si existe la categoria, se debe crear una
        // instancia de producto y establcer sus propiedades
        // con la info del objeto data
        if (category) {
          const product = new Product();
          product.name = item.name;
          product.description = item.description;
          product.price = item.price;
          product.stock = item.stock;
          product.imgUrl = item.imgUrl;
          product.category = category;

          // Guardar el producto en la base de datos
          await this.productsRepository.save(product);
        }
      } catch (error) {
        if (error.code === '23505') {
          console.error(`El producto ${item.name} ya existe`);
        } else {
          throw error;
        }
      }
    }

    // Devolver el listado de productos almacenados
    return this.productsRepository.find();
  }

  async updateProductByStock(product: Product, valueStock: number) {
    console.log(`Estoy en updateProductByStock`);
    console.log(`me llega lo siguiente en valueStock: ${valueStock} `);
    return this.productsRepository.update(product, { stock: valueStock });
  }

  async updateProduct(
    id: string,
    updates: Partial<Product>,
  ): Promise<Product | null> {
    const product = await this.productsRepository.findOne({
      where: { id },
    });

    if (!product) {
      return null;
    }

    Object.assign(product, updates);

    const updateProduct = await this.productsRepository.save(product);
    return updateProduct;
  }

  async deleteProductById(id: string) {
    return await this.productsRepository.delete(id);
  }
}
