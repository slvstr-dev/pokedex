import { cn } from '@/utils/tailwindUtils';
import { ProgressBar } from '@/components/ui/ProgressBar/ProgressBar';
import { getPokemon } from '@/services/pokemonService';
import { Tag } from '@/components/ui/Tag/Tag';

export interface StatListProps {
  className?: string;
  index: number;
}

const statsList = {
  hp: {
    label: 'HP',
    total: 200,
  },
  attack: {
    label: 'ATK',
    total: 150,
  },
  defense: {
    label: 'DEF',
    total: 200,
  },
  speed: {
    label: 'SPD',
    total: 150,
  },
  experience: {
    label: 'EXP',
    total: 300,
  },
};

export const StatList = async ({ className, index }: StatListProps) => {
  const pokemon = await getPokemon(index);

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {pokemon.stats.map((stat, idx) => {
        const statName = stat.stat.name as keyof typeof statsList;

        if (statName in statsList) {
          return (
            <div key={idx} className="flex items-center gap-4">
              <span className="font-bold uppercase">{statsList[statName].label}</span>

              <Tag label={`${stat.base_stat} / ${statsList[statName].total}`} />
            </div>
          );
        }
      })}
    </div>
  );
};
