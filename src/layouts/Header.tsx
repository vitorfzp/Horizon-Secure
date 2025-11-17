// src/layouts/Header.tsx
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Horizon Secure</Link>
        </div>

        {/* Links de Navegação */}
        <div className="hidden space-x-6 md:flex">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/sobre"
            className="text-gray-600 hover:text-blue-500"
          >
            Sobre
          </Link>
          <Link
            href="/servicos"
            className="text-gray-600 hover:text-blue-500"
          >
            Serviços
          </Link>
          <Link
            href="/contato"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Contato
          </Link>
        </div>
        
        {/* TODO: Menu Mobile (para Fase 1.1) */}
      </nav>
    </header>
  );
}