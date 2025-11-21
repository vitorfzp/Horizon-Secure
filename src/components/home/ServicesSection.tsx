"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { servicesData } from "@/data/services";

// Card Interno
const ServiceCard = ({ service, onOpen }: any) => {
  const Icon = service.icon;
  const color = service.color;
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#080808] p-6 transition-all duration-500 hover:border-${color}-500/50 tech-border-glow hover:translate-y-[-4px] hover:shadow-[0_0_25px_rgba(var(--tw-shadow-color),0.15)]`}
      style={
        {
          "--tw-shadow-color": color === "indigo" ? "99,102,241" : "59,130,246",
        } as React.CSSProperties
      }
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition-all duration-500 group-hover:bg-${color}-500/10 group-hover:border-${color}-500/50`}
          >
            <Icon
              className={`text-gray-400 group-hover:text-${color}-400 h-full w-full transition-colors duration-500`}
              strokeWidth={1.5}
            />
          </div>
          <button
            onClick={() => onOpen(service)}
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:bg-${color}-500/80 hover:scale-110 hover:text-white`}
          >
            <Plus size={16} />
          </button>
        </div>
        <h3 className="mb-3 text-lg font-semibold text-gray-100 transition-colors group-hover:text-white">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500">
          {service.shortDesc}
        </p>
      </div>
    </div>
  );
};

// Componente Principal Exportado
export function ServicesSection() {
  const [modalService, setModalService] = useState(null);

  return (
    <>
      <div className="animate-fade-in relative py-24" id="servicos">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionTitle subtitle="Clique no '+' para ver detalhes completos.">
            Nossos Serviços
          </SectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(servicesData).map((service) => (
              // @ts-ignore
              <ServiceCard
                key={service.id}
                service={service}
                onOpen={setModalService}
              />
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
