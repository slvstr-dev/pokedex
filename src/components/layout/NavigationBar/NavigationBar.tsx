'use client';

import { Button } from '@/components/ui/Button/Button';
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
          <Link href="/">
            <Button isActive={pathname === '/'}>Pokédex</Button>
          </Link>
        </li>

        <li>
          <Link href="/favorites">
            <Button isActive={pathname === '/favorites'}>My favorites</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
