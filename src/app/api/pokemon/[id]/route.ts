import type { PokemonListResponse } from '@/types/pokemon';

export async function GET(_: Request, { params: { id } }: { params: { id: string } }) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = (await response.json()) as PokemonListResponse;

  return Response.json(data);
}
