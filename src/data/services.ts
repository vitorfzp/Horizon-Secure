import {
  Server,
  FileCheck,
  UserCog,
  GraduationCap,
  Cloud,
  Scan,
} from "lucide-react";

export const servicesData = {
  gerenciado: {
    id: "gerenciado",
    title: "Serviços Gerenciados",
    icon: Server,
    shortDesc:
      "Monitoramento contínuo e gestão de incidentes para sua infraestrutura.",
    fullDesc:
      "Nossos Serviços Gerenciados de Segurança (MSS) oferecem uma extensão da sua equipe de TI. Monitoramos seu ambiente 24/7 utilizando tecnologias de ponta para detectar e responder a ameaças em tempo real. Inclui gestão de firewall, detecção de intrusão e resposta a incidentes.",
    benefits: [
      "Monitoramento 24/7",
      "Resposta a Incidentes",
      "Relatórios Mensais",
    ],
    color: "indigo",
  },
  auditoria: {
    id: "auditoria",
    title: "Auditoria e Diagnóstico",
    icon: FileCheck,
    shortDesc:
      "Avaliação completa de riscos e conformidade com padrões de mercado.",
    fullDesc:
      "Realizamos uma análise profunda da sua postura atual de segurança. Nossos auditores verificam conformidade com LGPD, ISO 27001 e NIST. Entregamos um roadmap claro priorizando as correções baseadas no risco real.",
    benefits: [
      "Conformidade LGPD/ISO",
      "Análise de Gaps",
      "Roadmap de Correção",
    ],
    color: "purple",
  },
  vciso: {
    id: "vciso",
    title: "Virtual CISO",
    icon: UserCog,
    shortDesc:
      "Liderança estratégica de segurança sob demanda para sua empresa.",
    fullDesc:
      "Obtenha a experiência de um CISO sem o custo integral. Nosso vCISO ajuda a definir estratégias, políticas de segurança, gestão de fornecedores e reporta diretamente à diretoria sobre os riscos cibernéticos.",
    benefits: [
      "Estratégia Executiva",
      "Políticas de Segurança",
      "Gestão de Riscos",
    ],
    color: "blue",
  },
  treinamento: {
    id: "treinamento",
    title: "Treinamento e Cultura",
    icon: GraduationCap,
    shortDesc: "Capacitação de equipes e simulação de phishing.",
    fullDesc:
      "O fator humano é frequentemente o elo mais fraco. Nossos programas de conscientização incluem simulações de phishing controladas, workshops de segurança para desenvolvedores (DevSecOps).",
    benefits: [
      "Simulação de Phishing",
      "Workshops DevSecOps",
      "Cultura de Segurança",
    ],
    color: "emerald",
  },
  cloud: {
    id: "cloud",
    title: "Segurança em Nuvem",
    icon: Cloud,
    shortDesc: "Proteção para ambientes AWS, Azure e Google Cloud.",
    fullDesc:
      "Auditamos e fortalecemos suas configurações de nuvem para evitar vazamentos de dados por buckets públicos e gerenciamento incorreto de IAM. Implementamos arquiteturas de segurança nativas da nuvem.",
    benefits: ["Hardening de Cloud", "Gestão de IAM", "Arquitetura Segura"],
    color: "cyan",
  },
  ameacas: {
    id: "ameacas",
    title: "Análise de Vulnerabilidades",
    icon: Scan,
    shortDesc: "Identificação proativa de falhas em sistemas e aplicações.",
    fullDesc:
      "Utilizamos scanners avançados e validação manual para mapear vulnerabilidades em sua rede e aplicações web. Classificamos os riscos reais e fornecemos orientações técnicas detalhadas.",
    benefits: ["Pentest", "Scan de Vulnerabilidades", "Relatório Técnico"],
    color: "red",
  },
};
