import type { JSX } from 'react';

import { MemoizedNoteItem } from '@/components/note-item';
import styles from '@/components/notes-grid.module.css';
import { dummyNotes } from '@/mocks/dummy-notes';

export const NotesGrid = (): JSX.Element => {
  return (
    <div className={styles['notes-grid']}>
      {dummyNotes.map(({ id, title, content }) => (
        <MemoizedNoteItem key={id} title={title} content={content} />
      ))}
    </div>
  );
};
