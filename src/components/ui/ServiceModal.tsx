"use client";
import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import Link from 'next/link';

export function ServiceModal({ service, onClose }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (service) requestAnimationFrame(() => setIsVisible(true));
    else setIsVisible(false);
  }, [service]);

  if (!service) return null;
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div onClick={onClose} className={`absolute inset-0 bg-[#000000]/80 backdrop-blur-xl transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      <div ref={modalRef} className={`relative bg-[#0A0A0A] border border-white/10 w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col max-h-[85vh] transform transition-all duration-500 tech-border-glow shadow-[0_0_50px_rgba(99,102,241,0.2)] ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}>
        <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-${service.color}-600 via-${service.color}-400 to-${service.color}-600`}></div>
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"><X size={24} /></button>
        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
            <div className={`w-24 h-24 shrink-0 rounded-2xl bg-${service.color}-500/10 border border-${service.color}-500/30 p-5 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.3)] relative overflow-hidden`}>
              <Icon className={`text-${service.color}-400 w-full h-full relative z-10`} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{service.title}</h2>
              <div className="flex gap-2 flex-wrap">
                {service.benefits.map((benefit: string, i: number) => (
                  <span key={i} className={`text-xs font-mono uppercase tracking-wider font-bold px-3 py-1.5 rounded-md bg-${service.color}-500/10 text-${service.color}-300 border border-${service.color}-500/20`}>{benefit}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">{service.fullDesc}</p>
          <div className="flex justify-end pt-6 border-t border-white/10 gap-4">
             <Button variant="ghost" onClick={onClose}>Fechar</Button>
             <Link href="/contato"><Button variant="primary" icon={ArrowRight}>Falar com Especialista</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}