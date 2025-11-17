// src/components/home/ServicesHighlight.tsx

// Dados mockados (Fase 1). Na Fase 2, isso virá do Sanity.
const servicos = [
  {
    id: 1,
    nome: 'Arquitetura DevSecOps',
    descricao: 'Integramos segurança em todo o ciclo de vida do seu software.',
  },
  {
    id: 2,
    nome: 'Testes de Invasão (Pentest)',
    descricao: 'Identificamos e corrigimos vulnerabilidades antes que sejam exploradas.',
  },
  {
    id: 3,
    nome: 'Monitoramento e Resposta (SOC)',
    descricao: 'Proteção 24/7 com detecção e resposta rápida a ameaças.',
  },
];

export function ServicesHighlight() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Nossas Especialidades
          </h2>
          <p className="mt-2 text-gray-600">
            Focados em proteger o que mais importa.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="rounded-lg border border-gray-200 p-6 shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {servico.nome}
              </h3>
              <p className="text-gray-600">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}