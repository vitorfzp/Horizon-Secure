"use client";
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ServiceModal } from '@/components/ui/ServiceModal';
import { servicesData } from '@/data/services';

// Card Interno
const ServiceCard = ({ service, onOpen }: any) => {
  const Icon = service.icon;
  const color = service.color;
  return (
    <div className={`group relative p-6 rounded-2xl bg-[#080808] border border-white/[0.08] transition-all duration-500 flex flex-col hover:border-${color}-500/50 hover:shadow-[0_0_25px_rgba(var(--tw-shadow-color),0.15)] hover:translate-y-[-4px] tech-border-glow`}
         style={{'--tw-shadow-color': color === 'indigo' ? '99,102,241' : '59,130,246'} as React.CSSProperties}>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
           <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 p-3 bg-white/[0.03] border border-white/[0.08] group-hover:bg-${color}-500/10 group-hover:border-${color}-500/50`}>
             <Icon className={`text-gray-400 group-hover:text-${color}-400 transition-colors duration-500 w-full h-full`} strokeWidth={1.5} />
           </div>
           <button onClick={() => onOpen(service)} className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-gray-400 transition-all duration-300 hover:bg-${color}-500/80 hover:text-white hover:scale-110`}>
             <Plus size={16} />
           </button>
        </div>
        <h3 className="text-lg font-semibold text-gray-100 mb-3 group-hover:text-white transition-colors">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.shortDesc}</p>
      </div>
    </div>
  );
};

// Componente Principal Exportado
export function ServicesSection() {
  const [modalService, setModalService] = useState(null);

  return (
    <>
      <div className="py-24 animate-fade-in relative" id="servicos">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* CORREÇÃO AQUI: Usando chaves {} para a string com aspas simples */}
          <SectionTitle subtitle={"Clique no '+' para ver detalhes completos."}>Nossos Serviços</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(servicesData).map((service: any) => (
              <ServiceCard key={service.id} service={service} onOpen={setModalService} />
            ))}
          </div>
        </div>
      </div>
      <ServiceModal service={modalService} onClose={() => setModalService(null)} />
    </>
  );
}
