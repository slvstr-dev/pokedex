import type { Pokemon, PokemonList } from '@/types/pokemon';

export const getPokemonList = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/pokemon');

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    return data as PokemonList;
  } catch (e) {
    console.error(e);

    throw new Error('Failed to fetch data');
  }
};

export const getPokemon = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3000/api/pokemon/${id}`);

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
