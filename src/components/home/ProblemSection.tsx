import React from 'react';
import { Unlock, EyeOff, AlertTriangle } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    { icon: Unlock, title: "Pontos de Entrada", desc: "Você sabe exatamente quais são as portas de entrada vulneráveis para um ataque em sua rede?", color: "indigo" },
    { icon: EyeOff, title: "Dados Invisíveis", desc: "Seus dados de clientes estão realmente seguros ou expostos sem você saber?", color: "purple" },
    { icon: AlertTriangle, title: "Custo do Erro", desc: "Uma pequena falha de configuração pode custar caro para a reputação da empresa.", color: "red" }
  ];

  return (
    <section className="py-24 bg-black relative border-y border-white/[0.05] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          Sua empresa está preparada para as <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">ameaças digitais?</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
            {problems.map((item, idx) => (
                <div key={idx} className={`p-8 rounded-2xl bg-[#080808] border border-white/[0.08] hover:border-${item.color}-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300 group flex flex-col items-center tech-border-glow`}>
                    <div className={`w-14 h-14 mb-6 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center text-${item.color}-400 group-hover:scale-110 group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-300`}>
                        <item.icon size={24} />
                    </div>
                    <p className="text-gray-300 font-medium text-lg mb-2">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}