import { POKEMON_LIST_LIMIT } from '@/constants/config';
import type { Pokemon, PokemonList, PokemonListResponse } from '@/types/pokemon';

export const getPokemonList = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIST_LIMIT}`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = (await response.json()) as PokemonListResponse;

    const pokemonList: PokemonList = data.results.map((pokemon, idx) => {
      return {
        ...pokemon,
        index: idx + 1,
      };
    });

    return pokemonList;
  } catch (e) {
    console.error(e);

    throw new Error('Failed to fetch data');
  }
};

export const getPokemon = async (id: number) => {
  try {
    const response = await fetch(`/api/pokemon/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    return data as Pokemon;
  } catch (e) {
    console.error(e);

    throw new Error('Failed to fetch data');
  }
};
