import type { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';
import type { JSX } from 'react';

import type { LayoutProps } from '@/types/app-layout-propts';
import '@/app/globals.css';

export { metadata } from '@/app-config/metadata';
export { viewport } from '@/app-config/viewport';

const inter: NextFont = Inter({ subsets: ['latin'] });

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-dvh`}>{children}</body>
    </html>
  );
};

export default Layout;
