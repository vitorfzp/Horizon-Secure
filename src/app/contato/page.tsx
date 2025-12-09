"use client";
import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { HackerText } from '@/components/ui/HackerText';
import { Button } from '@/components/ui/Button';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Coluna Informações */}
        <div>
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="text-purple-500">/</span> <HackerText text="Contato" />
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Pronto para blindar sua operação? Nossa equipe de resposta está em alerta.
            </p>
          </Reveal>

          <div className="space-y-8">
            {[
              { icon: Mail, label: "Email de Emergência", value: "soc@horizon-secure.com", delay: 100 },
              { icon: Phone, label: "Plantão 24/7", value: "+55 (11) 99999-9999", delay: 200 },
              { icon: MapPin, label: "Base de Operações", value: "São Paulo, SP - Av. Paulista", delay: 300 }
            ].map((item, idx) => (
              <Reveal key={idx} delay={item.delay} direction="left">
                <div className="flex items-center gap-5 p-4 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <div className="text-purple-400"><item.icon size={28} /></div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">{item.label}</div>
                    <div className="text-lg text-white font-bold">{item.value}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Coluna Formulário */}
        <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 shadow-2xl relative">
           <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none rounded-3xl"></div>
           
           <Reveal delay={400} direction="up">
             <form className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400 uppercase">Identificação</label>
                  <input type="text" placeholder="Seu Nome / Empresa" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400 uppercase">Canal de Retorno</label>
                  <input type="email" placeholder="seu@email.com" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400 uppercase">Relatório Inicial</label>
                  <textarea rows={4} placeholder="Descreva sua necessidade..." className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"></textarea>
                </div>

                <Button variant="primary" icon={Send} className="w-full btn-glitch">
                  Enviar Transmissão Criptografada
                </Button>
             </form>
           </Reveal>
        </div>

      </div>
    </div>
  );
}