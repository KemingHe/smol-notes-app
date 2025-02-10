import type { Metadata } from 'next';

import { getVersion } from '@/utils/package';

export const metadata: Metadata = {
  title: 'Smol Notes App',
  description: 'A smol notes app with beeg potentials.',

  // Custom properties.
  other: {
    version: getVersion(),
  },
};
