"use client";
import React from "react";
import { Unlock, EyeOff, AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HackerText } from "@/components/ui/HackerText";

export function ProblemSection() {
  const problems = [
    {
      icon: Unlock,
      title: "Pontos de Entrada",
      desc: "Você sabe exatamente quais são as portas de entrada vulneráveis para um ataque em sua rede?",
      color: "indigo",
      dir: "left",
    },
    {
      icon: EyeOff,
      title: "Dados Invisíveis",
      desc: "Seus dados de clientes estão realmente seguros ou expostos sem você saber?",
      color: "purple",
      dir: "up",
    },
    {
      icon: AlertTriangle,
      title: "Custo do Erro",
      desc: "Uma pequena falha de configuração pode custar caro para a reputação da empresa.",
      color: "red",
      dir: "right",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-black py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2 className="mb-16 text-3xl font-bold text-white md:text-4xl">
            <HackerText text="Sua empresa está preparada?" speed={30} /> <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              para as ameaças digitais
            </span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((item, idx) => (
            // @ts-expect-error - Ignorando erro de tipagem estrita no 'dir' para agilidade
            <Reveal key={idx} delay={idx * 200} direction={item.dir}>
              <div
                className={`rounded-2xl border border-white/[0.08] bg-[#080808] p-8 hover:border-${item.color}-500/30 group tech-border-glow flex h-full flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]`}
              >
                <div
                  className={`mb-6 h-14 w-14 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center text-${item.color}-400 group-hover:scale-110 group-hover:bg-${item.color}-500 transition-all duration-300 group-hover:text-white`}
                >
                  <item.icon size={24} className="group-hover:animate-bounce" />
                </div>
                <p className="mb-2 text-lg font-medium text-gray-300">
                  <HackerText text={item.title} speed={50} />
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
