"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import GameLayout from "../../../../components/games/GameLayout";

interface CMEParticle {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  emoji: string;
}

const PLAYER_SIZE = 60; // Large player for easy tapping
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

export default function CMEDodger() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerX = useRef(50);
  const particles = useRef<CMEParticle[]>([]);
  const animationRef = useRef<number | null>(null);

  const particleEmojis = ["☀️", "💥", "🔥", "⭐", "🌪️"];

  const startGame = () => {
    setScore(0);
    setLives(3);
    setLevel(1);
    setIsPlaying(true);
    setGameOver(false);
    particles.current = [];
    playerX.current = 50;
  };

  // Simple touch movement - just set position
  const movePlayer = useCallback(
    (touchX: number) => {
      if (!isPlaying) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const canvasRect = canvas.getBoundingClientRect();
      const relativeX = ((touchX - canvasRect.left) / canvasRect.width) * 100;

      // Keep player within bounds
      playerX.current = Math.max(10, Math.min(90, relativeX));
    },
    [isPlaying]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      const isMobile = window.innerWidth < 768; // Check if mobile
      canvas.width = canvas.offsetWidth;
      // Increase height for mobile devices
      canvas.height = isMobile ? 500 : 400; // 500px on mobile, 400px on desktop
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    if (!isPlaying) return;

    // Touch and mouse controls
    const handleInput = (clientX: number) => {
      movePlayer(clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleInput(e.touches[0].clientX);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleInput(e.clientX);
    };

    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("mousemove", handleMouseMove);

    const gameLoop = () => {
      // Clear canvas with space background
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 30; i++) {
        const x = (i * 17) % canvas.width;
        const y = (i * 11) % canvas.height;
        ctx.fillRect(x, y, 2, 2);
      }

      // Spawn new particles based on level
      const spawnRate = 0.03 + level * 0.01;
      if (Math.random() < spawnRate) {
        particles.current.push({
          id: Date.now(),
          x: Math.random() * 100,
          y: -10,
          speed: 1 + Math.random() * 2 + level * 0.5,
          // Reduced particle size: from 30-70 to 20-40
          size: 20 + Math.random() * 20, // Smaller particles: 20-40px instead of 30-70px
          emoji:
            particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
        });
      }

      // Update and draw particles
      particles.current = particles.current.filter((particle) => {
        particle.y += particle.speed;

        // Calculate positions
        const playerCanvasX = (playerX.current / 100) * canvas.width;
        const playerCanvasY = canvas.height - 80;
        const particleCanvasX = (particle.x / 100) * canvas.width;
        const particleCanvasY = (particle.y / 100) * canvas.height;

        const distance = Math.sqrt(
          Math.pow(particleCanvasX - playerCanvasX, 2) +
            Math.pow(particleCanvasY - playerCanvasY, 2)
        );

        // Check collision (with smaller particles)
        if (distance < particle.size / 2 + PLAYER_SIZE / 2) {
          setLives((prev) => {
            const newLives = prev - 1;
            if (newLives <= 0) {
              setGameOver(true);
              setIsPlaying(false);
            }
            return newLives;
          });
          return false;
        }

        // Draw particle as emoji with glow (smaller size)
        ctx.font = `${particle.size}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Glow effect
        ctx.shadowColor = "#ff4444";
        ctx.shadowBlur = 10; // Slightly reduced glow for smaller particles
        ctx.fillText(particle.emoji, particleCanvasX, particleCanvasY);
        ctx.shadowBlur = 0;

        // Remove particles that go off screen
        return particle.y < 110;
      });

      // Draw player spacecraft (large and clear)
      const playerCanvasX = (playerX.current / 100) * canvas.width;
      const playerCanvasY = canvas.height - 80;

      // Player as rocket emoji
      ctx.font = `${PLAYER_SIZE}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("🚀", playerCanvasX, playerCanvasY);

      // Player shield/glow
      ctx.strokeStyle = lives > 1 ? "#00ff00" : "#ff4444";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(
        playerCanvasX,
        playerCanvasY,
        PLAYER_SIZE / 2 + 5,
        0,
        2 * Math.PI
      );
      ctx.stroke();

      // Update score and level
      if (isPlaying) {
        setScore((prev) => {
          const newScore = prev + 1;
          // Increase level every 500 points
          setLevel(Math.floor(newScore / 500) + 1);
          return newScore;
        });
      }

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);

    return () => {
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, level, movePlayer, lives]);

  return (
    <GameLayout
      title="Solar Storm Dodger"
      description="Dodge solar particles and protect your spacecraft!"
    >
      <div className="max-w-4xl mx-auto p-4">
        {/* Game Stats - Simple and Colorful */}
        <div className="grid grid-cols-3 gap-3 mb-6 text-center">
          <div className="bg-blue-900/50 rounded-2xl p-3 border-2 border-blue-500">
            <div className="text-xl font-bold text-yellow-300">{score}</div>
            <div className="text-xs text-blue-200">Score</div>
          </div>
          <div className="bg-red-900/50 rounded-2xl p-3 border-2 border-red-500">
            <div className="text-xl font-bold text-red-300">
              {"❤️".repeat(lives)}
            </div>
            <div className="text-xs text-red-200">Lives</div>
          </div>
          <div className="bg-purple-900/50 rounded-2xl p-3 border-2 border-purple-500">
            <div className="text-xl font-bold text-purple-300">
              Level {level}
            </div>
            <div className="text-xs text-purple-200">Difficulty</div>
          </div>
        </div>

        {/* Game Canvas with increased mobile height */}
        <div className="bg-black rounded-3xl p-2 border-4 border-gray-700 mb-6 relative">
          {/* Mobile: min-h-[500px], Desktop: min-h-[400px] */}
          <div className="min-h-[400px] md:min-h-[300px] lg:min-h-[400px]">
            <canvas
              ref={canvasRef}
              className="w-full h-full rounded-2xl"
              style={{ minHeight: "400px" }}
            />
          </div>

          {/* Touch Instruction Overlay */}
          {isPlaying && (
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <div className="text-white text-sm bg-black/50 px-4 py-2 rounded-full inline-block">
                👆 Move your finger to dodge!
              </div>
            </div>
          )}
        </div>

        {/* Game Controls */}
        {!isPlaying && !gameOver && (
          <div className="text-center mb-6">
            <button
              onClick={startGame}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl text-xl transition-colors hover:scale-105 active:scale-95 animate-bounce"
            >
              🚀 Start Space Adventure
            </button>
          </div>
        )}

        {/* Game Over Screen */}
        {gameOver && (
          <div className="text-center mb-6">
            <div className="bg-red-900/80 rounded-3xl p-6 border-4 border-red-500 mb-4">
              <div className="text-4xl mb-3">💥</div>
              <div className="text-2xl font-bold text-yellow-300 mb-2">
                Spacecraft Damaged!
              </div>
              <div className="text-3xl text-green-400 mb-2">Score: {score}</div>
              <div className="text-white">Level Reached: {level}</div>
              <p className="text-gray-300 mt-2">
                {score > 1000
                  ? "🌟 Amazing dodging skills!"
                  : "Great job protecting your spacecraft!"}
              </p>
            </div>
            <button
              onClick={startGame}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-xl transition-colors hover:scale-105 active:scale-95"
            >
              🔄 Play Again
            </button>
          </div>
        )}

        {/* Simple Instructions */}
        <div className="bg-gray-900/80 rounded-3xl p-4 border-4 border-yellow-500">
          <h3 className="text-xl font-bold text-yellow-300 text-center mb-4">
            How to Play 🌟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <div className="text-3xl mb-2">👆</div>
              <p className="text-gray-300">
                <strong>Move your finger</strong> to dodge solar particles
              </p>
              <p className="text-green-300 text-xs mt-2">
                Touch anywhere on the screen!
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-gray-300">
                <strong>Protect your spacecraft</strong> with {lives} lives
              </p>
              <p className="text-red-300 text-xs mt-2">
                Avoid the glowing space particles!
              </p>
            </div>
          </div>
        </div>

        {/* Particle Types Guide */}
        <div className="bg-gray-900/80 rounded-3xl p-4 border-4 border-purple-500 mt-4">
          <h4 className="text-lg font-bold text-purple-300 text-center mb-3">
            Space Particles to Dodge
          </h4>
          <div className="grid grid-cols-5 gap-2 text-center">
            {particleEmojis.map((emoji, index) => (
              <div key={index} className="text-2xl animate-pulse">
                {" "}
                {/* Slightly smaller in guide too */}
                {emoji}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-300 text-sm mt-2">
            These are solar particles from the Sun - dodge them all!
          </p>
        </div>

        {/* Educational Fact */}
        <div className="bg-gray-900/80 rounded-3xl p-4 border-4 border-blue-500 mt-4">
          <h4 className="text-lg font-bold text-blue-300 text-center mb-2">
            🌞 Fun Space Fact
          </h4>
          <p className="text-center text-gray-300 text-sm">
            The Sun sends out particles called &quot;solar wind&quot; that can
            create beautiful auroras but can also be dangerous for spacecraft!
          </p>
        </div>
      </div>
    </GameLayout>
  );
}
