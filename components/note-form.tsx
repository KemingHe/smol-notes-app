import type { JSX } from 'react';

import styles from '@/components/note-form.module.css';

export const NoteForm = (): JSX.Element => {
  return (
    <form className={styles['note-form']}>
      <input placeholder="Title" required />
      <textarea 
        placeholder="Content"
        rows={10}
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
};
