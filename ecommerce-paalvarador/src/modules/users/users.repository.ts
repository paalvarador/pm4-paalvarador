import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';

@Injectable()
export class UsersRepository {
  private mock_users = [
    {
      id: 1,
      email: 'juan.perez@example.com',
      name: 'Juan Pérez',
      password: 'password123',
      address: '123 Calle Falsa, Apt 1',
      phone: '123-456-7890',
      country: 'España',
      city: 'Madrid',
    },
    {
      id: 2,
      email: 'maria.lopez@example.com',
      name: 'María López',
      password: 'securepassword456',
      address: '456 Avenida Principal, Casa 20',
      phone: '234-567-8901',
      country: 'México',
      city: 'Ciudad de México',
    },
    {
      id: 3,
      email: 'lucas.martinez@example.com',
      name: 'Lucas Martínez',
      password: 'mypassword789',
      address: '789 Calle Secundaria, Depto 2B',
      phone: '345-678-9012',
      country: 'Argentina',
      city: 'Buenos Aires',
    },
    {
      id: 4,
      email: 'sophia.gonzalez@example.com',
      name: 'Sophia González',
      password: 'passwordsafe123',
      address: '101 Callejón Diagonal, Casa 5',
      phone: '456-789-0123',
      country: 'Chile',
      city: 'Santiago',
    },
    {
      id: 5,
      email: 'alexander.rodriguez@example.com',
      name: 'Alexander Rodríguez',
      password: 'verystrongpassword456',
      address: '202 Avenida Libertad, Piso 3',
      phone: '567-890-1234',
      country: 'Colombia',
      city: 'Bogotá',
    },
  ];

  async getUsers() {
    const usersResult = [];

    this.mock_users.map((user) => {
      const userWithoutPassword = {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        phone: user.phone,
        country: user.country,
        city: user.city,
      };

      usersResult.push(userWithoutPassword);
    });

    return usersResult;
  }

  async getUserById(id: number) {
    let userResult = {};
    const userFound = this.mock_users.find((user) => user.id === id);

    userResult = {
      id: userFound.id,
      email: userFound.email,
      name: userFound.name,
      address: userFound.address,
      phone: userFound.phone,
      country: userFound.country,
      city: userFound.city,
    };

    return userResult;
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    let userResult = null;
    const userFound = await this.mock_users.find(
      (user) => user.email === email,
    );

    if (userFound) {
      userResult = {
        id: userFound.id,
        email: userFound.email,
        name: userFound.name,
        address: userFound.address,
        phone: userFound.phone,
        country: userFound.country,
        city: userFound.city,
      };
    }
    return userResult;
  }

  async createUser(user: IUser) {
    const nextId = this.mock_users.length + 1;
    const newUser = {
      id: nextId,
      ...user,
    };
    this.mock_users.push(newUser);

    return nextId;
  }

  async updateUserById(id: number, user: IUser) {
    // Primero obtener el objeto del usuario que vamos a editar
    const editUser = this.mock_users.find((user) => user.id === id);

    // Cambiar cada una de sus propiedades con las propiedades del objeto user
    editUser.email = user.email;
    editUser.name = user.name;
    editUser.password = user.password;
    editUser.phone = user.phone;
    editUser.country = user.country;
    editUser.city = user.city;

    // Devolver el id del objeto editado
    return editUser.id;
  }

  async deleteUserById(id: number) {
    // Primero obtener la posicion del elemento
    const indexUser = this.mock_users.forEach((user, index) => {
      if (user.id === id) return index;
      else return -1;
    });

    // Si el indexUser es -1 se retorna 0 significa que ningun usuario fue borrado
    if (Number(indexUser) === -1) {
      return 0;
    } else {
      // Caso contrario se devuelve el id del usuario eliminado
      const [userRmoved] = this.mock_users.splice(Number(indexUser), 1);
      return userRmoved.id;
    }
  }

  async loginUser(email: string, password: string) {
    const userLogin = this.mock_users.find(
      (user) => user.email === email && user.password === password,
    );

    return userLogin;
  }
}
