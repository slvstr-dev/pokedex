import type { Metadata } from 'next';
import '@/assets/styles/globals.css';

import { fonts } from '@/constants/fonts';
import type { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { NavigationBar } from '@/components/layout/NavigationBar/NavigationBar';

export interface RootLayoutProps extends PropsWithChildren {}

export const metadata: Metadata = {
  title: 'Pokédex',
  description:
    'A comprehensive Pokédex clone, providing detailed information on Pokémon species, abilities, and stats, with a user-friendly interface.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={fonts}>
      <body>
        <div className="grid grid-cols-12">
          <NavigationBar className="col-span-2" />

          <div className="col-span-10">{children}</div>
        </div>
      </body>

      <Analytics />
    </html>
  );
}
