"use client";
import React, { useState, useEffect } from "react";
import { Plus, ArrowUpRight, FolderLock, Binary } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { servicesData } from "@/data/services";
import { Service } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { HackerText } from "@/components/ui/HackerText";
import { TacticalTap } from "@/components/ui/TacticalTap";

interface ServiceCardProps {
  service: Service;
  onOpen: (s: Service) => void;
  index: number;
}

const DesktopServiceCard = ({ service, onOpen }: ServiceCardProps) => {
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
            : "6,182,212";

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
      </div>
    </div>
  );
};

const MobileServiceCard = ({ service, onOpen }: ServiceCardProps) => {
  const Icon = service.icon;
  const color = service.color;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TacticalTap
      className="mb-4 block w-full md:hidden"
      onClick={() => onOpen(service)}
    >
      <div
        className={`relative border-l-4 bg-[#0A0A0E] border-l-${color}-500 group overflow-hidden rounded-r-xl border-y border-r border-white/10 p-5`}
      >
        <div className="pointer-events-none absolute top-0 right-0 translate-x-2 -translate-y-2 transform opacity-20">
          <Binary size={100} className={`text-${color}-400`} />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#050505] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]`}
          >
            <Icon size={22} className={`text-${color}-400`} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="truncate pr-2 text-lg font-bold text-white">
                {service.title}
              </h3>
              <FolderLock size={14} className="text-gray-600" />
            </div>
            <p className="truncate font-mono text-xs text-gray-500">
              <span className={`text-${color}-500/50 mr-2`}>&gt;&gt;</span>
              {service.shortDesc}
            </p>
            {/* Uso da variável mounted para evitar warning */}
            <div
              className={`mt-2 h-0.5 w-full bg-${color}-500/20 overflow-hidden rounded-full`}
            >
              <div
                className={`h-full bg-${color}-500 transition-all duration-1000 ease-out`}
                style={{ width: mounted ? "100%" : "0%" }}
              ></div>
            </div>
          </div>
          <div className="text-gray-600 transition-colors group-hover:text-white">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </TacticalTap>
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
        <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-[0.05]"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionTitle subtitle="Soluções de nível militar.">
            <HackerText text="Protocolos de Defesa" speed={60} />
          </SectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, index) => (
              <Reveal key={service.id} delay={index * 100} direction="up">
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
