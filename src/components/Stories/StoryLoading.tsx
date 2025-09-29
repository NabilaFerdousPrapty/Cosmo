import React from "react";

interface StoryLoadingProps {
  pageNumber: number;
}

export const StoryLoading: React.FC<StoryLoadingProps> = ({ pageNumber }) => {
  const gradientBackgroundClass = `bg-gradient-to-br ${
    pageNumber % 2 === 0
      ? "from-black-900 to-gray-800"
      : "from-slate-900 to-zinc-800"
  }`;

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${gradientBackgroundClass} text-purple-800 text-2xl font-bold`}
    >
      <span className="animate-pulse">Loading adventure...</span>
    </div>
  );
};
