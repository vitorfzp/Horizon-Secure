"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

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
    { href: "/diagnostico", label: "Diagnóstico" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? "border-b border-white/[0.1] bg-[#0A0A0A]/90 backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group relative flex items-center gap-3">
          {/* Certifique-se de ter a imagem em public/Logo Horizon.png */}
          <img
            src="/Logo Horizon.png"
            alt="Logo"
            className="z-10 h-10 w-10 object-contain"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span className="font-mono text-xl font-bold text-white uppercase">
            Horizon Secure
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 font-mono text-sm font-medium text-gray-400 uppercase md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-1 py-2 transition-all hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contato"
            className="group relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-transparent bg-white px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-black uppercase transition-all duration-500 hover:border-white/50 hover:text-white"
          >
            <span className="relative z-10 flex items-center gap-2">
              Falar com Especialista <ChevronRight size={16} />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-gray-300 hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 flex h-screen w-full flex-col gap-4 border-b border-white/[0.1] bg-[#0A0A0A]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/5 py-3 text-left font-mono text-gray-300 uppercase transition-all hover:pl-2 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 rounded-lg bg-indigo-600 py-3 text-center font-bold text-white"
          >
            Falar com Especialista
          </Link>
        </div>
      )}
    </nav>
  );
}
