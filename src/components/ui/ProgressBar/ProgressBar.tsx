import { cn } from '@/utils/tailwindUtils';
import * as Progress from '@radix-ui/react-progress';

export interface ProgressBarProps {
  className?: string;
  value: number;
  total: number;
  label: string;
}

export const ProgressBar = ({ className, value, total, label }: ProgressBarProps) => {
  const progress = (value / total) * 100;

  return (
    <Progress.Root
      className={cn('relative h-6 w-full overflow-hidden rounded-full bg-gray-400', className)}
      value={value}
      max={total}>
      <Progress.Indicator
        className="h-full w-full bg-gray-200"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />

      <span className="absolute inset-0 text-center font-bold">{label}</span>
    </Progress.Root>
  );
};
