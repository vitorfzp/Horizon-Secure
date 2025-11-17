// src/app/page.tsx

// 1. Importe os novos componentes da Home
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesHighlight } from '@/components/home/ServicesHighlight';
import { CallToAction } from '@/components/home/CallToAction';

export default function Home() {
  return (
    <div>
      {/* 2. Renderize os componentes em ordem */}
      <HeroSection />
      <ServicesHighlight />
      <CallToAction />
    </div>
  );
}