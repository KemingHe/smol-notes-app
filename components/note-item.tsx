import { type JSX, memo } from 'react';

import { NoteItemActions } from '@/components/note-item-actions';
import type { NoteItemProps } from '@/types/note';

const NoteItem = ({ title, content }: NoteItemProps): JSX.Element => {
  return (
    <div className="flex flex-col p-2 border border-gray-300 rounded-md bg-gray-100 shadow-md">
      <NoteItemActions />
      <h2 className="font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export const MemoizedNoteItem = memo(NoteItem);
