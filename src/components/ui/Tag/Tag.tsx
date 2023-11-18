import { cn } from '@/utils/tailwindUtils';

export interface TagProps {
  className?: string;
  label: string;
  variant: string;
}

export const Tag = ({ className, label, variant }: TagProps) => {
  return (
    <div className={cn('', className)}>
      {label} / {variant}
    </div>
  );
};
