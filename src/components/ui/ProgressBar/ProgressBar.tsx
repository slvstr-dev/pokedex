import { cn } from '@/utils/tailwindUtils';

export interface ProgressBarProps {
  className?: string;
  progress: number;
  total: number;
}

export const ProgressBar = ({ className, progress, total }: ProgressBarProps) => {
  return (
    <div className={cn('', className)}>
      {progress} / {total}
    </div>
  );
};
