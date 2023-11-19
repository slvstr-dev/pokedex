'use client';

import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/utils/tailwindUtils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/app/zustand/store';

export interface NavigationBarProps {
  className?: string;
}

export const NavigationBar = ({ className }: NavigationBarProps) => {
  const { hasNavigationBar } = useStore((store) => store);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 mt-[72px] h-screen w-64 bg-gray-200  transition-transform',
        hasNavigationBar ? 'translate-x-0' : '-translate-x-full',
        className,
      )}>
      <nav className="h-full overflow-y-auto">
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
    </aside>
  );
};
