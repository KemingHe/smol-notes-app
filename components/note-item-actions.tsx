import styles from '@/components/note-item-actions.module.css';
import {
  DocumentDuplicateIcon,
  HeartIcon as HeartIconOutline,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

export const NoteItemActions = (): JSX.Element => {
  return (
    <div className={styles['actions-container']}>
      <div className={styles['safe-actions']}>
        <button type="button" className="group hover:text-pink-500">
          <HeartIconOutline className="size-4 group-hover:hidden" />
          <HeartIconSolid className="size-4 hidden group-hover:flex" />
        </button>
        <button type="button" className="hover:text-sky-500">
          <PencilIcon className="size-4" />
        </button>
        <button type="button" className="hover:text-sky-500">
          <DocumentDuplicateIcon className="size-4" />
        </button>
      </div>
      {/* Dangerous actions. */}
      <div className={styles['dangerous-actions']}>
        <button type="button">
          <TrashIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};
