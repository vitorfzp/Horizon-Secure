// src/components/home/HeroSection.tsx
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-blue-700 text-white">
      <div className="container mx-auto flex flex-col items-center px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          Sua Fortaleza Digital Começa Aqui
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-blue-100">
          Protegemos seu negócio com soluções de segurança cibernética de ponta,
          da arquitetura à resposta a incidentes.
        </p>
        <Link
          href="/contato"
          className="mt-8 rounded-md bg-white px-6 py-3 font-semibold text-blue-700 shadow-md hover:bg-gray-100"
        >
          Solicite uma Consulta
        </Link>
      </div>
    </section>
  );
}
