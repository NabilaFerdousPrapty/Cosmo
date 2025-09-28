import { HeroSection } from "@/components/Home/Banner";
import Footer from "@/components/Home/Footer";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <div
      className="relative  w-full overflow-hidden bg-black  
    "
    >
      <HeroSection />
      <Particles className="absolute inset-0 z-0" />
      <Footer />
    </div>
  );
}
