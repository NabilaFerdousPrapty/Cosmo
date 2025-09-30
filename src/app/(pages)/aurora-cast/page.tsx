"use client";
import SolaraStory from "@/components/AuroraCast/SolaraStory";
import { FocusCards } from "@/components/ui/focus-cards";
import { Particles } from "@/components/ui/particles";
export default function AuroraCast() {
  const cards = [
    {
      title: "NASA Heliophysics",
      src: "/Heliophysics.png",
      description:
        "Discover how the Sun creates amazing space weather and beautiful auroras!",
      href: "/nasa-heliophysics",
    },
    {
      title: "Space Weather Prediction Center",
      src: "/SWPC.png",
      description:
        "Meet the space weather forecasters who predict solar storms!",
      href: "/space-weather-center",
    },
    {
      title: "Solar and Heliospheric Observatory",
      src: "/SOHO.jpg",
      description: "Explore the Sun with our amazing solar telescope in space!",
      href: "/solar-observatory",
    },
    {
      title: "Solar Dynamics Observatory",
      src: "/SDO.png",
      description: "Watch the Sun's incredible dances and explosions up close!",
      href: "/solar-dynamics",
    },
  ];

  return (
    <main className="p-8 bg-black text-white min-h-screen relative">
      <Particles className="absolute inset-0 z-0" />
      <SolaraStory />

      <div className="mt-20">
        <FocusCards cards={cards} />
      </div>
    </main>
  );
}
