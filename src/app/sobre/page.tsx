"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { HackerText } from "@/components/ui/HackerText";
import { Shield, Users, Target, Zap } from "lucide-react";

export default function SobrePage() {
  const values = [
    {
      icon: Shield,
      title: "Integridade",
      text: "Transparência total em cada relatório e diagnóstico.",
    },
    {
      icon: Users,
      title: "Parceria",
      text: "Atuamos como extensão do seu time, não apenas fornecedores.",
    },
    {
      icon: Target,
      title: "Precisão",
      text: "Foco cirúrgico nas vulnerabilidades que realmente importam.",
    },
    {
      icon: Zap,
      title: "Velocidade",
      text: "Resposta a incidentes em tempo recorde.",
    },
  ];

  return (
    <div className="min-h-screen bg-black px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h1 className="mb-8 text-4xl font-black text-white md:text-6xl">
            <span className="text-indigo-500">/</span>{" "}
            <HackerText text="Quem Somos" />
          </h1>
        </Reveal>

        <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <p className="text-xl leading-relaxed text-gray-300">
              A <span className="font-bold text-white">Horizon Secure</span>{" "}
              nasceu da necessidade de proteger o futuro digital. Em um mundo
              onde dados são o novo petróleo, nós somos a fortaleza que garante
              a continuidade do seu negócio.
            </p>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6">
              <div className="absolute top-0 right-0 h-20 w-20 rounded-full bg-indigo-500/20 blur-2xl"></div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Nossa Missão
              </h3>
              <p className="text-gray-400">
                "Elevar o padrão de segurança cibernética, tornando defesas de
                nível militar acessíveis para empresas que constroem o futuro."
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            <HackerText text="Nossos Valores" />
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up">
              <div className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-indigo-500/50">
                <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400 transition-all group-hover:bg-indigo-600 group-hover:text-white">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
