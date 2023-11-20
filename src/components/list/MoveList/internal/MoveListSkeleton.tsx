import { MOVES_LIST_LIMIT } from '@/constants/config';
import { cn } from '@/utils/tailwindUtils';

export interface MoveListSkeletonProps {
  className?: string;
}

export const MoveListSkeleton = ({ className }: MoveListSkeletonProps) => {
  return (
    <div className={cn('flex animate-pulse flex-wrap gap-2', className)}>
      {Array.from({ length: MOVES_LIST_LIMIT }, (_, i) => {
        return <div key={i} className="h-8 w-20 rounded-md bg-gray-300" />;
      })}
    </div>
  );
};
