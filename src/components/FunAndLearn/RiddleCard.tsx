// components/RiddleCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image"; // Make sure Next.js Image is imported

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface Riddle {
  id: number;
  question: string;
  hint: string;
  answer: string;
  explanation: string;
  image: string; // URL to a relevant image/icon
  category: "space" | "earth" | "animals";
  colorPalette: {
    // New: for card styling
    front: { from: string; to: string }; // Tailwind class parts, e.g., "from-blue-500", "to-blue-600"
    back: { from: string; to: string };
    border: string; // Tailwind class, e.g., "border-cyan-400"
    text: string; // Tailwind class, e.g., "text-blue-100"
    emoji: string; // Emoji for this riddle's general theme
  };
}
const MySwal = withReactContent(Swal);

interface RiddleCardProps {
  riddle: Riddle;
  onReveal: (riddleId: number) => void;
  isSolved: boolean; // New prop to indicate if this riddle is solved
}

export const RiddleCard: React.FC<RiddleCardProps> = ({
  riddle,
  onReveal,
  isSolved,
}) => {
  const [isFlipped, setIsFlipped] = useState(isSolved); // Card starts flipped if solved
  const [showHint, setShowHint] = useState(false);

  // Auto-flip if it's already solved
  React.useEffect(() => {
    if (isSolved && !isFlipped) {
      setIsFlipped(true);
    }
  }, [isSolved, isFlipped]);

  const handleFlip = () => {
    if (isSolved) return; // Cannot flip back if already solved

    setIsFlipped(!isFlipped);
    if (isFlipped) {
      // If flipping back to front, hide hint
      setShowHint(false);
    }
  };

  const handleGuess = async () => {
    if (isSolved) return;

    setShowHint(false); // Hide hint before asking for answer

    const { value: answerInput } = await MySwal.fire({
      title: (
        <span className="font-display text-2xl text-blue-700">
          What's your guess? 🤔
        </span>
      ),
      input: "text",
      inputPlaceholder: "Type your answer here...",
      showCancelButton: true,
      confirmButtonText: "Guess!",
      confirmButtonColor: "#4CAF50",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#EF4444",
      customClass: {
        popup: "rounded-3xl shadow-xl border-4 border-yellow-300",
        input: "font-story-text text-lg",
        confirmButton: "font-bold",
        cancelButton: "font-bold",
      },
      buttonsStyling: false,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (answerInput) {
      // Simple case-insensitive comparison
      const isCorrect =
        answerInput.toLowerCase().trim() === riddle.answer.toLowerCase().trim();

      if (isCorrect) {
        MySwal.fire({
          title: (
            <span className="font-display text-4xl text-green-700 animate-pulse">
              🎉 Correct! 🎉
            </span>
          ),
          html: (
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-6xl mb-4 animate-bounceCustom">✅</div>
              <h3 className="font-story-text text-xl text-gray-700 mb-2">
                You solved it! It's {riddle.answer}!
              </h3>
              <p className="text-lg text-gray-600 mb-4">{riddle.explanation}</p>
            </div>
          ),
          icon: "success",
          confirmButtonText: "Awesome!",
          confirmButtonColor: "#4CAF50",
          customClass: {
            popup: "rounded-3xl shadow-xl border-4 border-green-400",
            title: "sweet-alert-title",
            htmlContainer: "sweet-alert-html-container",
            confirmButton: "font-bold",
          },
          buttonsStyling: false,
        });
        onReveal(riddle.id); // Trigger parent to mark as solved
        setIsFlipped(true); // Flip card to reveal answer permanently
      } else {
        MySwal.fire({
          title: (
            <span className="font-display text-3xl text-red-700">
              ❌ Not quite! ❌
            </span>
          ),
          html: (
            <div className="flex flex-col items-center justify-center p-4">
              <div className="text-5xl mb-4">Try again!</div>
              <p className="text-lg text-gray-700">
                That's not {riddle.answer}. Don't give up!
              </p>
            </div>
          ),
          icon: "error",
          confirmButtonText: "Keep Trying!",
          confirmButtonColor: "#EF4444",
          customClass: {
            popup: "rounded-3xl shadow-xl border-4 border-red-400",
            title: "sweet-alert-title",
            htmlContainer: "sweet-alert-html-container",
            confirmButton: "font-bold",
          },
          buttonsStyling: false,
        });
      }
    }
  };

  return (
    <div
      className={`relative h-[380px] w-full p-3 cursor-pointer group
	        ${isSolved ? "animate-none" : "hover:animate-jiggle"}
	        transform-gpu transition-transform duration-700 [transform-style:preserve-3d]
	      `}
      style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      onClick={handleFlip} // Allow the whole card to flip on click
    >
      {/* Front of the Card (Unsolved Riddle) */}
      <div
        className={`absolute inset-0 p-6 rounded-3xl shadow-2xl
	                    flex flex-col items-center justify-center text-center
	                    [backface-visibility:hidden]
	                    ${riddle.colorPalette.front.from} ${
          riddle.colorPalette.front.to
        } bg-gradient-to-br
	                    ${riddle.colorPalette.border} border-4
	                    ${isSolved ? "grayscale opacity-70" : ""}
	        `}
      >
        <div className="relative w-24 h-24 mb-3 flex items-center justify-center">
          {/* UNCOMMENTED IMAGE */}
          <Image
            src={riddle.image}
            alt={riddle.question} // Use question for alt text
            width={96} // Larger image size
            height={96}
            className="drop-shadow-lg"
            priority={true} // Priority loading for visible cards
          />
        </div>
        <p className="text-yellow-100 font-bold text-lg mb-3 drop-shadow">
          Riddle #{riddle.id}
        </p>
        <p
          className={`${riddle.colorPalette.text} font-semibold text-xl font-story-text mb-4 drop-shadow`}
        >
          {riddle.question}
        </p>
        {!isSolved && (
          <div className="flex space-x-4 mt-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowHint(!showHint);
              }}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full shadow-md transition-colors text-sm"
            >
              💡 {showHint ? "Hide Hint" : "Hint"}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleGuess();
              }}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-md transition-colors text-sm"
            >
              Guess! 🚀
            </button>
          </div>
        )}
      </div>

      {/* Back of the Card (Solved/Answer Revealed) */}
      <div
        className={`absolute inset-0 p-6 rounded-3xl shadow-2xl
	                    flex flex-col items-center justify-center text-center
	                    [backface-visibility:hidden] [transform:rotateY(180deg)]
	                    ${riddle.colorPalette.back.from} ${riddle.colorPalette.back.to} bg-gradient-to-br
	                    ${riddle.colorPalette.border} border-4
	      `}
      >
        {isSolved ? (
          <>
            <div className="relative w-20 h-20 mb-3 flex items-center justify-center animate-bounce">
              <span className="text-6xl">✅</span>
            </div>
            <p className="text-white font-bold text-lg sm:text-xl font-display mb-2 drop-shadow">
              It's {riddle.answer}!
            </p>
            <p className="text-blue-100 text-sm font-story-text mb-4 drop-shadow">
              {riddle.explanation}
            </p>
            <span className="absolute bottom-4 right-4 text-3xl animate-spin-slow">
              🌟
            </span>{" "}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-5xl mb-4 text-gray-300">🤔</span>
            <p className="text-gray-300 font-story-text text-lg">
              Solve the riddle first!
            </p>
          </div>
        )}
      </div>

      {/* Hint Overlay (Conditional) */}
      {showHint && !isSolved && (
        <div
          className="absolute inset-0 p-4 rounded-3xl flex items-center justify-center
	                     bg-yellow-800 bg-opacity-95 backdrop-blur-sm z-20
	                     border-4 border-yellow-300 animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <p className="text-yellow-100 text-lg font-bold mb-2">Hint:</p>
            <p className="text-white text-xl font-story-text">{riddle.hint}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowHint(false);
              }}
              className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-full transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
