// src/components/home/CallToAction.tsx
import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col items-center px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Pronto para Elevar sua Segurança?</h2>
        <p className="mt-4 max-w-xl text-gray-300">
          Não espere por um incidente. Vamos conversar sobre como a Horizon Secure
          pode fortalecer suas defesas hoje mesmo.
        </p>
        <Link
          href="/contato"
          className="mt-8 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-700"
        >
          Fale com um Especialista
        </Link>
      </div>
    </section>
  );
}