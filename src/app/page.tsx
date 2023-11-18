import { PokemonDialog } from '@/components/dialog/PokemonDialog/PokemonDialog';
import { PokemonCardList } from '@/components/list/PokemonCardList/PokemonCardList';
import { PokemonCardListSkeleton } from '@/components/list/PokemonCardList/internal/PokemonCardListSkeleton';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<PokemonCardListSkeleton />}>
        <PokemonCardList />
      </Suspense>
    </main>
  );
}
