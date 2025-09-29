// app/stories/[id]/[page]/components/StoryLayout.tsx
import React from "react";
import { Particles } from "@/components/ui/particles";

interface StoryLayoutProps {
  children: React.ReactNode;
  pageNumber: number;
}

export const StoryLayout: React.FC<StoryLayoutProps> = ({
  children,
  pageNumber,
}) => {
  const gradientBackgroundClass = `bg-gradient-to-br ${
    pageNumber % 2 === 0
      ? "from-black-900 to-gray-800"
      : "from-slate-900 to-zinc-800"
  }`;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 transition-all duration-500 ease-in-out font-sans ${gradientBackgroundClass} relative`}
    >
      <Particles className="absolute inset-0 z-0" />
      {children}
      <Particles className="absolute inset-0 z-0" />
    </div>
  );
};
