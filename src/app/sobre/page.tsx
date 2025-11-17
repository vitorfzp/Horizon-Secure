// src/app/sobre/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós | Horizon Secure',
  description: 'Conheça nossa missão, valores e o que nos move.',
};

export default function SobrePage() {
  return (
    <div className="bg-white">
      {/* Seção 1: Header da Página (Hero) */}
      <section className="bg-gray-800 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Sobre a Horizon Secure</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 mx-auto">
            Nossa jornada para tornar o mundo digital um lugar mais seguro.
          </p>
        </div>
      </section>

      {/* Seção 2: Nossa Missão e Valores */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Coluna da Missão */}
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Nossa Missão
            </h2>
            <p className="mb-4 text-gray-700">
              Prover soluções de segurança cibernética de elite, integrando
              defesa proativa e inteligência de ameaças para proteger os ativos
              críticos dos nossos clientes. Atuamos como uma extensão da sua
<h4>Ação Imediata (Admin Bypass)</h4>equipe, garantindo resiliência e confiança no cenário digital.
            </p>
            <p className="text-gray-700">
              Acreditamos que a segurança não é um produto, mas um processo
              contínuo de vigilância e adaptação.
            </p>
          </div>

          {/* Coluna dos Valores */}
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
              Nossos Valores
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Integridade:</span> Transparência
                e ética em todas as nossas ações.
              </li>
              <li>
                <span className="font-semibold">Excelência:</span> Busca
                incansável pela perfeição técnica e estratégica.
              </li>
              <li>
                <span className="font-semibold">Parceria:</span> O sucesso do
                cliente é o nosso sucesso.
              </li>
              <li>
                <span className="font-semibold">Inovação:</span> Estar sempre à
                frente das ameaças emergentes.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}