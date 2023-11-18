import { Inter } from 'next/font/google';

import { cn } from '@/utils/tailwindUtils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const fonts = cn(inter.variable);
