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
    descricao: "Segurança integrada no ciclo de vida do software (SDLC).",
    icon: <Code className="text-horizon-primary" size={32} />,
  },
  {
    id: 2,
    nome: "Pentest & Red Team",
    descricao: "Simulação de ataques reais para identificar vulnerabilidades.",
    icon: <ShieldAlert className="text-red-500" size={32} />,
  },
  {
    id: 3,
    nome: "SOC as a Service",
    descricao: "Monitoramento 24/7 com inteligência de ameaças.",
    icon: <Activity className="text-green-400" size={32} />,
  },
];

export default function ServicosPage() {
  return (
    <div className="bg-horizon-bg min-h-screen pt-20">
      <section className="relative px-6 py-20 text-center">
        <div className="bg-horizon-secondary/10 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Nossos{" "}
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Serviços
          </span>
        </h1>
      </section>

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

      <section className="border-t border-white/10 bg-white/5 py-20">
        <div className="container mx-auto flex flex-col items-center px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Tem um Desafio Específico?
          </h2>
          <Link
            href="/contato"
            className="from-horizon-primary to-horizon-secondary flex items-center gap-2 rounded-full bg-gradient-to-r px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1"
          >
            Fale Conosco <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
