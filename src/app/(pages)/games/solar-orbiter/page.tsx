// src/app/games/solar-orbiter/page.tsx
"use client";

import { useState, useEffect } from "react";
import GameLayout from "../../../../components/games/GameLayout";

interface Planet {
  name: string;
  distance: number;
  size: number;
  color: string;
  emoji: string;
  discovered: boolean;
}

export default function SolarOrbiter() {
  const [score, setScore] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [missionComplete, setMissionComplete] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const planets: Planet[] = [
    {
      name: "Mercury",
      distance: 1,
      size: 8,
      color: "bg-gray-400",
      emoji: "🪐",
      discovered: false,
    },
    {
      name: "Venus",
      distance: 2,
      size: 12,
      color: "bg-yellow-200",
      emoji: "✨",
      discovered: false,
    },
    {
      name: "Earth",
      distance: 3,
      size: 13,
      color: "bg-blue-400",
      emoji: "🌍",
      discovered: false,
    },
    {
      name: "Mars",
      distance: 4,
      size: 11,
      color: "bg-red-400",
      emoji: "🔴",
      discovered: false,
    },
    {
      name: "Jupiter",
      distance: 5,
      size: 20,
      color: "bg-orange-300",
      emoji: "🟠",
      discovered: false,
    },
  ];

  // Check if mobile on component mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const startMission = () => {
    setScore(0);
    setFuel(100);
    setCurrentPlanet(0);
    setMissionComplete(false);
    setIsFlying(true);

    // Reset all planets to undiscovered
    planets.forEach((planet) => (planet.discovered = false));
  };

  const flyToNextPlanet = () => {
    if (fuel <= 0 || currentPlanet >= planets.length - 1) return;

    const fuelCost = 20;
    setFuel((prev) => Math.max(0, prev - fuelCost));

    // Simulate flying animation
    setIsFlying(true);

    setTimeout(() => {
      const nextPlanet = currentPlanet + 1;
      setCurrentPlanet(nextPlanet);

      // Mark planet as discovered and add score
      planets[nextPlanet].discovered = true;
      setScore((prev) => prev + 50);

      setIsFlying(false);

      // Check if all planets discovered
      if (nextPlanet === planets.length - 1) {
        setMissionComplete(true);
      }
    }, 1500);
  };

  const collectScience = () => {
    if (fuel <= 0) return;

    const fuelCost = 5;
    const scienceGain = 10;

    setFuel((prev) => Math.max(0, prev - fuelCost));
    setScore((prev) => prev + scienceGain);
  };

  // Calculate responsive sizes - FIXED to prevent overflow
  const getOrbitSize = (orbit: number) => {
    // Much smaller orbits on mobile to prevent overflow
    if (isMobile) {
      // Mobile: max orbit radius of 80px (Jupiter)
      return orbit * 16; // 16, 32, 48, 64, 80px
    } else {
      // Desktop: max orbit radius of 100px (Jupiter)
      return orbit * 20; // 20, 40, 60, 80, 100px
    }
  };

  const getPlanetSize = () => {
    return isMobile ? "w-6 h-6 text-sm" : "w-10 h-10 text-xl";
  };

  const getSpaceshipSize = () => {
    return isMobile ? "text-xl" : "text-2xl";
  };

  const getContainerHeight = () => {
    return isMobile ? "h-60" : "h-80";
  };

  return (
    <GameLayout
      title="Solar Orbiter Adventure"
      description="Fly your spacecraft to discover planets in our solar system!"
    >
      <div className="max-w-4xl mx-auto p-4 overflow-hidden">
        {/* Game Stats - Stack on mobile */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6 text-center">
          <div className="bg-blue-900/50 rounded-xl md:rounded-2xl p-2 md:p-3 border-2 border-blue-500">
            <div className="text-lg md:text-xl font-bold text-yellow-300">
              {score}
            </div>
            <div className="text-xs text-blue-200">Science Points</div>
          </div>
          <div className="bg-green-900/50 rounded-xl md:rounded-2xl p-2 md:p-3 border-2 border-green-500">
            <div className="text-lg md:text-xl font-bold text-green-300">
              {fuel}%
            </div>
            <div className="text-xs text-green-200">Rocket Fuel</div>
          </div>
          <div className="bg-purple-900/50 rounded-xl md:rounded-2xl p-2 md:p-3 border-2 border-purple-500">
            <div className="text-lg md:text-xl font-bold text-purple-300">
              {currentPlanet + 1}/{planets.length}
            </div>
            <div className="text-xs text-purple-200">Planets Visited</div>
          </div>
        </div>

        {/* Solar System Display */}
        <div className="bg-gray-900/80 rounded-2xl md:rounded-3xl p-4 md:p-6 border-4 border-gray-700 mb-6 overflow-hidden">
          <h3 className="text-lg md:text-xl font-bold text-yellow-300 text-center mb-4 md:mb-6">
            🌟 Our Solar System 🌟
          </h3>

          {/* Planets Journey - Fixed height and overflow */}
          <div
            className={`relative ${getContainerHeight()} mb-6 md:mb-8 overflow-hidden`}
          >
            {/* Orbit Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[1, 2, 3, 4, 5].map((orbit) => (
                <div
                  key={orbit}
                  className="absolute border border-gray-600 md:border-2 rounded-full"
                  style={{
                    width: `${getOrbitSize(orbit) * 2}px`, // diameter = radius * 2
                    height: `${getOrbitSize(orbit) * 2}px`,
                  }}
                />
              ))}
            </div>

            {/* Sun in Center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-3xl md:text-5xl animate-pulse">☀️</div>
            </div>

            {/* Planets */}
            {planets.map((planet, index) => (
              <div
                key={planet.name}
                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                  isFlying ? "animate-bounce" : ""
                }`}
                style={{
                  transform: `rotate(${
                    index * 72
                  }deg) translateX(${getOrbitSize(
                    planet.distance
                  )}px) rotate(-${index * 72}deg)`,
                }}
              >
                <div
                  className={`
                    ${getPlanetSize()} rounded-full flex items-center justify-center
                    ${planet.color} border-2
                    ${
                      planet.discovered
                        ? "border-yellow-400 animate-pulse"
                        : "border-gray-500"
                    }
                    ${
                      index === currentPlanet
                        ? "ring-2 ring-green-400 scale-110"
                        : ""
                    }
                    transition-all duration-300
                  `}
                >
                  {planet.discovered ? planet.emoji : "❓"}
                </div>
                <div className="text-center mt-1">
                  <div className="text-white text-xs font-bold bg-black/50 px-1 py-0.5 rounded-full whitespace-nowrap">
                    {planet.discovered ? planet.name : "???"}
                  </div>
                </div>
              </div>
            ))}

            {/* Spacecraft */}
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
              style={{
                transform: `rotate(${
                  currentPlanet * 72
                }deg) translateX(${getOrbitSize(
                  planets[currentPlanet].distance
                )}px) rotate(-${currentPlanet * 72}deg)`,
              }}
            >
              <div className={`${getSpaceshipSize()} animate-bounce`}>🚀</div>
            </div>
          </div>

          {/* Current Planet Info */}
          <div className="text-center bg-gray-800/50 rounded-xl md:rounded-2xl p-3 md:p-4 border-2 border-yellow-500">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">
              {planets[currentPlanet].emoji}
            </div>
            <h4 className="text-base md:text-lg font-bold text-yellow-300 mb-1 md:mb-2">
              {planets[currentPlanet].name}
            </h4>
            <p className="text-gray-300 text-xs md:text-sm">
              {currentPlanet === 0 && "🌡️ Very hot planet closest to the Sun!"}
              {currentPlanet === 1 && "☁️ Cloudy planet with a golden glow!"}
              {currentPlanet === 2 &&
                "💙 Our home - the blue planet with life!"}
              {currentPlanet === 3 && "🏜️ Red desert planet with two moons!"}
              {currentPlanet === 4 && "🌀 Giant planet with a big red spot!"}
            </p>
          </div>
        </div>

        {/* Game Controls - Stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6">
          <button
            onClick={flyToNextPlanet}
            disabled={
              fuel <= 0 || currentPlanet >= planets.length - 1 || isFlying
            }
            className={`
              py-3 md:py-4 text-white font-bold rounded-xl md:rounded-2xl text-base md:text-lg transition-all duration-300
              ${
                fuel > 0 && currentPlanet < planets.length - 1 && !isFlying
                  ? "bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95"
                  : "bg-gray-600"
              }
            `}
          >
            🚀 {isMobile ? "Next Planet" : "Fly to Next Planet"}
          </button>

          <button
            onClick={collectScience}
            disabled={fuel <= 0 || isFlying}
            className={`
              py-3 md:py-4 text-white font-bold rounded-xl md:rounded-2xl text-base md:text-lg transition-all duration-300
              ${
                fuel > 0 && !isFlying
                  ? "bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95"
                  : "bg-gray-600"
              }
            `}
          >
            🔬 {isMobile ? "Collect Science" : "Collect Science (+10)"}
          </button>
        </div>

        {/* Start/Restart Game */}
        {!isFlying && (missionComplete || fuel <= 0) && (
          <div className="text-center mb-6">
            <div
              className={`
              rounded-2xl md:rounded-3xl p-4 md:p-6 border-4 mb-4
              ${
                missionComplete
                  ? "bg-green-900/50 border-green-500"
                  : "bg-red-900/50 border-red-500"
              }
            `}
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">
                {missionComplete ? "🎉" : "⛽"}
              </div>
              <div className="text-xl md:text-2xl font-bold text-yellow-300 mb-1 md:mb-2">
                {missionComplete ? "Mission Accomplished!" : "Out of Fuel!"}
              </div>
              <div className="text-lg md:text-xl text-green-400 mb-1 md:mb-2">
                Final Score: {score}
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                {missionComplete
                  ? "You discovered all planets in our solar system!"
                  : "Your spacecraft needs more fuel to continue."}
              </p>
            </div>
          </div>
        )}

        {!isFlying && !missionComplete && fuel > 0 && (
          <div className="text-center">
            <button
              onClick={startMission}
              className="px-6 md:px-8 py-3 md:py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-xl md:rounded-2xl text-lg md:text-xl transition-colors hover:scale-105 active:scale-95 animate-pulse"
            >
              🌟 {isMobile ? "Start Mission" : "Start Space Mission"}
            </button>
          </div>
        )}

        {/* Simple Instructions */}
        <div className="bg-gray-900/80 rounded-2xl md:rounded-3xl p-3 md:p-4 border-4 border-purple-500">
          <h3 className="text-lg md:text-xl font-bold text-purple-300 text-center mb-3 md:mb-4">
            How to Play 🎮
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm">
            <div className="text-center">
              <div className="text-xl md:text-2xl mb-1 md:mb-2">🚀</div>
              <p className="text-gray-300 text-xs md:text-sm">
                <strong>Fly to planets</strong> to discover them
              </p>
              <p className="text-yellow-300 text-xs mt-1">
                Each flight uses 20% fuel
              </p>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl mb-1 md:mb-2">🔬</div>
              <p className="text-gray-300 text-xs md:text-sm">
                <strong>Collect science data</strong> at each planet
              </p>
              <p className="text-green-300 text-xs mt-1">
                Get 10 points, use 5% fuel
              </p>
            </div>
          </div>
          <div className="text-center mt-3 md:mt-4">
            <p className="text-blue-300 font-bold text-sm md:text-base">
              ✨ Discover all {planets.length} planets to win! ✨
            </p>
          </div>
        </div>

        {/* Planet Discovery Progress - Adjust grid for mobile */}
        <div className="bg-gray-900/80 rounded-2xl md:rounded-3xl p-3 md:p-4 border-4 border-blue-500 mt-4">
          <h4 className="text-base md:text-lg font-bold text-blue-300 text-center mb-2 md:mb-3">
            Planet Discovery Progress
          </h4>
          <div
            className={`grid grid-cols-5 gap-1 md:gap-2 ${
              isMobile ? "text-xs" : "text-sm"
            }`}
          >
            {planets.map((planet, index) => (
              <div key={planet.name} className="text-center">
                <div
                  className={`
                    ${isMobile ? "w-6 h-6 text-xs" : "w-8 h-8 text-base"} 
                    rounded-full flex items-center justify-center mx-auto
                    ${
                      planet.discovered
                        ? planet.color + " border border-yellow-400"
                        : "bg-gray-700 border border-gray-500"
                    }
                  `}
                >
                  {planet.discovered ? planet.emoji : "?"}
                </div>
                <div className="text-white mt-0.5 truncate px-0.5 text-xs">
                  {planet.discovered ? planet.name : "???"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
