import { LinkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import type { JSX } from 'react';

import styles from '@/components/note-item-actions.module.css';

export const ShareAction = (): JSX.Element => {
  return (
    <button
      type="button"
      className={clsx(styles.actionButton, styles.actionButtonSafe)}
    >
      <LinkIcon className={styles.actionIcon} />
    </button>
  );
};
