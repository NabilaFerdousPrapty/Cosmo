"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Particles } from "@/components/ui/particles";
import { MysteryBox } from "@/components/FunAndLearn/MysteryBox";
import { funFacts } from "./data";
import { FunFactCard } from "@/components/FunAndLearn/FunFactCard";

// Types
interface Riddle {
  id: number;
  question: string;
  hint: string;
  answer: string;
  explanation: string;
  image: string;
  category: "space" | "earth" | "science" | "animals";
}

// Components
const AnimatedSun = () => (
  <div className="relative inline-block">
    <div className="text-4xl md:text-6xl animate-spin-slow">☀️</div>
    <div className="absolute inset-0 text-4xl md:text-6xl animate-pulse">
      🌟
    </div>
  </div>
);

const StarBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-black text-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}
    </div>
  );
};

const RiddleCard = ({
  riddle,
  onReveal,
}: {
  riddle: Riddle;
  onReveal: () => void;
}) => {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleReveal = () => {
    setShowAnswer(true);
    onReveal();
  };

  return (
    <div className="bg-gradient-to-br from-zinc-800 to-gray-900 p-6 rounded-3xl shadow-2xl border-4 border-yellow-300 transform hover:scale-105 transition-all duration-300 min-h-[500px] flex flex-col">
      <div className="text-center mb-4">
        <span className="text-4xl">🤔</span>
        <h3 className="text-xl font-bold text-white mt-2">Brain Teaser!</h3>
      </div>

      <p className="text-lg text-white text-center mb-4 font-semibold flex-grow">
        {riddle.question}
      </p>

      <div className="flex justify-center mb-4">
        <div className="w-48 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl border-2 border-white flex items-center justify-center">
          <span className="text-4xl">
            {riddle.category === "space" && "🌌"}
            {riddle.category === "earth" && "🌍"}
            {riddle.category === "science" && "🔬"}
            {riddle.category === "animals" && "🐾"}
          </span>
        </div>
      </div>

      {!showAnswer && (
        <div className="space-y-3 mt-auto">
          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 rounded-xl transition-colors"
          >
            {showHint ? "Hide Hint" : "Show Hint"} 💡
          </button>

          {showHint && (
            <div className="bg-blue-800 p-4 rounded-xl text-white text-center">
              <p className="font-semibold">{riddle.hint}</p>
            </div>
          )}

          <button
            onClick={handleReveal}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Reveal Answer! 🎉
          </button>
        </div>
      )}

      {showAnswer && (
        <div className="bg-green-600 p-4 rounded-xl text-white text-center animate-pulse mt-auto">
          <h4 className="font-bold text-lg mb-2">Answer: {riddle.answer}</h4>
          <p className="text-sm">{riddle.explanation}</p>
        </div>
      )}
    </div>
  );
};

// Main Component
export default function FunAndLearn() {
  const [activeTab, setActiveTab] = useState<"riddles" | "facts" | "discover">(
    "riddles"
  );
  const [solvedRiddles, setSolvedRiddles] = useState<number[]>([]);

  // Sample data
  const riddles: Riddle[] = [
    {
      id: 1,
      question:
        "I'm a giant ball of gas that gives you light and heat. What am I?",
      hint: "I'm the center of our solar system!",
      answer: "The Sun",
      explanation:
        "The Sun is a star made of hot gases that provides light and heat to all planets in our solar system!",
      image: "/api/placeholder/200/150",
      category: "space",
    },
    {
      id: 2,
      question: "I twinkle at night but I’m not a star, what am I?",
      hint: "You can find me in the night sky, but I'm not as far as stars!",
      answer: "A planet",
      explanation:
        "Planets like Venus and Mars often appear as twinkling objects in the night sky, but they're closer to Earth than stars.",
      image: "/api/placeholder/200/150",
      category: "space",
    },
    {
      id: 3,
      question: "I have a tail but I'm not an animal. What am I?",
      hint: "I might appear when I’m close to the Sun!",
      answer: "A comet",
      explanation:
        "Comets have tails made of dust and gas that glow when they approach the Sun.",
      image: "/api/placeholder/200/150",
      category: "space",
    },
    {
      id: 4,
      question: "I am a giant red spot, spinning on a gas giant. What am I?",
      hint: "I'm located on the largest planet in our solar system!",
      answer: "The Great Red Spot (on Jupiter)",
      explanation:
        "The Great Red Spot is a massive storm on Jupiter, and it has been raging for centuries!",
      image: "/api/placeholder/200/150",
      category: "space",
    },
    {
      id: 5,
      question: "I’m not a moon, but I have moons. What am I?",
      hint: "I’m the fourth planet from the Sun!",
      answer: "Mars",
      explanation:
        "Mars is a planet with two small moons, Phobos and Deimos, orbiting around it.",
      image: "/api/placeholder/200/150",
      category: "space",
    },
    {
      id: 6,
      question: "I have rings but I am not a jeweler. What am I?",
      hint: "I am the second-largest planet in our solar system!",
      answer: "Saturn",
      explanation:
        "Saturn is famous for its beautiful and vast ring system made of ice and rock.",
      image: "/api/placeholder/200/150",
      category: "space",
    },
    {
      id: 7,
      question: "I’m the largest planet in our solar system. What am I?",
      hint: "I have a big red spot on me!",
      answer: "Jupiter",
      explanation:
        "Jupiter is the largest planet in our solar system and is known for its Great Red Spot and its many moons.",
      image: "/api/placeholder/200/150",
      category: "space",
    },
    {
      id: 8,
      question: "I’m a satellite of Earth. What am I?",
      hint: "I help illuminate the night sky!",
      answer: "The Moon",
      explanation:
        "The Moon is Earth's only natural satellite and it reflects sunlight to light up the night sky.",
      image: "/api/placeholder/200/150",
      category: "space",
    },
    {
      id: 9,
      question: "I’m an asteroid belt between two planets. What am I?",
      hint: "I lie between Mars and Jupiter!",
      answer: "The Asteroid Belt",
      explanation:
        "The Asteroid Belt is a region filled with millions of asteroids, located between the orbits of Mars and Jupiter.",
      image: "/api/placeholder/200/150",
      category: "space",
    },
    {
      id: 10,
      question: "I’m a dwarf planet located beyond Neptune. What am I?",
      hint: "I share my name with a Disney character!",
      answer: "Pluto",
      explanation:
        "Pluto is a dwarf planet in the outer reaches of the solar system and was once considered the ninth planet.",
      image: "/api/placeholder/200/150",
      category: "space",
    },
  ];

  const handleRiddleReveal = (riddleId: number) => {
    if (!solvedRiddles.includes(riddleId)) {
      setSolvedRiddles([...solvedRiddles, riddleId]);
    }
  };

  // Define tab type to avoid 'any'
  type TabType = "riddles" | "facts" | "discover";

  const tabs: { id: TabType; label: string; emoji: string }[] = [
    { id: "riddles", label: "🧠 Brain Teasers", emoji: "🤔" },
    { id: "facts", label: "✨ Amazing Facts", emoji: "🌟" },
    { id: "discover", label: "🎁 Mystery Boxes", emoji: "🔍" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-zinc-900 to-black text-white relative overflow-hidden">
      <StarBackground />
      <Particles className="absolute inset-0 z-0" />

      {/* Header */}
      <div className="relative z-10 text-center py-8 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          <AnimatedSun />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Fun & Learn Galaxy!
          </h1>
          <AnimatedSun />
        </div>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          Explore amazing facts, solve cool riddles, and discover the wonders of
          our universe! 🌟
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="relative z-10 flex justify-center mb-8">
        <div className="bg-black bg-opacity-50 rounded-2xl p-2 border-2 border-yellow-400">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-3 rounded-xl font-bold text-sm md:text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-yellow-400 text-purple-900 shadow-lg"
                  : "text-yellow-300 hover:bg-yellow-400 hover:text-purple-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pb-12">
        {/* Riddles Section */}
        {activeTab === "riddles" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-yellow-300 mb-4">
                Can You Solve These Riddles? 🧩
              </h2>
              <p className="text-blue-200 text-lg">
                Test your thinking skills with these fun challenges!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {riddles.map((riddle) => (
                <RiddleCard
                  key={riddle.id}
                  riddle={riddle}
                  onReveal={() => handleRiddleReveal(riddle.id)}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="bg-green-600 bg-opacity-50 inline-block px-6 py-3 rounded-2xl">
                <p className="text-white font-bold text-lg">
                  🎯 Solved: {solvedRiddles.length} of {riddles.length} riddles!
                </p>
                {solvedRiddles.length === riddles.length && (
                  <p className="text-yellow-300 text-sm mt-2">
                    🏆 Riddle Master! You solved them all!
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Facts Section */}
        {activeTab === "facts" && (
          <div className="min-h-screen flex flex-col justify-center py-12 px-4 bg-gradient-to-br from-slate-900 to-black relative">
            <Particles className="absolute inset-0 z-0" />
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold font-display text-yellow-300 mb-4 drop-shadow-lg">
                Mind-Blowing Facts! 💫
              </h2>
              <p className="text-blue-200 text-xl font-story-text max-w-2xl mx-auto">
                Click on these cosmic cards to unveil amazing scientific
                discoveries from space, Earth, and beyond!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto w-full">
              {funFacts.map((fact) => (
                <FunFactCard key={fact.id} fact={fact} />
              ))}
            </div>
          </div>
        )}

        {/* Discovery Section */}
        {activeTab === "discover" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-yellow-300 mb-4">
                Mystery Discovery Boxes! 🎁
              </h2>
              <p className="text-blue-200 text-lg">
                Click to discover fun learning activities!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <MysteryBox
                title="Solar System Explorer"
                emoji="🌞"
                description="Journey through our cosmic neighborhood!"
                mysteryContent={
                  <div className="text-center space-y-3">
                    <p className="text-cyan-300 font-semibold">
                      Mission Accomplished! 🚀
                    </p>
                    <p className="text-gray-200">
                      You discovered that{" "}
                      <span className="text-yellow-300 font-bold">
                        Jupiter is so big
                      </span>{" "}
                      that all other planets could fit inside it!
                    </p>
                    <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                      <p className="text-sm text-gray-300">
                        <span className="text-green-400">✨ Fun Fact:</span>{" "}
                        Jupiter has 95 moons - that&apos;s a busy planet!
                      </p>
                    </div>
                  </div>
                }
                boxColorGradient="bg-gradient-to-br from-yellow-600/20 via-orange-500/20 to-red-600/20"
                boxBorderColor="border-amber-500/50"
              />
              <MysteryBox
                title="Black Hole Hunter"
                emoji="🕳️"
                description="Dive into cosmic mysteries!"
                mysteryContent={
                  <div className="text-center space-y-3">
                    <p className="text-purple-300 font-semibold">
                      Cosmic Secret Revealed! 🌌
                    </p>
                    <p className="text-gray-200">
                      You discovered that{" "}
                      <span className="text-pink-300 font-bold">
                        time slows down
                      </span>{" "}
                      near black holes!
                    </p>
                    <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                      <p className="text-sm text-gray-300">
                        <span className="text-cyan-400">⚡ Mind Blown:</span> If
                        you watched someone fall into a black hole, they&apos;d
                        appear to freeze at the edge forever!
                      </p>
                    </div>
                  </div>
                }
                boxColorGradient="bg-gradient-to-br from-purple-600/20 via-fuchsia-500/20 to-pink-600/20"
                boxBorderColor="border-purple-500/50"
              />
              <MysteryBox
                title="Space Station Life"
                emoji="🛰️"
                description="Experience zero gravity living!"
                mysteryContent={
                  <div className="text-center space-y-3">
                    <p className="text-green-300 font-semibold">
                      Space Station Access! 👨‍🚀
                    </p>
                    <p className="text-gray-200">
                      You unlocked a{" "}
                      <span className="text-blue-300 font-bold">
                        zero-gravity sleeping bag
                      </span>{" "}
                      used by astronauts!
                    </p>
                    <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                      <p className="text-sm text-gray-300">
                        <span className="text-yellow-400">🌎 Earth Fact:</span>{" "}
                        Astronauts on the ISS see 16 sunrises and sunsets every
                        day!
                      </p>
                    </div>
                  </div>
                }
                boxColorGradient="bg-gradient-to-br from-green-600/20 via-emerald-500/20 to-teal-600/20"
                boxBorderColor="border-green-500/50"
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-8 bg-black bg-opacity-50 mt-12">
        <p className="text-yellow-300 text-lg font-bold">
          Keep exploring! The universe is full of wonders! 🌌
        </p>
        <p className="text-blue-300 mt-2">
          Made with ❤️ for curious young minds
        </p>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
