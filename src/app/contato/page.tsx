// src/app/contato/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Horizon Secure",
  description: "Entre em contato com nossos especialistas em segurança.",
};

export default function ContatoPage() {
  return (
    <div className="bg-white">
      {/* Seção 1: Header da Página (Hero) */}
      <section className="bg-gray-800 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Fale Conosco</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Estamos prontos para ouvir sobre seus desafios de segurança.
          </p>
        </div>
      </section>

      {/* Seção 2: Formulário de Contato e Informações */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Coluna do Formulário */}
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-gray-900">
              Envie-nos uma Mensagem
            </h2>

            {/* NOTA DE ENGENHARIA: 
              Este é um formulário UI-only (Fase 1). 
              A lógica de submissão (useState, handleSubmit) e a
              segurança (ReCAPTCHA, Server-Side Validation) 
              serão implementadas na Fase 3.
            */}
            <form className="space-y-6">
              {/* Campo Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Campo E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Campo Mensagem */}
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Botão de Envio (desabilitado por enquanto) */}
              <div>
                <button
                  type="submit"
                  disabled // Habilitaremos na Fase 3
                  className="w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  Enviar (Lógica Pendente - Fase 3)
                </button>
              </div>
            </form>
          </div>

          {/* Coluna de Informações */}
          <div className="rounded-lg bg-gray-50 p-8">
            <h2 className="mb-6 text-3xl font-semibold text-gray-900">
              Informações de Contato
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong className="block text-gray-800">E-mail:</strong>
                contato@horizon-secure.com
              </p>
              <p className="text-gray-700">
                <strong className="block text-gray-800">Telefone:</strong>
                +55 (11) 98765-4321
              </p>
              <p className="text-gray-700">
                <strong className="block text-gray-800">Endereço:</strong>
                Av. Digital, 123, 10º Andar, São Paulo - SP, Brasil
              </p>
              <p className="text-gray-700">
                <strong className="block text-gray-800">Horário:</strong>
                Segunda a Sexta, das 9h às 18h.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
