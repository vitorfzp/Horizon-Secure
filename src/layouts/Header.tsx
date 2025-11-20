// src/layouts/Header.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para detectar scroll e mudar a cor do header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-horizon-bg/80 border-b border-white/10 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-gray-300 transition-all hover:text-white"
            >
              {link.name}
              <span className="bg-horizon-secondary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contato"
            className="from-horizon-primary to-horizon-secondary transform rounded-full bg-gradient-to-r px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          >
            Área do Cliente
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="z-50 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`bg-horizon-bg/95 fixed inset-0 z-40 flex transform flex-col items-center justify-center gap-8 backdrop-blur-xl transition-all duration-500 ${
            isMobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-horizon-secondary text-2xl font-bold text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-horizon-primary mt-4 rounded-full px-8 py-3 text-lg font-bold text-white shadow-lg"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </header>
  );
}
