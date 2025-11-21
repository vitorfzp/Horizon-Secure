"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

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
    { href: '/diagnostico', label: 'Diagnóstico' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-white/[0.1]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative">
            {/* Certifique-se de ter a imagem em public/Logo Horizon.png */}
            <img src="/Logo Horizon.png" alt="Logo" className="w-10 h-10 object-contain z-10" onError={(e) => e.currentTarget.style.display = 'none'} />
            <span className="text-white font-bold text-xl font-mono uppercase">Horizon Secure</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium font-mono uppercase">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="hover:text-white transition-all relative py-2 px-1 group">
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 w-0 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-4">
           <Link href="/contato" className="group relative px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden cursor-pointer uppercase font-mono bg-white text-black hover:text-white border-2 border-transparent hover:border-white/50">
              <span className="relative z-10 flex items-center gap-2">
                 Falar com Especialista <ChevronRight size={16} />
              </span>
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/[0.1] p-6 flex flex-col gap-4 shadow-2xl h-screen">
           {navItems.map(item => (
             <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-300 py-3 text-left font-mono uppercase border-b border-white/5 hover:text-white hover:pl-2 transition-all">
               {item.label}
             </Link>
           ))}
           <Link href="/contato" onClick={() => setMobileMenuOpen(false)} className="bg-indigo-600 text-white py-3 text-center rounded-lg font-bold mt-4">
             Falar com Especialista
           </Link>
        </div>
      )}
    </nav>
  );
}