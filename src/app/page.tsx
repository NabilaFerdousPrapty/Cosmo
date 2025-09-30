import AuroraCastSection from "@/components/Home/AuroraCastSection";
import { HeroSection } from "@/components/Home/Banner";
import Footer from "@/components/Home/Footer";
import FunLearnSection from "@/components/Home/FunLearnSection";
import GamesSection from "@/components/Home/GamesSection";
import StoriesSection from "@/components/Home/StoriesSection";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <div
      className="relative  w-full overflow-hidden bg-black  
    "
    >
      <HeroSection />
      <Particles className="absolute inset-0 z-0" />
      <StoriesSection />
      <AuroraCastSection />
      <GamesSection />
      <FunLearnSection />
      <Footer />
    </div>
  );
}
