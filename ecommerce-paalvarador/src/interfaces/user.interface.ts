import { Rol } from 'src/enums/rol.enum';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rol: Rol;
}
