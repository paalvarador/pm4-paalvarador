import { IsEmail, Length, Matches } from 'class-validator';

export class LoginUserDto {
  /**
   * El email debe ser un email válido
   * @example example@email.com
   */
  @IsEmail()
  email: string;

  /**
   * La contaseña debe cumplir con las condiciones establecidas
   * @example Password&seguro123
   */
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/, {
    message:
      'El password debe contener al menos una letra minuscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales (!@#$%^&*)',
  })
  @Length(8, 15)
  password: string;
}
