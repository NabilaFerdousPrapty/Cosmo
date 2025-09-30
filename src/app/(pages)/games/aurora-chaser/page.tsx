// src/app/games/aurora-chaser/page.tsx
"use client";

import { useState, useEffect } from "react";
import GameLayout from "../../../../components/games/GameLayout";

interface Aurora {
  id: number;
  color: string;
  size: number;
  emoji: string;
  points: number;
}

export default function AuroraChaser() {
  const [score, setScore] = useState(0);
  const [photosLeft, setPhotosLeft] = useState(10);
  const [auroras, setAuroras] = useState<Aurora[]>([]);
  const [isNight, setIsNight] = useState(true);
  const [gameActive, setGameActive] = useState(true);
  const [lastPhoto, setLastPhoto] = useState<{
    emoji: string;
    points: number;
  } | null>(null);

  const auroraTypes = [
    {
      color: "from-green-400 to-emerald-600",
      emoji: "💚",
      points: 10,
      name: "Green Aurora",
    },
    {
      color: "from-purple-400 to-pink-600",
      emoji: "💜",
      points: 15,
      name: "Purple Aurora",
    },
    {
      color: "from-blue-400 to-cyan-600",
      emoji: "💙",
      points: 20,
      name: "Blue Aurora",
    },
    {
      color: "from-red-400 to-pink-600",
      emoji: "❤️",
      points: 25,
      name: "Red Aurora",
    },
  ];

  const createAurora = () => {
    if (auroras.length >= 3 || !isNight || !gameActive) return;

    const auroraType =
      auroraTypes[Math.floor(Math.random() * auroraTypes.length)];
    const newAurora: Aurora = {
      id: Date.now(),
      color: auroraType.color,
      size: Math.floor(Math.random() * 3) + 1, // 1-3
      emoji: auroraType.emoji,
      points: auroraType.points,
    };

    setAuroras((prev) => [...prev, newAurora]);
  };

  const takePhoto = (aurora: Aurora) => {
    if (photosLeft <= 0 || !gameActive) return;

    const points = aurora.points * aurora.size;
    setScore((prev) => prev + points);
    setPhotosLeft((prev) => prev - 1);
    setLastPhoto({ emoji: aurora.emoji, points });

    // Remove the photographed aurora
    setAuroras((prev) => prev.filter((a) => a.id !== aurora.id));

    // Hide the result after 2 seconds
    setTimeout(() => setLastPhoto(null), 2000);
  };

  // Game loop
  useEffect(() => {
    if (!gameActive) return;

    const gameInterval = setInterval(() => {
      // Spawn auroras randomly
      if (Math.random() < 0.4) {
        createAurora();
      }

      // Remove auroras after some time
      setAuroras((prev) => {
        if (prev.length > 0 && Math.random() < 0.2) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 1500);

    // Day/night cycle
    const dayNightInterval = setInterval(() => {
      setIsNight((prev) => !prev);
    }, 10000);

    return () => {
      clearInterval(gameInterval);
      clearInterval(dayNightInterval);
    };
  }, [gameActive]);

  const startNewGame = () => {
    setScore(0);
    setPhotosLeft(10);
    setAuroras([]);
    setGameActive(true);
    setIsNight(true);
    setLastPhoto(null);
  };

  return (
    <GameLayout
      title="Aurora Chaser Adventure"
      description="Take photos of beautiful northern lights in the sky!"
    >
      <div className="max-w-4xl mx-auto p-4">
        {/* Game Stats - Simple and Colorful */}
        <div className="grid grid-cols-3 gap-3 mb-6 text-center">
          <div className="bg-blue-900/50 rounded-2xl p-3 border-2 border-blue-500">
            <div className="text-xl font-bold text-yellow-300">{score}</div>
            <div className="text-xs text-blue-200">Points</div>
          </div>
          <div className="bg-green-900/50 rounded-2xl p-3 border-2 border-green-500">
            <div className="text-xl font-bold text-green-300">{photosLeft}</div>
            <div className="text-xs text-green-200">Photos Left</div>
          </div>
          <div className="bg-purple-900/50 rounded-2xl p-3 border-2 border-purple-500">
            <div className="text-xl font-bold text-purple-300">
              {isNight ? "🌙 Night" : "☀️ Day"}
            </div>
            <div className="text-xs text-purple-200">Time</div>
          </div>
        </div>

        {/* Sky Display */}
        <div
          className={`
          relative rounded-3xl p-6 border-4 mb-6 min-h-[300px] flex flex-col items-center justify-center
          transition-all duration-1000
          ${
            isNight
              ? "bg-gradient-to-b from-blue-900 via-purple-900 to-black border-blue-700"
              : "bg-gradient-to-b from-blue-400 via-orange-300 to-yellow-200 border-orange-500"
          }
        `}
        >
          {/* Stars at Night */}
          {isNight && (
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Time Message */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-2">{isNight ? "🌙" : "☀️"}</div>
            <h3 className="text-2xl font-bold text-white">
              {isNight ? "Look! Northern Lights!" : "Wait for Nighttime"}
            </h3>
            <p className="text-gray-200 text-sm mt-1">
              {isNight
                ? "Tap the colorful lights to take photos!"
                : "Auroras only appear at night!"}
            </p>
          </div>

          {/* Auroras */}
          <div className="flex flex-wrap justify-center gap-6 items-end min-h-[120px]">
            {isNight &&
              auroras.map((aurora) => (
                <button
                  key={aurora.id}
                  onClick={() => takePhoto(aurora)}
                  className={`
                  transform transition-all duration-300 hover:scale-110 active:scale-95
                  animate-float cursor-pointer
                `}
                >
                  <div
                    className={`
                  rounded-2xl p-4 border-2 border-white border-opacity-50
                  bg-gradient-to-b ${aurora.color}
                  shadow-lg backdrop-blur-sm
                  ${aurora.size === 1 ? "w-20 h-20 text-2xl" : ""}
                  ${aurora.size === 2 ? "w-24 h-24 text-3xl" : ""}
                  ${aurora.size === 3 ? "w-28 h-28 text-4xl" : ""}
                `}
                  >
                    <div className="flex items-center justify-center h-full">
                      <span className="drop-shadow-lg">{aurora.emoji}</span>
                    </div>
                  </div>
                  <div className="text-white text-xs text-center mt-2 bg-black/50 px-2 py-1 rounded-full">
                    {aurora.size === 1
                      ? "Small"
                      : aurora.size === 2
                      ? "Medium"
                      : "Large"}
                  </div>
                </button>
              ))}
          </div>

          {/* Photo Result */}
          {lastPhoto && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 rounded-3xl p-6 border-4 border-yellow-400 animate-pop-in">
              <div className="text-center">
                <div className="text-6xl mb-3">{lastPhoto.emoji}</div>
                <div className="text-2xl font-bold text-green-400 mb-1">
                  +{lastPhoto.points} Points!
                </div>
                <div className="text-white text-lg">Great Photo! 📸</div>
              </div>
            </div>
          )}

          {/* No Auroras Message */}
          {isNight && auroras.length === 0 && (
            <div className="text-center">
              <div className="text-6xl mb-3">👀</div>
              <div className="text-white text-lg">Looking for auroras...</div>
              <div className="text-gray-300 text-sm">They appear randomly!</div>
            </div>
          )}
        </div>

        {/* Camera Button */}
        {isNight && auroras.length > 0 && gameActive && (
          <div className="text-center mb-6">
            <div className="text-white text-sm mb-2">
              💡 Tap any colorful light to take a photo!
            </div>
          </div>
        )}

        {/* Game Over */}
        {photosLeft <= 0 && (
          <div className="text-center mb-6">
            <div className="bg-purple-900/80 rounded-3xl p-6 border-4 border-purple-500 mb-4">
              <div className="text-4xl mb-3">🎞️</div>
              <div className="text-2xl font-bold text-yellow-300 mb-2">
                Out of Photos!
              </div>
              <div className="text-3xl text-green-400 mb-2">Score: {score}</div>
              <p className="text-gray-300">
                {score >= 100
                  ? "🌟 Amazing aurora photos!"
                  : "Good job capturing the lights!"}
              </p>
            </div>
          </div>
        )}

        {/* Start/Restart Button */}
        <div className="text-center mb-6">
          {!gameActive || photosLeft <= 0 ? (
            <button
              onClick={startNewGame}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl text-xl transition-colors hover:scale-105 active:scale-95 animate-bounce"
            >
              🚀 Start Aurora Adventure
            </button>
          ) : (
            <div className="bg-yellow-900/50 rounded-2xl p-4 border-2 border-yellow-500">
              <div className="text-yellow-300 font-bold text-lg">
                🎯 Goal: Take {photosLeft} more photos!
              </div>
            </div>
          )}
        </div>

        {/* Simple Instructions */}
        <div className="bg-gray-900/80 rounded-3xl p-4 border-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-300 text-center mb-4">
            How to Play 🌟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">📸</div>
              <p className="text-gray-300">
                <strong>Tap colorful lights</strong> to take photos
              </p>
              <div className="text-green-300 text-xs mt-2">
                Bigger lights = More points!
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🌙</div>
              <p className="text-gray-300">
                <strong>Only at night</strong> - wait for daytime to pass
              </p>
              <div className="text-yellow-300 text-xs mt-2">
                You have 10 photos total
              </div>
            </div>
          </div>

          {/* Aurora Types Guide */}
          <div className="mt-6">
            <h4 className="text-lg font-bold text-purple-300 text-center mb-3">
              Aurora Colors & Points
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {auroraTypes.map((aurora, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800/50 rounded-2xl p-2"
                >
                  <div
                    className={`text-2xl mb-1 ${
                      aurora.emoji === "💚" ? "text-green-400" : ""
                    }${aurora.emoji === "💜" ? "text-purple-400" : ""}${
                      aurora.emoji === "💙" ? "text-blue-400" : ""
                    }${aurora.emoji === "❤️" ? "text-red-400" : ""}`}
                  >
                    {aurora.emoji}
                  </div>
                  <div className="text-white text-xs">{aurora.name}</div>
                  <div className="text-yellow-400 text-xs">
                    {aurora.points} points
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gray-900/80 rounded-3xl p-4 border-4 border-green-500 mt-4">
          <h4 className="text-lg font-bold text-green-300 text-center mb-3">
            🌈 Fun Facts About Auroras
          </h4>
          <div className="text-center text-gray-300 text-sm space-y-2">
            <p>✨ Auroras are also called Northern Lights!</p>
            <p>
              🌞 They come from the Sun&apos;s energy hitting Earth&apos;s sky
            </p>
            <p>🎨 Different colors come from different gases in the air</p>
            <p>📍 Best seen near the North and South Poles</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pop-in {
          0% {
            transform: translate(-50%, -50%) scale(0);
          }
          80% {
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .animate-twinkle {
          animation: twinkle 2s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pop-in {
          animation: pop-in 0.5s ease-out;
        }
      `}</style>
    </GameLayout>
  );
}
