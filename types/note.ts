export type Note =
  // biome-ignore format: added alignment for clarity.
  {
    id     : string;
    title  : string;
    content: string;
};

// biome-ignore format: added alignment for clarity.
export interface NoteItemProps {
  title  : string;
  content: string;
}
