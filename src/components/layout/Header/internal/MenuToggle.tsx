'use client';

import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Button/Icon/Icon';
import { useState } from 'react';

export interface MenuToggleProps {
  className?: string;
}

export const MenuToggle = ({ className }: MenuToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log('MenuToggle clicked');

    setIsOpen(!isOpen);
  };

  return (
    <Button onClick={handleClick} className={className}>
      <Icon className="h-auto w-8" icon="Menu" />
    </Button>
  );
};
