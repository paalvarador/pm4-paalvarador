import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Length,
  Matches,
  IsNumberString,
  IsEnum,
} from 'class-validator';
import { Role } from 'src/modules/auth/roles.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 80)
  name: string;

  @Length(8, 15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/, {
    message:
      'El password debe contener al menos una letra minuscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales (!@#$%^&*)',
  })
  password: string;

  @Length(8, 15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/, {
    message:
      'El password debe contener al menos una letra minuscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales (!@#$%^&*)',
  })
  repeatPassword: string;

  @IsString()
  @Length(3, 80)
  address: string;

  @IsNotEmpty()
  @IsNumberString()
  phone: string;

  @IsString()
  @Length(5, 20)
  country: string;

  @IsString()
  @Length(1, 20)
  city: string;

  @IsEnum(Role)
  role: Role;
}
