import Link from "next/link";
import { Particles } from "../ui/particles";

// components/HomeSections/AuroraCastSection.tsx
export default function AuroraCastSection() {
  return (
    <section className="py-16 to-black relative">
      <Particles className="absolute inset-0 z-0" />
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-300 mb-4">
          AuroraCast 🌌
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          Real-time space weather forecast! Check live solar activity data and
          see if you can spot Northern Lights tonight.
        </p>
        <Link
          href="/aurora-cast"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-2xl text-lg hover:scale-105 transition-transform"
        >
          View Forecast 🛰️
        </Link>
      </div>
    </section>
  );
}
