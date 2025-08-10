import { type JSX, memo } from 'react';

import { NoteItemActions } from '@/components/note-item-actions';
import type { NoteItemProps } from '@/types/note';

import styles from '@/components/note-item.module.css';

const NoteItem = ({ title, content }: NoteItemProps): JSX.Element => {
  return (
    <div className={styles.noteItem}>
      <NoteItemActions />
      <h2 className={styles.noteTitle}>{title}</h2>
      <p className={styles.noteContent}>{content}</p>
    </div>
  );
};

export const MemoizedNoteItem = memo(NoteItem);
