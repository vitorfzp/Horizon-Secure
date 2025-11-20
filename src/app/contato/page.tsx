import { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato | Horizon Secure",
  description: "Entre em contato com nossos especialistas.",
};

export default function ContatoPage() {
  return (
    <div className="bg-horizon-bg min-h-screen pt-20">
      <section className="px-6 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Fale{" "}
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Conosco
          </span>
        </h1>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Envie uma Mensagem
            </h2>
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="bg-horizon-bg focus:border-horizon-primary w-full rounded-lg border border-white/20 px-4 py-3 text-white transition-all focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  E-mail
                </label>
                <input
                  type="email"
                  className="bg-horizon-bg focus:border-horizon-primary w-full rounded-lg border border-white/20 px-4 py-3 text-white transition-all focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  className="bg-horizon-bg focus:border-horizon-primary w-full rounded-lg border border-white/20 px-4 py-3 text-white transition-all focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled
                className="bg-horizon-primary hover:bg-horizon-primary/90 w-full rounded-lg px-6 py-4 font-bold text-white shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-50"
              >
                Enviar (Lógica Pendente - Fase 3)
              </button>
            </form>
          </div>

          <div className="space-y-8 text-gray-400">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">Canais</h2>
              <p className="flex items-center gap-3">
                <Mail className="text-horizon-secondary" />{" "}
                contato@horizon-secure.com
              </p>
              <p className="mt-4 flex items-center gap-3">
                <MapPin className="text-horizon-secondary" /> São Paulo - SP
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
