// src/components/home/HeroSection.tsx
import Link from "next/link";
import { ArrowRight, Shield, Lock, Activity } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Image com Overlay Escuro/Roxo */}
      <div className="absolute inset-0 z-0">
        {/* A imagem deve estar em public/hero-background.jpg */}
        <div
          className="h-full w-full bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/hero-background.jpg')" }}
        ></div>
        {/* Gradiente para mesclar com o fundo do site */}
        <div className="from-horizon-bg/80 via-horizon-bg/90 to-horizon-bg absolute inset-0 bg-gradient-to-b"></div>
        <div className="from-horizon-bg to-horizon-bg absolute inset-0 bg-gradient-to-r via-transparent"></div>
      </div>

      {/* Efeitos de Luz (Glow) */}
      <div className="animate-pulse-slow bg-horizon-primary/20 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[128px]"></div>
      <div className="animate-pulse-slow bg-horizon-secondary/20 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-[128px] delay-1000"></div>

      <div className="z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <span className="bg-horizon-secondary flex h-2 w-2 animate-ping rounded-full"></span>
          <span className="text-sm font-medium text-gray-300">
            Segurança Cibernética de Elite
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="animate-fade-in-up text-5xl leading-tight font-bold text-white [animation-delay:200ms] md:text-7xl">
          Proteção Além do <br />
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Horizonte Digital
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 [animation-delay:400ms] md:text-xl">
          Monitoramento 24/7, defesa ativa e inteligência artificial para
          blindar sua infraestrutura contra ameaças do futuro.
        </p>

        {/* Botões de Ação */}
        <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 [animation-delay:600ms] sm:flex-row">
          <Link
            href="/contato"
            className="from-horizon-primary to-horizon-secondary shadow-horizon-primary/25 hover:shadow-horizon-primary/50 flex w-full transform items-center justify-center gap-2 rounded-full bg-gradient-to-r px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 sm:w-auto"
          >
            Proteger Agora <ArrowRight size={20} />
          </Link>
          <Link
            href="/servicos"
            className="w-full rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
          >
            Ver Soluções
          </Link>
        </div>

        {/* Cards Flutuantes (Feature Highlights) */}
        <div className="animate-fade-in-up mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 [animation-delay:800ms] md:grid-cols-3">
          {[
            {
              icon: <Shield className="text-horizon-secondary" />,
              title: "Defesa Ativa",
              desc: "Bloqueio de ameaças em tempo real.",
            },
            {
              icon: <Lock className="text-horizon-primary" />,
              title: "Criptografia Militar",
              desc: "Seus dados blindados ponta a ponta.",
            },
            {
              icon: <Activity className="text-green-400" />,
              title: "Monitoramento 24/7",
              desc: "Vigilância constante do seu perímetro.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group hover:border-horizon-primary/50 rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md transition-colors"
            >
              <div className="mb-4 w-fit rounded-lg bg-white/5 p-3 transition-colors group-hover:bg-white/10">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
