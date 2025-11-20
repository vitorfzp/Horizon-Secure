import { Metadata } from "next";
import { Shield, Target, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós | Horizon Secure",
  description: "Conheça nossa missão, valores e o que nos move.",
};

export default function SobrePage() {
  return (
    <div className="bg-horizon-bg min-h-screen pt-20">
      {/* Header da Página */}
      <section className="relative overflow-hidden py-24 text-center">
        <div className="bg-horizon-primary/5 absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 blur-[100px]"></div>
        <div className="container mx-auto px-6">
          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold text-white md:text-5xl">
            Sobre a{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Horizon Secure
            </span>
          </h1>
          <p className="animate-fade-in-up mx-auto mt-4 max-w-2xl text-lg text-gray-400 [animation-delay:200ms]">
            Nossa jornada para tornar o mundo digital um lugar mais seguro,
            blindando empresas contra as ameaças do futuro.
          </p>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card Missão */}
          <div className="group hover:border-horizon-primary/50 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300">
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-horizon-primary/10 text-horizon-primary rounded-lg p-3">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Nossa Missão</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-gray-400">
              <p>
                Prover soluções de segurança cibernética de elite, integrando
                defesa proativa e inteligência de ameaças para proteger os
                ativos críticos dos nossos clientes.
              </p>
            </div>
          </div>

          {/* Card Valores */}
          <div className="group hover:border-horizon-secondary/50 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300">
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-horizon-secondary/10 text-horizon-secondary rounded-lg p-3">
                <Shield size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Nossos Valores</h2>
            </div>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Zap className="text-horizon-accent mt-1 shrink-0" size={20} />
                <span>
                  <strong className="text-white">Integridade:</strong>{" "}
                  Transparência e ética.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users
                  className="text-horizon-accent mt-1 shrink-0"
                  size={20}
                />
                <span>
                  <strong className="text-white">Parceria:</strong> O sucesso do
                  cliente é o nosso sucesso.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
