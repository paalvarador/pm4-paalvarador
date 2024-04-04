import { Injectable } from '@nestjs/common';

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
    return await this.mock_users;
  }
}
