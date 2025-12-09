"use client";
import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { HackerText } from '@/components/ui/HackerText';
import { Shield, Users, Target, Zap } from 'lucide-react';

export default function SobrePage() {
  const values = [
    { icon: Shield, title: "Integridade", text: "Transparência total em cada relatório e diagnóstico." },
    { icon: Users, title: "Parceria", text: "Atuamos como extensão do seu time, não apenas fornecedores." },
    { icon: Target, title: "Precisão", text: "Foco cirúrgico nas vulnerabilidades que realmente importam." },
    { icon: Zap, title: "Velocidade", text: "Resposta a incidentes em tempo recorde." }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">
            <span className="text-indigo-500">/</span> <HackerText text="Quem Somos" />
          </h1>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <Reveal direction="left">
            <p className="text-xl text-gray-300 leading-relaxed">
              A <span className="text-white font-bold">Horizon Secure</span> nasceu da necessidade de proteger o futuro digital. Em um mundo onde dados são o novo petróleo, nós somos a fortaleza que garante a continuidade do seu negócio.
            </p>
          </Reveal>
          <Reveal direction="right" delay={200}>
             <div className="p-6 border border-indigo-500/30 bg-indigo-500/5 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/20 blur-2xl rounded-full"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
                <p className="text-gray-400">&quot;Elevar o padrão de segurança cibernética, tornando defesas de nível militar acessíveis para empresas que constroem o futuro.&quot;</p>
             </div>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <h2 className="text-3xl font-bold text-white mb-12 text-center"><HackerText text="Nossos Valores" /></h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up">
              <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/50 transition-colors group">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-all">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}