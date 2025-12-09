"use client";
import React from 'react';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from '@/components/ui/Reveal';

export function CallToAction() {
  return (
    <section className="border-t border-white/10 bg-white/5 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto flex flex-col items-center px-6 text-center relative z-10">
        <Reveal delay={0} direction="up">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl tracking-tight">
            Pronto para dar o próximo passo na <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">segurança do seu negócio?</span>
          </h2>
        </Reveal>

        <Reveal delay={200} direction="up">
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-400">
            Não espere por um incidente. Vamos conversar sobre seus desafios e construir um plano sob medida.
          </p>
        </Reveal>

        <Reveal delay={400} direction="up">
          <Link href="/contato" className="group">
            <button className="flex transform items-center gap-2 rounded-full bg-white text-black px-10 py-4 font-bold font-mono uppercase tracking-wider shadow-lg transition-all btn-glitch group-hover:scale-105">
              Fale com um Especialista <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}