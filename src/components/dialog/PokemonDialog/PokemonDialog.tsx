'use client';

import { Suspense, useState, type PropsWithChildren } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Dialog } from '@/components/layout/Dialog/Dialog';
import { TypeList } from '@/components/list/TypeList/TypeList';
import { StatList } from '@/components/list/StatList/StatList';
import { StatListSkeleton } from '@/components/list/StatList/internal/StatListSkeleton';
import { MoveListSkeleton } from '@/components/list/MoveList/internal/MoveListSkeleton';
import { MoveList } from '@/components/list/MoveList/MoveList';
import { TypeListSkeleton } from '@/components/list/TypeList/internal/TypeListSkeleton';

export interface PokemonDialogProps extends PropsWithChildren {
  className?: string;
  name: string;
  number: number;
}

export function PokemonDialog({ className, children, name, number }: PokemonDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      <Dialog.Trigger className={className}>{children}</Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Modal title={name} description={number}>
            <div>
              <div>Carousel</div>

              <div>
                <h2>Description</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id aliquid quam
                  enim ratione, doloremque voluptatem laudantium praesentium soluta adipisci,
                  placeat repudiandae alias eos quasi blanditiis expedita! Aliquam, reiciendis
                  fugiat!
                </p>

                <Suspense fallback={<TypeListSkeleton />}>
                  <TypeList types={[{ name: 'Electric', type: 'electric' }]} />
                </Suspense>
              </div>

              <div>
                <div>
                  <h3>Base stats</h3>

                  <Suspense fallback={<StatListSkeleton />}>
                    <StatList
                      stats={[
                        { label: 'HP', progress: 165, total: 300 },
                        { label: 'ATK', progress: 181, total: 300 },
                        { label: 'DEF', progress: 161, total: 300 },
                        { label: 'SPD', progress: 206, total: 300 },
                        { label: 'EXP', progress: 465, total: 1000 },
                      ]}
                    />
                  </Suspense>
                </div>

                <div>
                  <h3>Moves</h3>

                  <Suspense fallback={<MoveListSkeleton />}>
                    <MoveList
                      moves={[
                        { name: 'Thunder', type: 'electric' },
                        { name: 'Bite', type: 'normal' },
                      ]}
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          </Dialog.Modal>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
