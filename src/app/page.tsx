import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <main className="bg-[#000000] min-h-screen overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <CallToAction />
    </main>
  );
}