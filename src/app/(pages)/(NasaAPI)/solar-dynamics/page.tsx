"use client";
import Image from "next/image";
const sdoImage =
  "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_0304.jpg";

export default function SdoStory() {
  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-300 mb-6">
        🌞 Solara in Ultraviolet! 🌞
      </h1>

      <p className="text-lg text-gray-200 mb-4 max-w-2xl text-center">
        The Sun loves to show off! NASA&apos;s Solar Dynamics Observatory (SDO)
        watches Solara in ultraviolet light to reveal glowing solar prominences
        and loops that we can&quot;t see with our eyes.
      </p>

      <div className="mb-4">
        <Image
          src={sdoImage}
          alt="Latest SDO AIA 304 image"
          width={600}
          height={600}
          className="rounded-2xl border-4 border-orange-500 shadow-2xl"
        />
      </div>

      <p className="text-gray-200 max-w-2xl text-center">
        🌟 Look! These glowing loops show Solara dancing in ultraviolet light!
        It`&apos;s like a magical sun show just for us. Keep exploring the sky,
        young adventurers! 🚀
      </p>
    </main>
  );
}
