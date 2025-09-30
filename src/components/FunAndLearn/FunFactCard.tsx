// components/FunFactCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

import { FunFact } from "../../app/(pages)/fun-and-learn/data"; // Adjust path to your FunFact interface


interface FunFactCardProps {
  fact: FunFact;
}

export const FunFactCard: React.FC<FunFactCardProps> = ({ fact }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const cardGradientFront =
    fact.theme === "solar"
      ? "from-yellow-500 to-orange-600" // Warm, fiery for solar
      : fact.theme === "human-space"
      ? "from-indigo-500 to-purple-600" // Deep, adventurous for human space
      : fact.theme === "earth-science"
      ? "from-green-500 to-blue-600" // Earthy for planet facts
      : "from-gray-700 to-gray-800"; // Default dark cosmic

  const cardGradientBack =
    fact.theme === "solar"
      ? "from-orange-600 to-red-700" // More intense for solar reveal
      : fact.theme === "human-space"
      ? "from-purple-600 to-fuchsia-700" // Brighter reveal
      : fact.theme === "earth-science"
      ? "from-blue-600 to-cyan-700" // Aquatic for planet reveal
      : "from-gray-800 to-gray-900"; // Default dark cosmic reveal

  return (
    <div
      className="relative h-[600px] w-full cursor-pointer transform-gpu transition-transform duration-700 [transform-style:preserve-3d] group"
      onClick={flipCard}
      style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
    >
      {/* Front of the Card */}
      <div
        className={`absolute inset-0 p-6 rounded-3xl shadow-2xl border-4 border-yellow-300
                    flex flex-col items-center justify-center text-center
                    [backface-visibility:hidden]
                    ${cardGradientFront}
                    transform-gpu // Ensures smooth animation
                    hover:scale-[1.02] // Subtle hover on the entire card
                    transition-all duration-300 ease-out
        `}
      >
        <div className="relative w-24 h-24 mb-3 flex items-center justify-center">
          <Image
            src={fact.imageFront}
            alt={fact.title + " icon"}
            width={96}
            height={96}
            className="drop-shadow-lg"
            priority={true}
          />
        </div>
        <h3 className="text-xl font-bold font-display text-white mb-2 leading-tight drop-shadow-md">
          {fact.title}
        </h3>
        <p className="text-white text-base opacity-90 font-semibold font-story-text">
          {fact.shortPrompt}
        </p>
        <p className="text-yellow-100 text-sm mt-2 animate-pulse group-hover:animate-none">
          Tap to discover! ✨
        </p>
      </div>

      {/* Back of the Card (Revealed Fact) */}
      <div
        className={`absolute inset-0 p-6 rounded-3xl shadow-2xl border-4 border-lime-300
                    flex flex-col items-center justify-center text-center
                    [backface-visibility:hidden] [transform:rotateY(180deg)]
                    ${cardGradientBack}
      `}
      >
        <div className="relative w-20 h-20 mb-3 flex items-center justify-center">
          <Image
            src={fact.imageBack}
            alt={fact.title + " reveal icon"}
            width={80}
            height={80}
            className="drop-shadow-lg"
            priority={true}
          />
        </div>
        <p className="text-white font-story-text text-lg sm:text-xl font-semibold mb-3 drop-shadow-md">
          {fact.factText}
        </p>
        <p className="text-yellow-300 text-sm mt-2 font-display drop-shadow">
          ✨ Mind = Blown! ✨
        </p>
        
        {fact.sourceUrl && (
          <a
            href={fact.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-blue-100 text-xs mt-2 underline transition-colors"
            onClick={(e) => e.stopPropagation()} // Prevent card from flipping back when clicking link
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};
