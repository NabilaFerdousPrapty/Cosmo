"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import GameLayout from "../../../../components/games/GameLayout";

interface CMEParticle {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
}

const PLAYER_SIZE = 15; // Increased player size for better visibility
const GAME_WIDTH = 800; // Original canvas width
const GAME_HEIGHT = 500; // Original canvas height

export default function CMEDodger() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerX = useRef(50); // Player position as a percentage of width
  const particles = useRef<CMEParticle[]>([]);
  const animationRef = useRef<number | null>(null);

  const startGame = () => {
    setScore(0);
    setLives(3);
    setIsPlaying(true);
    setGameOver(false);
    particles.current = [];
    playerX.current = 50; // Reset player position
  };

  // Handle player movement
  const movePlayer = useCallback(
    (direction: "left" | "right") => {
      if (!isPlaying) return;
      const moveAmount = 5; // Smaller move amount for smoother control
      playerX.current =
        direction === "left"
          ? Math.max(0, playerX.current - moveAmount)
          : Math.min(100, playerX.current + moveAmount);
    },
    [isPlaying]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions dynamically
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initial resize

    if (!isPlaying) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") movePlayer("left");
      if (e.key === "ArrowRight") movePlayer("right");
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault(); // Prevent scrolling
      const touchX = e.touches[0].clientX;
      const canvasRect = canvas.getBoundingClientRect();
      const relativeX = ((touchX - canvasRect.left) / canvasRect.width) * 100; // Touch position as a percentage

      // Determine movement based on touch location relative to player
      if (relativeX < playerX.current) {
        movePlayer("left");
      } else {
        movePlayer("right");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 50; i++) {
        const x = (i * 13) % canvas.width;
        const y = (i * 7) % canvas.height;
        ctx.fillRect(x, y, 1, 1);
      }

      // Spawn new particles
      const spawnRate = 0.05 + score / 5000; // Increase spawn rate with score
      if (Math.random() < spawnRate) {
        particles.current.push({
          id: Date.now(),
          x: Math.random() * 100, // X position as percentage
          y: 0,
          speed: 1.5 + Math.random() * 2 + score / 1000, // Increase speed with score
          size: 10 + Math.random() * 20,
        });
      }

      // Update and draw particles
      particles.current = particles.current.filter((particle) => {
        // Convert particle Y position to canvas coordinates for accurate movement
        particle.y += particle.speed * (canvas.height / GAME_HEIGHT);

        // Calculate collision using actual pixel coordinates
        const playerCanvasX = (playerX.current / 100) * canvas.width;
        const playerCanvasY = (90 / 100) * canvas.height; // Player fixed Y position

        const particleCanvasX = (particle.x / 100) * canvas.width;
        const particleCanvasY = (particle.y / 100) * canvas.height;

        const distance = Math.sqrt(
          Math.pow(particleCanvasX - playerCanvasX, 2) +
            Math.pow(particleCanvasY - playerCanvasY, 2)
        );

        if (distance < particle.size / 2 + PLAYER_SIZE / 2) {
          setLives((prev) => prev - 1);
          return false; // Remove particle on collision
        }

        // Draw particle
        const gradient = ctx.createRadialGradient(
          particleCanvasX,
          particleCanvasY,
          0,
          particleCanvasX,
          particleCanvasY,
          particle.size
        );
        gradient.addColorStop(0, "#ff4444");
        gradient.addColorStop(1, "#ff0000");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(
          particleCanvasX,
          particleCanvasY,
          particle.size / 2,
          0,
          2 * Math.PI
        );
        ctx.fill();

        // Remove particles that go off screen (past 100% of height)
        return particle.y < 110;
      });

      // Draw player spacecraft
      ctx.fillStyle = "#00aaff";
      ctx.beginPath();
      // Adjust player drawing based on canvas dimensions
      const playerRenderX = (playerX.current / 100) * canvas.width;
      const playerRenderY = (90 / 100) * canvas.height;
      const playerWidth = (PLAYER_SIZE / 100) * canvas.width; // Scale player width
      const playerHeight = (PLAYER_SIZE / 100) * canvas.height; // Scale player height

      ctx.moveTo(playerRenderX, playerRenderY);
      ctx.lineTo(playerRenderX - playerWidth / 2, playerRenderY + playerHeight);
      ctx.lineTo(playerRenderX + playerWidth / 2, playerRenderY + playerHeight);
      ctx.closePath();
      ctx.fill();

      // Update score (only if game is active)
      if (isPlaying) {
        setScore((prev) => prev + 1);
      }

      // Check game over
      if (lives <= 0) {
        setGameOver(true);
        setIsPlaying(false);
        return;
      }

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      canvas.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, lives, movePlayer]);

  return (
    <GameLayout
      title="CME Dodger"
      description="Navigate through coronal mass ejections in deep space"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Game Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-blue-400">{score}</div>
            <div className="text-sm text-gray-400">Distance</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-red-400">
              {"❤️".repeat(lives)}
            </div>
            <div className="text-sm text-gray-400">Lives</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="text-2xl font-bold text-yellow-400">
              {Math.floor(score / 1000)} {/* Adjusted level calculation */}
            </div>
            <div className="text-sm text-gray-400">Level</div>
          </div>
        </div>

        {/* Game Canvas */}
        <div className="bg-black rounded-2xl p-1 border-2 border-gray-800 mb-6 aspect-video">
          <canvas
            ref={canvasRef}
            className="w-full h-full rounded-xl" // Canvas fills its parent div
          />
        </div>

        {/* Mobile Controls Overlay */}
        {isPlaying && (
          <div className="md:hidden absolute bottom-0 left-0 right-0 p-4">
            <div className="flex justify-around gap-4">
              <button
                onTouchStart={() => movePlayer("left")}
                className="flex-1 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg text-xl transition-colors active:scale-95"
              >
                ← Left
              </button>
              <button
                onTouchStart={() => movePlayer("right")}
                className="flex-1 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg text-xl transition-colors active:scale-95"
              >
                Right →
              </button>
            </div>
          </div>
        )}

        {/* Controls / Game Over */}
        {!isPlaying && !gameOver && (
          <div className="text-center mb-6">
            <button
              onClick={startGame}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-xl transition-colors"
            >
              🚀 Start Mission
            </button>
          </div>
        )}

        {gameOver && (
          <div className="text-center mb-6">
            <div className="bg-red-900 bg-opacity-50 rounded-2xl p-6 border border-red-700 mb-4">
              <div className="text-4xl mb-2">💥 Mission Failed</div>
              <div className="text-2xl text-yellow-400 mb-2">
                Final Score: {score}
              </div>
              <p className="text-gray-400">
                Your spacecraft was destroyed by CMEs
              </p>
            </div>
            <button
              onClick={startGame}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xl transition-colors"
            >
              🔄 Try Again
            </button>
          </div>
        )}

        {/* Game Instructions */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-white">
            Mission Briefing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">
                🎮 Controls
              </h4>
              <ul className="space-y-1">
                <li>• ← → Arrow Keys (Desktop)</li>
                <li>• Tap left/right side of screen (Mobile)</li>
                <li>• Avoid red CME particles</li>
                <li>• Survive as long as possible</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">
                🌌 About CMEs
              </h4>
              <ul className="space-y-1">
                <li>• Coronal Mass Ejections are solar explosions</li>
                <li>• Travel at 500-3000 km/s</li>
                <li>• Can damage satellites and power grids</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
