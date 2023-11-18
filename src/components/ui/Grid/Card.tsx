import { cn } from '@/utils/tailwindUtils';

export interface GridProps {
  className?: string;
}

export const Grid = ({ className }: GridProps) => {
  return <div className={cn('', className)}>Grid</div>;
};
