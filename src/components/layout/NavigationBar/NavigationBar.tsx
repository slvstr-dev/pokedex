'use client';

import { navigationBarAtom } from '@/atoms/navigationBarAtom';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/utils/tailwindUtils';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavigationBarProps {
  className?: string;
}

export const NavigationBar = ({ className }: NavigationBarProps) => {
  const [hasNavigationBar] = useAtom(navigationBarAtom);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 mt-[72px] h-screen w-64 border-r border-gray-200 bg-white transition-transform',
        hasNavigationBar ? 'translate-x-0' : '-translate-x-full',
        className,
      )}>
      <nav className="h-full overflow-y-auto bg-white">
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
