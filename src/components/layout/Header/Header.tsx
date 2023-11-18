import { cn } from '@/utils/tailwindUtils';
import { MenuToggle } from './internal/MenuToggle';

export interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn('flex items-center gap-6 bg-gray-400 p-2 text-white', className)}>
      <MenuToggle />

      <h1 className="text-xl font-semibold">Pokédex</h1>
    </header>
  );
};
