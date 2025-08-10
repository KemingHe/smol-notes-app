import type { JSX } from 'react';

import { interClassName } from '@/app-config/fonts';
import type { LayoutProps } from '@/types/app-layout-propts';

import '@/app/globals.css';

export { metadata } from '@/app-config/metadata';
export { viewport } from '@/app-config/viewport';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body className={interClassName}>{children}</body>
    </html>
  );
};

export default Layout;
