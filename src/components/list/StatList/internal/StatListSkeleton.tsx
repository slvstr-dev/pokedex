import { STATLIST } from '@/constants/config';
import { cn } from '@/utils/tailwindUtils';

export interface StatListSkeletonProps {
  className?: string;
}

export const StatListSkeleton = ({ className }: StatListSkeletonProps) => {
  return (
    <div className={cn('flex animate-pulse flex-col gap-2 ', className)}>
      {Array.from({ length: Object.keys(STATLIST).length }, (_, i) => {
        return (
          <div key={i} className="grid grid-cols-12 gap-4">
            <div className="col-span-2 rounded-md bg-gray-300" />

            <div className="col-span-10 h-6 rounded-full bg-gray-300" />
          </div>
        );
      })}
    </div>
  );
};
