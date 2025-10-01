"use client";

import Link from "next/link";

export default function Login() {
  return (
    <section className="min-h-screen bg-black py-16 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="text-6xl mb-6 animate-bounce">🔐</div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Coming Soon! 🚀
          </h1>

          {/* Description */}
          <div className="bg-gray-900/50 rounded-3xl p-6 md:p-8 border-2 border-yellow-500/50 backdrop-blur-sm mb-8">
            <p className="text-xl md:text-2xl text-yellow-300 font-semibold mb-4">
              We&apos;re Building Something Amazing!
            </p>
            <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
              Get ready for personalized space adventures! We&apos;re creating
              custom stories, games, riddles, and mystery boxes just for you.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3 text-green-400">
                <span className="text-2xl">📚</span>
                <span className="text-white">Personalized Stories</span>
              </div>
              <div className="flex items-center gap-3 text-blue-400">
                <span className="text-2xl">🎮</span>
                <span className="text-white">Custom Games</span>
              </div>
              <div className="flex items-center gap-3 text-purple-400">
                <span className="text-2xl">🤔</span>
                <span className="text-white">Smart Riddles</span>
              </div>
              <div className="flex items-center gap-3 text-pink-400">
                <span className="text-2xl">🎁</span>
                <span className="text-white">Special Mystery Boxes</span>
              </div>
            </div>
          </div>

          {/* Countdown/Stay Tuned */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border-2 border-purple-500/30">
            <div className="text-3xl mb-3">⏳</div>
            <h3 className="text-2xl font-bold text-white mb-2">Stay Tuned!</h3>
            <p className="text-gray-300 text-lg">
              We&apos;re working hard to bring you the best space learning
              experience.
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl text-lg hover:scale-105 transition-transform hover:shadow-lg hover:shadow-cyan-500/25"
            >
              ← Back to Sunflare
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-twinkle {
          animation: twinkle 2s infinite;
        }
      `}</style>
    </section>
  );
}
