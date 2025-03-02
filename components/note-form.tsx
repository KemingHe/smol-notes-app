import type { JSX } from 'react';

export const NoteForm = (): JSX.Element => {
  return (
    <form className="flex flex-col gap-2 m-5">
      <input
        className="bg-gray-100 font-semibold border border-gray-400 rounded-md"
        placeholder="Title"
        required
      />
      <textarea
        className="bg-gray-100 border border-gray-400 rounded-md"
        placeholder="Content"
        rows={10}
        required
      />
      <button
        type="submit"
        className="rounded-md border-none p-2 font-semibold text-base text-white bg-sky-500 hover:bg-sky-700"
      >
        Add Note
      </button>
    </form>
  );
};
