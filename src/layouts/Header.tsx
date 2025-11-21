// src/layouts/Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo'; // Importa nosso SVG

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-white/[0.1] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-transparent py-2'}`}>
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO VIA CÓDIGO (Sem imagem PNG) */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer relative z-50">
          <Logo /> 
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium font-mono uppercase tracking-wider">
          {navItems.map(item => (
            <Link 
              key={item.label} 
              href={item.href}
              className="hover:text-white transition-all relative py-2 px-1 group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 w-0 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Botão CTA Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contato" className="group relative px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden cursor-pointer uppercase font-mono bg-white text-black hover:text-white border-2 border-transparent hover:border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:bg-transparent before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-600 before:to-purple-600 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-500 before:z-[-1]">
            <span className="relative z-10 flex items-center gap-2">
              Falar com Especialista
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>

        {/* Menu Mobile Toggle */}
        <button className="md:hidden text-gray-300 hover:text-white p-2 z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#0A0A0A] backdrop-blur-xl border-b border-white/[0.1] p-6 pt-24 flex flex-col gap-6 animate-fade-in z-40">
           {navItems.map(item => (
             <Link 
                key={item.label} 
                href={item.href}
                className="text-gray-300 py-4 text-xl font-mono uppercase tracking-wider border-b border-white/5 hover:text-white hover:pl-2 transition-all" 
                onClick={() => setMobileMenuOpen(false)}
             >
               {item.label}
             </Link>
           ))}
           <Link 
             href="/contato" 
             onClick={() => setMobileMenuOpen(false)}
             className="mt-4 w-full py-4 rounded-lg bg-indigo-600 text-white font-bold text-center uppercase tracking-wider shadow-lg hover:bg-indigo-500 transition-colors"
           >
             Falar com Especialista
           </Link>
        </div>
      )}
    </nav>
  );
}