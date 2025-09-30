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
    <div className="bg-gradient-to-br from-gray-800 to-zinc-900 p-6 rounded-3xl shadow-2xl border-4 border-yellow-300 transform hover:scale-105 transition-all duration-300 h-[600px]">
      <div className="text-center mb-4">
        <span className="text-4xl">🤔</span>
        <h3 className="text-xl font-bold text-white mt-2">Brain Teaser!</h3>
      </div>

      <p className="text-lg text-white text-center mb-4 font-semibold">
        {riddle.question}
      </p>

      <div className="flex justify-center mb-4">
        <Image
          src={riddle.image}
          alt="Riddle visual clue"
          width={200}
          height={150}
          className="rounded-2xl border-2 border-white"
        />
      </div>

      {!showAnswer && (
        <div className="space-y-3">
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
        <div className="bg-green-600 p-4 rounded-xl text-white text-center animate-pulse">
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
        "I&apos;m a giant ball of gas that gives you light and heat. What am I?",
      hint: "I&apos;m the center of our solar system!",
      answer: "The Sun",
      explanation:
        "The Sun is a star made of hot gases that provides light and heat to all planets in our solar system!",
      image: "/r1.png",
      category: "space",
    },
    {
      id: 2,
      question:
        "I have cities but no houses, forests but no trees, and water but no fish. What am I?",
      hint: "You can find me in your classroom!",
      answer: "A Map",
      explanation:
        "A map shows cities, forests, and water bodies, but they&apos;re just drawings, not the real things!",
      image: "/r2.png",
      category: "earth",
    },
    {
      id: 3,
      question:
        "I&apos;m not alive, but I can grow; I don&apos;t have lungs, but I need air; I don&apos;t have a mouth, but water kills me. What am I?",
      hint: "You can make me with bubbles!",
      answer: "Fire",
      explanation:
        "Fire grows when it has oxygen (air), needs air to burn, and water puts it out!",
      image: "/r3.png",
      category: "science",
    },
  ];

  const handleRiddleReveal = (riddleId: number) => {
    if (!solvedRiddles.includes(riddleId)) {
      setSolvedRiddles([...solvedRiddles, riddleId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-slate-900 to-black text-white relative overflow-hidden ">
      <StarBackground />
      <Particles className="absolute inset-0 z-0" />

      {/* Header */}
      <div className="relative z-10 text-center py-8 px-4">
        <div className="flex justify-center items-center gap-4 mb-4">
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
          {[
            { id: "riddles", label: "🧠 Brain Teasers", emoji: "🤔" },
            { id: "facts", label: "✨ Amazing Facts", emoji: "🌟" },
            { id: "discover", label: "🎁 Mystery Boxes", emoji: "🔍" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
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
              </div>
            </div>
          </div>
        )}

        {activeTab === "facts" && (
          <div className="min-h-screen flex flex-col justify-center py-12 px-4 bg-gradient-to-br from-zinc-900 to-black relative">
            {" "}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {" "}
              <MysteryBox
                title="Solar System Explorer"
                emoji="🌞"
                description="Journey through our cosmic neighborhood!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-yellow-300 mb-2">
                      🚀 Mission Accomplished!
                    </p>
                    <p>
                      You discovered that <strong>Jupiter is so big</strong>{" "}
                      that all other planets could fit inside it! 🌌
                    </p>
                    <p className="text-sm mt-2">
                      Did you know Jupiter has 95 moons? That&apos;s a busy
                      planet!
                    </p>
                  </div>
                }
                boxColorGradient="from-yellow-600 to-orange-700"
                boxBorderColor="border-amber-400"
              />
              <MysteryBox
                title="Astronaut Adventure"
                emoji="👨‍🚀"
                description="Experience life as a space explorer!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-blue-300 mb-2">
                      👨‍🚀 Astronaut Gear Unlocked!
                    </p>
                    <p>
                      You found a <strong>spacesuit helmet</strong> that
                      protects astronauts in space! 🪐
                    </p>
                    <p className="text-sm mt-2">
                      In space, astronauts grow about 2 inches taller because
                      there&apos;s no gravity pushing down on their spines!
                    </p>
                  </div>
                }
                boxColorGradient="from-blue-600 to-indigo-700"
                boxBorderColor="border-cyan-400"
              />
              <MysteryBox
                title="Mars Mission"
                emoji="♂️"
                description="Explore the mysterious Red Planet!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-red-300 mb-2">
                      ♂️ Mars Rover Activated!
                    </p>
                    <p>
                      You discovered that{" "}
                      <strong>Mars has the tallest volcano</strong> in our solar
                      system - Olympus Mons! 🏔️
                    </p>
                    <p className="text-sm mt-2">
                      It&apos;s 3 times taller than Mount Everest and would
                      cover the entire state of Arizona!
                    </p>
                  </div>
                }
                boxColorGradient="from-red-600 to-pink-700"
                boxBorderColor="border-rose-400"
              />
              <MysteryBox
                title="Moon Mysteries"
                emoji="🌙"
                description="Discover secrets of Earth's closest neighbor!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-300 mb-2">
                      🌙 Lunar Discovery!
                    </p>
                    <p>
                      You found <strong>moon rocks</strong> that are older than
                      any rocks on Earth! 💎
                    </p>
                    <p className="text-sm mt-2">
                      The Moon is slowly moving away from Earth at about 1.5
                      inches per year!
                    </p>
                  </div>
                }
                boxColorGradient="from-gray-600 to-slate-700"
                boxBorderColor="border-slate-400"
              />
              <MysteryBox
                title="Black Hole Hunter"
                emoji="🕳️"
                description="Dive into the mysteries of cosmic vacuum cleaners!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-purple-300 mb-2">
                      🕳️ Cosmic Secret Revealed!
                    </p>
                    <p>
                      You discovered that <strong>time slows down</strong> near
                      black holes! ⏰
                    </p>
                    <p className="text-sm mt-2">
                      If you could watch someone fall into a black hole, they
                      would appear to freeze at the edge forever!
                    </p>
                  </div>
                }
                boxColorGradient="from-purple-600 to-fuchsia-700"
                boxBorderColor="border-purple-400"
              />
              <MysteryBox
                title="Space Station Life"
                emoji="🛰️"
                description="Experience daily life in zero gravity!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-300 mb-2">
                      🛰️ Space Station Access!
                    </p>
                    <p>
                      You unlocked a <strong>zero-gravity sleeping bag</strong>{" "}
                      used by astronauts! 🛌
                    </p>
                    <p className="text-sm mt-2">
                      Astronauts on the ISS see 16 sunrises and sunsets every
                      day as they orbit Earth!
                    </p>
                  </div>
                }
                boxColorGradient="from-green-600 to-emerald-700"
                boxBorderColor="border-lime-400"
              />
              <MysteryBox
                title="Galaxy Gazer"
                emoji="🌌"
                description="Explore billions of stars and galaxies!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-indigo-300 mb-2">
                      🌌 Galactic Discovery!
                    </p>
                    <p>
                      You found that our <strong>Milky Way galaxy</strong> has
                      100-400 billion stars! ✨
                    </p>
                    <p className="text-sm mt-2">
                      It would take 100,000 years to travel across our galaxy at
                      the speed of light!
                    </p>
                  </div>
                }
                boxColorGradient="from-indigo-600 to-blue-700"
                boxBorderColor="border-blue-400"
              />
              <MysteryBox
                title="Asteroid Miner"
                emoji="💫"
                description="Hunt for space rocks and cosmic treasures!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-orange-300 mb-2">
                      💫 Space Treasure Found!
                    </p>
                    <p>
                      You discovered an <strong>asteroid made of metal</strong>{" "}
                      worth more than Earth&apos;s economy! 💰
                    </p>
                    <p className="text-sm mt-2">
                      Some asteroids are so valuable that scientists call them
                      &apos;flying gold mines&apos;!
                    </p>
                  </div>
                }
                boxColorGradient="from-orange-600 to-red-700"
                boxBorderColor="border-orange-400"
              />
              <MysteryBox
                title="Solar Flare Watcher"
                emoji="🔥"
                description="Witness the Sun's incredible power!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-yellow-400 mb-2">
                      🔥 Solar Power Unlocked!
                    </p>
                    <p>
                      You captured the energy of a <strong>solar flare</strong>{" "}
                      that could power Earth for millions of years! ⚡
                    </p>
                    <p className="text-sm mt-2">
                      Solar flares are enormous explosions on the Sun that can
                      be seen from other stars!
                    </p>
                  </div>
                }
                boxColorGradient="from-yellow-500 to-red-600"
                boxBorderColor="border-yellow-300"
              />
              <MysteryBox
                title="First Human in Space"
                emoji="👨‍🚀"
                description="Learn about Yuri Gagarin's historic journey!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-blue-300 mb-2">
                      👨‍🚀 History Made!
                    </p>
                    <p>
                      You discovered that <strong>Yuri Gagarin</strong> was the
                      first human in space in 1961! 🚀
                    </p>
                    <p className="text-sm mt-2">
                      His famous words: "I see Earth! It is so beautiful!"
                    </p>
                  </div>
                }
                boxColorGradient="from-blue-600 to-indigo-700"
                boxBorderColor="border-cyan-400"
              />
              <MysteryBox
                title="Moon Landing"
                emoji="🌕"
                description="Relive humanity's greatest adventure!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-300 mb-2">
                      🌕 One Small Step!
                    </p>
                    <p>
                      You found Neil Armstrong&apos;s{" "}
                      <strong>first footprint on the Moon</strong> from 1969! 👣
                    </p>
                    <p className="text-sm mt-2">
                      That footprint will last for millions of years because
                      there&apos;s no wind or rain on the Moon!
                    </p>
                  </div>
                }
                boxColorGradient="from-gray-600 to-slate-700"
                boxBorderColor="border-slate-400"
              />
              <MysteryBox
                title="Space Food Scientist"
                emoji="🍽️"
                description="Discover what astronauts eat in space!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-300 mb-2">
                      🍽️ Space Kitchen!
                    </p>
                    <p>
                      You invented <strong>space ice cream</strong> that
                      doesn&apos;t melt in zero gravity! 🍦
                    </p>
                    <p className="text-sm mt-2">
                      Astronauts use magnetic spoons and drink from sealed bags
                      to keep food from floating away!
                    </p>
                  </div>
                }
                boxColorGradient="from-green-600 to-emerald-700"
                boxBorderColor="border-lime-400"
              />
              <MysteryBox
                title="Space Suit Designer"
                emoji="🧑‍🔬"
                description="Create the ultimate space exploration outfit!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-white mb-2">
                      🧑‍🔬 High-Tech Fashion!
                    </p>
                    <p>
                      You designed a <strong>smart spacesuit</strong> that can
                      repair itself! 👕
                    </p>
                    <p className="text-sm mt-2">
                      Real spacesuits have 14 layers of material to protect
                      astronauts from extreme temperatures and space radiation!
                    </p>
                  </div>
                }
                boxColorGradient="from-white to-gray-400"
                boxBorderColor="border-gray-300"
              />
              <MysteryBox
                title="Mars Colony Planner"
                emoji="🏗️"
                description="Design the first human city on another planet!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-red-300 mb-2">
                      🏗️ Future City!
                    </p>
                    <p>
                      You planned a <strong>Mars colony</strong> with domes that
                      protect humans from radiation! 🏠
                    </p>
                    <p className="text-sm mt-2">
                      The first Mars settlers might live in underground tunnels
                      to stay safe from cosmic rays!
                    </p>
                  </div>
                }
                boxColorGradient="from-red-600 to-orange-700"
                boxBorderColor="border-red-400"
              />
              <MysteryBox
                title="Space Doctor"
                emoji="🩺"
                description="Learn how to keep astronauts healthy in space!"
                mysteryContent={
                  <div className="text-center">
                    <p className="text-lg font-bold text-pink-300 mb-2">
                      🩺 Space Medicine!
                    </p>
                    <p>
                      You discovered how{" "}
                      <strong>zero gravity affects the human body</strong>! 💪
                    </p>
                    <p className="text-sm mt-2">
                      Astronauts exercise 2 hours daily to prevent muscle and
                      bone loss in space!
                    </p>
                  </div>
                }
                boxColorGradient="from-pink-600 to-rose-700"
                boxBorderColor="border-pink-400"
              />
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
                        Jupiter has 95 moons - tha&apos;s a busy planet!
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
