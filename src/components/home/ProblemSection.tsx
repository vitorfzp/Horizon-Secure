"use client";
import React from 'react';
import { Unlock, EyeOff, AlertTriangle } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { HackerText } from '@/components/ui/HackerText';

export function ProblemSection() {
  const problems = [
    { icon: Unlock, title: "Pontos de Entrada", desc: "Você sabe exatamente quais são as portas de entrada vulneráveis para um ataque em sua rede?", color: "indigo", dir: "left" },
    { icon: EyeOff, title: "Dados Invisíveis", desc: "Seus dados de clientes estão realmente seguros ou expostos sem você saber?", color: "purple", dir: "up" },
    { icon: AlertTriangle, title: "Custo do Erro", desc: "Uma pequena falha de configuração pode custar caro para a reputação da empresa.", color: "red", dir: "right" }
  ];

  return (
    <section className="py-24 bg-black relative border-y border-white/[0.05] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            <HackerText text="Sua empresa está preparada?" speed={30} /> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">para as ameaças digitais</span>
          </h2>
        </Reveal>
        
        <div className="grid gap-6 md:grid-cols-3">
            {problems.map((item, idx) => (
                // @ts-expect-error - Ignorando tipagem estrita de direção para agilidade
                <Reveal key={idx} delay={idx * 200} direction={item.dir}>
                  <div className={`p-8 rounded-2xl bg-[#080808] border border-white/[0.08] hover:border-${item.color}-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300 group flex flex-col items-center tech-border-glow h-full hover:-translate-y-2`}>
                      <div className={`w-14 h-14 mb-6 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center text-${item.color}-400 group-hover:scale-110 group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-300`}>
                          <item.icon size={24} className="group-hover:animate-bounce" />
                      </div>
                      <p className="text-gray-300 font-medium text-lg mb-2"><HackerText text={item.title} speed={50} /></p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}