import type { JSX } from 'react';

import { NoteForm } from '@/components/note-form';
import { NotesGrid } from '@/components/notes-grid';
import styles from '@/components/notes-page.module.css';

export const NotesPage = (): JSX.Element => {
  return (
    <div className={styles['notes-page']}>
      <NoteForm />
      <NotesGrid />
    </div>
  );
};
