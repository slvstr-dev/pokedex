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
    <div className={cn('flex justify-between border border-black bg-gray-100', className)}>
      <input
        placeholder={placeholder}
        className="flex-grow truncate bg-gray-100 px-4 py-2 outline-none"
        {...register}
      />

      <button type="submit">
        <Icon icon="Search" className="mx-2 flex-shrink-0" />
      </button>
    </div>
  );
};
