'use client';

import { cn } from '@/utils/tailwindUtils';
import { PokemonCard } from '@/components/ui/PokemonCard/PokemonCard';
import { pokemonListAtom } from '@/atoms/pokemonListAtom';
import { useAtom } from 'jotai';

export interface FavoritesListProps {
  className?: string;
}

export const FavoritesList = ({ className }: FavoritesListProps) => {
  const [pokemonList] = useAtom(pokemonListAtom);

  return (
    <div className={cn('grid grid-cols-4', className)}>
      {pokemonList.map((pokemon, idx) => (
        <PokemonCard key={idx} pokemon={pokemon} />
      ))}
    </div>
  );
};
