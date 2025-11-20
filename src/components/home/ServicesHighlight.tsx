import { Shield, Zap, Activity } from "lucide-react";

const servicos = [
  {
    id: 1,
    nome: "Arquitetura DevSecOps",
    descricao: "Integramos segurança em todo o ciclo de vida do seu software.",
    icon: <Shield className="text-horizon-primary" size={32} />,
  },
  {
    id: 2,
    nome: "Testes de Invasão",
    descricao:
      "Identificamos e corrigimos vulnerabilidades antes que sejam exploradas.",
    icon: <Zap className="text-horizon-secondary" size={32} />,
  },
  {
    id: 3,
    nome: "Monitoramento (SOC)",
    descricao: "Proteção 24/7 com detecção e resposta rápida a ameaças.",
    icon: <Activity className="text-green-400" size={32} />,
  },
];

export function ServicesHighlight() {
  return (
    // ADICIONADO: bg-horizon-bg para garantir fundo escuro e text-white
    <section className="bg-horizon-bg relative py-24 text-white">
      {/* Efeito de brilho de fundo para destacar a seção */}
      <div className="bg-horizon-primary/10 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Nossas Especialidades
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Focados em proteger o que mais importa com tecnologia de ponta.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              // ADICIONADO: Cores explícitas para cards
              className="group hover:border-horizon-primary/50 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 w-fit rounded-xl border border-white/5 bg-white/5 p-3 transition-colors group-hover:bg-white/10">
                {servico.icon}
              </div>
              <h3 className="group-hover:text-horizon-primary mb-3 text-xl font-semibold text-white transition-colors">
                {servico.nome}
              </h3>
              <p className="leading-relaxed text-gray-400">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
