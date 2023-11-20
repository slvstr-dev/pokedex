'use client';

import { cn } from '@/utils/tailwindUtils';
import { Icon } from '@/components/ui/Icon/Icon';
import { Button } from '@/components/ui/Button/Button';
import { useStore } from '@/app/zustand/store';
import { type SyntheticEvent } from 'react';

export interface FavoriteToggleProps {
  className?: string;
  index: number;
}

export const FavoriteToggle = ({ className, index }: FavoriteToggleProps) => {
  const { favoritePokemonList, toggleFavoritePokemon } = useStore();

  const handleToggleFavorite = (event: SyntheticEvent) => {
    event.stopPropagation();

    toggleFavoritePokemon(index);
  };

  const isFavorite = favoritePokemonList.includes(index);

  return (
    <Button className={cn('p-0', className)} onClick={(event) => handleToggleFavorite(event)}>
      <Icon
        icon={isFavorite ? 'Heart' : 'HeartOutline'}
        className={cn('w-8 text-red-600', isFavorite ? 'text-red-600' : 'text-black/50')}
      />
    </Button>
  );
};
