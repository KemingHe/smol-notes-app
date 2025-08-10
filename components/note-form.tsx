import type { JSX } from 'react';

import styles from '@/components/note-form.module.css';

export const NoteForm = (): JSX.Element => {
  return (
    <form className={styles.form}>
      <input className={styles.titleInput} placeholder="Title" required />
      <textarea
        className={styles.contentInput}
        placeholder="Content"
        rows={10}
        required
      />
      <button type="submit" className={styles.submitButton}>
        Add Note
      </button>
    </form>
  );
};
