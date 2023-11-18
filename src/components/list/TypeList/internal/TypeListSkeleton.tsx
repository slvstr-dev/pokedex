import { cn } from '@/utils/tailwindUtils';

export interface TypeListSkeletonProps {
  className?: string;
}

export const TypeListSkeleton = ({ className }: TypeListSkeletonProps) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {Array.from({ length: 5 }, (_, i) => {
        return <div key={i} className="h-8 w-20 animate-pulse rounded-md bg-gray-300" />;
      })}
    </div>
  );
};
