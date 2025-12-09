"use client";
import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Activity,
  ShieldCheck,
  Lock,
  Radio,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NewBadge } from "@/components/ui/NewBadge";
import { HackerText } from "@/components/ui/HackerText";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <div className="animate-fade-in relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 md:pt-52 md:pb-40">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#000000]">
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.15]"></div>
        <div className="animate-pulse-slow pointer-events-none absolute -top-[30%] left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]"></div>
        <div className="animate-pulse-slow pointer-events-none absolute right-[-20%] bottom-[10%] h-[60%] w-[60%] rounded-full bg-purple-600/15 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left Column: Text */}
        <div className="relative z-20 text-left">
          <Reveal delay={0}>
            <NewBadge text="Sistema de Defesa Ativo v4.0" />
          </Reveal>

          <Reveal delay={200}>
            <h1 className="mb-6 text-4xl leading-[1.1] font-black tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] sm:text-5xl md:text-7xl">
              <HackerText
                text="Segurança Cibernética"
                className="hacker-cursor"
                speed={30}
              />{" "}
              <br />
              <span className="animate-gradient-x bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                simplificada
              </span>
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="mb-8 max-w-xl rounded-r-lg border-l-4 border-indigo-500/50 bg-indigo-500/5 py-2 pl-6 text-base leading-relaxed font-medium text-gray-400 sm:text-lg md:text-xl">
              Protegemos sua empresa contra ameaças digitais com soluções
              robustas e estratégicas.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Link href="/contato" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  icon={ChevronRight}
                  className="btn-glitch w-full sm:w-auto"
                >
                  INICIAR DIAGNÓSTICO
                </Button>
              </Link>
              <Link href="#servicos" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">
                  EXPLORAR SOLUÇÕES
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Visual Panels */}
        <div className="relative mt-8 flex w-full items-center justify-center md:mt-0">
          {/* --- MOBILE VERSION: HUD TÁTICO ANIMADO --- */}
          <div className="relative block flex h-[400px] w-full scale-95 items-center justify-center md:hidden">
            {/* Orbitais (Mantivemos a animação CSS pois é mais performática que JS no mobile) */}
            <div className="absolute h-72 w-72 animate-[spin_10s_linear_infinite] rounded-full border border-indigo-500/20"></div>
            <div className="absolute h-64 w-64 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-dashed border-purple-500/30"></div>

            {/* Núcleo Central (Com Reveal) */}
            <Reveal delay={800} direction="up">
              <div className="animate-pulse-slow relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-2 border-indigo-500/50 bg-[#0A0A0E] shadow-[0_0_40px_rgba(99,102,241,0.6)]">
                <ShieldCheck size={48} className="relative z-20 text-white" />
                <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-cyan-400"></div>
              </div>
            </Reveal>

            {/* Satélites com HackerText */}

            {/* Satélite Topo */}
            <div className="absolute top-0 flex w-full justify-center">
              <Reveal delay={1000} direction="down">
                <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-black/80 px-4 py-2 shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-md">
                  <div className="h-2 w-2 animate-ping rounded-full bg-green-500"></div>
                  <span className="font-mono text-xs font-bold tracking-widest text-green-400">
                    <HackerText text="ONLINE" speed={100} />
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Satélite Esquerda */}
            <div className="absolute bottom-10 left-0">
              <Reveal delay={1200} direction="left">
                <div className="flex flex-col items-center rounded-xl border border-red-500/30 bg-[#0A0A0E]/90 p-3 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                  <Activity size={20} className="mb-1 text-red-400" />
                  <span className="text-lg leading-none font-bold text-white">
                    <HackerText text="0" speed={200} />
                  </span>
                  <span className="text-[9px] text-gray-400 uppercase">
                    Ameaças
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Satélite Direita */}
            <div className="absolute right-0 bottom-10">
              <Reveal delay={1400} direction="right">
                <div className="flex flex-col items-center rounded-xl border border-purple-500/30 bg-[#0A0A0E]/90 p-3 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  <Lock size={20} className="mb-1 text-purple-400" />
                  <span className="text-lg leading-none font-bold text-white">
                    <HackerText text="256" speed={150} />
                  </span>
                  <span className="text-[9px] text-gray-400 uppercase">
                    Bits AES
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* DESKTOP VERSION (3D) - Mantido igual para consistência */}
          <div className="perspective-1000 group hidden h-[500px] w-full items-center justify-center md:flex">
            <div className="animate-scanline pointer-events-none absolute inset-0 z-30 h-[20%] w-full bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"></div>
            <div className="relative z-20 flex h-full w-full rotate-x-[8deg] rotate-y-[-12deg] transform flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#050505] shadow-[0_0_50px_rgba(79,70,229,0.3)] transition-all duration-700 group-hover:scale-105 group-hover:rotate-0">
              {/* ... (Conteúdo do Painel Desktop já existente) ... */}
              <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-white/5 px-4">
                <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="relative grid h-full grid-cols-2 gap-4 overflow-hidden p-6">
                <div className="col-span-2 flex items-center justify-between rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-4">
                  <div className="flex items-center gap-3">
                    <Activity className="text-indigo-400" />
                    <div>
                      <div className="text-xs text-gray-400">Status</div>
                      <div className="font-mono text-white">
                        <HackerText text="OPERACIONAL" speed={50} />
                      </div>
                    </div>
                  </div>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/5 p-4">
                  <ShieldCheck size={32} className="text-emerald-400" />
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-gray-500 uppercase">
                    Proteção
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/5 p-4">
                  <Lock size={32} className="text-purple-400" />
                  <div className="text-2xl font-bold text-white">AES-256</div>
                  <div className="text-xs text-gray-500 uppercase">Cripto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
