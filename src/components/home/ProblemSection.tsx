import React from "react";
import { Unlock, EyeOff, AlertTriangle } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: Unlock,
      title: "Pontos de Entrada",
      desc: "Você sabe exatamente quais são as portas de entrada vulneráveis para um ataque em sua rede?",
      color: "indigo",
    },
    {
      icon: EyeOff,
      title: "Dados Invisíveis",
      desc: "Seus dados de clientes e informações financeiras estão realmente seguros ou expostos sem você saber?",
      color: "purple",
    },
    {
      icon: AlertTriangle,
      title: "Custo do Erro",
      desc: "Uma pequena falha de configuração pode acabar custando caro para a reputação e o caixa da empresa.",
      color: "red",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-black py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-16 text-3xl font-bold text-white md:text-4xl">
          Sua empresa está preparada para as{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ameaças digitais?
          </span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-white/[0.08] bg-[#080808] p-8 hover:border-${item.color}-500/30 group tech-border-glow flex flex-col items-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]`}
            >
              <div
                className={`mb-6 h-14 w-14 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center text-${item.color}-400 group-hover:scale-110 group-hover:bg-${item.color}-500 transition-all duration-300 group-hover:text-white`}
              >
                <item.icon size={24} />
              </div>
              <p className="mb-2 text-lg font-medium text-gray-300">
                {item.title}
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
