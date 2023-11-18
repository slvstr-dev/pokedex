import { cn } from '@/utils/tailwindUtils';
import { ProgressBar } from '@/components/ui/ProgressBar/ProgressBar';

export interface Stat {
  label: string;
  progress: number;
  total: number;
}

export interface StatListProps {
  className?: string;
  stats: Stat[];
}

export const StatList = ({ className, stats }: StatListProps) => {
  return (
    <div className={cn('', className)}>
      {stats.map((stat, idx) => {
        return (
          <div key={idx}>
            <span>{stat.label}</span>

            <ProgressBar progress={stat.progress} total={stat.total} />
          </div>
        );
      })}
    </div>
  );
};
