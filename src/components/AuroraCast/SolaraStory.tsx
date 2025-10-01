import Image from "next/image";
import React, { useEffect, useState } from "react";

// Animated Sun Component
const AnimatedSun = () => (
  <div className="relative inline-block">
    <div className="text-4xl md:text-6xl animate-spin-slow">☀️</div>
    <div className="absolute inset-0 text-4xl md:text-6xl animate-pulse">
      🌟
    </div>
  </div>
);

// Floating Particles Component - Fixed for hydration
const SpaceParticles = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        {/* Static fallback for SSR */}
        <div
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{ left: "10%", top: "20%" }}
        />
        <div
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{ left: "50%", top: "60%" }}
        />
        <div
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{ left: "80%", top: "40%" }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

// Star Background Component - Fixed for hydration
const StarBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="absolute inset-0">
        {/* Static stars for SSR */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      {[...Array(50)].map(
        (
          _,
          i // Reduced number for mobile
        ) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        )
      )}
    </div>
  );
};

// Solar Flare Animation
const SolarFlareAnimation = () => (
  <div className="absolute -right-2 -top-2">
    <div className="relative">
      <div className="w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute inset-0 w-4 h-4 md:w-6 md:h-6 bg-orange-400 rounded-full animate-pulse"></div>
    </div>
  </div>
);

const SolaraStory: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsVisible(true);
  }, []);

  if (!isClient) {
    return (
      <div className="font-comic-sans p-4 md:p-5 max-w-6xl mx-auto leading-relaxed bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl md:text-6xl animate-spin-slow mb-4">☀️</div>
          <h2 className="text-xl md:text-2xl text-yellow-300">
            Loading Solara&apos;s Story...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="font-comic-sans p-4 md:p-5 max-w-6xl mx-auto leading-relaxed  from-black  min-h-screen relative overflow-hidden">
      {/* Fixed Star Background */}
      <StarBackground />

      <div className="relative z-10">
        {/* Animated Header */}
        <div
          className={`text-center mb-6 md:mb-8 transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 mb-4">
            <AnimatedSun />
            <h1 className="text-4xl md:text-6xl  font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-400 bg-clip-text text-transparent">
              Hi, I am Solara!
            </h1>
            <AnimatedSun />
          </div>

          <div className="bg-black p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-yellow-500/50 shadow-2xl">
            <p className="text-base md:text-xl text-center mb-2 text-gray-200 leading-relaxed">
              Although I&apos;m 93 million miles away from Earth, my solar
              activity can significantly impact your daily life!
            </p>
            <p className="text-sm md:text-lg text-center text-blue-200 font-semibold">
              🌟{" "}
              <span className="text-yellow-300">&quot;Space weather&quot;</span>
              – impacts technologies in space and on Earth! 🌟
            </p>
          </div>
        </div>

        {/* Main Story Section */}
        <div
          className={`mb-8 md:mb-10 bg-black p-4 md:p-8 rounded-2xl md:rounded-3xl border-2 border-green-500/50 shadow-2xl transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <SpaceParticles />

          <h2 className="text-green-400 text-center mb-4 md:mb-6 text-2xl md:text-4xl font-bold drop-shadow-lg flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
            <span className="text-3xl md:text-4xl animate-bounce">🚀</span>
            Our Space Weather Adventure!
            <span className="text-3xl md:text-4xl animate-bounce">🌌</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-3 md:space-y-4">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed md:transform md:hover:scale-105 transition-transform duration-300">
                <span className="text-yellow-300 text-xl md:text-2xl">✨</span>{" "}
                Once upon a time, high above the Earth, a giant fiery star named{" "}
                <span className="text-orange-400 font-bold">Solara</span> was
                having a very active day!
              </p>

              <p className="text-base md:text-lg text-gray-200 leading-relaxed md:transform md:hover:scale-105 transition-transform duration-300">
                <span className="text-red-400 text-xl md:text-2xl">💃</span>{" "}
                Solara loved to wiggle and jiggle, and sometimes, when she
                wiggled extra hard, she&apos;d send out big bursts of energy and
                particles!
              </p>

              <div className="bg-black/50 p-3 md:p-4 rounded-xl border-l-4 border-yellow-500">
                <p className="text-yellow-200 font-semibold text-sm md:text-base">
                  <span className="text-xl md:text-2xl">⚡</span> These bursts
                  were called{" "}
                  <span className="text-red-400 underline">solar flares</span>{" "}
                  and{" "}
                  <span className="text-blue-400 underline">
                    coronal mass ejections (CMEs)
                  </span>
                  !
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4">
                <div className="flex-1 bg-red-900/30 p-3 rounded-lg text-center border border-red-500/50">
                  <div className="text-xl md:text-2xl mb-1">🔥</div>
                  <span className="text-red-300 text-xs md:text-sm">
                    Solar Flares
                  </span>
                </div>
                <div className="flex-1 bg-blue-900/30 p-3 rounded-lg text-center border border-blue-500/50">
                  <div className="text-xl md:text-2xl mb-1">🌪️</div>
                  <span className="text-blue-300 text-xs md:text-sm">CMEs</span>
                </div>
                <div className="flex-1 bg-green-900/30 p-3 rounded-lg text-center border border-green-500/50">
                  <div className="text-xl md:text-2xl mb-1">💫</div>
                  <span className="text-green-300 text-xs md:text-sm">
                    Particles
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mt-6 md:mt-0">
              <SolarFlareAnimation />
              <div className="text-center transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/solara.png"
                  alt="Solara sending out a solar flare"
                  width={500}
                  height={350}
                  className="rounded-xl md:rounded-2xl shadow-2xl w-full h-auto border-4 border-yellow-400/50"
                  priority
                />
                <div className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 px-4 md:px-6 py-1 md:py-2 rounded-full border border-yellow-400">
                  <p className="italic text-yellow-300 text-xs md:text-sm font-semibold animate-pulse">
                    Solara&apos;s Space Weather Journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Facts Section */}
        <div
          className={`bg-black p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-orange-500/50 transform transition-all duration-1000 delay-600 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-center text-yellow-300 mb-3 md:mb-4 flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="text-2xl md:text-3xl">🔬</span>
            Fun Space Weather Facts!
            <span className="text-2xl md:text-3xl">🌍</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
            <div className="bg-black/40 p-3 rounded-lg border border-blue-500/30">
              <span className="text-blue-300 font-bold">🌞 Solar Wind:</span>{" "}
              <span className="text-gray-200">
                I blow particles at 1 million mph!
              </span>
            </div>
            <div className="bg-black/40 p-3 rounded-lg border border-green-500/30">
              <span className="text-green-300 font-bold">⏱️ Light Speed:</span>{" "}
              <span className="text-gray-200">
                My light reaches you in 8 minutes!
              </span>
            </div>
            <div className="bg-black/40 p-3 rounded-lg border border-purple-500/30">
              <span className="text-purple-300 font-bold">🌈 Auroras:</span>{" "}
              <span className="text-gray-200">
                My particles create Northern Lights!
              </span>
            </div>
            <div className="bg-black/40 p-3 rounded-lg border border-red-500/30">
              <span className="text-red-300 font-bold">📡 Technology:</span>{" "}
              <span className="text-gray-200">
                I can affect satellites and power grids!
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-6 md:mt-8 p-4 transform transition-all duration-1000 delay-900 ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Ready to learn more about space weather?
          </p>
          <div className="flex justify-center gap-3 md:gap-4 text-xl md:text-2xl animate-bounce">
            <span>👇</span>
            <span>🔭</span>
            <span>🌟</span>
            <span>📡</span>
            <span>👇</span>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
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
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .font-comic-sans {
            font-family: system-ui, -apple-system, sans-serif;
          }
        }
      `}</style>
    </div>
  );
};

export default SolaraStory;
