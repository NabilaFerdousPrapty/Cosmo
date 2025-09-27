"use client";
import { useEffect, useState } from "react";
import {
  getKpIndex,
  getSolarWind,
  getXRayFlux1Day,
  KpIndex,
  SolarWind,
  XRayPoint,
} from "../../../../../lib/swpcApi";

// Fun emojis to represent space weather
const getKpEmoji = (kp: number) => {
  if (kp >= 7) return "🌌⚡ Super Aurora!";
  if (kp >= 5) return "🌌✨ Aurora Alert!";
  return "🌌😴 Calm Night";
};

const getWindEmoji = (speed: number) => {
  if (speed > 600) return "💨 Fast Solar Wind!";
  if (speed > 400) return "🌬️ Medium Wind";
  return "🍃 Gentle Breeze";
};

const getXRayEmoji = (flux: number) => {
  if (flux > 1e-4) return "💥 Big Flare!";
  if (flux > 1e-5) return "🔥 Medium Flare!";
  return "☀️ Small Flare";
};

// Animated Sun Component
const AnimatedSun = () => (
  <div className="relative inline-block">
    <div className="text-6xl animate-spin-slow">☀️</div>
    <div className="absolute inset-0 text-6xl animate-pulse">🌟</div>
  </div>
);

// Aurora Animation Component
const AuroraEffect = ({ intensity }: { intensity: number }) => (
  <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
    <div
      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-aurora ${
        intensity > 5 ? "opacity-60" : "opacity-30"
      }`}
      style={{
        animationDuration: `${3 + intensity}s`,
        height: `${intensity * 2}px`,
      }}
    />
  </div>
);

// Floating Particles Component
const SpaceParticles = () => (
  <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

// Solar Flare Animation
const SolarFlare = ({ flux }: { flux: number }) => {
  if (flux < 1e-5) return null;

  return (
    <div className="absolute -right-4 -top-4">
      <div className="relative">
        <div className="w-8 h-8 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute inset-0 w-8 h-8 bg-orange-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default function SpaceWeatherStory() {
  const [kp, setKp] = useState<KpIndex[]>([]);
  const [wind, setWind] = useState<SolarWind[]>([]);

  const [xray, setXray] = useState<XRayPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getKpIndex(), getSolarWind(), getXRayFlux1Day()])
      .then(([kpData, windData, xrayData]) => {
        setKp(kpData);
        setWind(windData);
        setXray(xrayData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  // Pick latest values for storytelling
  const latestKp = kp[0]?.kp_index ?? 0;
  const latestWind = wind[0]?.speed ?? 0;
  const latestXray = xray[0]?.flux ?? 0;

  if (isLoading) {
    return (
      <main className="p-6 bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <div className="animate-bounce text-6xl mb-4">🚀</div>
        <h2 className="text-2xl text-yellow-300 animate-pulse">
          Loading Space Weather Data...
        </h2>
        <p className="text-gray-400 mt-2">
          Contacting satellites around Earth 🌍
        </p>
      </main>
    );
  }

  return (
    <main className="p-6 bg-gradient-to-b from-black to-blue-950 text-white min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Header with Animated Sun */}
        <div className="text-center mb-8 relative">
          <div className="flex justify-center items-center gap-4 mb-4">
            <AnimatedSun />
            <h1 className="lg:text-5xl md:text-3xl text-xl font-extrabold  bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Solara&apos;s Daily Adventure
            </h1>
            <AnimatedSun />
          </div>
          <p className="text-lg text-blue-200 animate-pulse">
            🌟 Real-time space weather story for young explorers! 🌟
          </p>
        </div>

        {/* Chapter 1: Aurora */}
        <section className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-yellow-900/30 to-green-900/30 border-2 border-yellow-500 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <AuroraEffect intensity={latestKp} />
          <SpaceParticles />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl animate-bounce">🌌</div>
              <h2 className="text-2xl font-bold text-green-300 bg-black/50 px-3 py-1 rounded-lg">
                Chapter 1: The Aurora Awakens
              </h2>
            </div>
            <p className="text-lg text-yellow-200 mb-3">
              Every night, Solara the Sun decides how playful she will be.
              Tonight, her magical auroras are saying:{" "}
              <span className="text-green-400 font-bold text-xl animate-pulse">
                {getKpEmoji(latestKp)}
              </span>
            </p>
            <div className="mt-3 p-4 bg-black/40 rounded-lg border border-green-500/30">
              <h3 className="text-lg font-bold text-green-300 mb-2 flex items-center gap-2">
                <span className="text-xl">🔬</span> Science Fun:
              </h3>
              <p className="text-yellow-100 text-sm">
                <strong>Kp Index {latestKp}</strong> measures how much the
                Earth&apos;s magnetic field is being stretched by solar energy!
                Think of it like a cosmic trampoline - when Solara sends more
                energy, our magnetic field bounces and creates colorful lights
                called auroras! The higher the number, the more dancing lights
                you might see near the North and South poles!
              </p>
            </div>
            <p className="mt-3 text-yellow-300 flex items-center gap-2">
              <span className="text-2xl">👧</span>
              Kids on Earth can see her northern and southern lights dancing
              across the sky when the Kp index is high.
            </p>
          </div>
        </section>

        {/* Chapter 2: Solar Wind */}
        <section className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-orange-900/30 to-blue-900/30 border-2 border-orange-500 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <SpaceParticles />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl animate-spin-slow">🌪️</div>
              <h2 className="text-2xl font-bold text-blue-300 bg-black/50 px-3 py-1 rounded-lg">
                Chapter 2: Solara&apos;s Windy Friends
              </h2>
            </div>
            <p className="text-lg text-yellow-200 mb-3">
              Solara sends gentle to strong gusts called Solar Winds across
              space. Tonight, they feel like:{" "}
              <span className="text-blue-300 font-bold text-xl">
                {getWindEmoji(latestWind)}
              </span>
            </p>
            <div className="mt-3 p-4 bg-black/40 rounded-lg border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-300 mb-2 flex items-center gap-2">
                <span className="text-xl">🔬</span> Science Fun:
              </h3>
              <p className="text-yellow-100 text-sm">
                <strong>Solar Wind {Math.round(latestWind)} km/s</strong> is
                like the Sun&apos;s breath! The Sun is so hot that tiny
                particles escape its gravity and fly through space at incredible
                speeds. This wind takes about 2-3 days to travel from the Sun to
                Earth - that&apos;s 150 million kilometers!
              </p>
            </div>
            <p className="mt-3 text-yellow-300 flex items-center gap-2">
              <span className="text-2xl">💨</span>
              Solar winds carry energy and tiny particles that make the auroras
              brighter!
            </p>
          </div>
        </section>

        {/* Chapter 3: Solar Flares */}
        <section className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-red-900/30 to-purple-900/30 border-2 border-red-500 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <SolarFlare flux={latestXray} />
          <SpaceParticles />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl animate-pulse">💥</div>
              <h2 className="text-2xl font-bold text-red-300 bg-black/50 px-3 py-1 rounded-lg">
                Chapter 3: Solara&apos;s Fireworks
              </h2>
            </div>
            <p className="text-lg text-yellow-200 mb-3">
              Sometimes Solara can&apos;t help herself and releases a Solar
              Flare! Right now, the Sun whispers:{" "}
              <span className="text-red-400 font-bold text-xl animate-bounce">
                {getXRayEmoji(latestXray)}
              </span>
            </p>
            <div className="mt-3 p-4 bg-black/40 rounded-lg border border-red-500/30">
              <h3 className="text-lg font-bold text-red-300 mb-2 flex items-center gap-2">
                <span className="text-xl">🔬</span> Science Fun:
              </h3>
              <p className="text-yellow-100 text-sm">
                <strong>X-Ray Flux {latestXray.toExponential(2)} W/m²</strong>{" "}
                measures Solara&apos;s solar flares! These are enormous
                explosions that release as much energy as millions of nuclear
                bombs! The X-rays travel at light speed and reach Earth in just
                8 minutes.
              </p>
            </div>
            <p className="mt-3 text-yellow-300 flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              Don&apos;t worry - our atmosphere protects us like a superhero
              shield!
            </p>
          </div>
        </section>

        {/* Chapter 4: Call to Action */}
        <section className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-2 border-purple-500 relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <SpaceParticles />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl animate-bounce">🔭</div>
              <h2 className="text-2xl font-bold text-pink-300 bg-black/50 px-3 py-1 rounded-lg">
                Chapter 4: Your Turn, Space Explorer!
              </h2>
            </div>
            <p className="text-lg text-yellow-200 mb-3">
              You can be a Solara watcher! Check the auroras tonight, feel the
              energy in the solar wind, and see if Solara is playing with her
              solar flares!
            </p>
            <div className="mt-3 p-4 bg-black/40 rounded-lg border border-purple-500/30">
              <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
                <span className="text-xl">🌌</span> Become a Space Weather
                Detective!
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 p-2 bg-blue-900/30 rounded">
                  <span className="text-2xl">🌈</span>
                  <span>
                    <strong>Aurora Hunting:</strong> Kp ≥ 5 = Northern Lights!
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-green-900/30 rounded">
                  <span className="text-2xl">💨</span>
                  <span>
                    <strong>Wind Racing:</strong> Speed over 600 km/s = More
                    action!
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-red-900/30 rounded">
                  <span className="text-2xl">🔥</span>
                  <span>
                    <strong>Flare Watching:</strong> Big flares = Amazing shows!
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-yellow-900/30 rounded">
                  <span className="text-2xl">🛡️</span>
                  <span>
                    <strong>Safety First:</strong> Earth&apos;s atmosphere
                    protects us!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-300 bg-black/50 p-4 rounded-xl border border-gray-700">
          <div className="flex justify-center items-center gap-4 mb-2">
            <span className="text-2xl animate-spin-slow">🌍</span>
            <span className="text-2xl animate-bounce">🛰️</span>
            <span className="text-2xl animate-pulse">🔭</span>
          </div>
          <p>Data powered by NASA & NOAA APIs 🌞</p>
          <p className="text-sm mt-1">
            Real space weather data updated every hour!
          </p>
        </footer>
      </div>

      {/* Add custom animations to Tailwind config */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes aurora {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-aurora {
          animation: aurora linear infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </main>
  );
}
