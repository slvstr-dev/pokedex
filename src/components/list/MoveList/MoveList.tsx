import { cn } from '@/utils/tailwindUtils';
import { Tag } from '@/components/ui/Tag/Tag';

export type Move = {
  name: string;
  type: string;
};

export interface MoveListProps {
  className?: string;
  moves: Move[];
}

export const MoveList = ({ className, moves }: MoveListProps) => {
  return (
    <div className={cn('', className)}>
      {moves.map((move, idx) => (
        <Tag key={idx} label={move.name} variant={move.type} />
      ))}
    </div>
  );
};
