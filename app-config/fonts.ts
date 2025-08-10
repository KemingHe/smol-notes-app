import type { NextFont } from 'next/dist/compiled/@next/font';
import { Inter } from 'next/font/google';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const interClassName: string = inter.className;
