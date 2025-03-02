import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import type { JSX } from 'react';

export const CopyAction = (): JSX.Element => {
  return (
    <button
      type="button"
      className="p-0.5 rounded-full text-gray-400 hover:text-sky-500"
    >
      <DocumentDuplicateIcon className="size-4" />
    </button>
  );
};
