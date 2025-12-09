"use client";
import React from "react";
import Link from "next/link";
import {
  Code,
  ShieldAlert,
  Activity,
  Lock,
  FileText,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HackerText } from "@/components/ui/HackerText";
import { Button } from "@/components/ui/Button";

// Mapeamento de dados com cores para o efeito "Tech Glow"
const servicos = [
  {
    id: 1,
    nome: "Arquitetura DevSecOps",
    descricao: "Segurança integrada no ciclo de vida do software (SDLC). Automatizamos a proteção desde o primeiro commit até a produção.",
    icon: Code,
    color: "indigo", // Cor do brilho
    stats: "CI/CD Seguro"
  },
  {
    id: 2,
    nome: "Pentest & Red Team",
    descricao: "Simulação de ataques reais para identificar vulnerabilidades em aplicações e infraestrutura antes que criminosos o façam.",
    icon: ShieldAlert,
    color: "red",
    stats: "Ataque Simulado"
  },
  {
    id: 3,
    nome: "SOC as a Service",
    descricao: "Monitoramento 24/7 com inteligência de ameaças e resposta rápida a incidentes para mitigar riscos em tempo real.",
    icon: Activity,
    color: "emerald",
    stats: "Monitoramento 24/7"
  },
  {
    id: 4,
    nome: "Gestão de Identidade (IAM)",
    descricao: "Implementação de SSO, MFA e governança de acesso para garantir que apenas as pessoas certas acessem seus recursos.",
    icon: Lock,
    color: "purple",
    stats: "Zero Trust"
  },
  {
    id: 5,
    nome: "Consultoria GRC",
    descricao: "Adequação à LGPD, ISO 27001 e PCI-DSS. Avaliação de riscos e implementação de controles de conformidade.",
    icon: FileText,
    color: "cyan",
    stats: "Compliance 100%"
  },
];

export default function ServicosPage() {
  return (
    <div className="bg-black min-h-screen pt-24 md:pt-32 pb-20 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <section className="relative px-6 pb-20 text-center z-10">
        <Reveal>
          <h1 className="mb-6 text-4xl md:text-6xl font-black text-white tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              <HackerText text="Nossos Serviços" />
            </span>
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 leading-relaxed border-l-2 border-indigo-500/30 pl-4 md:border-none md:pl-0">
            Soluções completas de cibersegurança desenhadas para blindar sua
            organização contra as ameaças digitais mais avançadas.
          </p>
        </Reveal>
      </section>

      {/* Grid de Serviços */}
      <section className="container mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico, index) => {
            
            // Definição da cor do brilho baseada no objeto
            const glowColor = servico.color === 'indigo' ? '99,102,241' : 
                              servico.color === 'purple' ? '168,85,247' : 
                              servico.color === 'red' ? '239,68,68' : 
                              servico.color === 'emerald' ? '16,185,129' : 
                              servico.color === 'cyan' ? '6,182,212' : '59,130,246';

            return (
              <Reveal key={servico.id} delay={index * 150} direction="up">
                <div
                  className={`group relative h-full p-8 rounded-3xl bg-[#080808] border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:border-${servico.color}-500/50 hover:shadow-[0_0_40px_rgba(var(--tw-shadow-color),0.15)] tech-border-glow overflow-hidden flex flex-col`}
                  style={{'--tw-shadow-color': glowColor} as React.CSSProperties}
                >
                  {/* Gradiente de Fundo no Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${servico.color}-500/0 via-${servico.color}-500/0 to-${servico.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header do Card */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] group-hover:bg-${servico.color}-500/20 group-hover:border-${servico.color}-500/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--tw-shadow-color),0.4)]`}>
                        <servico.icon size={28} className={`text-gray-400 group-hover:text-${servico.color}-400 transition-colors`} strokeWidth={1.5} />
                      </div>
                      <div className={`w-2 h-2 rounded-full bg-${servico.color}-500 shadow-[0_0_10px_rgba(var(--tw-shadow-color),1)] animate-pulse`}></div>
                    </div>

                    {/* Título e Descrição */}
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {servico.nome}
                    </h2>
                    <p className="leading-relaxed text-gray-400 text-sm mb-8 flex-grow">
                      {servico.descricao}
                    </p>

                    {/* Footer do Card (Firula) */}
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                      <span className={`text-[10px] uppercase tracking-widest font-mono text-${servico.color}-400/80 flex items-center gap-2`}>
                        <CheckCircle2 size={12} /> {servico.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto flex flex-col items-center px-6 text-center relative z-10">
          <Reveal>
            <h2 className="mb-6 text-3xl md:text-5xl font-bold text-white tracking-tight">
              Tem um <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Desafio Específico?</span>
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="mb-10 max-w-xl text-gray-400 text-lg">
              Nossos especialistas estão prontos para desenhar uma arquitetura de
              segurança sob medida para o seu negócio.
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <Link href="/contato">
              <Button variant="primary" icon={ArrowRight} className="btn-glitch px-10 py-4">
                 Fale Conosco
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}