import { IsInt, IsNotEmpty, IsPositive, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  @Min(1)
  no: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
