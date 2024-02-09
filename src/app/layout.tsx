import type { Metadata } from 'next';
import '@/assets/styles/globals.css';

import { fonts } from '@/constants/fonts';
import { type PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { NavigationBar } from '@/components/layout/NavigationBar/NavigationBar';
import { Header } from '@/components/layout/Header/Header';
import { Content } from '@/components/layout/Content/Content';

export interface RootLayoutProps extends PropsWithChildren {}

export const metadata: Metadata = {
  title: 'Pokédex',
  description:
    'A comprehensive Pokédex clone, providing detailed information on Pokémon species, abilities, and stats, with a user-friendly interface.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={fonts}>
      <body className="bg-gray-100 text-gray-800">
        <Header />

        <NavigationBar />

        <Content>{children}</Content>
      </body>

      <Analytics />
    </html>
  );
}
