import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Que pasa si pongo un comentario aqui
 **/
export class CreateCategoryDto {
  /**
   * El nombre de la categoria debe ser único
   * @example name
   */
  @IsString()
  @IsNotEmpty()
  name: string;
}
