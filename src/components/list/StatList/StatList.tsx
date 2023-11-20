import { cn } from '@/utils/tailwindUtils';
import { ProgressBar } from '@/components/ui/ProgressBar/ProgressBar';
import { getPokemon } from '@/services/pokemonService';
import { STATLIST } from '@/constants/config';
export interface StatListProps {
  className?: string;
  index: number;
}

export const StatList = async ({ className, index }: StatListProps) => {
  const pokemon = await getPokemon(index);

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {pokemon?.stats.map((stat, idx) => {
        const statName = stat.stat.name as keyof typeof STATLIST;

        if (statName in STATLIST) {
          return (
            <div key={idx} className="grid grid-cols-12 items-center gap-4">
              <span className="col-span-2 font-bold uppercase">{STATLIST[statName].label}</span>

              <ProgressBar
                className="col-span-10"
                label={`${stat.base_stat} / ${STATLIST[statName].total}`}
                value={stat.base_stat}
                total={STATLIST[statName].total}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
