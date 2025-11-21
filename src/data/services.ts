import { Server, FileCheck, UserCog, GraduationCap, Cloud, Scan } from 'lucide-react';

export const servicesData = {
  gerenciado: {
    id: "gerenciado", title: "Serviços Gerenciados", icon: Server, 
    shortDesc: "Monitoramento contínuo e gestão de incidentes.",
    fullDesc: "Monitoramos seu ambiente 24/7 utilizando tecnologias de ponta para detectar e responder a ameaças em tempo real. Inclui gestão de firewall, detecção de intrusão e resposta a incidentes.",
    benefits: ["Monitoramento 24/7", "Resposta a Incidentes", "Relatórios Mensais"], color: "indigo"
  },
  auditoria: {
    id: "auditoria", title: "Auditoria e Diagnóstico", icon: FileCheck, 
    shortDesc: "Avaliação de riscos e conformidade (LGPD/ISO).",
    fullDesc: "Análise profunda da postura de segurança, verificando conformidade com LGPD, ISO 27001 e NIST. Entregamos um roadmap claro priorizando correções baseadas no risco real.",
    benefits: ["Conformidade LGPD/ISO", "Análise de Gaps", "Roadmap de Correção"], color: "purple"
  },
  vciso: {
    id: "vciso", title: "Virtual CISO", icon: UserCog, 
    shortDesc: "Liderança estratégica de segurança sob demanda.",
    fullDesc: "Experiência de um CISO sem o custo integral. Ajudamos a definir estratégias, políticas de segurança e gestão de riscos alinhados aos objetivos do negócio.",
    benefits: ["Estratégia Executiva", "Políticas de Segurança", "Gestão de Riscos"], color: "blue"
  },
  treinamento: {
    id: "treinamento", title: "Treinamento e Cultura", icon: GraduationCap, 
    shortDesc: "Capacitação de equipes e simulação de phishing.",
    fullDesc: "Programas de conscientização com simulações de phishing e workshops de segurança para desenvolvedores (DevSecOps), criando uma cultura robusta.",
    benefits: ["Simulação de Phishing", "Workshops DevSecOps", "Cultura de Segurança"], color: "emerald"
  },
  cloud: {
    id: "cloud", title: "Segurança em Nuvem", icon: Cloud, 
    shortDesc: "Proteção para AWS, Azure e Google Cloud.",
    fullDesc: "Auditamos e fortalecemos configurações de nuvem para evitar vazamentos. Implementamos arquiteturas de segurança nativas para garantir escalabilidade segura.",
    benefits: ["Hardening de Cloud", "Gestão de IAM", "Arquitetura Segura"], color: "cyan"
  },
  ameacas: {
    id: "ameacas", title: "Análise de Vulnerabilidades", icon: Scan, 
    shortDesc: "Identificação proativa de falhas em sistemas.",
    fullDesc: "Scanners avançados e validação manual para mapear vulnerabilidades em redes e aplicações. Classificamos riscos reais e orientamos a remediação.",
    benefits: ["Pentest", "Scan de Vulnerabilidades", "Relatório Técnico"], color: "red"
  }
};