"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Activity, ShieldCheck, Lock, Radio, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NewBadge } from '@/components/ui/NewBadge';
import { HackerText } from '@/components/ui/HackerText';
import { Reveal } from '@/components/ui/Reveal';

export function HeroSection() {
  return (
    <div className="relative pt-32 pb-20 md:pt-52 md:pb-40 overflow-hidden min-h-screen flex items-center animate-fade-in">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#000000]">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
        <div className="pointer-events-none absolute -top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] rounded-full bg-indigo-600/20 blur-[150px] animate-pulse-slow"></div>
        <div className="pointer-events-none absolute bottom-[10%] right-[-20%] w-[60%] h-[60%] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <div className="text-left relative z-20">
          <Reveal delay={0}>
            <NewBadge text="Sistema de Defesa Ativo v4.0" />
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              <HackerText text="Segurança Cibernética" className="hacker-cursor" speed={30} /> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient-x">simplificada</span>
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed font-medium border-l-4 border-indigo-500/50 pl-6 bg-indigo-500/5 py-2 rounded-r-lg">
              Protegemos sua empresa contra ameaças digitais com soluções robustas e estratégicas.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contato" className="w-full sm:w-auto">
                <Button variant="primary" icon={ChevronRight} className="w-full sm:w-auto btn-glitch">INICIAR DIAGNÓSTICO</Button>
              </Link>
              <Link href="#servicos" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">EXPLORAR SOLUÇÕES</Button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Visual Panels */}
        <div className="relative w-full flex items-center justify-center mt-8 md:mt-0">
            
            {/* --- MOBILE VERSION: HUD TÁTICO ANIMADO --- */}
            <div className="block md:hidden w-full h-[400px] relative flex items-center justify-center scale-95">
               {/* Orbitais (Mantivemos a animação CSS pois é mais performática que JS no mobile) */}
               <div className="absolute w-72 h-72 rounded-full border border-indigo-500/20 animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute w-64 h-64 rounded-full border border-dashed border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>
               
               {/* Núcleo Central (Com Reveal) */}
               <Reveal delay={800} direction="up">
                 <div className="relative z-10 w-32 h-32 rounded-full bg-[#0A0A0E] border-2 border-indigo-500/50 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.6)] animate-pulse-slow">
                    <ShieldCheck size={48} className="text-white relative z-20" />
                    <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400 animate-spin"></div>
                 </div>
               </Reveal>

               {/* Satélites com HackerText */}
               
               {/* Satélite Topo */}
               <div className="absolute top-0 w-full flex justify-center">
                 <Reveal delay={1000} direction="down">
                   <div className="bg-black/80 backdrop-blur-md border border-green-500/30 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                      <span className="text-green-400 font-mono text-xs font-bold tracking-widest">
                        <HackerText text="ONLINE" speed={100} />
                      </span>
                   </div>
                 </Reveal>
               </div>

               {/* Satélite Esquerda */}
               <div className="absolute bottom-10 left-0">
                 <Reveal delay={1200} direction="left">
                   <div className="bg-[#0A0A0E]/90 border border-red-500/30 p-3 rounded-xl flex flex-col items-center shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                      <Activity size={20} className="text-red-400 mb-1" />
                      <span className="text-white font-bold text-lg leading-none">
                        <HackerText text="0" speed={200} />
                      </span>
                      <span className="text-[9px] text-gray-400 uppercase">Ameaças</span>
                   </div>
                 </Reveal>
               </div>

               {/* Satélite Direita */}
               <div className="absolute bottom-10 right-0">
                 <Reveal delay={1400} direction="right">
                   <div className="bg-[#0A0A0E]/90 border border-purple-500/30 p-3 rounded-xl flex flex-col items-center shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                      <Lock size={20} className="text-purple-400 mb-1" />
                      <span className="text-white font-bold text-lg leading-none">
                        <HackerText text="256" speed={150} />
                      </span>
                      <span className="text-[9px] text-gray-400 uppercase">Bits AES</span>
                   </div>
                 </Reveal>
               </div>
            </div>

            {/* DESKTOP VERSION (3D) - Mantido igual para consistência */}
            <div className="hidden md:flex h-[500px] w-full items-center justify-center perspective-1000 group">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent h-[20%] w-full animate-scanline pointer-events-none z-30"></div>
               <div className="relative z-20 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.3)] transform rotate-y-[-12deg] rotate-x-[8deg] transition-all duration-700 group-hover:rotate-0 group-hover:scale-105 bg-[#050505] flex flex-col">
                  {/* ... (Conteúdo do Painel Desktop já existente) ... */}
                  <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                     <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="p-6 grid grid-cols-2 gap-4 h-full relative overflow-hidden">
                     <div className="col-span-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3"><Activity className="text-indigo-400" /><div><div className="text-xs text-gray-400">Status</div><div className="text-white font-mono"><HackerText text="OPERACIONAL" speed={50}/></div></div></div>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                     </div>
                     <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-center items-center gap-2">
                        <ShieldCheck size={32} className="text-emerald-400" /><div className="text-2xl font-bold text-white">100%</div><div className="text-xs text-gray-500 uppercase">Proteção</div>
                     </div>
                     <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-center items-center gap-2">
                        <Lock size={32} className="text-purple-400" /><div className="text-2xl font-bold text-white">AES-256</div><div className="text-xs text-gray-500 uppercase">Cripto</div>
                     </div>
                  </div>
               </div>
            </div>

        </div>
      </div>
    </div>
  );
}