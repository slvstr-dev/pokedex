'use client';

import { navigationBarAtom } from '@/atoms/navigationBarAtom';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';
import { useAtom } from 'jotai';

export interface HeaderToggleProps {
  className?: string;
}

export const HeaderToggle = ({ className }: HeaderToggleProps) => {
  const [hasNavigationBar, setHasNavigationBar] = useAtom(navigationBarAtom);

  const toggleNavigationBar = () => setHasNavigationBar(!hasNavigationBar);

  return (
    <Button onClick={toggleNavigationBar} className={className}>
      <Icon className="h-auto w-8" icon={hasNavigationBar ? 'Close' : 'Menu'} />
    </Button>
  );
};
