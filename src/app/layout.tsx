import type { Metadata } from 'next';
import '@/assets/styles/globals.css';

import { fonts } from '@/constants/fonts';
import type { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';

export interface RootLayoutProps extends PropsWithChildren {}

export const metadata: Metadata = {
  title: 'Pokédex',
  description:
    'A comprehensive Pokédex clone, providing detailed information on Pokémon species, abilities, and stats, with a user-friendly interface.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={fonts}>
      <body>{children}</body>

      <Analytics />
    </html>
  );
}
