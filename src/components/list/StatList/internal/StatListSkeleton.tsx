import { cn } from '@/utils/tailwindUtils';

export interface StatListSkeletonProps {
  className?: string;
}

export const StatListSkeleton = ({ className }: StatListSkeletonProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {Array.from({ length: 5 }, (_, i) => {
        return <div key={i} className="h-8 animate-pulse rounded-md bg-gray-300" />;
      })}
    </div>
  );
};
