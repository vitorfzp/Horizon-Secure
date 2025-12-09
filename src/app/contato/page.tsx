"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { HackerText } from "@/components/ui/HackerText";
import { Button } from "@/components/ui/Button";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black px-6 pt-32 pb-20">
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-20 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px]"></div>

      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        {/* Coluna Informações */}
        <div>
          <Reveal>
            <h1 className="mb-6 text-4xl font-black text-white md:text-6xl">
              <span className="text-purple-500">/</span>{" "}
              <HackerText text="Contato" />
            </h1>
            <p className="mb-12 text-xl text-gray-400">
              Pronto para blindar sua operação? Nossa equipe de resposta está em
              alerta.
            </p>
          </Reveal>

          <div className="space-y-8">
            {[
              {
                icon: Mail,
                label: "Email de Emergência",
                value: "soc@horizon-secure.com",
                delay: 100,
              },
              {
                icon: Phone,
                label: "Plantão 24/7",
                value: "+55 (11) 99999-9999",
                delay: 200,
              },
              {
                icon: MapPin,
                label: "Base de Operações",
                value: "São Paulo, SP - Av. Paulista",
                delay: 300,
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={item.delay} direction="left">
                <div className="flex items-center gap-5 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]">
                  <div className="text-purple-400">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <div className="font-mono text-xs tracking-wider text-gray-500 uppercase">
                      {item.label}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {item.value}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Coluna Formulário */}
        <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl">
          <div className="bg-grid-pattern pointer-events-none absolute inset-0 rounded-3xl opacity-10"></div>

          <Reveal delay={400} direction="up">
            <form className="relative z-10 space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-sm text-gray-400 uppercase">
                  Identificação
                </label>
                <input
                  type="text"
                  placeholder="Seu Nome / Empresa"
                  className="w-full rounded-lg border border-white/10 bg-black/50 p-4 text-white transition-all outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-sm text-gray-400 uppercase">
                  Canal de Retorno
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-white/10 bg-black/50 p-4 text-white transition-all outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-sm text-gray-400 uppercase">
                  Relatório Inicial
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva sua necessidade..."
                  className="w-full rounded-lg border border-white/10 bg-black/50 p-4 text-white transition-all outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                ></textarea>
              </div>

              <Button
                variant="primary"
                icon={Send}
                className="btn-glitch w-full"
              >
                Enviar Transmissão Criptografada
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
