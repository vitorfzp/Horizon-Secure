// src/app/servicos/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nossos Serviços | Horizon Secure",
  description: "Descubra como protegemos sua organização.",
};

// Dados mockados (Fase 1). Na Fase 2, isso virá do Sanity.
const servicos = [
  {
    id: 1,
    nome: "Arquitetura DevSecOps",
    descricao:
      "Integramos práticas de segurança robustas em todo o ciclo de vida do desenvolvimento de software (SDLC), garantindo que a segurança seja uma responsabilidade compartilhada e automatizada, desde o primeiro commit até a produção.",
  },
  {
    id: 2,
    nome: "Testes de Invasão (Pentest) e Red Team",
    descricao:
      "Simulamos ataques cibernéticos realistas para identificar e explorar vulnerabilidades em suas aplicações, redes e infraestrutura. Nossas operações de Red Team testam suas defesas e a prontidão da sua equipe de resposta.",
  },
  {
    id: 3,
    nome: "Monitoramento e Resposta (SOC as a Service)",
    descricao:
      "Oferecemos um Centro de Operações de Segurança 24/7, utilizando inteligência de ameaças de ponta e análise comportamental para detectar, investigar e responder rapidamente a incidentes de segurança antes que causem impacto no negócio.",
  },
  {
    id: 4,
    nome: "Gestão de Identidade e Acesso (IAM)",
    descricao:
      "Implementamos soluções robustas de IAM, incluindo SSO, MFA e governança de acesso (RBAC/ABAC), para garantir que apenas as pessoas certas tenham acesso aos recursos certos, no momento certo.",
  },
  {
    id: 5,
    nome: "Consultoria GRC (Governança, Risco e Compliance)",
    descricao:
      "Ajudamos sua organização a navegar no complexo cenário regulatório (LGPD, ISO 27001, PCI-DSS), avaliando riscos e implementando os controles necessários para garantir a conformidade e a governança de segurança.",
  },
];

export default function ServicosPage() {
  return (
    <div className="bg-white">
      {/* Seção 1: Header da Página (Hero) */}
      <section className="bg-gray-800 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Nossos Serviços</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Soluções completas para blindar sua organização contra as ameaças
            digitais.
          </p>
        </div>
      </section>

      {/* Seção 2: Lista de Serviços */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="flex flex-col rounded-lg border border-gray-200 p-6 shadow-lg"
            >
              <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                {servico.nome}
              </h2>
              <p className="flex-grow text-gray-700">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 3: CTA */}
      <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col items-center px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Tem um Desafio Específico?
          </h2>
          <p className="mt-4 max-w-xl text-gray-600">
            Nossos especialistas estão prontos para desenhar uma solução de
            segurança sob medida para suas necessidades.
          </p>
          <Link
            href="/contato"
            className="mt-8 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-700"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
