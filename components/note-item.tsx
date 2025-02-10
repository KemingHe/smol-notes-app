import { TrashIcon } from '@heroicons/react/24/outline';
import { type JSX, memo } from 'react';

import { NoteItemActions } from '@/components/note-item-actions';
import styles from '@/components/note-item.module.css';
import type { NoteItemProps } from '@/types/note';

const NoteItem = ({ title, content }: NoteItemProps): JSX.Element => {
  return (
    <div className={styles['note-item']}>
      <NoteItemActions />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export const MemoizedNoteItem = memo(NoteItem);
