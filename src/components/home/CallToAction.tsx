import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="border-t border-white/10 bg-white/5 py-24">
      <div className="container mx-auto flex flex-col items-center px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Pronto para Elevar sua Segurança?
        </h2>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
          Não espere por um incidente. Vamos conversar sobre como a Horizon
          Secure pode fortalecer suas defesas hoje mesmo.
        </p>

        <Link
          href="/contato"
          className="from-horizon-primary to-horizon-secondary shadow-horizon-primary/25 hover:shadow-horizon-primary/50 flex transform items-center gap-2 rounded-full bg-gradient-to-r px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1"
        >
          Fale com um Especialista
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
