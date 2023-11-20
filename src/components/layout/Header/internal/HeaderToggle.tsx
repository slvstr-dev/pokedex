'use client';

import { useStore } from '@/app/zustand/store';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';

export interface HeaderToggleProps {
  className?: string;
}

export const HeaderToggle = ({ className }: HeaderToggleProps) => {
  const { hasNavigationBar, toggleHasNavigationBar } = useStore();

  return (
    <Button onClick={toggleHasNavigationBar} className={className}>
      <Icon className="h-auto w-8" icon={hasNavigationBar ? 'Close' : 'Menu'} />
    </Button>
  );
};
