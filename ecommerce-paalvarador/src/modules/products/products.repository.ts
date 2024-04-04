import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRespository {
  private mock_products = [
    {
      id: 1,
      name: 'Cafetera Eléctrica',
      description:
        'Disfruta de un delicioso café cada mañana con nuestra cafetera eléctrica de última generación.',
      price: 99.99,
      stock: true,
      imgUrl: 'https://example.com/img/cafetera.jpg',
    },
    {
      id: 2,
      name: 'Smartphone 5G',
      description:
        'Conectividad ultrarrápida y la mejor tecnología en la palma de tu mano.',
      price: 799.99,
      stock: true,
      imgUrl: 'https://example.com/img/smartphone.jpg',
    },
    {
      id: 3,
      name: 'Teclado Mecánico RGB',
      description:
        'Mejora tu experiencia de escritura y gaming con nuestro teclado mecánico de alta respuesta.',
      price: 129.99,
      stock: false,
      imgUrl: 'https://example.com/img/teclado.jpg',
    },
    {
      id: 4,
      name: 'Libro de Cocina',
      description:
        'Explora nuevas recetas y mejora tus habilidades culinarias con nuestro libro de cocina best-seller.',
      price: 29.99,
      stock: true,
      imgUrl: 'https://example.com/img/libroCocina.jpg',
    },
    {
      id: 5,
      name: 'Zapatillas Deportivas',
      description:
        'Corre con comodidad y estilo con nuestras zapatillas deportivas diseñadas para todo tipo de atletas.',
      price: 59.99,
      stock: true,
      imgUrl: 'https://example.com/img/zapatillas.jpg',
    },
  ];

  async getProducts() {
    return this.mock_products;
  }
}
