import { cn } from '@/utils/tailwindUtils';

export interface FavoritesListSkeletonProps {
  className?: string;
}

export const FavoritesListSkeleton = ({ className }: FavoritesListSkeletonProps) => {
  return (
    <div className={cn('grid grid-cols-4', className)}>
      {Array.from({ length: 150 }, (_, i) => {
        return (
          <div
            key={i}
            className="flex animate-pulse flex-col items-center justify-center gap-4 p-4">
            <div className="h-32 w-32 rounded-full bg-gray-300" />

            <div className="h-8 w-1/2 rounded-md bg-gray-300" />
          </div>
        );
      })}
    </div>
  );
};
