// src/app/contato/page.tsx
import { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato | Horizon Secure",
  description: "Entre em contato com nossos especialistas em segurança.",
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
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Estamos prontos para ouvir sobre seus desafios de segurança e propor a
          melhor defesa.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Coluna do Formulário */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Envie uma Mensagem
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="bg-horizon-bg focus:border-horizon-primary focus:ring-horizon-primary w-full rounded-lg border border-white/20 px-4 py-3 text-white placeholder-gray-500 transition-all focus:ring-1 focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-horizon-bg focus:border-horizon-primary focus:ring-horizon-primary w-full rounded-lg border border-white/20 px-4 py-3 text-white placeholder-gray-500 transition-all focus:ring-1 focus:outline-none"
                  placeholder="voce@empresa.com"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  className="bg-horizon-bg focus:border-horizon-primary focus:ring-horizon-primary w-full rounded-lg border border-white/20 px-4 py-3 text-white placeholder-gray-500 transition-all focus:ring-1 focus:outline-none"
                  placeholder="Como podemos ajudar a proteger seu negócio?"
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

          {/* Coluna de Informações */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Canais de Atendimento
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-horizon-secondary mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-white">E-mail</p>
                    <p className="text-gray-400">contato@horizon-secure.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-horizon-secondary mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-white">Telefone</p>
                    <p className="text-gray-400">+55 (11) 98765-4321</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-horizon-secondary mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-white">Endereço</p>
                    <p className="text-gray-400">
                      Av. Digital, 123, 10º Andar
                      <br />
                      São Paulo - SP, Brasil
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-horizon-secondary mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-white">Horário</p>
                    <p className="text-gray-400">
                      Segunda a Sexta, das 9h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Extra Decorativo */}
            <div className="from-horizon-primary/20 to-horizon-secondary/20 rounded-2xl border border-white/10 bg-gradient-to-br p-8 text-center">
              <p className="font-medium text-white">
                &quot;A segurança não é um destino, é uma jornada
                constante.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
