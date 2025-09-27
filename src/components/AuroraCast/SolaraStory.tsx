import Image from "next/image";
import React from "react"; // Import React for FC type

// Define the functional component type for clarity
const SolaraStory: React.FC = () => {
  return (
    <div className="font-comic-sans p-5 max-w-4xl mx-auto leading-relaxed bg-black ">
      <h1 className="text-orange-400 text-center mb-5 text-5xl font-bold drop-shadow-md">
        Hi, I am Solara!
      </h1>

      <p className="text-lg text-center mb-8 text-gray-300">
        Although the Sun is 93 million miles away from our planet, solar
        activity can significantly impact our daily lives. “Space weather”—the
        variations that occur in the space environment between the Sun and
        Earth—can impact technologies in space and on Earth.
      </p>

      <div className="mb-10  p-6 rounded-lg shadow-sm">
        <h2 className="text-green-400 text-center mb-5 text-3xl font-semibold">
          Our Space Weather Adventure!
        </h2>
        <p className="text-lg mb-4 text-gray-200">
          Once upon a time, high above the Earth, a giant fiery star named
          Solara was having a very active day! Solara loved to wiggle and
          jiggle, and sometimes, when she wiggled extra hard, she’d send out big
          bursts of energy and particles. These bursts were called solar flares
          and coronal mass ejections (CMEs).
        </p>
        <div className="text-center my-5">
          <Image
            src="/solara.png"
            alt="Solara sending out a solar flare"
            width={500}
            height={300}
            className="rounded-lg shadow-md w-full h-auto max-w-xl mx-auto"
          />
        </div>
        <p className="italic text-center text-gray-400 mt-2">
          Solara's Space Weather Journey
        </p>
      </div>
    </div>
  );
};

export default SolaraStory;
