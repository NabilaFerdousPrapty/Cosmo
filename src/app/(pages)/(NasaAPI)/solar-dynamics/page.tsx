"use client";

import { useEffect, useState } from "react";

export default function SdoStory() {
  const [imageUrl, setImageUrl] = useState("");

  // List of common SDO wavelengths in Ångströms
  const wavelengths = [
    "0094",
    "0131",
    "0171",
    "0193",
    "0211",
    "0304",
    "0335",
    "1600",
    "1700",
    "4500",
  ];

  useEffect(() => {
    const updateImage = () => {
      const wavelength =
        wavelengths[Math.floor(Math.random() * wavelengths.length)];
      // Construct the latest image URL dynamically
      const url = `https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_${wavelength}.jpg?ts=${Date.now()}`;
      setImageUrl(url);
    };

    updateImage();

    // Refresh every 5 minutes
    const interval = setInterval(updateImage, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-300 mb-6">
        🌞 Solara&apos;s Dynamic Ultraviolet Show! 🌞
      </h1>

      <p className="text-lg text-gray-200 mb-4 max-w-2xl text-center">
        NASA&apos;s Solar Dynamics Observatory (SDO) watches Solara in different
        wavelengths to reveal glowing solar prominences, loops, and flares that
        we cannot see with our eyes.
      </p>

      <div className="mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Latest SDO image"
            width={600}
            height={600}
            className="rounded-2xl border-4 border-orange-500 shadow-2xl"
          />
        ) : (
          <p>Loading latest SDO image...</p>
        )}
      </div>

      <p className="text-gray-200 max-w-2xl text-center">
        🌟 Each time you visit, Solara might show a different wavelength!
        Explore the Sun’s magic in many colors. Keep watching the sky, young
        adventurers! 🚀
      </p>
    </main>
  );
}
