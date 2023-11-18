'use client';

import { Children, useState, type PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/utils/tailwindUtils';

export interface CarouselProps extends PropsWithChildren {
  className?: string;
}

export function Carousel({ className, children }: CarouselProps) {
  const [position, setPosition] = useState(0);

  // const handlePrevious = () => {
  //   setPosition((current) => current - 1);
  // };

  // const handleNext = () => {
  //   setPosition((current) => current + 1);
  // };

  return (
    <div className={cn('relative', className)}>
      <div className="mx-auto flex w-full gap-20 overflow-x-visible">
        {Children.map(children, (child, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: position === i ? 1 : 0.1,
            }}
            animate={{
              x: `calc(-${position} * (100% + 5rem))`,
              opacity: position === i ? 1 : 0.2,
            }}
            transition={{
              type: 'spring',
              stiffness: 160,
              damping: 20,
            }}
            className="w-full shrink-0">
            {child}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
