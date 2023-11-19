'use client';
import Image from 'next/image';

import { Suspense, useState, type PropsWithChildren } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Dialog } from '@/components/layout/Dialog/Dialog';
import { TypeList } from '@/components/list/TypeList/TypeList';
import { StatList } from '@/components/list/StatList/StatList';
import { StatListSkeleton } from '@/components/list/StatList/internal/StatListSkeleton';
import { MoveListSkeleton } from '@/components/list/MoveList/internal/MoveListSkeleton';
import { MoveList } from '@/components/list/MoveList/MoveList';
import { TypeListSkeleton } from '@/components/list/TypeList/internal/TypeListSkeleton';
import { FavoriteToggle } from '@/components/ui/PokemonCard/internal/FavoriteToggle';
import { getPokemon } from '@/services/pokemonService';

export interface PokemonDialogProps extends PropsWithChildren {
  className?: string;
  name: string;
  index: number;
}

export const PokemonDialog = ({ className, children, name, index }: PokemonDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      <Dialog.Trigger className={className}>{children}</Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Modal title={name} description={`#${index}`}>
            <div className="grid grid-cols-12 gap-14">
              <div className="relative col-span-4 flex aspect-square items-center justify-center rounded-xl bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-green-200 to-green-500">
                <FavoriteToggle index={index} className="absolute right-4 top-4" />

                <Image
                  width={150}
                  height={150}
                  className="h-40 w-40 object-contain"
                  alt={`Sprite of ${name}`}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                />
              </div>

              <div className="col-span-8 flex flex-col gap-4">
                <h2 className="text-2xl font-bold capitalize">Description</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id aliquid quam
                  enim ratione, doloremque voluptatem laudantium praesentium soluta adipisci,
                  placeat repudiandae alias eos quasi blanditiis expedita! Aliquam, reiciendis
                  fugiat!
                </p>

                <Suspense fallback={<TypeListSkeleton />}>
                  <TypeList index={index} />
                </Suspense>
              </div>

              <div className="col-span-5 flex flex-col gap-4">
                <h3 className="text-xl font-bold capitalize">Base stats</h3>

                <Suspense fallback={<StatListSkeleton />}>
                  <StatList index={index} />
                </Suspense>
              </div>

              <div className="col-span-7 flex flex-col gap-4">
                <h3 className="text-xl font-bold capitalize">Moves</h3>

                <Suspense fallback={<MoveListSkeleton />}>
                  <MoveList index={index} />
                </Suspense>
              </div>
            </div>
          </Dialog.Modal>
        )}
      </AnimatePresence>
    </Dialog>
  );
};
