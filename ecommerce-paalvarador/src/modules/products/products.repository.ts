import { Injectable } from '@nestjs/common';
import { IProduct } from 'src/interfaces/product.interface';

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
    return await this.mock_products;
  }

  async getProductById(id: number) {
    return await this.mock_products.find((product) => product.id === id);
  }

  async createProduct(product: IProduct) {
    const nextId = this.mock_products.length + 1;
    const newProduct = {
      id: nextId,
      ...product,
    };
    this.mock_products.push(newProduct);

    return nextId;
  }

  async updateProductById(id: number, product: IProduct) {
    // Primero obtener el objeto del producto que vamos a editar
    const editProduct = this.mock_products.find((product) => product.id === id);

    // Cambiar cada una de sus propiedades con las propiedades del objeto product
    editProduct.name = product.name;
    editProduct.description = product.description;
    editProduct.price = product.price;
    editProduct.stock = product.stock;
    editProduct.imgUrl = product.imgUrl;

    // Devolver el id del objeto editado
    return editProduct.id;
  }

  async deleteProductById(id: number) {
    // Primero obtener la posicion del elemento
    const indexProduct = this.mock_products.forEach((product, index) => {
      if (product.id === id) return index;
      else return -1;
    });

    // Si el indexUser es -1 se retorna 0 significa que ningun producto fue borrado
    if (Number(indexProduct) === -1) {
      return 0;
    } else {
      // Caso contrario se devuelve el id del producto eliminado
      const [productRemoved] = this.mock_products.splice(
        Number(indexProduct),
        1,
      );
      return productRemoved.id;
    }
  }
}
