import { cn } from '@/utils/tailwindUtils';
import { Tag } from '@/components/ui/Tag/Tag';
import { getPokemon } from '@/services/pokemonService';
import { MOVES_LIST_LIMIT } from '@/constants/config';
export interface MoveListProps {
  className?: string;
  index: number;
}

export const MoveList = async ({ className, index }: MoveListProps) => {
  const pokemon = await getPokemon(index);

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {pokemon.moves.slice(0, MOVES_LIST_LIMIT).map((type, idx) => {
        return <Tag key={idx} label={type.move.name} />;
      })}
    </div>
  );
};
