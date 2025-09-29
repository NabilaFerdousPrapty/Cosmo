// components/Stories/StoryContent.tsx
"use client"; // If you use useState/useEffect inside or import client-side components

import React from "react";
import Image from "next/image";
import { ReadAloud } from "@/components/Stories/ReadAloud";
import { Particles } from "@/components/ui/particles"; // Ensure this path is correct
import { StoryAnimation } from "@/components/Stories/StoryAnimation"; // Import new component
import {
  Story,
  StoryPage as StoryPageType,
} from "../../app/(pages)/Stories/types"; // Adjust path as necessary

interface StoryContentProps {
  story: Story;
  page: StoryPageType;
  pageNumber: number;
}

export const StoryContent: React.FC<StoryContentProps> = ({
  story,
  page,
  pageNumber,
}) => {
  // Split text into paragraphs/lines for potential dialogue styling
  // We'll use a simple heuristic: lines starting with ' or “ are dialogue
  const textBlocks = page.text.split("\n").map((line, index) => {
    const isDialogue =
      line.trim().startsWith("'") || line.trim().startsWith("“");
    // Simple way to alternate dialogue bubble styles if needed, e.g., for two characters
    const dialogueStyleClass =
      index % 2 === 0
        ? "bg-purple-200 text-purple-900 border-purple-500"
        : "bg-blue-200 text-blue-900 border-blue-500";

    return (
      <p
        key={index}
        className={`
          mb-4 last:mb-0
          text-lg sm:text-xl md:text-2xl
          leading-relaxed text-left
          px-4 py-2 rounded-lg
          transition-all duration-300 ease-in-out
          ${
            isDialogue
              ? `font-dialogue ${dialogueStyleClass} shadow-md border-2
               transform hover:scale-[1.02] hover:shadow-xl relative before:absolute before:content-['💬'] before:-left-3 before:-top-3 before:text-3xl before:opacity-70 `
              : "font-story-text text-gray-200" // Default story text style for dark background
          }
        `}
      >
        {isDialogue
          ? // Remove leading quote for cleaner display if it's the only character
            line.trim().startsWith("'")
            ? line.trim().substring(1)
            : line.trim().startsWith("“")
            ? line.trim().substring(1)
            : line
          : line}
      </p>
    );
  });

  return (
    <div
      className={`
        relative z-10 w-full max-w-7xl p-6 sm:p-8 md:p-10
        bg-black bg-opacity-95 
        bg-paper-texture bg-cover 
        rounded-3xl shadow-2xl 
        flex flex-col
        border-4 border-yellow-400 
        hover:border-yellow-300 
        transform transition-all duration-300 ease-in-out
        overflow-hidden // Crucial to contain Particles
      `}
    >
      {/* Particles component as a subtle background effect *inside* the story card */}
      <Particles
        className="absolute inset-0 z-0 opacity-10"
        quantity={100}
        ease={50}
        refresh={true}
        color={"#FFD700"}
      />

      {/* Story Card Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row-reverse md:gap-8 w-full h-full">
        {" "}
        {/* Ensures content is on top of particles */}
        {/* Story-level Animation (e.g., phone ring, thought bubble) */}
        {/* We place it here so it can appear over the illustration or text */}
        <StoryAnimation
          animations={page.animation}
          isVisible={true}
          className="md:top-8 md:right-8"
        />
        {/* Page Illustration */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 flex-shrink-0">
          <Image
            src={page.illustration.image}
            alt={
              page.illustration.description ||
              `Illustration for ${story.title} - Page ${pageNumber}`
            }
            width={400}
            height={400}
            layout="responsive"
            objectFit="contain"
            className="rounded-2xl border-4 border-yellow-500 shadow-xl 
                       transform hover:scale-[1.03] transition-transform duration-300 // Slight zoom on hover
                       bg-gradient-to-br from-gray-800 to-gray-700 p-2 // Background behind image if it doesn't fill entirely
                      "
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Text Content */}
        <div className="w-full md:w-[70%] flex flex-col justify-center relative">
          {" "}
          {/* Vertically center text content */}
          <h1
            className="
            text-4xl sm:text-5xl lg:text-6xl
            font-extrabold text-teal-400
            mb-6 sm:mb-8 leading-tight
            font-display tracking-wide
            text-center md:text-left
            drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)] // More pronounced text shadow
          "
          >
            {page.title}
          </h1>
          <div
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-10 
                      space-y-4 
                      "
          >
            {textBlocks} {/* Render dynamically generated text blocks */}
          </div>
          {/* Read Aloud */}
          <div
            className="mt-auto 
                          mb-0 sm:mb-2
                          flex justify-center md:justify-start absolute top-0 right-0
                        "
          >
            <ReadAloud text={page.text} audioUrl={page.audioUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};
