"use client";
import SolaraStory from "@/components/AuroraCast/SolaraStory";
import { FocusCards } from "@/components/ui/focus-cards";

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
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Explore the Sun with our amazing solar telescope in space!",
      href: "/solar-observatory",
    },
    {
      title: "Solar Dynamics Observatory",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Watch the Sun's incredible dances and explosions up close!",
      href: "/solar-dynamics",
    },
  ];

  return (
    <main className="p-8 bg-black text-white min-h-screen">
      <SolaraStory />

      <div className="mt-20">
        <FocusCards cards={cards} />
      </div>
    </main>
  );
}
