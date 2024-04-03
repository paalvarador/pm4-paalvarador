import { Rol } from 'src/enums/rol.enum';

export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rol: Rol;
}
