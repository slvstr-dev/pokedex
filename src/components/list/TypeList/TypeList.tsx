import { Tag } from '@/components/ui/Tag/Tag';
import { cn } from '@/utils/tailwindUtils';

export type Type = {
  name: string;
  type: string;
};

export interface TypeListProps {
  className?: string;
  types: Type[];
}

export const TypeList = ({ className, types }: TypeListProps) => {
  return (
    <div className={cn('', className)}>
      {types.map((type, idx) => {
        return <Tag key={idx} label={type.name} variant={type.type} />;
      })}
    </div>
  );
};
