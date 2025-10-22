import { createFileRoute } from "@tanstack/react-router";
import Articles from "./-components/Articles";
import { ARTICLES_DATA } from "@/assets/articles";
import { Button } from "@/components/Button";
import { useState } from "react";

export const Route = createFileRoute("/_app/articles-sorting/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [filteredArticles, setFilteredArticles] = useState([
    ...ARTICLES_DATA.sort((a, b) => b.upvotes - a.upvotes),
  ]);

  const handleMostUpvoted = () => {
    setFilteredArticles((prevState) => [
      ...prevState.sort((a, b) => b.upvotes - a.upvotes),
    ]);
  };

  const handleMostRecent = () => {
    setFilteredArticles((prevState) => [
      ...prevState.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    ]);
  };

  return (
    <div className="flex flex-col items-center mx-auto max-w-2xl py-6 gap-6">
      <h1 className="text-2xl font-bold">Articles Sorting</h1>

      <div className="flex flex-row items-center justify-center gap-6 bg-white p-6 rounded-lg shadow-md">
        <label className="text-xs mb-0 uppercase font-light tracking-widest text-gray-500 mr-4">
          Sort By
        </label>
        <Button data-testid="most-upvoted-link" onClick={handleMostUpvoted}>
          Most Upvoted
        </Button>
        <Button
          data-testid="most-recent-link"
          className="bg-gray-500 text-gray-700"
          onClick={handleMostRecent}
        >
          Most Recent
        </Button>
      </div>
      <Articles articles={filteredArticles} />
    </div>
  );
}
