import type { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import type { JSX, ReactNode } from 'react';

import './globals.css';

export { metadata } from '@/app-config/metadata';

const inter: NextFont = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-dvh`}>{children}</body>
    </html>
  );
}
