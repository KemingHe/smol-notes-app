import type { MetadataRoute } from 'next';

import { COLOR_PRIMARY } from '@/constants/app-config';

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: 'Smol Notes App',
    short_name: 'SmolNotes',
    description: 'A smol notes app with beeg potentials.',
    start_url: '/',
    icons: [
      {
        src: '/icons/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    theme_color: COLOR_PRIMARY,
    background_color: COLOR_PRIMARY,
    display: 'standalone',
  };
};

export default manifest;
