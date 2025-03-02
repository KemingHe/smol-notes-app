import type { JSX } from 'react';

import { CopyAction } from '@/components/note-item-actions-safe-copy';
import { EditAction } from '@/components/note-item-actions-safe-edit';
import { FavoriteAction } from '@/components/note-item-actions-safe-favorite';
import { ShareAction } from '@/components/note-item-actions-safe-share';
import { DeleteAction } from '@/components/note-item-actions-unsafe-delete';

export const NoteItemActions = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between mt-0.5 mb-1">
      {/* Safe actions. */}
      <div className="flex flex-shrink-0 justify-start gap-1">
        <FavoriteAction />
        <EditAction />
        <CopyAction />
        <ShareAction />
      </div>
      {/* Unsafe actions. */}
      <div className="flex flex-shrink-0 justify-end gap-1 text-rose-600">
        <DeleteAction />
      </div>
    </div>
  );
};
