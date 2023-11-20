'use client';

import { useStore } from '@/app/zustand/store';
import { cn } from '@/utils/tailwindUtils';
import type { PropsWithChildren } from 'react';

export interface MainProps extends PropsWithChildren {
  className?: string;
}

export const Content = ({ className, children }: MainProps) => {
  const { hasNavigationBar } = useStore();

  return (
    <main
      className={cn(
        'mt-[72px] p-4 transition-all sm:p-8',
        hasNavigationBar ? 'sm:ml-64' : 'ml-0',
        className,
      )}>
      {children}
    </main>
  );
};
