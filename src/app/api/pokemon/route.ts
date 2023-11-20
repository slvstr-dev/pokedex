import { POKEMON_LIST_LIMIT } from '@/constants/config';
import type { PokemonListResponse } from '@/types/pokemon';

export async function GET() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIST_LIMIT}`);

  const data = (await response.json()) as PokemonListResponse;

  const pokemonList = data.results.map((pokemon, idx) => {
    return {
      ...pokemon,
      index: idx + 1,
    };
  });

  return Response.json(pokemonList);
}
