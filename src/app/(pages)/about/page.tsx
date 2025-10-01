import { Particles } from "@/components/ui/particles";
import { Sun } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Particles - make sure it covers the whole page */}
      <Particles className="absolute inset-0 z-0" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-10 py-6 sm:px-6 lg:px-8">
        {/* 1. Hero Section: Our Story */}
        <section className="mb-20 text-center">
          <h1 className="flex items-center justify-center tracking-tight text-transparent  drop-shadow-lg animate-fade-in text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-400 bg-clip-text max-w-3xl mx-auto">
            <Sun className="mr-4 h-12 w-12 sm:h-16 sm:w-16 animate-pulse-slow" />
            Welcome to Sunflare! ☀️ Our Story Begins...
          </h1>
          <p className="mt-6 text-xl text-white sm:text-2xl font-semibold max-w-3xl mx-auto text-center">
            Have you ever looked at the Sun and wondered what amazing things are
            happening up there? At Sunflare, we turn those big questions into
            exciting adventures!
          </p>
          <Link
            href="/games"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-xl font-bold text-white shadow-xl ring-2 ring-transparent transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-blue-600 hover:ring-pink-300 active:scale-95"
          >
            Explore the Flares! ✨
          </Link>
        </section>

        {/* 2. Section: What is Sunflare? */}
        <section className="mb-20 rounded-xl border border-blue-700 bg-blue-950/20 p-8 shadow-2xl backdrop-blur-sm">
          <div className="md:flex md:items-center md:gap-8">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="mb-6 text-4xl font-bold text-blue-300">
                More Than Just a Storybook! 📖
              </h2>
              <p className="mb-4 text-lg text-gray-300 text-justify">
                Sunflare is your secret portal to understanding the incredible
                world of space weather! We&apos;re a digital storybook designed
                especially for curious kids like you. We explore solar storms,
                magnificent flares, and dazzling auroras, breaking down complex
                science into easy-to-understand tales.
              </p>
              <p className="text-lg text-gray-300 text-justify">
                Our mission is to spark wonder and teach you how the Sun&apos;s
                big burps affect our world, from the sky-high journeys of pilots
                to the hard work of farmers and brave astronauts.
              </p>
            </div>
            <div className="md:w-1/2">
              {/* Interactive Space Weather Illustration */}
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden">
                {/* Earth */}
                <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-green-500 shadow-lg shadow-blue-500/30 animate-pulse-slow">
                  <div className="absolute inset-0 rounded-full border-2 border-blue-300/50 animate-ping-slow"></div>
                </div>

                {/* Solar Flares */}
                <div className="absolute right-1/4 top-1/3 w-16 h-4 bg-orange-500 rounded-full animate-pulse">
                  <div className="absolute -top-1 right-0 w-8 h-6 bg-yellow-400 rounded-full blur-sm"></div>
                </div>

                {/* Auroras */}
                <div className="absolute left-1/3 bottom-1/4 w-32 h-3 bg-green-400 rounded-full blur-sm opacity-70 animate-pulse-slow"></div>
                <div className="absolute left-2/5 bottom-1/3 w-28 h-2 bg-pink-500 rounded-full blur-sm opacity-60 animate-pulse"></div>

                {/* Stars */}
                <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
                <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle-delay"></div>
                <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-white rounded-full animate-twinkle"></div>

                <span className="text-gray-400 text-sm z-10 bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                  Space Weather in Action!
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center p-4 rounded-lg bg-blue-800/30 hover:bg-blue-700/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                ✨
              </span>
              <p className="mt-2 text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                Fun Stories
              </p>
              <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Engaging space adventures
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-800/30 hover:bg-blue-700/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                🔬
              </span>
              <p className="mt-2 text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                Easy Science
              </p>
              <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Simplified complex concepts
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-800/30 hover:bg-blue-700/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                🌍
              </span>
              <p className="mt-2 text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                Real-World Links
              </p>
              <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Connect space to Earth
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-800/30 hover:bg-blue-700/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                🎮
              </span>
              <p className="mt-2 text-yellow-300 font-semibold group-hover:text-yellow-200 transition-colors">
                Future Fun
              </p>
              <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Interactive activities coming soon!
              </p>
            </div>
          </div>
        </section>

        {/* 3. Section: Meet the Creators / Our Mission */}
        <section className="mb-20 rounded-xl border border-pink-700 bg-black p-8 shadow-2xl backdrop-blur-sm">
          <h2 className="mb-6 text-center text-4xl font-bold text-pink-300">
            Behind the Sunflare Magic! ✨
          </h2>
          <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Main Team Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                NASA Space Apps Challenge 2025
              </h1>
              <p className="text-xl text-gray-300">
                Team iT3rat0r - RUET ECE 20 Series
              </p>
              <p className="text-lg text-pink-400 mt-2">
                Built with Next.js & TypeScript
              </p>
            </div>

            {/* Prapty - Team Lead */}
            <div className="md:flex md:items-center md:gap-8 md:flex-row-reverse mb-16">
              <div className="mb-8 md:mb-0 md:w-1/2 text-center">
                <div className="mx-auto h-40 w-40 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm overflow-hidden border-4 border-pink-400">
                  <Image
                    src="/team/pr.jpg"
                    alt="Nabila Ferdous Prapty"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl font-semibold text-pink-200">
                  Nabila Ferdous Prapty
                </p>
                <p className="text-gray-400">Website Development & Team Lead</p>
                <p className="text-sm text-gray-500 mt-1">The Sunflare Guide</p>
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-lg text-gray-300 text-justify">
                  Hello! I&apos;m Prapty, the creator behind Sunflare. I believe
                  that science is an amazing adventure, and learning about space
                  shouldn&apos;t be boring! That&apos;s why I created Sunflare –
                  to make the cosmos accessible and exciting for young minds.
                </p>
                <p className="text-lg text-gray-300 text-justify">
                  My goal is to inspire the next generation of scientists,
                  explorers, and stargazers, showing them that the universe is
                  full of fascinating secrets just waiting to be discovered. I
                  hope you have as much fun exploring Sunflare as I had creating
                  it!
                </p>
              </div>
            </div>

            {/* Humaira Tasnim Adiba - Content */}
            <div className="md:flex md:items-center md:gap-8 mb-16">
              <div className="mb-8 md:mb-0 md:w-1/2 text-center">
                <div className="mx-auto h-40 w-40 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm overflow-hidden border-4 border-blue-400">
                  <Image
                    src="/team/ad.jpg"
                    alt="Humaira Tasnim Adiba"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl font-semibold text-blue-200">
                  Humaira Tasnim Adiba
                </p>
                <p className="text-gray-400">Story & Content Creation</p>
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-lg text-gray-300 text-justify">
                  As the content creator for Sunflare, I focus on crafting
                  engaging stories and educational materials that make complex
                  space concepts accessible and exciting for young learners.
                </p>
                <p className="text-lg text-gray-300 text-justify">
                  My passion for storytelling combined with scientific accuracy
                  helps create an immersive learning experience that sparks
                  curiosity and inspires future space explorers.
                </p>
              </div>
            </div>

            {/* Sharika Tasnim - Video Content */}
            <div className="md:flex md:items-center md:gap-8 md:flex-row-reverse">
              <div className="mb-8 md:mb-0 md:w-1/2 text-center">
                <div className="mx-auto h-40 w-40 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm overflow-hidden border-4 border-green-400">
                  <Image
                    src="/team/sh.png"
                    alt="Sharika Tasnim"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl font-semibold text-green-200">
                  Sharika Tasnim
                </p>
                <p className="text-gray-400">Video Content & Media</p>
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-lg text-gray-300 text-justify">
                  I specialize in creating captivating video content that brings
                  the wonders of space to life. Through visual storytelling, I
                  help make astronomical phenomena understandable and engaging.
                </p>
                <p className="text-lg text-gray-300 text-justify">
                  My work involves producing educational videos, animations, and
                  visual media that complement our platform&apos;s mission to
                  inspire young minds about the cosmos.
                </p>
              </div>
            </div>

            {/* Team Footer */}
            <div className="text-center mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                NASA Space Apps Challenge 2025 Submission • RUET ECE 20 Series
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Next.js • TypeScript • Space Education Platform
              </p>
            </div>
          </div>
        </section>

        {/* 4. Section: Why Space Weather Matters */}
        <section className="mb-20 rounded-xl border border-orange-700 bg-black p-8 shadow-2xl backdrop-blur-sm">
          <h2 className="mb-8 text-center text-4xl font-bold text-orange-300">
            Why Care About Sun Burps? 🤔
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-6 rounded-lg bg-black hover:scale-105 transition-transform duration-200 border-2 border-orange-800">
              <span className="text-5xl">🚜</span> {/* Tractor emoji */}
              <h3 className="mt-4 mb-2 text-xl font-semibold text-yellow-100">
                For Farmers
              </h3>
              <p className="text-gray-300">
                Big solar storms can mess with GPS, making it tricky for
                tractors to find their way!
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-black border-orange-800 hover:scale-105 transition-transform duration-200 border-2">
              <span className="text-5xl">✈️</span> {/* Airplane emoji */}
              <h3 className="mt-4 mb-2 text-xl font-semibold text-yellow-100">
                For Pilots
              </h3>
              <p className="text-gray-300 text-justify lg:text-center">
                Auroras are beautiful, but strong space weather can make plane
                radios noisy!
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-black border-orange-800 border-2 hover:scale-105 transition-transform duration-200">
              <span className="text-5xl">👨‍🚀</span> {/* Astronaut emoji */}
              <h3 className="mt-4 mb-2 text-xl font-semibold text-yellow-100">
                For Astronauts
              </h3>
              <p className="text-gray-300 text-justify lg:text-center">
                They&apos;re brave, but need to be protected from space
                radiation during flares!
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-black border-orange-800 border-2 hover:scale-105 transition-transform duration-200">
              <span className="text-5xl">🌟</span> {/* Star emoji */}
              <h3 className="mt-4 mb-2 text-xl font-semibold text-yellow-100 lg:text-center">
                For YOU!
              </h3>
              <p className="text-gray-300 text-justify lg:text-center">
                Ever seen the Northern Lights? Tha&apos;s space weather creating
                a magical show just for us!
              </p>
            </div>
          </div>
        </section>

        {/* 5. Footer CTA */}
        <section className="text-center py-2">
          <p className="text-2xl text-white mb-6">
            Ready for another solar adventure?
          </p>
          <Link
            href="/Stories"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-8 py-4 text-xl font-bold text-white shadow-xl ring-2 ring-transparent transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-teal-600 hover:ring-lime-300 active:scale-95"
          >
            Start Reading Now! 🚀
          </Link>
          <p className="mt-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Sunflare. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
