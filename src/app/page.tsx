import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { CallToAction } from "@/components/home/CallToAction";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <main className="bg-[#000000] min-h-screen overflow-hidden">
      <HeroSection />
      <ProblemSection />
      {/* Use o novo componente aqui */}
      <ServicesSection />
      <CallToAction />
    </main>
  );
}