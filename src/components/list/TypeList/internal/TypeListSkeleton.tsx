import { cn } from '@/utils/tailwindUtils';

export interface TypeListSkeletonProps {
  className?: string;
}

export const TypeListSkeleton = ({ className }: TypeListSkeletonProps) => {
  return (
    <div className={cn('', className)}>
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <div
            key={i}
            className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
            <div className="flex animate-pulse space-y-6">
              <div className="h-2 rounded bg-slate-700" />

              <div className="h-2 rounded bg-slate-700" />

              <div className="h-2 rounded bg-slate-700" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
