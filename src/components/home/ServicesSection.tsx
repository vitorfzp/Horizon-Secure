"use client";
import React, { useState, useEffect } from "react";
import { Plus, ArrowUpRight, Check, Zap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { servicesData } from "@/data/services";
import { Service } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { HackerText } from "@/components/ui/HackerText";

interface ServiceCardProps {
  service: Service;
  onOpen: (s: Service) => void;
  index: number;
}

// --- CARD DESKTOP (Clean & Premium) ---
const DesktopServiceCard = ({ service, onOpen, index }: ServiceCardProps) => {
  const Icon = service.icon;
  const color = service.color;
  const glowColor =
    color === "indigo"
      ? "99,102,241"
      : color === "purple"
        ? "168,85,247"
        : color === "red"
          ? "239,68,68"
          : color === "emerald"
            ? "16,185,129"
            : color === "cyan"
              ? "6,182,212"
              : "59,130,246";

  return (
    <div
      className={`group relative hidden flex-col rounded-3xl border border-white/[0.08] bg-[#080808] p-8 transition-all duration-500 md:flex hover:border-${color}-500/50 tech-border-glow h-full cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(var(--tw-shadow-color),0.15)]`}
      style={{ "--tw-shadow-color": glowColor } as React.CSSProperties}
      onClick={() => onOpen(service)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${color}-500/0 via-${color}-500/0 to-${color}-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      ></div>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-8 flex items-start justify-between">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 transition-all duration-500 group-hover:bg-${color}-500/20 group-hover:border-${color}-500/50 shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_20px_rgba(var(--tw-shadow-color),0.4)]`}
            >
              <Icon
                className={`text-gray-400 group-hover:text-${color}-400 h-full w-full transition-colors duration-500`}
                strokeWidth={1.5}
              />
            </div>
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:bg-${color}-500 hover:text-white hover:border-${color}-400 btn-glitch shadow-lg hover:scale-110`}
            >
              <Plus size={18} />
            </button>
          </div>
          <h3 className="mb-3 text-xl font-bold text-white transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">
            {service.title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-300">
            {service.shortDesc}
          </p>
        </div>
        <div className="flex items-center gap-2 border-t border-white/5 pt-6">
          <span
            className={`font-mono text-[10px] tracking-wider uppercase text-${color}-400/70 group-hover:text-${color}-400 flex items-center gap-1 transition-colors`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full bg-${color}-500 animate-pulse`}
            ></span>
            Sistema Ativo
          </span>
          <ArrowUpRight
            size={14}
            className="ml-auto transform text-gray-600 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

// --- CARD MOBILE (HUD Tático & Cyberpunk) ---
// "Firulas" exclusivas: Scanline, Progress Bar, Tech Corners
const MobileServiceCard = ({ service, onOpen, index }: ServiceCardProps) => {
  const Icon = service.icon;
  const color = service.color;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="group relative mb-6 last:mb-0 md:hidden"
      onClick={() => onOpen(service)}
    >
      {/* Linha de conexão entre cards (Circuito) */}
      {index !== Object.keys(servicesData).length - 1 && (
        <div className="absolute bottom-[-24px] left-8 z-0 h-[24px] w-[2px] border-l border-dotted border-white/20 bg-gradient-to-b from-white/10 to-transparent"></div>
      )}

      <div
        className={`relative overflow-hidden rounded-r-xl rounded-bl-xl border border-l-4 border-white/10 bg-[#0A0A0E] p-5 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-200 active:scale-[0.98] border-l-${color}-500`}
      >
        {/* Efeito Scanline (Laser passando) */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-${color}-500/10 pointer-events-none h-[50%] w-full animate-[scanline_3s_linear_infinite] to-transparent opacity-50`}
        ></div>

        {/* Cantoneira Tech (Topo Direito) */}
        <div className="absolute top-0 right-0 p-2">
          <div
            className={`h-2 w-2 border-t border-r border-${color}-500`}
          ></div>
        </div>

        <div className="relative z-10 flex items-start gap-4">
          {/* Ícone Hexagonal com Glow */}
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center bg-${color}-500/10 border border-${color}-500/30 rounded-lg shadow-[0_0_15px_rgba(var(--tw-shadow-color),0.3)]`}
            style={
              {
                "--tw-shadow-color": color === "indigo" ? "#6366f1" : "#a855f7",
              } as React.CSSProperties
            }
          >
            <Icon size={20} className={`text-${color}-400`} />
          </div>

          <div className="flex-1">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-lg font-bold tracking-tight text-white">
                {service.title}
              </h3>
              <div
                className={`h-1.5 w-1.5 rounded-full bg-${color}-500 animate-ping`}
              ></div>
            </div>

            <p className="mb-3 text-xs leading-relaxed text-gray-400">
              {service.shortDesc}
            </p>

            {/* Barra de Progresso "Loading" (Firula visual) */}
            <div className="flex h-1 w-full items-center overflow-hidden rounded-full bg-white/5">
              <div
                className={`h-full bg-${color}-500/50 w-0 transition-all duration-[1500ms] ease-out`}
                style={{ width: mounted ? "100%" : "0%" }}
              ></div>
            </div>
            <div className="mt-1 flex justify-between">
              <span className="font-mono text-[9px] text-gray-600 uppercase">
                Sync...
              </span>
              <span className={`font-mono text-[9px] text-${color}-400`}>
                100%
              </span>
            </div>
          </div>
        </div>

        {/* Botão de Ação "Glitch" Embutido */}
        <div className="absolute right-0 bottom-0 p-3 opacity-50 transition-opacity group-hover:opacity-100">
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
      <div
        className="relative overflow-hidden bg-black py-24 md:py-32"
        id="servicos"
      >
        {/* Background Decor */}
        <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-[0.05]"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionTitle subtitle="Soluções de nível militar para proteção corporativa.">
            <HackerText text="Nossos Serviços" speed={60} />
          </SectionTitle>

          {/* Container Grid (Desktop) / Flex (Mobile) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, index) => (
              <Reveal key={service.id} delay={index * 100} direction="up">
                {/* Renderiza ambos, mas o CSS controla qual aparece (hidden md:flex etc) */}
                <DesktopServiceCard
                  service={service}
                  onOpen={setModalService}
                  index={index}
                />
                <MobileServiceCard
                  service={service}
                  onOpen={setModalService}
                  index={index}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ServiceModal
        service={modalService}
        onClose={() => setModalService(null)}
      />
    </>
  );
}
