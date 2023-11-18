'use client';

import { navigationBarAtom } from '@/atoms/navigationBarAtom';
import { cn } from '@/utils/tailwindUtils';
import { useAtom } from 'jotai';
import type { PropsWithChildren } from 'react';

export interface ContentProps extends PropsWithChildren {
  className?: string;
}

export const Content = ({ className, children }: ContentProps) => {
  const [hasNavigationBar] = useAtom(navigationBarAtom);

  return (
    <main
      className={cn(
        'mt-[72px] flex flex-col gap-10 p-4 transition-all',
        hasNavigationBar ? 'pl-64' : 'pl-0',
        className,
      )}>
      {children}
    </main>
  );
};
