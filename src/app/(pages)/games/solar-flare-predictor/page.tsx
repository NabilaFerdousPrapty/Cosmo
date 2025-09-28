// src/app/games/solar-flare-predictor/page.tsx
"use client";

import GameLayout from "@/components/games/GameLayout";
import { useState, useEffect } from "react";

interface SolarData {
  flareProbability: number;
  sunspotCount: number;
  magneticComplexity: number;
}

export default function SolarFlarePredictor() {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameData, setGameData] = useState<SolarData | null>(null);
  const [userPrediction, setUserPrediction] = useState<
    "low" | "medium" | "high"
  >("low");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Generate random solar data for the game
  const generateSolarData = (): SolarData => {
    return {
      flareProbability: Math.floor(Math.random() * 100),
      sunspotCount: Math.floor(Math.random() * 200) + 50,
      magneticComplexity: Math.floor(Math.random() * 10) + 1,
    };
  };

  useEffect(() => {
    // Initial game setup
    setGameData(generateSolarData());
    setIsLoading(false);
  }, []);

  const handlePrediction = () => {
    if (!gameData) return;

    // Determine actual flare level based on probability
    let actualLevel: "low" | "medium" | "high" = "low";
    if (gameData.flareProbability > 70) actualLevel = "high";
    else if (gameData.flareProbability > 30) actualLevel = "medium";

    // Check if user prediction is correct
    const isCorrect = userPrediction === actualLevel;
    setResult(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      setScore(score + 10);
    }

    // Move to next round after delay
    setTimeout(() => {
      setRound(round + 1);
      setGameData(generateSolarData());
      setResult(null);
      setUserPrediction("low");
    }, 2000);
  };

  if (isLoading) {
    return (
      <GameLayout
        title="Solar Flare Predictor"
        description="Predict solar flare activity based on real solar data patterns"
      >
        <div className="text-center py-16">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading game data...</p>
        </div>
      </GameLayout>
    );
  }

  return (
    <GameLayout
      title="Solar Flare Predictor"
      description="Predict solar flare activity based on real solar data patterns"
    >
      {/* Game Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8 text-center">
        <div className="bg-zinc-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-orange-500">{score}</div>
          <div className="text-sm text-gray-400">Score</div>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-500">
            Round {round}
          </div>
          <div className="text-sm text-gray-400">Progress</div>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-500">
            {Math.round((score / (round * 10)) * 100) || 0}%
          </div>
          <div className="text-sm text-gray-400">Accuracy</div>
        </div>
      </div>

      {/* Solar Data Display */}
      {gameData && (
        <div className="bg-zinc-800 rounded-2xl p-6 mb-6 border border-zinc-700">
          <h3 className="text-xl font-bold mb-4 text-white">
            Current Solar Data
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-zinc-700 rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-yellow-400">
                {gameData.flareProbability}%
              </div>
              <div className="text-sm text-gray-400">Flare Probability</div>
            </div>
            <div className="text-center p-4 bg-zinc-700 rounded-lg">
              <div className="text-3xl mb-2">🔴</div>
              <div className="text-2xl font-bold text-red-400">
                {gameData.sunspotCount}
              </div>
              <div className="text-sm text-gray-400">Sunspot Count</div>
            </div>
            <div className="text-center p-4 bg-zinc-700 rounded-lg">
              <div className="text-3xl mb-2">🧲</div>
              <div className="text-2xl font-bold text-blue-400">
                {gameData.magneticComplexity}/10
              </div>
              <div className="text-sm text-gray-400">Magnetic Complexity</div>
            </div>
          </div>
        </div>
      )}

      {/* Prediction Interface */}
      <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
        <h3 className="text-xl font-bold mb-4 text-white">
          Make Your Prediction
        </h3>

        {/* Prediction Buttons */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {(["low", "medium", "high"] as const).map((level) => (
            <button
              key={level}
              onClick={() => setUserPrediction(level)}
              className={`p-4 rounded-lg border-2 transition-all ${
                userPrediction === level
                  ? level === "low"
                    ? "border-green-500 bg-green-500 bg-opacity-20"
                    : level === "medium"
                    ? "border-yellow-500 bg-yellow-500 bg-opacity-20"
                    : "border-red-500 bg-red-500 bg-opacity-20"
                  : "border-zinc-600 hover:border-zinc-500"
              }`}
            >
              <div className="text-2xl mb-2">
                {level === "low" ? "🌤️" : level === "medium" ? "🌤️⚡" : "⛈️⚡"}
              </div>
              <div className="font-semibold capitalize">{level}</div>
              <div className="text-xs text-gray-400 mt-1">
                {level === "low"
                  ? "0-30%"
                  : level === "medium"
                  ? "31-70%"
                  : "71-100%"}
              </div>
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handlePrediction}
          disabled={!!result}
          className="w-full py-4 bg-orange-400 hover:bg-orange-500 disabled:bg-gray-600 text-white font-bold rounded-lg transition-colors"
        >
          {result ? "Next Round Loading..." : "Submit Prediction"}
        </button>

        {/* Result Display */}
        {result && (
          <div
            className={`mt-4 p-4 rounded-lg text-center ${
              result === "correct"
                ? "bg-green-500 bg-opacity-20 border border-green-500"
                : "bg-red-500 bg-opacity-20 border border-red-500"
            }`}
          >
            <div className="text-2xl mb-2">
              {result === "correct" ? "🎉 Correct!" : "❌ Try Again!"}
            </div>
            <p className="text-sm">
              {result === "correct"
                ? "+10 points! Your prediction was accurate."
                : "Study the solar data patterns more carefully."}
            </p>
          </div>
        )}
      </div>

      {/* Game Instructions */}
      <div className="mt-6 bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
        <h3 className="text-xl font-bold mb-4 text-white">How to Play</h3>
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>
            • Analyze the solar data (flare probability, sunspots, magnetic
            complexity)
          </li>
          <li>• Predict the likelihood of solar flare activity</li>
          <li>• Score points for accurate predictions</li>
          <li>• Learn real solar physics patterns</li>
        </ul>
      </div>
    </GameLayout>
  );
}
