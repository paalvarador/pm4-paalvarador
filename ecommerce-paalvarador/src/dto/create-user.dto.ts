import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Length,
  Matches,
  IsNumberString,
  IsEnum,
} from 'class-validator';
import { Role } from '../modules/auth/roles.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({
    description: 'El email del usuario, debe ser un email válido',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 80)
  @ApiProperty({
    description: 'El nombre debe ser un string mayoor a 3 caracteres',
  })
  name: string;

  @Length(8, 15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/, {
    message:
      'El password debe contener al menos una letra minuscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales (!@#$%^&*)',
  })
  @ApiProperty({
    description:
      'El password debe contener al menos una letra minuscula, una letra mayúscula, un numero y uno de los siguientes caraceteres especiales (!@#$%^&*)',
  })
  password: string;

  @Length(8, 15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/, {
    message:
      'El password debe contener al menos una letra minuscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales (!@#$%^&*)',
  })
  @ApiProperty({
    description: 'repeatPassword debe coincidier con el password',
  })
  repeatPassword: string;

  @IsString()
  @Length(3, 80)
  @ApiProperty({
    description: 'La direccion debe ser un string mayor a 3 caracteres',
  })
  address: string;

  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty({ description: 'phone debe ser un numero telefónico' })
  phone: string;

  @IsString()
  @Length(5, 20)
  @ApiProperty()
  country: string;

  @IsString()
  @Length(1, 20)
  @ApiProperty()
  city: string;

  /**
   * El rol debe ser un enum de la cadena Admin o User
   * @example enum['User', 'Admin']
   */
  @IsEnum(Role)
  role: Role;
}
