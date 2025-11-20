// src/app/servicos/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  ShieldAlert,
  Activity,
  Lock,
  FileText,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nossos Serviços | Horizon Secure",
  description: "Descubra como protegemos sua organização.",
};

const servicos = [
  {
    id: 1,
    nome: "Arquitetura DevSecOps",
    descricao:
      "Segurança integrada no ciclo de vida do software (SDLC). Automatizamos a proteção desde o primeiro commit até a produção.",
    icon: <Code className="text-horizon-primary" size={32} />,
  },
  {
    id: 2,
    nome: "Pentest & Red Team",
    descricao:
      "Simulação de ataques reais para identificar vulnerabilidades em aplicações e infraestrutura antes que criminosos o façam.",
    icon: <ShieldAlert className="text-red-500" size={32} />,
  },
  {
    id: 3,
    nome: "SOC as a Service",
    descricao:
      "Monitoramento 24/7 com inteligência de ameaças e resposta rápida a incidentes para mitigar riscos em tempo real.",
    icon: <Activity className="text-green-400" size={32} />,
  },
  {
    id: 4,
    nome: "Gestão de Identidade (IAM)",
    descricao:
      "Implementação de SSO, MFA e governança de acesso para garantir que apenas as pessoas certas acessem seus recursos.",
    icon: <Lock className="text-horizon-secondary" size={32} />,
  },
  {
    id: 5,
    nome: "Consultoria GRC",
    descricao:
      "Adequação à LGPD, ISO 27001 e PCI-DSS. Avaliação de riscos e implementação de controles de conformidade.",
    icon: <FileText className="text-horizon-accent" size={32} />,
  },
];

export default function ServicosPage() {
  return (
    <div className="bg-horizon-bg min-h-screen pt-20">
      {/* Header */}
      <section className="relative px-6 py-20 text-center">
        <div className="bg-horizon-secondary/10 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Nossos Serviços
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Soluções completas de cibersegurança desenhadas para blindar sua
          organização contra as ameaças digitais mais avançadas.
        </p>
      </section>

      {/* Grid de Serviços */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="group hover:border-horizon-primary/50 relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <div className="mb-6 w-fit rounded-xl border border-white/5 bg-white/5 p-3 transition-colors group-hover:border-white/10">
                {servico.icon}
              </div>
              <h2 className="group-hover:text-horizon-primary mb-3 text-2xl font-bold text-white transition-colors">
                {servico.nome}
              </h2>
              <p className="leading-relaxed text-gray-400">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-white/5 py-20">
        <div className="container mx-auto flex flex-col items-center px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Tem um Desafio Específico?
          </h2>
          <p className="mb-8 max-w-xl text-gray-400">
            Nossos especialistas estão prontos para desenhar uma arquitetura de
            segurança sob medida para o seu negócio.
          </p>
          <Link
            href="/contato"
            className="from-horizon-primary to-horizon-secondary shadow-horizon-primary/20 hover:shadow-horizon-primary/40 flex items-center gap-2 rounded-full bg-gradient-to-r px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1"
          >
            Fale Conosco <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
