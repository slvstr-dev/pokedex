'use client';

import { cn } from '@/utils/tailwindUtils';
import { PokemonCard } from '@/components/ui/PokemonCard/PokemonCard';
import { pokemonListAtom } from '@/atoms/pokemonListAtom';
import { useAtom } from 'jotai';
import { PokemonDialog } from '@/components/dialog/PokemonDialog/PokemonDialog';

export interface PokemonCardListProps {
  className?: string;
}

export const PokemonCardList = ({ className }: PokemonCardListProps) => {
  const [pokemonList] = useAtom(pokemonListAtom);

  return (
    <div className={cn('grid grid-cols-4', className)}>
      {pokemonList.map((pokemon, idx) => (
        <PokemonDialog
          key={idx}
          className="transition-opacity hover:opacity-50 active:opacity-75"
          name={pokemon}
          number={Math.floor(Math.random() * 150) + 1}>
          <PokemonCard pokemon={pokemon} />
        </PokemonDialog>
      ))}
    </div>
  );
};
