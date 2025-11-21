import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#000000]">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <CallToAction />
    </main>
  );
}
