import React from "react";
import { Unlock, EyeOff, AlertTriangle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-black py-24">
      {/* Efeitos de Fundo */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-900/10 blur-[100px]"></div>
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-indigo-900/10 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-16 text-3xl font-bold text-white md:text-4xl">
          Sua empresa está preparada para as{" "}
          <span className="animate-pulse-slow bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ameaças digitais?
          </span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group tech-border-glow flex flex-col items-center rounded-2xl border border-white/[0.08] bg-[#080808] p-8 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white">
              <Unlock size={24} />
            </div>
            <p className="mb-2 text-lg font-medium text-gray-300">
              Pontos de Entrada
            </p>
            <p className="text-sm leading-relaxed text-gray-500">
              Você sabe exatamente quais são as portas de entrada vulneráveis
              para um ataque em sua rede?
            </p>
          </div>

          {/* Card 2 */}
          <div className="group tech-border-glow flex flex-col items-center rounded-2xl border border-white/[0.08] bg-[#080808] p-8 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white">
              <EyeOff size={24} />
            </div>
            <p className="mb-2 text-lg font-medium text-gray-300">
              Dados Invisíveis
            </p>
            <p className="text-sm leading-relaxed text-gray-500">
              Seus dados de clientes e informações financeiras estão realmente
              seguros ou expostos sem você saber?
            </p>
          </div>

          {/* Card 3 */}
          <div className="group tech-border-glow flex flex-col items-center rounded-2xl border border-white/[0.08] bg-[#080808] p-8 transition-all duration-300 hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white">
              <AlertTriangle size={24} />
            </div>
            <p className="mb-2 text-lg font-medium text-gray-300">
              Custo do Erro
            </p>
            <p className="text-sm leading-relaxed text-gray-500">
              Uma pequena falha de configuração pode acabar custando caro para a
              reputação e o caixa da empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
