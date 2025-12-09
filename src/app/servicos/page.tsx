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
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HackerText } from "@/components/ui/HackerText";
import { Button } from "@/components/ui/Button";

// Mapeamento de dados com cores para o efeito "Tech Glow"
const servicos = [
  {
    id: 1,
    nome: "Arquitetura DevSecOps",
    descricao:
      "Segurança integrada no ciclo de vida do software (SDLC). Automatizamos a proteção desde o primeiro commit até a produção.",
    icon: Code,
    color: "indigo", // Cor do brilho
    stats: "CI/CD Seguro",
  },
  {
    id: 2,
    nome: "Pentest & Red Team",
    descricao:
      "Simulação de ataques reais para identificar vulnerabilidades em aplicações e infraestrutura antes que criminosos o façam.",
    icon: ShieldAlert,
    color: "red",
    stats: "Ataque Simulado",
  },
  {
    id: 3,
    nome: "SOC as a Service",
    descricao:
      "Monitoramento 24/7 com inteligência de ameaças e resposta rápida a incidentes para mitigar riscos em tempo real.",
    icon: Activity,
    color: "emerald",
    stats: "Monitoramento 24/7",
  },
  {
    id: 4,
    nome: "Gestão de Identidade (IAM)",
    descricao:
      "Implementação de SSO, MFA e governança de acesso para garantir que apenas as pessoas certas acessem seus recursos.",
    icon: Lock,
    color: "purple",
    stats: "Zero Trust",
  },
  {
    id: 5,
    nome: "Consultoria GRC",
    descricao:
      "Adequação à LGPD, ISO 27001 e PCI-DSS. Avaliação de riscos e implementação de controles de conformidade.",
    icon: FileText,
    color: "cyan",
    stats: "Compliance 100%",
  },
];

export default function ServicosPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-24 pb-20 md:pt-32">
      {/* Background Decor */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-[0.05]"></div>
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]"></div>

      {/* Header */}
      <section className="relative z-10 px-6 pb-20 text-center">
        <Reveal>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              <HackerText text="Nossos Serviços" />
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto max-w-2xl border-l-2 border-indigo-500/30 pl-4 text-lg leading-relaxed text-gray-400 md:border-none md:pl-0">
            Soluções completas de cibersegurança desenhadas para blindar sua
            organização contra as ameaças digitais mais avançadas.
          </p>
        </Reveal>
      </section>

      {/* Grid de Serviços */}
      <section className="relative z-10 container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, index) => {
            // Definição da cor do brilho baseada no objeto
            const glowColor =
              servico.color === "indigo"
                ? "99,102,241"
                : servico.color === "purple"
                  ? "168,85,247"
                  : servico.color === "red"
                    ? "239,68,68"
                    : servico.color === "emerald"
                      ? "16,185,129"
                      : servico.color === "cyan"
                        ? "6,182,212"
                        : "59,130,246";

            return (
              <Reveal key={servico.id} delay={index * 150} direction="up">
                <div
                  className={`group relative h-full rounded-3xl border border-white/[0.08] bg-[#080808] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-${servico.color}-500/50 tech-border-glow flex flex-col overflow-hidden hover:shadow-[0_0_40px_rgba(var(--tw-shadow-color),0.15)]`}
                  style={
                    { "--tw-shadow-color": glowColor } as React.CSSProperties
                  }
                >
                  {/* Gradiente de Fundo no Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${servico.color}-500/0 via-${servico.color}-500/0 to-${servico.color}-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  ></div>

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Header do Card */}
                    <div className="mb-6 flex items-start justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] group-hover:bg-${servico.color}-500/20 group-hover:border-${servico.color}-500/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--tw-shadow-color),0.4)]`}
                      >
                        <servico.icon
                          size={28}
                          className={`text-gray-400 group-hover:text-${servico.color}-400 transition-colors`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div
                        className={`h-2 w-2 rounded-full bg-${servico.color}-500 animate-pulse shadow-[0_0_10px_rgba(var(--tw-shadow-color),1)]`}
                      ></div>
                    </div>

                    {/* Título e Descrição */}
                    <h2 className="mb-4 text-2xl font-bold text-white transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">
                      {servico.nome}
                    </h2>
                    <p className="mb-8 flex-grow text-sm leading-relaxed text-gray-400">
                      {servico.descricao}
                    </p>

                    {/* Footer do Card (Firula) */}
                    <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                      <span
                        className={`font-mono text-[10px] tracking-widest uppercase text-${servico.color}-400/80 flex items-center gap-2`}
                      >
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
      <section className="relative overflow-hidden border-t border-white/10 bg-white/[0.02] py-24">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px]"></div>

        <div className="relative z-10 container mx-auto flex flex-col items-center px-6 text-center">
          <Reveal>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Tem um{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Desafio Específico?
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mb-10 max-w-xl text-lg text-gray-400">
              Nossos especialistas estão prontos para desenhar uma arquitetura
              de segurança sob medida para o seu negócio.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <Link href="/contato">
              <Button
                variant="primary"
                icon={ArrowRight}
                className="btn-glitch px-10 py-4"
              >
                Fale Conosco
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
