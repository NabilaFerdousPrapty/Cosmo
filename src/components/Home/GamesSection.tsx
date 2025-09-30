import Link from "next/link";
import { Particles } from "../ui/particles";

// components/HomeSections/GamesSection.tsx
export default function GamesSection() {
  return (
    <section className="py-16 bg-black relative">
      <Particles className="absolute inset-0 z-0" />
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-orange-300 mb-4">
          Space Games 🕹️
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          Play exciting space adventures! Dodge solar storms, explore planets,
          and protect Earth from space weather in fun interactive games.
        </p>
        <Link
          href="/games"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl text-lg hover:scale-105 transition-transform"
        >
          Play Games 👾
        </Link>
      </div>
    </section>
  );
}
