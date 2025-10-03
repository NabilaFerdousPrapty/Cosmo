"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SohoStory() {
  const [imageUrl, setImageUrl] = useState(
    "https://soho.nascom.nasa.gov/data/realtime/c2/1024/latest.jpg"
  );

  useEffect(() => {
    const updateImage = () => {
      // Add a timestamp to bypass browser cache
      setImageUrl(
        `https://soho.nascom.nasa.gov/data/realtime/c2/1024/latest.jpg?ts=${Date.now()}`
      );
    };

    updateImage(); // update immediately on load

    // Refresh every 5 minutes
    const interval = setInterval(updateImage, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-yellow-300 mb-6">
        🌌 Solara&apos;s CME Adventure! 🌌
      </h1>

      <p className="text-lg text-gray-200 mb-4 max-w-2xl text-center">
        High above Earth, the Sun, Solara, sometimes sends out enormous bursts
        of energy called Coronal Mass Ejections (CMEs)! Scientists watch them
        using the SOHO telescope.
      </p>

      <div className="mb-4">
        <Image
          src={imageUrl}
          alt="Latest SOHO CME image"
          width={600}
          height={600}
          className="rounded-2xl border-4 border-yellow-500 shadow-2xl"
          priority
        />
      </div>

      <p className="text-gray-200 max-w-2xl text-center">
        🌟 Look at Solara&apos;s latest fiery eruption! Sometimes these CMEs can
        reach Earth in just a couple of days, creating magical auroras near the
        poles. Keep watching, young explorers! 🚀
      </p>
    </main>
  );
}
