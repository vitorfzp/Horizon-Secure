"use client";
import React, { useState, useEffect, useRef } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";
import { Service } from "@/types"; // Importa o tipo que criamos acima

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (service) {
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [service]);

  if (!service) return null;
  const Icon = service.icon;
  const color = service.color;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-[#000000]/80 backdrop-blur-xl transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      ></div>

      <div
        ref={modalRef}
        className={`tech-border-glow relative flex max-h-[85vh] w-full max-w-3xl transform flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-[0_0_50px_rgba(99,102,241,0.2)] transition-all duration-500 ${isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-95 opacity-0"}`}
      >
        <div
          className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-${color}-600 via-${color}-400 to-${color}-600`}
        ></div>

        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 rounded-full p-2 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="custom-scrollbar overflow-y-auto p-8 md:p-10">
          <div className="mb-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div
              className={`h-24 w-24 shrink-0 rounded-2xl bg-${color}-500/10 border border-${color}-500/30 relative flex items-center justify-center overflow-hidden p-5 shadow-[0_0_40px_rgba(99,102,241,0.3)]`}
            >
              <Icon
                className={`text-${color}-400 relative z-10 h-full w-full`}
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {service.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className={`rounded-md px-3 py-1.5 font-mono text-xs font-bold tracking-wider uppercase bg-${color}-500/10 text-${color}-300 border border-${color}-500/20`}
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mb-10 text-lg leading-relaxed text-gray-300">
            {service.fullDesc}
          </p>

          <div className="flex justify-end gap-4 border-t border-white/10 pt-6">
            <Button variant="ghost" onClick={onClose}>
              Fechar
            </Button>
            <Link href="/contato">
              <Button variant="primary" icon={ArrowRight}>
                Falar com Especialista
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
