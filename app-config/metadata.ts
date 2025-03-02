import type { Metadata } from 'next';

import pkg from '@/package.json';

export const metadata: Metadata = {
  title: 'Smol Notes App',
  description: 'A smol notes app with beeg potentials.',
  generator: 'Next.js',
  applicationName: 'Smol Notes App',
  referrer: 'strict-origin-when-cross-origin',
  authors: [{ name: 'Keming He', url: 'https://linkedin.com/in/keminghe' }],
  creator: 'Keming He',
  publisher: 'Keming He',
  appleWebApp: {
    title: 'SmolNotes',
  },
  category: 'technology',
  other: {
    version: pkg.version,
  },
};
