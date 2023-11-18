import { cn } from '@/utils/tailwindUtils';

export interface ToastProps {
  className?: string;
  label: string;
}

export const Toast = ({ className, label }: ToastProps) => {
  return <div className={cn('', className)}>{label}</div>;
};
