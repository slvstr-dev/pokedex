import type { Metadata } from 'next';
import '@/assets/styles/globals.css';

import { fonts } from '@/constants/fonts';
import type { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { NavigationBar } from '@/components/layout/NavigationBar/NavigationBar';
import { Header } from '@/components/layout/Header/Header';
import { SearchForm } from '@/components/form/SearchForm/SearchForm';
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
      <body>
        <Header />

        <NavigationBar />

        <Content>
          <SearchForm className="w-1/2 self-center" />

          {children}
        </Content>
      </body>

      <Analytics />
    </html>
  );
}
