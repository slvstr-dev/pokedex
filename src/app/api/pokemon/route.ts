import type { PokemonListResponse } from '@/types/pokemon';

export async function GET() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');

  const data = (await response.json()) as PokemonListResponse;

  const pokemonList = data.results.map((pokemon, idx) => {
    return {
      ...pokemon,
      index: idx + 1,
    };
  });

  return Response.json(pokemonList);
}
