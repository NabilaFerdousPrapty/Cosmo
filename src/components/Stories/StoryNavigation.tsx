import React from "react";
import { NavButton } from "@/components/Stories/NavButton";
import { Particles } from "@/components/ui/particles";

interface StoryNavigationProps {
  pageNumber: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const StoryNavigation: React.FC<StoryNavigationProps> = ({
  pageNumber,
  totalPages,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="relative z-10 flex flex-col items-center w-full max-w-md mt-6 sm:mt-8 mb-4">
      <Particles className="absolute inset-0 z-0" />
      <div className="flex justify-between w-full gap-4 px-4">
        <NavButton
          onClick={onPrevious}
          disabled={pageNumber <= 1}
          className="bg-purple-500 hover:bg-purple-600 focus:ring-purple-300"
        >
          <span className="mr-2 text-2xl">👈</span> Previous
        </NavButton>

        <NavButton
          onClick={onNext}
          disabled={pageNumber >= totalPages}
          className="bg-green-500 hover:bg-green-600 focus:ring-green-300"
        >
          Next <span className="ml-2 text-2xl">👉</span>
        </NavButton>
      </div>

      <div className="mt-4 text-xl font-bold text-gray-100 bg-black bg-opacity-70 px-4 py-2 rounded-full shadow-md border border-gray-300">
        Page {pageNumber} of {totalPages}
      </div>
    </div>
  );
};
