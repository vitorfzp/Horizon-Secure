// src/app/servicos/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Code, ShieldAlert, Activity, Lock, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nossos Serviços | Horizon Secure",
  description: "Descubra como protegemos sua organização.",
};

const servicos = [
  {
    id: 1,
    nome: "Arquitetura DevSecOps",
    descricao: "Segurança integrada no ciclo de vida do software (SDLC). Automatizamos a proteção desde o primeiro commit até a produção.",
    icon: <Code className="text-horizon-primary" size={32} />,
  },
  {
    id: 2,
    nome: "Pentest & Red Team",
    descricao: "Simulação de ataques reais para identificar vulnerabilidades em aplicações e infraestrutura antes que criminosos o façam.",
    icon: <ShieldAlert className="text-red-500" size={32} />,
  },
  {
    id: 3,
    nome: "SOC as a Service",
    descricao: "Monitoramento 24/7 com inteligência de ameaças e resposta rápida a incidentes para mitigar riscos em tempo real.",
    icon: <Activity className="text-green-400" size={32} />,
  },
  {
    id: 4,
    nome: "Gestão de Identidade (IAM)",
    descricao: "Implementação de SSO, MFA e governança de acesso para garantir que apenas as pessoas certas acessem seus recursos.",
    icon: <Lock className="text-horizon-secondary" size={32} />,
  },
  {
    id: 5,
    nome: "Consultoria GRC",
    descricao: "Adequação à LGPD, ISO 27001 e PCI-DSS. Avaliação de riscos e implementação de controles de conformidade.",
    icon: <FileText className="text-horizon-accent" size={32} />,
  },
];

export default function ServicosPage() {
  return (
    <div className="bg-horizon-bg min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 text-center px-6 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-horizon-secondary/10 blur-[120px] -z-10"></div>
        <h1 className="text-4xl font-bold md:text-6xl text-white mb-6">
          Nossos <span className="text-transparent bg-clip-text bg-text-gradient">Serviços</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Soluções completas de cibersegurança desenhadas para blindar sua organização contra as ameaças digitais mais avançadas.
        </p>
      </section>

      {/* Grid de Serviços */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-horizon-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 p-3 w-fit rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                {servico.icon}
              </div>
              <h2 className="mb-3 text-2xl font-bold text-white group-hover:text-horizon-primary transition-colors">
                {servico.nome}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10 bg-white/5">
        <div className="container mx-auto flex flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tem um Desafio Específico?
          </h2>
          <p className="mb-8 max-w-xl text-gray-400">
            Nossos especialistas estão prontos para desenhar uma arquitetura de segurança sob medida para o seu negócio.
          </p>
          <Link
            href="/contato"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-horizon-primary to-horizon-secondary px-8 py-4 font-bold text-white shadow-lg shadow-horizon-primary/20 hover:shadow-horizon-primary/40 hover:-translate-y-1 transition-all"
          >
            Fale Conosco <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}