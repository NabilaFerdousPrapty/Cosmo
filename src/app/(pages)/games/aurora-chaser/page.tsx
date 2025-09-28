// src/app/games/aurora-chaser/page.tsx
"use client";

import { useState, useEffect } from "react";
import GameLayout from "../../../../components/games/GameLayout";

interface Aurora {
  id: number;
  intensity: number;
  color: string;
  duration: number;
  pattern: string;
}

interface CameraSettings {
  exposure: number;
  iso: number;
  aperture: number;
  zoom: number;
}

export default function AuroraChaser() {
  const [score, setScore] = useState(0);
  const [film, setFilm] = useState(36);
  const [auroras, setAuroras] = useState<Aurora[]>([]);
  const [currentAurora, setCurrentAurora] = useState<Aurora | null>(null);
  const [cameraSettings, setCameraSettings] = useState<CameraSettings>({
    exposure: 5,
    iso: 800,
    aperture: 2.8,
    zoom: 1,
  });
  const [gameTime, setGameTime] = useState(0);
  const [isNight, setIsNight] = useState(true);

  const auroraColors = ["#00FF9D", "#00B8FF", "#FF00AA", "#FFD700", "#8A2BE2"];
  const auroraPatterns = ["curtain", "ray", "corona", "arc", "patch"];

  const spawnAurora = () => {
    if (Math.random() < 0.3 && auroras.length < 3) {
      const newAurora: Aurora = {
        id: Date.now(),
        intensity: Math.floor(Math.random() * 5) + 1,
        color: auroraColors[Math.floor(Math.random() * auroraColors.length)],
        duration: Math.floor(Math.random() * 10) + 5,
        pattern:
          auroraPatterns[Math.floor(Math.random() * auroraPatterns.length)],
      };
      setAuroras([...auroras, newAurora]);
    }
  };

  const takePhoto = (aurora: Aurora) => {
    if (film <= 0) return;

    // Calculate photo quality based on camera settings
    const exposureMatch =
      Math.abs(cameraSettings.exposure - aurora.intensity) <= 2;
    const isoMatch = Math.abs(cameraSettings.iso / 100 - aurora.intensity) <= 3;
    const apertureMatch = cameraSettings.aperture <= 4;
    const zoomMatch = cameraSettings.zoom >= 1.5;

    let quality = aurora.intensity;
    if (exposureMatch) quality += 2;
    if (isoMatch) quality += 2;
    if (apertureMatch) quality += 1;
    if (zoomMatch) quality += 1;

    const points = quality * 10;
    setScore(score + points);
    setFilm(film - 1);

    // Remove the photographed aurora
    setAuroras(auroras.filter((a) => a.id !== aurora.id));
    setCurrentAurora(aurora);

    // Show result for 2 seconds
    setTimeout(() => setCurrentAurora(null), 2000);
  };

  const adjustSetting = (setting: keyof CameraSettings, value: number) => {
    setCameraSettings((prev) => ({
      ...prev,
      [setting]: Math.max(
        0.1,
        Math.min(
          setting === "exposure"
            ? 30
            : setting === "iso"
            ? 6400
            : setting === "aperture"
            ? 22
            : 3,
          prev[setting] + value
        )
      ),
    }));
  };

  useEffect(() => {
    const gameInterval = setInterval(() => {
      setGameTime((prev) => prev + 1);
      spawnAurora();

      // Update aurora durations
      setAuroras((current) =>
        current
          .map((aurora) => ({
            ...aurora,
            duration: aurora.duration - 0.5,
          }))
          .filter((aurora) => aurora.duration > 0)
      );

      // Day/night cycle
      if (gameTime % 20 === 0) {
        setIsNight(!isNight);
      }
    }, 1000);

    return () => clearInterval(gameInterval);
  }, [gameTime, auroras.length]);

  const restartGame = () => {
    setScore(0);
    setFilm(36);
    setAuroras([]);
    setCurrentAurora(null);
    setGameTime(0);
    setIsNight(true);
    setCameraSettings({
      exposure: 5,
      iso: 800,
      aperture: 2.8,
      zoom: 1,
    });
  };

  return (
    <GameLayout
      title="Aurora Chaser"
      description="Capture the perfect aurora based on solar activity and camera settings"
    >
      <div className="max-w-6xl mx-auto">
        {/* Game Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6 text-center">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-yellow-400">{score}</div>
            <div className="text-sm text-gray-400">Score</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-blue-400">{film}</div>
            <div className="text-sm text-gray-400">Film Left</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-purple-400">
              {isNight ? "🌙 Night" : "☀️ Day"}
            </div>
            <div className="text-sm text-gray-400">Time</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-green-400">
              {Math.floor(gameTime / 60)}:
              {(gameTime % 60).toString().padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-400">Game Time</div>
          </div>
        </div>

        {/* Aurora Display */}
        <div
          className={`rounded-2xl p-8 border-2 mb-6 transition-all duration-1000 ${
            isNight
              ? "bg-gradient-to-b from-gray-900 to-blue-900 border-blue-700"
              : "bg-gradient-to-b from-blue-400 to-orange-400 border-orange-500"
          }`}
        >
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">
              {isNight ? "Northern Lights Display" : "Daytime - No Auroras"}
            </h3>
            <p className="text-gray-300">
              {isNight
                ? "Auroras are visible! Adjust your camera settings."
                : "Wait for nighttime to capture auroras."}
            </p>
          </div>

          {/* Auroras */}
          <div className="flex justify-center space-x-4 min-h-[200px] items-end">
            {isNight &&
              auroras.map((aurora) => (
                <div
                  key={aurora.id}
                  className="text-center cursor-pointer transform hover:scale-110 transition-transform"
                  onClick={() => takePhoto(aurora)}
                >
                  <div
                    className="w-24 h-32 rounded-lg mb-2 opacity-80 hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${aurora.color})`,
                      boxShadow: `0 0 20px ${aurora.color}`,
                    }}
                  ></div>
                  <div className="text-white text-sm">
                    {aurora.pattern} • Lv.{aurora.intensity}
                  </div>
                  <div className="text-xs text-gray-400">
                    {Math.round(aurora.duration)}s
                  </div>
                </div>
              ))}
          </div>

          {/* Photo Result */}
          {currentAurora && (
            <div className="mt-6 p-4 bg-black bg-opacity-50 rounded-lg border border-white border-opacity-20">
              <div className="text-center">
                <div className="text-2xl text-green-400 mb-2">
                  📸 Photo Captured!
                </div>
                <div className="text-white">
                  Aurora: {currentAurora.pattern} • Color:{" "}
                  <span style={{ color: currentAurora.color }}>■</span>
                </div>
                <div className="text-yellow-400">
                  +
                  {Math.round(
                    currentAurora.intensity * 10 +
                      (Math.abs(
                        cameraSettings.exposure - currentAurora.intensity
                      ) <= 2
                        ? 20
                        : 0) +
                      (Math.abs(
                        cameraSettings.iso / 100 - currentAurora.intensity
                      ) <= 3
                        ? 20
                        : 0)
                  )}{" "}
                  points
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Camera Controls */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 mb-6">
          <h3 className="text-xl font-bold mb-4 text-white">
            📷 Camera Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Exposure",
                key: "exposure",
                value: cameraSettings.exposure,
                unit: "s",
              },
              { label: "ISO", key: "iso", value: cameraSettings.iso, unit: "" },
              {
                label: "Aperture",
                key: "aperture",
                value: cameraSettings.aperture,
                unit: "f/",
              },
              {
                label: "Zoom",
                key: "zoom",
                value: cameraSettings.zoom,
                unit: "x",
              },
            ].map((setting) => (
              <div key={setting.key} className="bg-gray-800 p-4 rounded-lg">
                <div className="text-center mb-2">
                  <div className="text-sm text-gray-400">{setting.label}</div>
                  <div className="text-xl font-bold text-white">
                    {setting.unit}
                    {setting.value}
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() =>
                      adjustSetting(setting.key as keyof CameraSettings, -1)
                    }
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      adjustSetting(setting.key as keyof CameraSettings, 1)
                    }
                    className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Over */}
        {film <= 0 && (
          <div className="text-center mb-6">
            <div className="bg-purple-900 bg-opacity-50 rounded-2xl p-6 border border-purple-700 mb-4">
              <div className="text-4xl mb-2">🎞️ Out of Film</div>
              <div className="text-2xl text-yellow-400 mb-2">
                Final Score: {score}
              </div>
              <p className="text-gray-400">Great aurora chasing session!</p>
            </div>
            <button
              onClick={restartGame}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-xl transition-colors"
            >
              🔄 New Session
            </button>
          </div>
        )}

        {/* Game Instructions */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-white">
            Aurora Photography Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">
                🎯 Tips for Great Shots
              </h4>
              <ul className="space-y-2">
                <li>• Match exposure time to aurora intensity</li>
                <li>• Higher ISO for faint auroras</li>
                <li>• Wide aperture (low f-number) for more light</li>
                <li>• Use zoom for detailed shots</li>
                <li>• Auroras only appear at night</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">
                🌌 About Auroras
              </h4>
              <ul className="space-y-2">
                <li>• Caused by solar particles hitting atmosphere</li>
                <li>• Most common near polar regions</li>
                <li>• Colors indicate different gases</li>
                <li>• Green = oxygen, Purple = nitrogen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
