export interface Comment {
  id: string;
  parentId: string | null;
  text: string;
}

export const COMMENTS: Comment[] = [
  { id: "1", parentId: null, text: "This is the first comment" },
  { id: "2", parentId: "1", text: "Reply to first comment" },
  { id: "3", parentId: "1", text: "Another reply to first comment" },
  { id: "4", parentId: "2", text: "Nested reply" },
  { id: "5", parentId: null, text: "Second top-level comment" },
];