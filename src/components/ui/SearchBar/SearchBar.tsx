import { cn } from '@/utils/tailwindUtils';

import type { UseFormRegisterReturn } from 'react-hook-form';
import { Icon } from '@/components/ui/Icon/Icon';

export interface SearchBarProps {
  className?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

export const SearchBar = ({ className, placeholder, register }: SearchBarProps) => {
  return (
    <div className={cn('flex justify-between rounded-full bg-white', className)}>
      <input
        control-id="ControlID-1"
        placeholder={placeholder}
        className="flex-grow truncate rounded-full bg-white px-4 py-2 outline-none"
        {...register}
      />

      <Icon icon="Search" className="mx-3 flex-shrink-0 text-gray-400" />
    </div>
  );
};
