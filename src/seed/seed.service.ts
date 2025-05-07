import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const {
      data: { results },
    } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];

    for (const { name, url } of results) {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      console.log({ name, no });

      pokemonToInsert.push({ name, no });
    }

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
