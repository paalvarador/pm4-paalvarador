import { Injectable, NotFoundException } from '@nestjs/common';
import { FilesRepository } from './files.repository';
import { ProductsService } from '../products/products.service';

@Injectable()
export class FilesService {
  constructor(
    private readonly filesRepository: FilesRepository,
    private readonly productsService: ProductsService,
  ) {}

  async uploadImage(file: Express.Multer.File, productId: string) {
    const product = await this.productsService.getProductById(productId);

    if (!product) {
      throw new NotFoundException('Producto no encontrado');
    }

    const imageUploaded = this.filesRepository.uploadImage(file);
    product.imgUrl = (await imageUploaded).secure_url;

    await this.productsService.updateProduct(product.id, product);

    return product;
  }
}
