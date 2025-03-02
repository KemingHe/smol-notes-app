import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

export const FavoriteAction = (): JSX.Element => {
  return (
    <button
      type="button"
      className="group p-0.5 rounded-full text-gray-400 hover:text-pink-500"
    >
      <HeartIconOutline className="size-4 group-hover:hidden" />
      <HeartIconSolid className="size-4 hidden group-hover:flex" />
    </button>
  );
};
