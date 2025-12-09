"use client";
import React, { useState, useEffect } from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ServiceModal } from '@/components/ui/ServiceModal';
import { servicesData } from '@/data/services';
import { Service } from '@/types';
import { Reveal } from '@/components/ui/Reveal';
import { HackerText } from '@/components/ui/HackerText';

interface ServiceCardProps {
  service: Service;
  onOpen: (s: Service) => void;
  index: number;
}

// --- CARD DESKTOP ---
const DesktopServiceCard = ({ service, onOpen }: ServiceCardProps) => {
  const Icon = service.icon;
  const color = service.color;
  const glowColor = color === 'indigo' ? '99,102,241' : 
                    color === 'purple' ? '168,85,247' : 
                    color === 'red' ? '239,68,68' : 
                    color === 'emerald' ? '16,185,129' : 
                    color === 'cyan' ? '6,182,212' : '59,130,246';

  return (
    <div 
      className={`hidden md:flex group relative p-8 rounded-3xl bg-[#080808] border border-white/[0.08] transition-all duration-500 flex-col hover:border-${color}-500/50 hover:shadow-[0_0_40px_rgba(var(--tw-shadow-color),0.15)] hover:-translate-y-2 tech-border-glow cursor-pointer overflow-hidden h-full`}
      style={{'--tw-shadow-color': glowColor} as React.CSSProperties}
      onClick={() => onOpen(service)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/0 via-${color}-500/0 to-${color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
            <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 p-3 bg-white/[0.03] border border-white/[0.08] group-hover:bg-${color}-500/20 group-hover:border-${color}-500/50 shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_20px_rgba(var(--tw-shadow-color),0.4)]`}>
                    <Icon className={`text-gray-400 group-hover:text-${color}-400 transition-colors duration-500 w-full h-full`} strokeWidth={1.5} />
                </div>
                <button className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-gray-400 transition-all duration-300 hover:bg-${color}-500 hover:text-white hover:border-${color}-400 hover:scale-110 btn-glitch shadow-lg`}>
                    <Plus size={18} />
                </button>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">{service.shortDesc}</p>
        </div>
        <div className="flex items-center gap-2 pt-6 border-t border-white/5">
            <span className={`text-[10px] font-mono uppercase tracking-wider text-${color}-400/70 group-hover:text-${color}-400 transition-colors flex items-center gap-1`}>
                <span className={`w-1.5 h-1.5 rounded-full bg-${color}-500 animate-pulse`}></span>
                Sistema Ativo
            </span>
            <ArrowUpRight size={14} className="ml-auto text-gray-600 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
};

// --- CARD MOBILE ---
const MobileServiceCard = ({ service, onOpen, index }: ServiceCardProps) => {
  const Icon = service.icon;
  const color = service.color;
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => { 
    // CORREÇÃO: setTimeout para evitar erro
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="md:hidden relative group mb-6 last:mb-0"
      onClick={() => onOpen(service)}
    >
      {index !== Object.keys(servicesData).length - 1 && (
        <div className="absolute left-8 bottom-[-24px] w-[2px] h-[24px] bg-gradient-to-b from-white/10 to-transparent border-l border-dotted border-white/20 z-0"></div>
      )}

      <div className={`relative bg-[#0A0A0E] border border-white/10 rounded-r-xl rounded-bl-xl p-5 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-[0.98] transition-transform duration-200 border-l-4 border-l-${color}-500`}>
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${color}-500/10 to-transparent h-[50%] w-full animate-[scanline_3s_linear_infinite] pointer-events-none opacity-50`}></div>
        <div className="absolute top-0 right-0 p-2"><div className={`w-2 h-2 border-t border-r border-${color}-500`}></div></div>

        <div className="flex items-start gap-4 relative z-10">
            <div className={`w-12 h-12 shrink-0 flex items-center justify-center bg-${color}-500/10 border border-${color}-500/30 rounded-lg shadow-[0_0_15px_rgba(var(--tw-shadow-color),0.3)]`} style={{'--tw-shadow-color': color === 'indigo' ? '#6366f1' : '#a855f7'} as React.CSSProperties}>
                <Icon size={20} className={`text-${color}-400`} />
            </div>

            <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                    <h3 className="text-white font-bold text-lg tracking-tight">{service.title}</h3>
                    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500 animate-ping`}></div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{service.shortDesc}</p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden flex items-center">
                    <div className={`h-full bg-${color}-500/50 w-0 transition-all duration-[1500ms] ease-out`} style={{ width: mounted ? '100%' : '0%' }}></div>
                </div>
                <div className="flex justify-between mt-1">
                    <span className="text-[9px] font-mono text-gray-600 uppercase">Sync...</span>
                    <span className={`text-[9px] font-mono text-${color}-400`}>100%</span>
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={16} className={`text-${color}-500`} />
        </div>
      </div>
    </div>
  );
};

export function ServicesSection() {
  const [modalService, setModalService] = useState<Service | null>(null);
  const servicesList = Object.values(servicesData) as unknown as Service[];

  return (
    <>
      <div className="py-24 md:py-32 relative bg-black overflow-hidden" id="servicos">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Soluções de nível militar para proteção corporativa.">
            <HackerText text="Nossos Serviços" speed={60} />
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <Reveal key={service.id} delay={index * 100} direction="up">
                <DesktopServiceCard service={service} onOpen={setModalService} index={index} />
                <MobileServiceCard service={service} onOpen={setModalService} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <ServiceModal service={modalService} onClose={() => setModalService(null)} />
    </>
  );
}