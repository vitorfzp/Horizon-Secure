import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
            <Link href="/diagnostico">
              <Button variant="primary" icon={ChevronRight}>
                INICIAR DIAGNÓSTICO
              </Button>
            </Link>
            <Link href="#servicos">
              <Button variant="secondary">EXPLORAR SOLUÇÕES</Button>
            </Link>
          </div>
        </div>

        {/* Visual 3D - Certifique-se de que Landing.jpg está em public/ */}
        <div className="perspective-1000 group relative flex h-[450px] items-center justify-center md:h-[600px]">
          <div className="pointer-events-none absolute inset-0 z-30 h-[50%] w-full animate-[scanline_4s_linear_infinite] bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"></div>
          <div className="relative z-20 h-full w-full rotate-x-[8deg] rotate-y-[-12deg] transform overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.3)] transition-all duration-700 group-hover:scale-105 group-hover:rotate-0">
            <img
              src="/Landing.jpg"
              alt="Cyber Interface"
              className="h-full w-full object-cover opacity-90"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/800x600/0A0A0A/4f46e5?text=Interface")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
