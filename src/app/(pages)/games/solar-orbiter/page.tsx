// src/app/games/solar-orbiter/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import GameLayout from "../../../../components/games/GameLayout";

interface Planet {
  name: string;
  distance: number; // in AU
  size: number;
  color: string;
  speed: number;
}

export default function SolarOrbiter() {
  const [score, setScore] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [temperature, setTemperature] = useState(300);
  const [distanceFromSun, setDistanceFromSun] = useState(1);
  const [isOrbiting, setIsOrbiting] = useState(false);
  const [missionComplete, setMissionComplete] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const planets: Planet[] = [
    { name: "Mercury", distance: 0.4, size: 8, color: "#8C7853", speed: 4.1 },
    { name: "Venus", distance: 0.7, size: 12, color: "#FFC649", speed: 3.0 },
    { name: "Earth", distance: 1.0, size: 13, color: "#6B93D6", speed: 2.5 },
    { name: "Mars", distance: 1.5, size: 11, color: "#CD5C5C", speed: 2.0 },
    { name: "Jupiter", distance: 5.2, size: 30, color: "#F0C78D", speed: 1.0 },
  ];

  const startMission = () => {
    setScore(0);
    setFuel(100);
    setTemperature(300);
    setDistanceFromSun(1);
    setIsOrbiting(true);
    setMissionComplete(false);
  };

  const adjustOrbit = (direction: "in" | "out") => {
    if (!isOrbiting || fuel <= 0) return;

    const fuelCost = 5;
    const distanceChange = direction === "in" ? -0.1 : 0.1;

    setFuel((prev) => Math.max(0, prev - fuelCost));
    setDistanceFromSun((prev) =>
      Math.max(0.3, Math.min(6, prev + distanceChange))
    );

    // Update temperature based on distance (inverse square law)
    const newTemp = 300 * Math.pow(1 / (distanceFromSun + distanceChange), 2);
    setTemperature(Math.max(100, Math.min(1000, newTemp)));

    // Score for successful maneuver
    setScore((prev) => prev + 10);
  };

  useEffect(() => {
    if (!isOrbiting || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angle = 0;
    const orbitInterval = setInterval(() => {
      // Clear canvas
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 100; i++) {
        const x = (i * 7) % canvas.width;
        const y = (i * 13) % canvas.height;
        ctx.fillRect(x, y, 1, 1);
      }

      // Draw Sun
      const sunGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        50
      );
      sunGradient.addColorStop(0, "#FFFF00");
      sunGradient.addColorStop(1, "#FF4500");
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
      ctx.fill();

      // Draw planets and their orbits
      planets.forEach((planet) => {
        // Orbit path
        ctx.strokeStyle = "#333344";
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          planet.distance * 60,
          0,
          2 * Math.PI
        );
        ctx.stroke();

        // Planet
        const planetAngle = angle * planet.speed;
        const planetX =
          canvas.width / 2 + Math.cos(planetAngle) * planet.distance * 60;
        const planetY =
          canvas.height / 2 + Math.sin(planetAngle) * planet.distance * 60;

        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(planetX, planetY, planet.size, 0, 2 * Math.PI);
        ctx.fill();

        // Planet label
        ctx.fillStyle = "#ffffff";
        ctx.font = "10px Arial";
        ctx.fillText(planet.name, planetX - 15, planetY - planet.size - 5);
      });

      // Draw player spacecraft
      const playerAngle = angle * (2.5 / distanceFromSun);
      const playerX =
        canvas.width / 2 + Math.cos(playerAngle) * distanceFromSun * 60;
      const playerY =
        canvas.height / 2 + Math.sin(playerAngle) * distanceFromSun * 60;

      ctx.fillStyle = "#00aaff";
      ctx.beginPath();
      ctx.moveTo(playerX, playerY - 8);
      ctx.lineTo(playerX - 6, playerY + 8);
      ctx.lineTo(playerX + 6, playerY + 8);
      ctx.closePath();
      ctx.fill();

      // Draw spacecraft trail
      ctx.strokeStyle = "#00aaff";
      ctx.beginPath();
      ctx.moveTo(playerX, playerY + 8);
      ctx.lineTo(
        playerX - Math.cos(playerAngle) * 20,
        playerY - Math.sin(playerAngle) * 20
      );
      ctx.stroke();

      angle += 0.02;

      // Check mission objectives
      if (fuel <= 0) {
        setIsOrbiting(false);
      }

      // Complete mission if all planets visited
      if (score >= 500) {
        setMissionComplete(true);
        setIsOrbiting(false);
      }
    }, 50);

    return () => clearInterval(orbitInterval);
  }, [isOrbiting, distanceFromSun, score]);

  return (
    <GameLayout
      title="Solar Orbiter"
      description="Navigate a spacecraft around the Sun and explore planets"
    >
      <div className="max-w-6xl mx-auto">
        {/* Game Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6 text-center">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-blue-400">{score}</div>
            <div className="text-sm text-gray-400">Science Data</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400">{fuel}%</div>
            <div className="text-sm text-gray-400">Fuel</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-red-400">
              {Math.round(temperature)}K
            </div>
            <div className="text-sm text-gray-400">Temperature</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-yellow-400">
              {distanceFromSun.toFixed(1)} AU
            </div>
            <div className="text-sm text-gray-400">Distance from Sun</div>
          </div>
        </div>

        {/* Game Canvas */}
        <div className="bg-black rounded-2xl p-1 border-2 border-gray-800 mb-6">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Controls */}
        {!isOrbiting && !missionComplete && (
          <div className="text-center mb-6">
            <button
              onClick={startMission}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-xl transition-colors"
            >
              🚀 Launch Mission
            </button>
          </div>
        )}

        {isOrbiting && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => adjustOrbit("in")}
              disabled={fuel <= 0}
              className="py-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold rounded-lg text-xl transition-colors"
            >
              ↙️ Move Closer to Sun
            </button>
            <button
              onClick={() => adjustOrbit("out")}
              disabled={fuel <= 0}
              className="py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold rounded-lg text-xl transition-colors"
            >
              ↗️ Move Away from Sun
            </button>
          </div>
        )}

        {missionComplete && (
          <div className="text-center mb-6">
            <div className="bg-green-900 bg-opacity-50 rounded-2xl p-6 border border-green-700 mb-4">
              <div className="text-4xl mb-2">🎉 Mission Success!</div>
              <div className="text-2xl text-yellow-400 mb-2">
                Final Score: {score}
              </div>
              <p className="text-gray-400">
                All planetary data collected successfully
              </p>
            </div>
            <button
              onClick={startMission}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xl transition-colors"
            >
              🔄 New Mission
            </button>
          </div>
        )}

        {fuel <= 0 && isOrbiting && (
          <div className="text-center mb-6">
            <div className="bg-red-900 bg-opacity-50 rounded-2xl p-6 border border-red-700">
              <div className="text-4xl mb-2">⛽ Out of Fuel</div>
              <p className="text-gray-400">
                Mission terminated due to fuel exhaustion
              </p>
            </div>
          </div>
        )}

        {/* Game Instructions */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-white">
            Mission Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">
                🎮 Controls
              </h4>
              <ul className="space-y-2">
                <li>• Move closer to Sun for higher science yield</li>
                <li>• Move away from Sun to cool spacecraft</li>
                <li>• Each maneuver costs 5% fuel</li>
                <li>• Collect 500 science data to win</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">⚠️ Warnings</h4>
              <ul className="space-y-2">
                <li>• Temperature increases near the Sun</li>
                <li>• Watch your fuel consumption</li>
                <li>• Maintain stable orbit</li>
                <li>• Avoid planetary collisions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
