import { cn } from '@/utils/tailwindUtils';
import Image from 'next/image';
import { FavoriteToggle } from './internal/FavoriteToggle';

export interface PokemonCardProps {
  className?: string;
  pokemon: {
    name: string;
    url: string;
    index: number;
  };
}

export const PokemonCard = ({ className, pokemon }: PokemonCardProps) => {
  return (
    <article
      className={cn(
        'flex flex-col gap-6 rounded-xl bg-white p-4 transition hover:shadow-lg',
        className,
      )}>
      <div className="relative flex aspect-square items-center justify-center rounded-xl bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-green-200 to-green-500">
        <FavoriteToggle index={pokemon.index} className="absolute right-4 top-4" />

        <Image
          width={160}
          height={160}
          className="h-40 w-40 object-contain"
          alt={`Sprite of ${pokemon.name}`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-left text-2xl font-bold capitalize">{pokemon.name}</h2>

        <p className="text-left text-base font-bold">#{pokemon.index}</p>
      </div>
    </article>
  );
};
