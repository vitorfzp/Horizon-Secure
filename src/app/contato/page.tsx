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
      <section className="py-16 text-center px-6">
        <h1 className="text-4xl font-bold md:text-6xl text-white mb-4">
          Fale <span className="text-transparent bg-clip-text bg-text-gradient">Conosco</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Estamos prontos para ouvir sobre seus desafios de segurança e propor a melhor defesa.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Coluna do Formulário */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Envie uma Mensagem
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full rounded-lg bg-horizon-bg border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:border-horizon-primary focus:ring-1 focus:ring-horizon-primary focus:outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg bg-horizon-bg border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:border-horizon-primary focus:ring-1 focus:ring-horizon-primary focus:outline-none transition-all"
                  placeholder="voce@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  className="w-full rounded-lg bg-horizon-bg border border-white/20 px-4 py-3 text-white placeholder-gray-500 focus:border-horizon-primary focus:ring-1 focus:ring-horizon-primary focus:outline-none transition-all"
                  placeholder="Como podemos ajudar a proteger seu negócio?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled
                className="w-full rounded-lg bg-horizon-primary px-6 py-4 font-bold text-white shadow-lg hover:bg-horizon-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Enviar (Lógica Pendente - Fase 3)
              </button>
            </form>
          </div>

          {/* Coluna de Informações */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h2 className="mb-6 text-2xl font-bold text-white">Canais de Atendimento</h2>
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
                    <p className="text-gray-400">Av. Digital, 123, 10º Andar<br />São Paulo - SP, Brasil</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <Clock className="text-horizon-secondary mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-white">Horário</p>
                    <p className="text-gray-400">Segunda a Sexta, das 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card Extra Decorativo */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-horizon-primary/20 to-horizon-secondary/20 border border-white/10 text-center">
                <p className="text-white font-medium">
                    "A segurança não é um destino, é uma jornada constante."
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}