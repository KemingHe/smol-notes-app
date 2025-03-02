import type { JSX } from 'react';

import { NoteForm } from '@/components/note-form';
import { NotesGrid } from '@/components/notes-grid';

export const NotesPage = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[280px,1fr]">
      <NoteForm />
      <NotesGrid />
    </div>
  );
};
