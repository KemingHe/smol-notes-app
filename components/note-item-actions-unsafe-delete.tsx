import { TrashIcon } from '@heroicons/react/24/outline';
import type { JSX } from 'react';

export const DeleteAction = (): JSX.Element => {
  return (
    <button
      type="button"
      className="p-1 rounded-full hover:bg-rose-300 hover:text-rose-800"
    >
      <TrashIcon className="size-4" />
    </button>
  );
};
