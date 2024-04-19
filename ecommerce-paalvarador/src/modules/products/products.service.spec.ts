import { CreateProductDto } from 'src/dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from 'src/entities/products.entity';
import { Test } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';

describe('ProductsService', () => {
  let productsService: ProductsService;

  const mockProduct: CreateProductDto = {
    name: 'Producto de Prueba',
    description: 'Descripción de prueba',
    price: 150,
    stock: 10,
    imgUrl: 'http://localhost:8080/images/imagen.jpg',
  };

  beforeEach(async () => {
    const mockProducsService: Partial<ProductsService> = {
      createProduct: (product: Omit<Product, 'id'>): Promise<Product> =>
        Promise.resolve({
          ...product,
          id: '290230923-ajsdflads9-1212kjlafds',
          name: 'Product',
        }),
    };

    const module = await Test.createTestingModule({
      providers: [
        ProductsService,
        JwtService,
        {
          provide: ProductsService,
          useValue: mockProducsService,
        },
      ],
    }).compile();

    productsService = module.get<ProductsService>(ProductsService);
  });

  it('Debe crear una instancia de ProductsService', async () => {
    expect(productsService).toBeDefined();
  });
});
