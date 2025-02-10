import { XMarkIcon } from '@heroicons/react/20/solid';
import { type JSX, memo } from 'react';

import styles from '@/components/note-item.module.css';
import type { NoteItemProps } from '@/types/note';

const NoteItem = ({
  title,
  content,
}: NoteItemProps): JSX.Element => {
  return (
    <div className={styles['note-item']}>
      <div className={styles['note-item-actions']}>
        <button><XMarkIcon className="size-4" /></button>
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export const MemoizedNoteItem = memo(NoteItem);
