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
    <div className="flex flex-col items-center mx-auto w-1/2 py-6 gap-6">
      <h1 className="text-2xl font-bold">💬 Comment Section</h1>
      <p>This challenge aims to create a nested tree based on the data below</p>
      <div className="flex flex-row gap-6">
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          {`${JSON.stringify(COMMENTS, null, 2)}`}
        </pre>
        {renderComments(commentTree)}
      </div>
    </div>
  );
}
