import { cn } from '@/utils/tailwindUtils';
import { HeaderToggle } from './internal/HeaderToggle';
import Link from 'next/link';

export interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        'fixed top-0 z-50 flex w-full items-center gap-6 bg-gray-200 px-3 py-3 lg:px-5 lg:pl-3',
        className,
      )}>
      <HeaderToggle />

      <Link href="/">
        <h1
          className="text-2xl font-bold transition-opacity hover:opacity-50 active:opacity-75
        ">
          Pokédex
        </h1>
      </Link>
    </header>
  );
};
