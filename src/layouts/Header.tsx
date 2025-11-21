// src/layouts/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo"; // Importa nosso SVG

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? "border-b border-white/[0.1] bg-[#0A0A0A]/90 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-lg" : "border-b border-transparent bg-transparent py-2"}`}
    >
      <div
        className={`absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`}
      ></div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LOGO VIA CÓDIGO (Sem imagem PNG) */}
        <Link
          href="/"
          className="group relative z-50 flex cursor-pointer items-center gap-3"
        >
          <Logo />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-8 font-mono text-sm font-medium tracking-wider text-gray-400 uppercase md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative px-1 py-2 transition-all hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Botão CTA Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contato"
            className="group relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-transparent bg-white px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-black uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 before:absolute before:inset-0 before:z-[-1] before:translate-y-full before:bg-gradient-to-r before:from-indigo-600 before:to-purple-600 before:transition-transform before:duration-500 hover:border-white/50 hover:bg-transparent hover:text-white hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:before:translate-y-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              Falar com Especialista
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>

        {/* Menu Mobile Toggle */}
        <button
          className="z-50 p-2 text-gray-300 hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="animate-fade-in absolute top-0 left-0 z-40 flex h-screen w-full flex-col gap-6 border-b border-white/[0.1] bg-[#0A0A0A] p-6 pt-24 backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border-b border-white/5 py-4 font-mono text-xl tracking-wider text-gray-300 uppercase transition-all hover:pl-2 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full rounded-lg bg-indigo-600 py-4 text-center font-bold tracking-wider text-white uppercase shadow-lg transition-colors hover:bg-indigo-500"
          >
            Falar com Especialista
          </Link>
        </div>
      )}
    </nav>
  );
}
