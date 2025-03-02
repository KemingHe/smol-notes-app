import type { JSX } from 'react';

import { MemoizedNoteItem } from '@/components/note-item';
import styles from '@/components/notes-grid.module.css';
import { dummyNotes } from '@/mocks/dummy-notes';

export const NotesGrid = (): JSX.Element => {
  // Using CSS module because Tailwind doesn't support:
  // 1. Dynamic grid-template-columns with minmax()
  // 2. Complex auto-fill/auto-fit responsive grid layouts
  // These CSS Grid features require direct CSS declarations
  return (
    <div className={styles['notes-grid']}>
      {dummyNotes.map(({ id, title, content }) => (
        <MemoizedNoteItem key={id} title={title} content={content} />
      ))}
    </div>
  );
};
