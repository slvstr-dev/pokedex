'use client';

import { cn } from '@/utils/tailwindUtils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavigationBarProps {
  className?: string;
}

export const NavigationBar = ({ className }: NavigationBarProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn('border-r border-black', className)}>
      <ul>
        <li>
          <Link className={cn('text-black', pathname === '/' ? 'text-red-500' : '')} href="/">
            Pokédex
          </Link>
        </li>

        <li>
          <Link
            className={cn('text-black', pathname === '/favorites' ? 'text-red-500' : '')}
            href="/favorites">
            My favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};
