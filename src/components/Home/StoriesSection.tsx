import Link from "next/link";
import { Particles } from "../ui/particles";

// components/HomeSections/StoriesSection.tsx
export default function StoriesSection() {
  return (
    <section className="py-16  to-black relative">
      <Particles className="absolute inset-0 z-0" />
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-4">
          Space Weather Stories 📚
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          Embark on exciting adventures through our solar system! Learn about
          space weather through fun, interactive stories designed for young
          explorers.
        </p>
        <Link
          href="/Stories"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-2xl text-lg hover:scale-105 transition-transform"
        >
          Explore Stories 🚀
        </Link>
      </div>
    </section>
  );
}
