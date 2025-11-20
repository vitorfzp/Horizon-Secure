import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-horizon-bg mt-auto border-t border-white/10 py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            HORIZON
          </span>
          <span className="text-horizon-secondary ml-2 text-xs font-semibold tracking-[0.3em] uppercase">
            SECURE
          </span>
        </div>
        <div className="mb-8 flex justify-center gap-8 text-sm text-gray-400">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/sobre" className="transition-colors hover:text-white">
            Sobre
          </Link>
          <Link href="/servicos" className="transition-colors hover:text-white">
            Serviços
          </Link>
          <Link href="/contato" className="transition-colors hover:text-white">
            Contato
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Horizon Secure. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
