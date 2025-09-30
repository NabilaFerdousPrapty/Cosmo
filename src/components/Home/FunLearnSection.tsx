import Link from "next/link";
import { Particles } from "../ui/particles";

// components/HomeSections/FunLearnSection.tsx
export default function FunLearnSection() {
  return (
    <section className="py-16  to-black relative">
      <Particles className="absolute inset-0 z-0" />
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-pink-300 mb-4">
          Fun & Learn 🎮
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          Discover space mysteries with riddles, fun facts, and interactive
          mystery boxes! Perfect for curious young minds.
        </p>
        <Link
          href="/fun-and-learn"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-2xl text-lg hover:scale-105 transition-transform"
        >
          Start Exploring 🎁
        </Link>
      </div>
    </section>
  );
}
