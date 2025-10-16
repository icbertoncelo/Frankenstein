import type { ChangeEvent } from "react";

interface InputProps {
  onChangePostFormData: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  postFormData: { title: string; description: string };
}

export function Input({ onChangePostFormData, postFormData }: InputProps) {
  return (
    <div className="flex flex-col justify-content-center items-center gap-4">
      <input
        className="w-full border border-gray-300 p-2 rounded"
        type="text"
        placeholder="Enter Title"
        data-testid="title-input"
        name="title"
        value={postFormData.title}
        onChange={onChangePostFormData}
      />
      <textarea
        className="w-full border border-gray-300 p-2 rounded"
        placeholder="Enter Description"
        data-testid="description-input"
        name="description"
        value={postFormData.description}
        onChange={onChangePostFormData}
      />
    </div>
  );
}
