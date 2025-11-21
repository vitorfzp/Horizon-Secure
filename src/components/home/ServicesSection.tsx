"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { servicesData } from "@/data/services";

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
            {Object.values(servicesData).map((service: any) => (
              <div
                key={service.id}
                className={`group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#080808] p-6 transition-all duration-500 hover:border-${service.color}-500/50 tech-border-glow hover:-translate-y-1`}
              >
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] group-hover:bg-${service.color}-500/10`}
                  >
                    <service.icon
                      className={`text-gray-400 group-hover:text-${service.color}-400 transition-colors`}
                    />
                  </div>
                  <button
                    onClick={() => setModalService(service)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-400 hover:bg-white/20"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-100">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">{service.shortDesc}</p>
              </div>
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
