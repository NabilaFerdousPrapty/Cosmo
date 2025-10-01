// src/app/games/page.tsx
import { Particles } from "@/components/ui/particles";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Games - Interactive Space Games",
  description:
    "Play educational games about the Sun, solar flares, and space weather",
};

const games = [
  {
    id: "solar-flare-predictor",
    title: "Solar Flare Predictor",
    description: "Predict solar flare activity based on real solar data",
    icon: "⚡",
    difficulty: "Intermediate",
    category: "Science",
    path: "/games/solar-flare-predictor",
  },
  {
    id: "coronal-mass-ejection",
    title: "CME Dodger",
    description: "Navigate through coronal mass ejections in space",
    icon: "🌪️",
    difficulty: "Easy",
    category: "Arcade",
    path: "/games/cme-dodger",
  },
  {
    id: "solar-system-quiz",
    title: "Solar System Quiz",
    description: "Test your knowledge about our solar system",
    icon: "🎯",
    difficulty: "Beginner",
    category: "Trivia",
    path: "/games/solar-system-quiz",
  },
  {
    id: "space-weather-defense",
    title: "Space Weather Defense",
    description: "Protect Earth from solar storms and radiation",
    icon: "🛡️",
    difficulty: "Hard",
    category: "Strategy",
    path: "/games/space-weather-defense",
  },
  {
    id: "solar-orbiter",
    title: "Solar Orbiter",
    description: "Navigate a spacecraft around the Sun",
    icon: "🛰️",
    difficulty: "Intermediate",
    category: "Simulation",
    path: "/games/solar-orbiter",
  },
  {
    id: "aurora-chaser",
    title: "Aurora Chaser",
    description: "Capture the perfect aurora based on solar activity",
    icon: "🌈",
    difficulty: "Easy",
    category: "Puzzle",
    path: "/games/aurora-chaser",
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen  bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 pb-12 pt-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-400 bg-clip-text text-transparent my-4">
         Fun with the Sun: Learn and Play
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Interactive games that teach you about the Sun, solar flares, and
          space weather while having fun!
        </p>
      </header>

      {/* Games Grid */}
      <main className="container mx-auto px-4 pb-16 relative">
        <Particles className="absolute inset-0 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {games.map((game) => (
            <Link
              key={game.id}
              href={game.path}
              className="group block bg-black rounded-2xl p-6 border-2 border-slate-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {game.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {game.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{game.description}</p>
                <div className="flex justify-between items-center text-xs">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      game.difficulty === "Easy"
                        ? "bg-green-500"
                        : game.difficulty === "Intermediate"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    } text-white`}
                  >
                    {game.difficulty}
                  </span>
                  <span className="text-gray-400">{game.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Educational Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Learn Through Play
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Our games are designed to be both fun and educational. You&apos;ll
              learn about:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-zinc-900 rounded-lg">
                <div className="text-2xl mb-2">🌞</div>
                <div className="font-semibold">Solar Physics</div>
              </div>
              <div className="p-4 bg-zinc-900 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold">Space Weather</div>
              </div>
              <div className="p-4 bg-zinc-900 rounded-lg">
                <div className="text-2xl mb-2">🛰️</div>
                <div className="font-semibold">Satellite Technology</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
