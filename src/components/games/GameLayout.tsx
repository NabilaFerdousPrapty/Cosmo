// src/components/games/GameLayout.tsx
"use client";

import { ReactNode } from "react";

interface GameLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function GameLayout({
  title,
  description,
  children,
}: GameLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Game Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
        </header>

        {/* Game Content */}
        <div className="max-w-4xl mx-auto">{children}</div>

        {/* Navigation */}
        <div className="text-center mt-8">
          <a
            href="/games"
            className="inline-flex items-center px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
          >
            ← Back to Games
          </a>
        </div>
      </div>
    </div>
  );
}
