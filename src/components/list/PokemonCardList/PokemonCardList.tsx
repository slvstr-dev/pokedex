'use client';

import { cn } from '@/utils/tailwindUtils';
import { PokemonCard } from '@/components/ui/PokemonCard/PokemonCard';
import { PokemonDialog } from '@/components/dialog/PokemonDialog/PokemonDialog';
import { SearchForm } from '@/components/form/SearchForm/SearchForm';
import { useCallback, useEffect, useState } from 'react';
import { useStore } from '@/app/zustand/store';
import type { PokemonList } from '@/types/pokemon';

export interface PokemonCardListProps {
  className?: string;
  pokemonList: PokemonList;
  showFavorites?: boolean;
}

export const PokemonCardList = ({
  className,
  pokemonList,
  showFavorites,
}: PokemonCardListProps) => {
  const [searchResults, setSearchResults] = useState<PokemonList>(showFavorites ? [] : pokemonList);
  const { hasNavigationBar, favoritePokemonList } = useStore();

  const filterPokemonList = useCallback(() => {
    if (showFavorites) {
      return pokemonList.filter((pokemon) => {
        return favoritePokemonList.includes(pokemon.index);
      });
    }

    return pokemonList;
  }, [favoritePokemonList, pokemonList, showFavorites]);

  const handleSearch = useCallback(
    (query: string) => {
      const filteredPokemonList = filterPokemonList();

      const results = filteredPokemonList.filter((pokemon) => {
        if (pokemon.name.includes(query.toLowerCase())) {
          return pokemon;
        }

        if (String(pokemon.index).includes(query)) {
          return pokemon;
        }
      });

      setSearchResults(results);
    },
    [filterPokemonList],
  );

  useEffect(() => {
    if (showFavorites) {
      const filteredPokemonList = pokemonList.filter((pokemon) => {
        return favoritePokemonList.includes(pokemon.index);
      });

      setSearchResults(filteredPokemonList);
    }
  }, [favoritePokemonList, pokemonList, showFavorites]);

  return (
    <section className={cn('container flex flex-col gap-10', className)}>
      <SearchForm className="w-full self-center sm:w-1/2" onChange={handleSearch} />

      <div
        className={cn(
          'grid gap-6',
          hasNavigationBar
            ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        )}>
        {searchResults?.map((pokemon, idx) => (
          <PokemonDialog key={idx} name={pokemon.name} index={pokemon.index}>
            <PokemonCard pokemon={pokemon} />
          </PokemonDialog>
        ))}
      </div>
    </section>
  );
};
