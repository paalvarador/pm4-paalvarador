import { IsEmail, Length, Matches } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/, {
    message:
      'El password debe contener al menos una letra minuscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales (!@#$%^&*)',
  })
  @Length(8, 15)
  password: string;
}
