import type { Slide } from "@/assets/slides";
import { Button } from "@/components/Button";
import { useState } from "react";

interface SlidesProps {
  slides: Slide[];
}

export function Slides({ slides }: SlidesProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  function handleNext() {
    if (slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  }

  function handlePrev() {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  }

  function handleRestart() {
    setSlideIndex(0);
  }

  const selectedSlide = slides[slideIndex];

  return (
    <div className="max-w-2xl mx-auto gap-6 flex flex-col">
      <div id="navigation" className="flex justify-center gap-4">
        <Button
          data-testid="button-restart"
          onClick={handleRestart}
          disabled={slideIndex === 0}
        >
          Restart
        </Button>
        <Button
          data-testid="button-prev"
          onClick={handlePrev}
          disabled={slideIndex === 0}
        >
          Prev
        </Button>
        <Button
          data-testid="button-next"
          onClick={handleNext}
          disabled={slideIndex === slides.length - 1}
        >
          Next
        </Button>
      </div>

      <div
        id="slide"
        className="bg-white shadow-md rounded p-6 text-center border"
      >
        <h1 data-testid="title" className="text-2xl font-semibold mb-4">
          {selectedSlide.title}
        </h1>
        <p data-testid="text" className="text-gray-700 text-lg">
          {selectedSlide.text}
        </p>
      </div>
    </div>
  );
}
