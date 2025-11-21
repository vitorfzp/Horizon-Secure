import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-white/5 py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 opacity-50 blur-[120px]"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Pronto para dar o próximo passo na <br />
          <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            segurança do seu negócio?
          </span>
        </h2>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-400">
          Não espere por um incidente. Vamos conversar sobre seus desafios e
          construir um plano sob medida.
        </p>
        <Link
          href="/contato"
          className="flex transform items-center gap-2 rounded-full bg-white px-10 py-4 font-mono font-bold tracking-wider text-black uppercase shadow-lg transition-all hover:border-2 hover:border-white hover:bg-transparent hover:text-white"
        >
          Fale com um Especialista
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
