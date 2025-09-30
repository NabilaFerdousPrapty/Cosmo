// components/RiddleCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Riddle {
  id: number;
  question: string;
  hint: string;
  answer: string;
  explanation: string;
  image: string;
  category: "space" | "earth" | "animals";
  colorPalette: {
    front: { from: string; to: string };
    back: { from: string; to: string };
    border: string;
    text: string;
    emoji: string;
  };
}

interface RiddleCardProps {
  riddle: Riddle;
  onReveal: (riddleId: number) => void;
  isSolved: boolean;
}

export const RiddleCard: React.FC<RiddleCardProps> = ({
  riddle,
  onReveal,
  isSolved,
}) => {
  const [showAnswer, setShowAnswer] = useState(isSolved);
  const [showHint, setShowHint] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
    onReveal(riddle.id);
  };

  const handleShowHint = () => {
    setShowHint(true);
  };

  const handleCloseHint = () => {
    setShowHint(false);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Main Card */}
      <div
        className={`
        relative p-6 rounded-3xl shadow-2xl border-4 min-h-[400px]
        flex flex-col items-center justify-center text-center
        transition-all duration-300 transform hover:scale-105
        ${
          showAnswer
            ? `${riddle.colorPalette.back.from} ${riddle.colorPalette.back.to} bg-gradient-to-br ${riddle.colorPalette.border}`
            : `${riddle.colorPalette.front.from} ${riddle.colorPalette.front.to} bg-gradient-to-br ${riddle.colorPalette.border}`
        }
        ${isSolved ? "ring-4 ring-yellow-400 ring-opacity-50" : ""}
      `}
      >
        {/* Riddle Number Badge */}
        <div className="absolute -top-3 -left-3 bg-yellow-400 text-gray-800 font-bold px-4 py-1 rounded-full text-sm shadow-lg">
          #{riddle.id}
        </div>

        {/* Solved Badge */}
        {isSolved && (
          <div className="absolute -top-3 -right-3 bg-green-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg flex items-center gap-1">
            ✅ Solved!
          </div>
        )}

        {/* Content based on state */}
        {showAnswer ? (
          // Answer View
          <div className="space-y-4 animate-fadeIn">
            <div className="text-6xl mb-2 animate-bounce">🎉</div>
            <h3 className="text-2xl font-bold text-white drop-shadow">
              It&apos;s {riddle.answer}!
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              {riddle.explanation}
            </p>
            <div className="text-4xl mt-4 animate-pulse">
              {riddle.colorPalette.emoji}
            </div>
          </div>
        ) : (
          // Question View
          <div className="space-y-6 w-full">
            {/* Image */}
            <div className="relative w-32 h-32 mx-auto">
              <Image
                src={riddle.image}
                alt={riddle.question}
                width={128}
                height={128}
                className="drop-shadow-lg animate-float"
                priority={true}
              />
            </div>

            {/* Question */}
            <p
              className={`text-xl font-bold leading-tight ${riddle.colorPalette.text} drop-shadow`}
            >
              {riddle.question}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
              <button
                onClick={handleShowHint}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 text-lg"
              >
                <span className="text-xl">💡</span>
                Need a Hint?
              </button>

              <button
                onClick={handleShowAnswer}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 text-lg"
              >
                <span className="text-xl">👀</span>
                Show Answer
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hint Popup */}
      {showHint && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-yellow-100 border-4 border-yellow-400 rounded-3xl p-6 max-w-sm mx-auto shadow-2xl">
            <div className="text-center space-y-4">
              <div className="text-5xl animate-pulse">💡</div>
              <h3 className="text-2xl font-bold text-yellow-800">Hint!</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {riddle.hint}
              </p>
              <button
                onClick={handleCloseHint}
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 text-lg"
              >
                Got it! 👍
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Celebration for solved riddles */}
      {isSolved && !showAnswer && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl animate-bounce">🌟</div>
        </div>
      )}
    </div>
  );
};
