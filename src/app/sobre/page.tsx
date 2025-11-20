// src/app/sobre/page.tsx
import { Metadata } from "next";
import { Shield, Target, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós | Horizon Secure",
  description: "Conheça nossa missão, valores e o que nos move.",
};

export default function SobrePage() {
  return (
    <div className="bg-horizon-bg min-h-screen">
      {/* Seção 1: Header da Página (Hero) */}
      <section className="relative py-24 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-horizon-primary/5 blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold md:text-5xl text-white mb-6 animate-fade-in-up">
            Sobre a <span className="text-transparent bg-clip-text bg-text-gradient">Horizon Secure</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400 animate-fade-in-up [animation-delay:200ms]">
            Nossa jornada para tornar o mundo digital um lugar mais seguro, blindando empresas contra as ameaças do futuro.
          </p>
        </div>
      </section>

      {/* Seção 2: Nossa Missão e Valores */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Card Missão */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-horizon-primary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-horizon-primary/10 text-horizon-primary">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Nossa Missão</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Prover soluções de segurança cibernética de elite, integrando
                defesa proativa e inteligência de ameaças para proteger os ativos
                críticos dos nossos clientes.
              </p>
              <p>
                Atuamos como uma extensão da sua equipe, garantindo
                resiliência e confiança no cenário digital. Acreditamos que a segurança 
                não é um produto, mas um processo contínuo.
              </p>
            </div>
          </div>

          {/* Card Valores */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-horizon-secondary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-horizon-secondary/10 text-horizon-secondary">
                <Shield size={32} />
              </div>
              <h2 className="text-2xl font-bold text-white">Nossos Valores</h2>
            </div>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Zap className="text-horizon-accent shrink-0 mt-1" size={20} />
                <span><strong className="text-white">Integridade:</strong> Transparência e ética em todas as nossas ações.</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="text-horizon-accent shrink-0 mt-1" size={20} />
                <span><strong className="text-white">Excelência:</strong> Busca incansável pela perfeição técnica e estratégica.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="text-horizon-accent shrink-0 mt-1" size={20} />
                <span><strong className="text-white">Parceria:</strong> O sucesso do cliente é o nosso sucesso.</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="text-horizon-accent shrink-0 mt-1" size={20} />
                <span><strong className="text-white">Inovação:</strong> Estar sempre à frente das ameaças emergentes.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}