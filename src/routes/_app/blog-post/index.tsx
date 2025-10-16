import { useState, type ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Input } from "./-components/Input";
import { PostDisplay, type Post } from "./-components/PostData";
import { Button } from "@/components/Button";

const INITIAL_FORM_DATA_STATE = {
  title: "",
  description: "",
};

export const Route = createFileRoute("/_app/blog-post/")({
  component: Posts,
});

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postFormData, setPostFormData] = useState(INITIAL_FORM_DATA_STATE);

  function handleAddPost() {
    if (!postFormData.title || !postFormData.description) return;

    setPosts((prevState) => [
      ...prevState,
      {
        ...postFormData,
        id: new Date().getTime(),
      },
    ]);

    setPostFormData(INITIAL_FORM_DATA_STATE);
  }

  function handleDeletePost(id: number) {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  }

  function handleChangePostFormData(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPostFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="flex flex-col items-center text-center p-6 gap-6">
      <div className="flex flex-col gap-4 w-1/2">
        <Input
          onChangePostFormData={handleChangePostFormData}
          postFormData={postFormData}
        />
        <Button onClick={handleAddPost}>Create Post</Button>
      </div>
      <div className="posts-section w-1/2">
        <PostDisplay posts={posts} onDeletePost={handleDeletePost} />
      </div>
    </div>
  );
}
