"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Particles } from "@/components/ui/particles";
import { MysteryBox } from "@/components/FunAndLearn/MysteryBox";
import { funFacts } from "./data";
import { FunFactCard } from "@/components/FunAndLearn/FunFactCard";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { RiddleCard } from "@/components/FunAndLearn/RiddleCard";
// Types

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
const MySwal = withReactContent(Swal);

// Main Component
export default function FunAndLearn() {
  const [activeTab, setActiveTab] = useState<"riddles" | "facts" | "discover">(
    "riddles"
  );
  const [solvedRiddles, setSolvedRiddles] = useState<number[]>([]);

  // Sample data

  interface Riddle {
    id: number;
    question: string;
    hint: string;
    answer: string;
    explanation: string;
    image: string; // URL to a relevant image/icon
    category: "space" | "earth" | "animals";
    colorPalette: {
      // New: for card styling
      front: { from: string; to: string }; // Tailwind class parts, e.g., "from-blue-500", "to-blue-600"
      back: { from: string; to: string };
      border: string; // Tailwind class, e.g., "border-cyan-400"
      text: string; // Tailwind class, e.g., "text-blue-100"
      emoji: string; // Emoji for this riddle's general theme
    };
  }

  const riddles: Riddle[] = [
    {
      id: 1,
      question:
        "I'm a giant ball of gas that gives you light and heat. What am I?",
      hint: "I'm the center of our solar system!",
      answer: "Sun",
      explanation:
        "The Sun is a star made of hot gases that provides light and heat to all planets in our solar system!",
      image: "/riddles/r1.png",
      category: "space",
      colorPalette: {
        front: { from: "from-neutral-700", to: "to-slate-800" },
        back: { from: "from-gray-600", to: "to-black" },
        border: "border-yellow-400",
        text: "text-white",
        emoji: "☀️",
      },
    },
    {
      id: 2,
      question: "I twinkle at night but I’m not a star, what am I?",
      hint: "You can find me in the night sky, but I'm not as far as stars!",
      answer: "planet",
      explanation:
        "Planets like Venus and Mars often appear as twinkling objects in the night sky, but they're closer to Earth than stars.",
      image: "/riddles/r2.png",
      category: "space",
      colorPalette: {
        front: { from: "from-gray-700", to: "to-zinc-800" },
        back: { from: "from-black", to: "to-neutral-700" },
        border: "border-blue-400",
        text: "text-white",
        emoji: "🪐",
      },
    },
    {
      id: 3,
      question: "I have a tail but I'm not an animal. What am I?",
      hint: "I might appear when I’m close to the Sun!",
      answer: "comet",
      explanation:
        "Comets have tails made of dust and gas that glow when they approach the Sun.",
      image: "/riddles/r3.png",
      category: "space",
      colorPalette: {
        front: { from: "from-gray-700", to: "to-gray-900" },
        back: { from: "from-zinc-600", to: "to-zinc-700" },
        border: "border-gray-500",
        text: "text-white",
        emoji: "☄️",
      },
    },
    {
      id: 4,
      question: "I am a giant red spot, spinning on a gas giant. What am I?",
      hint: "I'm located on the largest planet in our solar system!",
      answer: "The Great Red Spot (on Jupiter)",
      explanation:
        "The Great Red Spot is a massive storm on Jupiter, and it has been raging for centuries!",
      image: "/riddles/r4.png",
      category: "space",
      colorPalette: {
        front: { from: "from-zinc-700", to: "to-slate-800" },
        back: { from: "from-black", to: "to-gray-700" },
        border: "border-rose-400",
        text: "text-white",
        emoji: "🌀",
      },
    },
    {
      id: 5,
      question: "I’m not a moon, but I have moons. What am I?",
      hint: "I’m the fourth planet from the Sun!",
      answer: "Mars",
      explanation:
        "Mars is a planet with two small moons, Phobos and Deimos, orbiting around it.",
      image: "/riddles/r5.png",
      category: "space",
      colorPalette: {
        front: { from: "from-slate-700", to: "to-neutral-800" },
        back: { from: "from-black", to: "to-gray-700" },
        border: "border-orange-400",
        text: "text-white",
        emoji: "🔴",
      },
    },
    {
      id: 6,
      question: "I have rings but I am not a jeweler. What am I?",
      hint: "I am the second-largest planet in our solar system!",
      answer: "Saturn",
      explanation:
        "Saturn is famous for its beautiful and vast ring system made of ice and rock.",
      image: "/riddles/r6.png",
      category: "space",
      colorPalette: {
        front: { from: "from-zinc-700", to: "to-gray-800" },
        back: { from: "from-gray-600", to: "to-neutral-700" },
        border: "border-amber-400",
        text: "text-white",
        emoji: "🪐",
      },
    },
    {
      id: 7,
      question: "I’m the largest planet in our solar system. What am I?",
      hint: "I have a big red spot on me!",
      answer: "Jupiter",
      explanation:
        "Jupiter is the largest planet in our solar system and is known for its Great Red Spot and its many moons.",
      image: "/riddles/r7.png",
      category: "space",
      colorPalette: {
        front: { from: "from-zinc-700", to: "to-gray-800" },
        back: { from: "from-slate-600", to: "to-neutral-700" },
        border: "border-red-400",
        text: "text-white",
        emoji: "🔭",
      },
    },
    {
      id: 8,
      question: "I’m a satellite of Earth. What am I?",
      hint: "I help illuminate the night sky!",
      answer: "Moon",
      explanation:
        "The Moon is Earth's only natural satellite and it reflects sunlight to light up the night sky.",
      image: "/riddles/r8.png",
      category: "space",
      colorPalette: {
        front: { from: "from-zinc-700", to: "to-gray-800" },
        back: { from: "from-slate-600", to: "to-black" },
        border: "border-sky-400",
        text: "text-white",
        emoji: "🌕",
      },
    },
    {
      id: 9,
      question: "I’m an asteroid belt between two planets. What am I?",
      hint: "I lie between Mars and Jupiter!",
      answer: "The Asteroid Belt",
      explanation:
        "The Asteroid Belt is a region filled with millions of asteroids, located between the orbits of Mars and Jupiter.",
      image: "/riddles/r9.png",
      category: "space",
      colorPalette: {
        front: { from: "from-gray-700", to: "to-stone-800" },
        back: { from: "from-slate-600", to: "to-gray-700" },
        border: "border-gray-500",
        text: "text-white",
        emoji: "☄️",
      },
    },
    {
      id: 10,
      question: "I’m a dwarf planet located beyond Neptune. What am I?",
      hint: "I share my name with a Disney character!",
      answer: "Pluto",
      explanation:
        "Pluto is a dwarf planet in the outer reaches of the solar system and was once considered the ninth planet.",
      image: "/riddles/r9.png",
      category: "space",
      colorPalette: {
        front: { from: "from-stone-700", to: "to-gray-800" },
        back: { from: "from-slate-600", to: "to-black" },
        border: "border-fuchsia-400",
        text: "text-white",
        emoji: "🌌",
      },
    },
  ];

  // Simulate loading solved riddles from localStorage or API
  useEffect(() => {
    const savedSolved = localStorage.getItem("solvedRiddles");
    if (savedSolved) {
      setSolvedRiddles(JSON.parse(savedSolved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("solvedRiddles", JSON.stringify(solvedRiddles));
    if (solvedRiddles.length > 0 && solvedRiddles.length === riddles.length) {
      // All riddles solved, trigger celebration!
      MySwal.fire({
        title: (
          <span className="font-display text-5xl text-yellow-500 animate-pulse">
            🌟 RIDDLE MASTER! 🌟
          </span>
        ),
        html: (
          <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-40 h-40 mb-4 animate-spin-slow">
              <Image
                src="/images/confetti-star.png"
                alt="Confetti Star"
                layout="fill"
                objectFit="contain"
              />{" "}
              {/* Make sure you have this image */}
            </div>
            <h3 className="font-story-text text-2xl text-gray-700 mb-2">
              You&apos;ve solved all the riddles! Amazing work!
            </h3>
            <p className="text-lg text-gray-600">
              Your brain is super strong! Keep exploring!
            </p>
          </div>
        ),
        imageUrl: "/images/trophy.png", // Example: custom trophy image for the alert
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Trophy",
        background: "#fff url('/images/celebration-bg.png')", // Example: confetti background
        confirmButtonText: "Yay!",
        confirmButtonColor: "#FFD700", // Gold button
        customClass: {
          popup: "rounded-3xl shadow-xl border-4 border-lime-400",
          title: "sweet-alert-title",
          htmlContainer: "sweet-alert-html-container",
          confirmButton: "font-bold text-gray-800",
        },
        buttonsStyling: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    }
  }, [solvedRiddles]);

  const handleRiddleReveal = (riddleId: number) => {
    setSolvedRiddles((prevSolved) => {
      if (!prevSolved.includes(riddleId)) {
        return [...prevSolved, riddleId];
      }
      return prevSolved;
    });
  };
  // Define tab type to avoid 'any'
  type TabType = "riddles" | "facts" | "discover";

  const tabs: { id: TabType; label: string; emoji: string }[] = [
    { id: "riddles", label: "🧠 Brain Teasers", emoji: "🤔" },
    { id: "facts", label: "✨ Amazing Facts", emoji: "🌟" },
    { id: "discover", label: "🎁 Mystery Boxes", emoji: "🔍" },
  ];

  return (
    <div className="min-h-screen  bg-black text-white relative overflow-hidden">
      <StarBackground />
      <Particles className="absolute inset-0 z-0" />

      {/* Header */}
      <div className="relative z-10 text-center py-8 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          <AnimatedSun />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-400 bg-clip-text text-transparent">
            Fun & Learn Galaxy!
          </h1>
          <AnimatedSun />
        </div>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
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
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold font-display text-yellow-300 mb-4 drop-shadow-lg">
                Can You Solve These Riddles? 🧩
              </h2>
              <p className="text-blue-200 text-xl font-story-text max-w-2xl mx-auto">
                Test your clever brain with these cosmic challenges!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
              {riddles.map((riddle) => (
                <RiddleCard
                  key={riddle.id}
                  riddle={riddle}
                  onReveal={handleRiddleReveal}
                  isSolved={solvedRiddles.includes(riddle.id)}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-lime-600 bg-opacity-70 inline-block px-8 py-4 rounded-full shadow-lg border-2 border-lime-400">
                <p className="text-white font-bold text-2xl font-display">
                  🎯 Solved: {solvedRiddles.length} of {riddles.length} riddles!
                </p>
                {solvedRiddles.length > 0 &&
                  solvedRiddles.length === riddles.length && (
                    <p className="text-yellow-300 text-lg mt-3 font-story-text animate-pulse">
                      🏆 WOW! You&apos;re a Riddle Master! 🚀
                    </p>
                  )}
              </div>
            </div>
          </div>
        )}

        {/* Facts Section */}
        {activeTab === "facts" && (
          <div className="min-h-screen flex flex-col justify-center py-12 px-4 relative">
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
                Click to discover amazing space secrets!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Solar System Explorer */}
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

              {/* Black Hole Hunter */}
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

              {/* Space Station Life */}
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

              {/* NEW: Sun's Super Power */}
              <MysteryBox
                title="Sun's Super Power"
                emoji="☀️"
                description="Discover the Sun's amazing energy!"
                mysteryContent={
                  <div className="text-center space-y-3">
                    <p className="text-orange-300 font-semibold">
                      Solar Secret Unlocked! 🔆
                    </p>
                    <p className="text-gray-200">
                      You discovered that{" "}
                      <span className="text-red-300 font-bold">
                        sunlight takes 8 minutes
                      </span>{" "}
                      to travel to Earth!
                    </p>
                    <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                      <p className="text-sm text-gray-300">
                        <span className="text-yellow-400">
                          🌞 Science Fact:
                        </span>{" "}
                        The sunlight you see right now left the Sun 8 minutes
                        ago - you&apos;re seeing the Sun as it was in the past!
                      </p>
                    </div>
                  </div>
                }
                boxColorGradient="bg-gradient-to-br from-red-600/20 via-orange-500/20 to-yellow-600/20"
                boxBorderColor="border-orange-500/50"
              />

              {/* NEW: Moon's Magic */}
              <MysteryBox
                title="Moon's Magic"
                emoji="🌙"
                description="Explore our closest space neighbor!"
                mysteryContent={
                  <div className="text-center space-y-3">
                    <p className="text-silver-300 font-semibold">
                      Lunar Discovery! 🌕
                    </p>
                    <p className="text-gray-200">
                      You found out the Moon is{" "}
                      <span className="text-blue-200 font-bold">
                        slowly moving away
                      </span>{" "}
                      from Earth!
                    </p>
                    <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                      <p className="text-sm text-gray-300">
                        <span className="text-purple-400">🌊 Ocean Magic:</span>{" "}
                        The Moon&apos;s gravity makes ocean tides - it&apos;s
                        like the Moon is gently pulling on our oceans!
                      </p>
                    </div>
                  </div>
                }
                boxColorGradient="bg-gradient-to-br from-gray-600/20 via-slate-500/20 to-blue-600/20"
                boxBorderColor="border-slate-400/50"
              />

              {/* NEW: Astronaut Training */}
              <MysteryBox
                title="Astronaut Training"
                emoji="👨‍🚀"
                description="What it takes to be a space explorer!"
                mysteryContent={
                  <div className="text-center space-y-3">
                    <p className="text-white font-semibold">
                      Astronaut Skills Learned! 🚀
                    </p>
                    <p className="text-gray-200">
                      You discovered astronauts{" "}
                      <span className="text-cyan-300 font-bold">
                        grow taller in space
                      </span>{" "}
                      without gravity!
                    </p>
                    <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                      <p className="text-sm text-gray-300">
                        <span className="text-green-400">
                          📏 Height Change:
                        </span>{" "}
                        Astronauts can grow up to 2 inches taller in space, but
                        shrink back on Earth!
                      </p>
                    </div>
                  </div>
                }
                boxColorGradient="bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-teal-600/20"
                boxBorderColor="border-cyan-400/50"
              />

              {/* NEW: Mars Adventure */}
              <MysteryBox
                title="Mars Adventure"
                emoji="🪐"
                description="Visit the Red Planet!"
                mysteryContent={
                  <div className="text-center space-y-3">
                    <p className="text-red-300 font-semibold">
                      Martian Mystery Solved! 🔴
                    </p>
                    <p className="text-gray-200">
                      You learned that a day on Mars is called a{" "}
                      <span className="text-orange-300 font-bold">
                        &quot;sol&quot; and is 24.6 hours
                      </span>{" "}
                      long!
                    </p>
                    <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                      <p className="text-sm text-gray-300">
                        <span className="text-yellow-300">
                          🏜️ Desert Planet:
                        </span>{" "}
                        Mars has the biggest volcano in our solar system -
                        Olympus Mons is 3 times taller than Mount Everest!
                      </p>
                    </div>
                  </div>
                }
                boxColorGradient="bg-gradient-to-br from-red-700/20 via-orange-600/20 to-brown-600/20"
                boxBorderColor="border-red-500/50"
              />

              {/* NEW: Space Weather */}
              <MysteryBox
                title="Space Weather"
                emoji="🌠"
                description="Discover solar storms and auroras!"
                mysteryContent={
                  <div className="text-center space-y-3">
                    <p className="text-pink-300 font-semibold">
                      Northern Lights Secret! 🌈
                    </p>
                    <p className="text-gray-200">
                      You uncovered that{" "}
                      <span className="text-green-300 font-bold">
                        auroras are created when solar particles
                      </span>{" "}
                      hit Earth&apos;s atmosphere!
                    </p>
                    <div className="bg-gray-800/50 p-3 rounded-lg mt-2">
                      <p className="text-sm text-gray-300">
                        <span className="text-purple-400">💫 Light Show:</span>{" "}
                        The beautiful Northern and Southern Lights are
                        Earth&apos;s way of protecting us from the Sun&apos;s
                        energy!
                      </p>
                    </div>
                  </div>
                }
                boxColorGradient="bg-gradient-to-br from-indigo-600/20 via-purple-500/20 to-pink-600/20"
                boxBorderColor="border-indigo-400/50"
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
