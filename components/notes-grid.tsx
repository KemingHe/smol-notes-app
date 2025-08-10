import type { JSX } from 'react';

import { MemoizedNoteItem } from '@/components/note-item';
import { dummyNotes } from '@/mocks/dummy-notes';

import styles from '@/components/notes-grid.module.css';

export const NotesGrid = (): JSX.Element => {
  // Using CSS module for advanced CSS Grid features that Tailwind doesn't support well:
  // - Dynamic grid-template-columns with minmax()
  // - Complex auto-fill/auto-fit responsive grid layouts
  return (
    <div className={styles.container}>
      {dummyNotes.map(({ id, title, content }) => (
        <MemoizedNoteItem key={id} title={title} content={content} />
      ))}
    </div>
  );
};
