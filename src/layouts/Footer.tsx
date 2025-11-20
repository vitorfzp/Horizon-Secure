// src/layouts/Footer.tsx
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-horizon-bg py-10 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            HORIZON
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-horizon-secondary ml-2">
            SECURE
          </span>
        </div>
        
        <div className="flex justify-center gap-8 mb-8 text-sm text-gray-400">
             <Link href="/" className="hover:text-white transition-colors">Home</Link>
             <Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link>
             <Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link>
             <Link href="/contato" className="hover:text-white transition-colors">Contato</Link>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {currentYear} Horizon Secure. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}