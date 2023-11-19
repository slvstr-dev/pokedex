import { cn } from '@/utils/tailwindUtils';

export interface TagProps {
  className?: string;
  label: string;
}

export const Tag = ({ className, label }: TagProps) => {
  return (
    <div
      className={cn(
        'rounded-md bg-gray-100 px-2 py-1 font-bold capitalize text-gray-600',
        className,
      )}>
      {label}
    </div>
  );
};
