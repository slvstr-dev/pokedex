import { PokemonCardList } from '@/components/list/PokemonCardList/PokemonCardList';
import { PokemonCardListSkeleton } from '@/components/list/PokemonCardList/internal/PokemonCardListSkeleton';
import { getPokemonList } from '@/services/pokemonService';
import { Suspense } from 'react';

export default async function HomePage() {
  const pokemonList = await getPokemonList();

  return (
    <Suspense fallback={<PokemonCardListSkeleton />}>
      <PokemonCardList pokemonList={pokemonList} />
    </Suspense>
  );
}
