import React from "react";
import Link from "next/link";
import { ChevronRight, Activity, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NewBadge } from "@/components/ui/NewBadge";

export function HeroSection() {
  return (
    <div className="animate-fade-in relative flex min-h-screen items-center overflow-hidden pt-40 pb-24 md:pt-52 md:pb-40">
      <div className="absolute inset-0 bg-[#000000]">
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.15]"></div>
        <div className="animate-pulse-slow pointer-events-none absolute -top-[30%] left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]"></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="text-left">
          <NewBadge text="Sistema de Defesa Ativo v4.0" />
          <h1 className="mb-8 text-5xl leading-[1.1] font-black tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] md:text-7xl">
            Segurança Cibernética <br />
            <span className="animate-gradient-x bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              simplificada
            </span>
          </h1>
          <p className="mb-12 max-w-xl rounded-r-lg border-l-4 border-indigo-500/50 bg-indigo-500/5 py-2 pl-6 text-lg leading-relaxed font-medium text-gray-400 md:text-xl">
            Protegemos sua empresa contra ameaças digitais com soluções robustas
            e estratégicas.
          </p>
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            <Link href="/contato">
              <Button variant="primary" icon={ChevronRight}>
                INICIAR DIAGNÓSTICO
              </Button>
            </Link>
            <Link href="#servicos">
              <Button variant="secondary">EXPLORAR SOLUÇÕES</Button>
            </Link>
          </div>
        </div>

        {/* Painel 3D CSS (Substitui Landing.jpg) */}
        <div className="perspective-1000 group relative flex h-[400px] items-center justify-center md:h-[500px]">
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
                    <div className="font-mono text-white">OPERACIONAL</div>
                  </div>
                </div>
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/5 p-4">
                <ShieldCheck size={32} className="text-emerald-400" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500 uppercase">Proteção</div>
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
  );
}
