import { Button } from "@/components/Button";

export type Post = { id: number; title: string; description: string };

interface PostDisplayProps {
  posts: Post[];
  onDeletePost: (id: number) => void;
}

export function PostDisplay({ posts, onDeletePost }: PostDisplayProps) {
  return (
    <div data-testid="posts-container" className="flex wrap gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-[#f0f0f0] border border-[#ccc] p-2 min-w-fit flex-1 box-border"
        >
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <Button onClick={() => onDeletePost(post.id)} className="bg-red-800 ">
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
