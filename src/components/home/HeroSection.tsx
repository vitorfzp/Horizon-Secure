"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, Activity, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NewBadge } from "@/components/ui/NewBadge";
import { HackerText } from "@/components/ui/HackerText";
import { Reveal } from "@/components/ui/Reveal";
import { MobileCyberHUD } from "@/components/home/MobileCyberHUD";
import { TacticalTap } from "@/components/ui/TacticalTap";

export function HeroSection() {
  return (
    <div className="animate-fade-in relative flex min-h-screen items-center overflow-hidden pt-32 pb-12 md:pt-52 md:pb-40">
      <div className="absolute inset-0 bg-[#000000]">
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.15]"></div>
        <div className="animate-pulse-slow pointer-events-none absolute -top-[30%] left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]"></div>
        <div className="animate-pulse-slow pointer-events-none absolute right-[-20%] bottom-[10%] h-[60%] w-[60%] rounded-full bg-purple-600/15 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
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
                <TacticalTap className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    icon={ChevronRight}
                    className="btn-glitch w-full"
                  >
                    INICIAR DIAGNÓSTICO
                  </Button>
                </TacticalTap>
              </Link>
              <Link href="#servicos" className="w-full sm:w-auto">
                <TacticalTap className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full">
                    EXPLORAR SOLUÇÕES
                  </Button>
                </TacticalTap>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-8 flex w-full items-center justify-center md:mt-0">
          <MobileCyberHUD />

          <div className="perspective-1000 group hidden h-[500px] w-full items-center justify-center md:flex">
            <div className="animate-scanline pointer-events-none absolute inset-0 z-30 h-[20%] w-full bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"></div>
            <div className="relative z-20 flex h-full w-full rotate-x-[8deg] rotate-y-[-12deg] transform flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#050505] shadow-[0_0_50px_rgba(79,70,229,0.3)] transition-all duration-700 group-hover:scale-105 group-hover:rotate-0">
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
