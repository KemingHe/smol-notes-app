import type { JSX } from 'react';

import { CopyAction } from '@/components/note-item-actions-safe-copy';
import { EditAction } from '@/components/note-item-actions-safe-edit';
import { FavoriteAction } from '@/components/note-item-actions-safe-favorite';
import { ShareAction } from '@/components/note-item-actions-safe-share';
import { DeleteAction } from '@/components/note-item-actions-unsafe-delete';

import styles from '@/components/note-item-actions.module.css';

export const NoteItemActions = (): JSX.Element => {
  return (
    <div className={styles.container}>
      {/* Safe actions. */}
      <div className={styles.safeActionsGroup}>
        <FavoriteAction />
        <EditAction />
        <CopyAction />
        <ShareAction />
      </div>
      {/* Unsafe actions. */}
      <div className={styles.unsafeActionsGroup}>
        <DeleteAction />
      </div>
    </div>
  );
};
