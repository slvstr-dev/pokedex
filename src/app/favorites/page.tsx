import { FavoritesList } from '@/components/list/FavoritesList/FavoritesList';
import { FavoritesListSkeleton } from '@/components/list/FavoritesList/internal/FavoriteListSkeleton';
import { Suspense } from 'react';

export default function FavoritesPage() {
  return (
    <main>
      <Suspense fallback={<FavoritesListSkeleton />}>
        <FavoritesList />
      </Suspense>
    </main>
  );
}
