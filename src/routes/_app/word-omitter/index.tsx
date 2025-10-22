import { Button } from "@/components/Button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_app/word-omitter/")({
  component: RouteComponent,
});

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function RouteComponent() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords((prevState) => !prevState);
  };

  const clearFields = () => {
    setInputText("");
  };

  const getProcessedText = () => {
    if (!omitWords) return inputText;

    const omittedWordsObject = Object.fromEntries(
      OMITTED_WORDS.map((word) => [word, true])
    );

    const splittedInputText = inputText.split(" ");
    const filteredWords = splittedInputText.filter(
      (word) => !omittedWordsObject[word.toLowerCase()]
    );
    const textAfterOmitting = filteredWords.join(" ");

    return textAfterOmitting;
  };

  return (
    <div className="flex flex-col items-center py-6 gap-6">
      <h1 className="text-2xl font-bold">Word Omitter</h1>

      <div className="w-1/2 mx-auto p-4 space-y-4">
        <textarea
          placeholder="Type here..."
          value={inputText}
          onChange={handleInputChange}
          data-testid="input-area"
          className="w-full h-20 p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-6">
          <Button onClick={toggleOmitWords} data-testid="action-btn">
            {omitWords ? "Show All Words" : "Omit Words"}
          </Button>
          <Button onClick={clearFields} data-testid="clear-btn">
            Clear
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Output:</h2>
          <p
            data-testid="output-text"
            className="text-gray-800 whitespace-pre-wrap"
          >
            {getProcessedText()}
          </p>
        </div>
      </div>
    </div>
  );
}
