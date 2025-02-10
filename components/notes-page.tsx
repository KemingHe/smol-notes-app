import type { JSX } from 'react';

import { NotesGrid } from '@/components/notes-grid';
import { NoteForm } from '@/components/note-form';
import styles from '@/components/notes-page.module.css';

export const NotesPage = (): JSX.Element => {
  return (
    <div className={styles['notes-page']}>
      <NoteForm />
      <NotesGrid />
    </div>
  );
};
