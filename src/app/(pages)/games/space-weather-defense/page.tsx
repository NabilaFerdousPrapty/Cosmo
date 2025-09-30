// src/app/games/space-weather-defense/page.tsx
"use client";

import { useState, useEffect } from "react";
import GameLayout from "../../../../components/games/GameLayout";

interface DefenseItem {
  id: number;
  type: "satellite" | "shield" | "rocket";
  position: number;
}

interface SolarStorm {
  id: number;
  type: "flare" | "cme" | "radiation";
  position: number;
  progress: number;
}

export default function SpaceWeatherDefense() {
  const [score, setScore] = useState(0);
  const [earthHealth, setEarthHealth] = useState(100);
  const [defenses, setDefenses] = useState<DefenseItem[]>([]);
  const [storms, setStorms] = useState<SolarStorm[]>([]);
  const [gameActive, setGameActive] = useState(true);

  // Simple defense placement
  const addDefense = (
    type: "satellite" | "shield" | "rocket",
    position: number
  ) => {
    if (defenses.length < 6) {
      // Limit defenses for simplicity
      setDefenses([
        ...defenses,
        {
          id: Date.now(),
          type,
          position,
        },
      ]);
    }
  };

  // Spawn storms randomly
  const spawnStorm = () => {
    const stormTypes: ("flare" | "cme" | "radiation")[] = [
      "flare",
      "cme",
      "radiation",
    ];
    const newStorm: SolarStorm = {
      id: Date.now(),
      type: stormTypes[Math.floor(Math.random() * stormTypes.length)],
      position: Math.floor(Math.random() * 3), // Only 3 lanes for simplicity
      progress: 0,
    };
    setStorms([...storms, newStorm]);
  };

  // Auto-defense system
  useEffect(() => {
    if (!gameActive || earthHealth <= 0) {
      setGameActive(false);
      return;
    }

    const gameInterval = setInterval(() => {
      // Spawn storms occasionally
      if (Math.random() < 0.2 && storms.length < 3) {
        spawnStorm();
      }

      // Move storms toward Earth
      setStorms(
        (currentStorms) =>
          currentStorms
            .map((storm) => {
              const newProgress = storm.progress + 10; // Fixed progress rate

              // Check if storm reached Earth
              if (newProgress >= 100) {
                setEarthHealth((health) => {
                  const newHealth = Math.max(0, health - 15);
                  if (newHealth === 0) {
                    setGameActive(false);
                  }
                  return newHealth;
                });
                return null;
              }

              // Auto-defense: Check if defense exists in this lane
              const laneDefense = defenses.find(
                (defense) => defense.position === storm.position
              );
              if (laneDefense) {
                const defenseEffective =
                  (laneDefense.type === "satellite" &&
                    storm.type === "radiation") ||
                  (laneDefense.type === "shield" && storm.type === "cme") ||
                  (laneDefense.type === "rocket" && storm.type === "flare");

                if (defenseEffective) {
                  setScore((score) => score + 10);
                  return null; // Destroy storm
                }
              }

              return { ...storm, progress: newProgress };
            })
            .filter(Boolean) as SolarStorm[]
      );

      // Add score over time
      setScore((score) => score + 1);
    }, 1000);

    return () => clearInterval(gameInterval);
  }, [defenses, storms, gameActive, earthHealth]);

  const startNewGame = () => {
    setScore(0);
    setEarthHealth(100);
    setDefenses([]);
    setStorms([]);
    setGameActive(true);
  };

  // Get emoji for storm type
  const getStormEmoji = (type: string) => {
    switch (type) {
      case "flare":
        return "☀️";
      case "cme":
        return "💥";
      case "radiation":
        return "☢️";
      default:
        return "🌪️";
    }
  };

  // Get emoji for defense type
  const getDefenseEmoji = (type: string) => {
    switch (type) {
      case "satellite":
        return "🛰️";
      case "shield":
        return "🛡️";
      case "rocket":
        return "🚀";
      default:
        return "⭐";
    }
  };

  return (
    <GameLayout
      title="Space Weather Defense"
      description="Protect Earth from solar storms! Place defenses to block space weather."
    >
      <div className="max-w-4xl mx-auto p-4">
        {/* Game Stats - Mobile Friendly */}
        <div className="grid grid-cols-3 gap-3 mb-6 text-center">
          <div className="bg-blue-900/50 rounded-2xl p-3 border-2 border-blue-500">
            <div className="text-xl font-bold text-yellow-300">{score}</div>
            <div className="text-xs text-blue-200">Score</div>
          </div>
          <div className="bg-green-900/50 rounded-2xl p-3 border-2 border-green-500">
            <div className="text-xl font-bold text-green-300">
              {earthHealth}%
            </div>
            <div className="text-xs text-green-200">Earth Health</div>
          </div>
          <div className="bg-purple-900/50 rounded-2xl p-3 border-2 border-purple-500">
            <div className="text-xl font-bold text-purple-300">
              {defenses.length}/6
            </div>
            <div className="text-xs text-purple-200">Defenses</div>
          </div>
        </div>

        {/* Game Area */}
        <div className="bg-gray-900/80 rounded-3xl p-4 border-4 border-gray-700 mb-6">
          {/* Space Background with Stars */}
          <div className="relative min-h-[400px] bg-gradient-to-b from-purple-900 via-blue-900 to-black rounded-2xl overflow-hidden">
            {/* Animated Stars */}
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

            {/* Storms Moving Down */}
            {storms.map((storm) => (
              <div
                key={storm.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
                style={{
                  left: `${33 + storm.position * 33}%`,
                  top: `${20 + storm.progress * 0.6}%`,
                }}
              >
                <div
                  className={`
                  text-3xl animate-bounce
                  ${storm.type === "flare" ? "text-yellow-400" : ""}
                  ${storm.type === "cme" ? "text-orange-400" : ""}
                  ${storm.type === "radiation" ? "text-purple-400" : ""}
                `}
                >
                  {getStormEmoji(storm.type)}
                </div>
                <div className="text-xs text-white text-center mt-1 bg-black/50 px-2 py-1 rounded-full">
                  {storm.type}
                </div>
              </div>
            ))}

            {/* Defense Lines */}
            <div className="absolute bottom-32 left-0 right-0 flex justify-between px-8">
              {[0, 1, 2].map((position) => (
                <div key={position} className="text-center">
                  <div className="w-20 h-1 bg-gray-500 mx-auto mb-2"></div>
                  <div className="text-white text-xs">Lane {position + 1}</div>
                </div>
              ))}
            </div>

            {/* Defenses */}
            {defenses.map((defense) => (
              <div
                key={defense.id}
                className="absolute bottom-20 transform -translate-x-1/2"
                style={{
                  left: `${33 + defense.position * 33}%`,
                }}
              >
                <div
                  className={`
                  text-4xl animate-pulse
                  ${defense.type === "satellite" ? "text-blue-300" : ""}
                  ${defense.type === "shield" ? "text-green-300" : ""}
                  ${defense.type === "rocket" ? "text-red-300" : ""}
                `}
                >
                  {getDefenseEmoji(defense.type)}
                </div>
              </div>
            ))}

            {/* Earth at Bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div
                className={`
                text-6xl transition-all duration-500
                ${earthHealth > 70 ? "text-blue-400" : ""}
                ${
                  earthHealth > 30 && earthHealth <= 70 ? "text-yellow-400" : ""
                }
                ${earthHealth <= 30 ? "text-red-400 animate-pulse" : ""}
              `}
              >
                🌍
              </div>
              <div className="text-white text-sm mt-2 bg-black/50 px-3 py-1 rounded-full">
                Protect Me!
              </div>
            </div>
          </div>
        </div>

        {/* Defense Controls - Touch Friendly */}
        <div className="bg-gray-900/80 rounded-3xl p-4 border-4 border-gray-700 mb-6">
          <h3 className="text-xl font-bold text-yellow-300 text-center mb-4">
            🛡️ Place Your Defenses!
          </h3>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[0, 1, 2].map((lane) => (
              <div
                key={lane}
                className="text-center bg-gray-800/50 rounded-2xl p-3"
              >
                <div className="text-white text-sm mb-2">Lane {lane + 1}</div>
                <div className="grid grid-cols-3 gap-1">
                  <button
                    onClick={() => addDefense("satellite", lane)}
                    disabled={defenses.length >= 6}
                    className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-lg text-xl transition-colors"
                  >
                    🛰️
                  </button>
                  <button
                    onClick={() => addDefense("shield", lane)}
                    disabled={defenses.length >= 6}
                    className="p-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-lg text-xl transition-colors"
                  >
                    🛡️
                  </button>
                  <button
                    onClick={() => addDefense("rocket", lane)}
                    disabled={defenses.length >= 6}
                    className="p-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 rounded-lg text-xl transition-colors"
                  >
                    🚀
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Over Screen */}
        {!gameActive && (
          <div className="text-center mb-6">
            <div className="bg-red-900/80 rounded-3xl p-6 border-4 border-red-600 mb-4">
              <div className="text-4xl mb-3">💀</div>
              <div className="text-2xl font-bold text-yellow-300 mb-2">
                {earthHealth > 0 ? "Game Paused!" : "Earth Protected!"}
              </div>
              <div className="text-3xl text-green-400 mb-2">Score: {score}</div>
              <p className="text-gray-300">
                {earthHealth > 0
                  ? "Take a break, hero!"
                  : "Amazing! You saved Earth from space weather!"}
              </p>
            </div>
            <button
              onClick={startNewGame}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl text-xl transition-colors animate-bounce"
            >
              🚀 {earthHealth > 0 ? "Continue" : "Play Again"}
            </button>
          </div>
        )}

        {/* Simple Instructions */}
        <div className="bg-gray-900/80 rounded-3xl p-4 border-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-300 text-center mb-4">
            How to Play 🌟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-gray-300">
                <strong>Match defenses to storms:</strong>
              </p>
              <div className="space-y-1 mt-2">
                <div className="flex items-center justify-center gap-2">
                  <span>🛰️ Satellite</span>
                  <span>→</span>
                  <span>☢️ Radiation</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>🛡️ Shield</span>
                  <span>→</span>
                  <span>💥 CME</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>🚀 Rocket</span>
                  <span>→</span>
                  <span>☀️ Flare</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⭐</div>
              <p className="text-gray-300">
                <strong>Tap buttons to place defenses in each lane</strong>
              </p>
              <p className="text-yellow-300 mt-2">
                Defenses work automatically when storms come!
              </p>
            </div>
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
        .animate-twinkle {
          animation: twinkle 2s infinite;
        }
      `}</style>
    </GameLayout>
  );
}
