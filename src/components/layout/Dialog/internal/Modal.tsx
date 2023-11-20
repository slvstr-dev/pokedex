'use client';

import type { PropsWithChildren, ReactNode } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';

import { Icon } from '@/components/ui/Icon/Icon';
import { cn } from '@/utils/tailwindUtils';

export interface ModalProps extends PropsWithChildren {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
}

export function Modal({ children, className, title, description }: ModalProps) {
  return (
    <DialogPrimitive.Portal forceMount>
      <DialogPrimitive.Overlay asChild>
        <motion.div
          className="fixed inset-0 z-50 cursor-pointer bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
        />
      </DialogPrimitive.Overlay>

      <DialogPrimitive.Content asChild>
        <motion.div
          initial={{
            opacity: 0,
            top: '50%',
            left: '50%',
            translateX: '-50%',
          }}
          animate={{
            opacity: 1,
            y: '-50%',
          }}
          transition={{
            type: 'spring',
            duration: 0.4,
          }}
          exit={{
            opacity: 0,
            y: '50%',
          }}
          className={cn(
            'fixed z-50 flex max-h-[90%] w-[90%] max-w-5xl flex-col gap-2 rounded-xl bg-white p-4 sm:p-8',
            className,
          )}>
          <DialogPrimitive.Close asChild>
            <Icon
              icon="Close"
              className="absolute right-4 top-4 w-8 cursor-pointer transition-opacity hover:opacity-50"
            />
          </DialogPrimitive.Close>

          {title && (
            <DialogPrimitive.Title className="text-4xl font-bold capitalize">
              {title}
            </DialogPrimitive.Title>
          )}

          {description && (
            <DialogPrimitive.Description className="text-2xl font-bold">
              {description}
            </DialogPrimitive.Description>
          )}

          <div className="mt-4 w-full overflow-y-auto">{children}</div>
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
