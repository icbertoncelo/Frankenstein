import { createFileRoute } from "@tanstack/react-router";
import { COMMENTS, type Comment } from "../../../assets/comments";

export const Route = createFileRoute("/_app/nested-comments/")({
  component: NestedCommentTree,
});

function NestedCommentTree() {
  function buildTree(
    comments: Comment[],
    parentId: string | null = null
  ): Comment[] {
    return comments
      .filter((comment) => comment.parentId === parentId)
      .map((comment) => ({
        ...comment,
        children: buildTree(comments, comment.id),
      }));
  }

  function renderComments(comments: (Comment & { children?: Comment[] })[]) {
    return (
      <ul className="list-disc pl-6">
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            {!!comment.children?.length && renderComments(comment.children)}
          </li>
        ))}
      </ul>
    );
  }

  const commentTree = buildTree(COMMENTS);

  return (
    <div className="flex flex-col items-center mx-auto max-w-2xl py-6 gap-10">
      <h1 className="mb-2 text-2xl">💬 Comment Section</h1>
      {renderComments(commentTree)}
    </div>
  );
}
