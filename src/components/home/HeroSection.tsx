import React from 'react';
import Link from 'next/link';
import { ChevronRight, Activity, ShieldCheck, Lock } from 'lucide-react';
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
            <Link href="/contato"><Button variant="primary" icon={ChevronRight}>INICIAR DIAGNÓSTICO</Button></Link>
            <Link href="#servicos"><Button variant="secondary">EXPLORAR SOLUÇÕES</Button></Link>
          </div>
        </div>

        {/* Painel 3D CSS (Substitui Landing.jpg) */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-1000 group">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent h-[20%] w-full animate-scanline pointer-events-none z-30"></div>
           <div className="relative z-20 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.3)] transform rotate-y-[-12deg] rotate-x-[8deg] transition-all duration-700 group-hover:rotate-0 group-hover:scale-105 bg-[#050505] flex flex-col">
              <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                 <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4 h-full relative overflow-hidden">
                 <div className="col-span-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3"><Activity className="text-indigo-400" /><div><div className="text-xs text-gray-400">Status</div><div className="text-white font-mono">OPERACIONAL</div></div></div>
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
  );
}