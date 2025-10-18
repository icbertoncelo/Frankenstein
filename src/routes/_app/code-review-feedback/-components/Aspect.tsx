import { useState } from "react";

interface AspectProps {
  index: number;
  title: string;
}

export function Aspect({ index, title }: AspectProps) {
  const [votes, setVotes] = useState({ upVotes: 0, downVotes: 0 });

  function handleVote(voteType: "upVotes" | "downVotes") {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [voteType]: prevVotes[voteType] + 1,
    }));
  }

  return (
    <div className="p-4 w-72 bg-white rounded shadow">
      <strong className="text-xl font-semibold mb-4">{title}</strong>
      <div className="flex my-8 mx-0 justify-around">
        <button
          className="py-2 px-4 bg-green-100 hover:bg-green-200 rounded"
          data-testid={`upvote-btn-${index}`}
          onClick={() => handleVote("upVotes")}
        >
          👍 Upvote
        </button>
        <button
          className="py-2 px-4 bg-red-100 hover:bg-red-200 text-red-700 rounded"
          data-testid={`downvote-btn-${index}`}
          onClick={() => handleVote("downVotes")}
        >
          👎 Downvote
        </button>
      </div>
      <p className="my-2 mx-0" data-testid={`upvote-count-${index}`}>
        Upvotes: <strong>{votes.upVotes}</strong>
      </p>
      <p className="my-2 mx-0" data-testid={`downvote-count-${index}`}>
        Downvotes: <strong>{votes.downVotes}</strong>
      </p>
    </div>
  );
}
