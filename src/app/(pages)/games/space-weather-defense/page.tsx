// src/app/games/space-weather-defense/page.tsx
"use client";

import { useState, useEffect } from "react";
import GameLayout from "../../../../components/games/GameLayout";

interface DefenseTower {
  id: number;
  type: "laser" | "shield" | "missile";
  level: number;
  position: number;
}

interface SolarStorm {
  id: number;
  type: "flare" | "cme" | "radiation";
  intensity: number;
  position: number;
  progress: number;
}

export default function SpaceWeatherDefense() {
  const [resources, setResources] = useState(100);
  const [earthHealth, setEarthHealth] = useState(100);
  const [towers, setTowers] = useState<DefenseTower[]>([]);
  const [storms, setStorms] = useState<SolarStorm[]>([]);
  const [wave, setWave] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const towerCosts = {
    laser: 30,
    shield: 40,
    missile: 50,
  };

  const addTower = (type: "laser" | "shield" | "missile", position: number) => {
    if (resources >= towerCosts[type]) {
      setTowers([
        ...towers,
        {
          id: Date.now(),
          type,
          level: 1,
          position,
        },
      ]);
      setResources(resources - towerCosts[type]);
    }
  };

  const spawnStorm = () => {
    const stormTypes: ("flare" | "cme" | "radiation")[] = [
      "flare",
      "cme",
      "radiation",
    ];
    const newStorm: SolarStorm = {
      id: Date.now(),
      type: stormTypes[Math.floor(Math.random() * stormTypes.length)],
      intensity: 1 + Math.floor(wave / 2),
      position: Math.floor(Math.random() * 5),
      progress: 0,
    };
    setStorms([...storms, newStorm]);
  };

  useEffect(() => {
    if (gameOver || earthHealth <= 0) {
      setGameOver(true);
      return;
    }

    const gameInterval = setInterval(() => {
      // Spawn storms randomly
      if (Math.random() < 0.3) {
        spawnStorm();
      }

      // Update storm progress
      setStorms((currentStorms) =>
        currentStorms
          .map((storm) => {
            const newProgress = storm.progress + storm.intensity * 0.1;

            // Check if storm reached Earth
            if (newProgress >= 100) {
              setEarthHealth((health) => {
                const damage = storm.intensity * 10;
                return Math.max(0, health - damage);
              });
              return { ...storm, progress: 100 };
            }

            return { ...storm, progress: newProgress };
          })
          .filter((storm) => storm.progress < 100)
      );

      // Generate resources
      setResources((res) => res + 5 + towers.length * 2);

      // Increase wave every 30 seconds
      setTimeout(() => setWave((w) => w + 1), 30000);
    }, 1000);

    return () => clearInterval(gameInterval);
  }, [towers, gameOver, earthHealth, wave]);

  const getTowerEffectiveness = (towerType: string, stormType: string) => {
    const effectiveness: { [key: string]: { [key: string]: number } } = {
      laser: { flare: 2, cme: 1, radiation: 0.5 },
      shield: { flare: 0.5, cme: 2, radiation: 1 },
      missile: { flare: 1, cme: 0.5, radiation: 2 },
    };
    return effectiveness[towerType]?.[stormType] || 1;
  };

  const defend = (stormId: number) => {
    const storm = storms.find((s) => s.id === stormId);
    if (!storm) return;

    const defendingTowers = towers.filter(
      (tower) => tower.position === storm.position
    );
    let totalDamage = 0;

    defendingTowers.forEach((tower) => {
      const effectiveness = getTowerEffectiveness(tower.type, storm.type);
      totalDamage += tower.level * effectiveness;
    });

    if (totalDamage > storm.intensity) {
      setStorms(storms.filter((s) => s.id !== stormId));
      setResources((res) => res + storm.intensity * 5);
    }
  };

  const startNewGame = () => {
    setResources(100);
    setEarthHealth(100);
    setTowers([]);
    setStorms([]);
    setWave(1);
    setGameOver(false);
  };

  return (
    <GameLayout
      title="Space Weather Defense"
      description="Protect Earth from solar storms and radiation"
    >
      <div className="max-w-6xl mx-auto">
        {/* Game Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6 text-center">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400">{resources}</div>
            <div className="text-sm text-gray-400">Resources</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-blue-400">
              {earthHealth}%
            </div>
            <div className="text-sm text-gray-400">Earth Health</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-yellow-400">
              {towers.length}
            </div>
            <div className="text-sm text-gray-400">Towers</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-red-400">Wave {wave}</div>
            <div className="text-sm text-gray-400">Difficulty</div>
          </div>
        </div>

        {/* Defense Grid */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 mb-6">
          <h3 className="text-xl font-bold mb-4 text-white">Defense Grid</h3>

          {/* Earth */}
          <div className="text-center mb-8">
            <div className="inline-block relative">
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                EARTH
              </div>
              <div className="absolute -inset-4 border-4 border-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Health: {earthHealth}%
            </div>
          </div>

          {/* Defense Lines */}
          <div className="space-y-4">
            {[0, 1, 2, 3, 4].map((line) => (
              <div
                key={line}
                className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
              >
                <div className="flex space-x-2">
                  {towers
                    .filter((t) => t.position === line)
                    .map((tower) => (
                      <div
                        key={tower.id}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${
                          tower.type === "laser"
                            ? "bg-red-500"
                            : tower.type === "shield"
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                      >
                        {tower.type === "laser"
                          ? "🔫"
                          : tower.type === "shield"
                          ? "🛡️"
                          : "🚀"}
                      </div>
                    ))}
                </div>

                {/* Storm Progress */}
                <div className="flex-1 mx-4">
                  {storms
                    .filter((s) => s.position === line)
                    .map((storm) => (
                      <div key={storm.id} className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span
                            className={`${
                              storm.type === "flare"
                                ? "text-red-400"
                                : storm.type === "cme"
                                ? "text-orange-400"
                                : "text-purple-400"
                            }`}
                          >
                            {storm.type.toUpperCase()} Lv.{storm.intensity}
                          </span>
                          <span className="text-gray-400">
                            {Math.round(storm.progress)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              storm.type === "flare"
                                ? "bg-red-500"
                                : storm.type === "cme"
                                ? "bg-orange-500"
                                : "bg-purple-500"
                            }`}
                            style={{ width: `${storm.progress}%` }}
                          ></div>
                        </div>
                        <button
                          onClick={() => defend(storm.id)}
                          className="mt-1 px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-xs rounded transition-colors"
                        >
                          Defend
                        </button>
                      </div>
                    ))}
                </div>

                {/* Add Tower Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => addTower("laser", line)}
                    disabled={resources < towerCosts.laser}
                    className="px-3 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded text-sm transition-colors"
                  >
                    Laser ({towerCosts.laser})
                  </button>
                  <button
                    onClick={() => addTower("shield", line)}
                    disabled={resources < towerCosts.shield}
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded text-sm transition-colors"
                  >
                    Shield ({towerCosts.shield})
                  </button>
                  <button
                    onClick={() => addTower("missile", line)}
                    disabled={resources < towerCosts.missile}
                    className="px-3 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded text-sm transition-colors"
                  >
                    Missile ({towerCosts.missile})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {gameOver && (
          <div className="text-center mb-6">
            <div className="bg-red-900 bg-opacity-50 rounded-2xl p-6 border border-red-700 mb-4">
              <div className="text-4xl mb-2">💀 Earth Destroyed</div>
              <div className="text-2xl text-yellow-400 mb-2">
                Survived to Wave {wave}
              </div>
              <p className="text-gray-400">
                The solar storms were too powerful
              </p>
            </div>
            <button
              onClick={startNewGame}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-xl transition-colors"
            >
              🚀 New Game
            </button>
          </div>
        )}

        {/* Game Instructions */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-white">
            Defense Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">
                🏗️ Tower Types
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">🔫 Laser</span>
                  <span>Strong vs Solar Flares</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">🛡️ Shield</span>
                  <span>Strong vs CMEs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">🚀 Missile</span>
                  <span>Strong vs Radiation</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">🎯 Tips</h4>
              <ul className="space-y-1">
                <li>• Balance your defense across all lanes</li>
                <li>• Use appropriate towers for each storm type</li>
                <li>• Upgrade towers when possible</li>
                <li>• Monitor Earth's health constantly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
