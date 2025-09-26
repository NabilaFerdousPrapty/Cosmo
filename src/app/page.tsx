import { HeroSection } from "@/components/Home/Banner";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <div
      className="relative  w-full overflow-hidden bg-black  
    "
    >
      <HeroSection />
      <Particles />
    </div>
  );
}
