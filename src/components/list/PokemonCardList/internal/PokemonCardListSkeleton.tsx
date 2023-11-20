import { POKEMON_LIST_LIMIT } from '@/constants/config';
import { cn } from '@/utils/tailwindUtils';

export interface PokemonCardListSkeletonProps {
  className?: string;
}

export const PokemonCardListSkeleton = ({ className }: PokemonCardListSkeletonProps) => {
  return (
    <section className={cn('container flex animate-pulse flex-col gap-10', className)}>
      <div className="h-10 w-full self-center sm:w-1/2" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: POKEMON_LIST_LIMIT }, (_, i) => {
          return (
            <div key={i} className="flex h-full w-full flex-col gap-6 rounded-xl bg-white p-4">
              <div className="relative flex aspect-square items-center justify-center rounded-xl bg-gray-100" />

              <div className="flex flex-col gap-1">
                <div className="h-8 w-24 max-w-full rounded-md bg-gray-300" />

                <div className="h-6 w-10 max-w-full rounded-md bg-gray-300" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
