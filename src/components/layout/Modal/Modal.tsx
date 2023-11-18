import { cn } from '@/utils/tailwindUtils';

export interface ModalProps {
  className?: string;
}

export const Modal = ({ className }: ModalProps) => {
  return <div className={cn('', className)}>Modal</div>;
};
