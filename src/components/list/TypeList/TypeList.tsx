import { Tag } from '@/components/ui/Tag/Tag';
import { getPokemon } from '@/services/pokemonService';
import { cn } from '@/utils/tailwindUtils';
export interface TypeListProps {
  className?: string;
  index: number;
}

export const TypeList = async ({ className, index }: TypeListProps) => {
  const pokemon = await getPokemon(index);

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {pokemon.types.map((type, idx) => {
        return <Tag key={idx} label={type.type.name} />;
      })}
    </div>
  );
};
