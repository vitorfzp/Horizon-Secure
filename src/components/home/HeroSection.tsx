import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NewBadge } from '@/components/ui/NewBadge';

export function HeroSection() {
  return (
    <div className="relative pt-40 pb-24 md:pt-52 md:pb-40 overflow-hidden min-h-screen flex items-center animate-fade-in">
      <div className="absolute inset-0 bg-[#000000]">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
        <div className="pointer-events-none absolute -top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] rounded-full bg-indigo-600/20 blur-[150px] animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <NewBadge text="Sistema de Defesa Ativo v4.0" />
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            Segurança Cibernética <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient-x">simplificada</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-medium border-l-4 border-indigo-500/50 pl-6 bg-indigo-500/5 py-2 rounded-r-lg">
            Protegemos sua empresa contra ameaças digitais com soluções robustas e estratégicas.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Link href="/diagnostico">
                <Button variant="primary" icon={ChevronRight}>INICIAR DIAGNÓSTICO</Button>
            </Link>
            <Link href="#servicos">
                <Button variant="secondary">EXPLORAR SOLUÇÕES</Button>
            </Link>
          </div>
        </div>

        {/* Visual 3D - Certifique-se de que Landing.jpg está em public/ */}
        <div className="relative h-[450px] md:h-[600px] flex items-center justify-center perspective-1000 group">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent h-[50%] w-full animate-[scanline_4s_linear_infinite] pointer-events-none z-30"></div>
           <div className="relative z-20 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.3)] transform rotate-y-[-12deg] rotate-x-[8deg] transition-all duration-700 group-hover:rotate-0 group-hover:scale-105">
              <img src="/Landing.jpg" alt="Cyber Interface" className="w-full h-full object-cover opacity-90" onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/800x600/0A0A0A/4f46e5?text=Interface'} />
           </div>
        </div>
      </div>
    </div>
  );
}