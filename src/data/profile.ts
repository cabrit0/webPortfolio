// Profile data for João Cabrito
// Based on CV and personal information

export interface PersonalInfo {
  name: string
  fullName?: string
  title: string
  location: string
  mantra: string
  description: string
  bio: string
  email: string
  phone?: string
  avatar?: string
}

export interface Skill {
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'ai' | 'tool' | 'language'
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  type: 'work' | 'internship' | 'freelance'
}

export interface Education {
  institution: string
  degree: string
  period: string
  location: string
  status: 'completed' | 'in-progress'
  description?: string
  specializations?: string[]
}

export interface Project {
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  category: 'web' | 'mobile' | 'ai' | 'system'
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  image?: string
  images?: string[] // Support for multiple images
  features?: string[]
  challenges?: string[]
  learnings?: string[]
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "João Cabrito",
  fullName: "João Filipe Campos Cabrito",
  title: "Software Engineer",
  location: "Castelo Branco, Portugal",
  mantra: "Com calma e com alma",
  description: "Sou um Software Engineer com competências autodidatas e espírito criativo. Curioso por natureza, presto especial atenção às tecnologias, sempre com a ambição de desenvolver novos conhecimentos e participar em projetos desafiantes.",
  bio: `Sou um Software Engineer com competências autodidatas e espírito criativo. Curioso por natureza, presto especial atenção às tecnologias, sempre com a ambição de desenvolver novos conhecimentos e participar em projetos desafiantes.

Atualmente finalista da Licenciatura em Informática e Multimédia com muito bom aproveitamento, tendo conciliado os estudos com trabalho em regime de trabalhador-estudante, demonstrando capacidade de gestão de pressão e otimização de tempo.

Tenho uma paixão genuína pela programação e procuro uma mudança de carreira para alinhar com as minhas paixões. Esforço-me por criar websites que sejam diferentes, criativos e profissionais. Tenho desenvolvido projetos de aplicações web e mobile utilizando tecnologias como React, JavaScript, Python, Flutter e muito mais.

É uma vontade, paixão e desejo conseguir encontrar trabalho na área da programação e pôr em prática o que aprendi ao longo desta jornada académica e de autodidatismo.`,
  email: "cabrit0o.dev@gmail.com",
  phone: "(+351) 968 832 178",
  avatar: "/images/profile.jpg"
}

// Technical Skills
export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", level: 90, category: 'language' },
  { name: "Python", level: 85, category: 'language' },
  { name: "Java", level: 80, category: 'language' },
  { name: "C", level: 75, category: 'language' },
  { name: "Dart", level: 80, category: 'language' },
  { name: "PHP", level: 70, category: 'language' },

  // Frontend
  { name: "React", level: 85, category: 'frontend' },
  { name: "HTML/CSS", level: 90, category: 'frontend' },
  { name: "TailwindCSS", level: 85, category: 'frontend' },

  // Backend
  { name: "Node.js", level: 80, category: 'backend' },
  { name: "Express.js", level: 80, category: 'backend' },

  // Mobile
  { name: "Flutter", level: 80, category: 'mobile' },

  // Database
  { name: "MongoDB", level: 85, category: 'database' },
  { name: "SQL", level: 85, category: 'database' },
  { name: "MySQL", level: 80, category: 'database' },
  { name: "SQLite", level: 75, category: 'database' },

  // AI/ML
  { name: "PyTorch", level: 80, category: 'ai' },
  { name: "YOLO", level: 75, category: 'ai' },
  { name: "OpenCV", level: 75, category: 'ai' },

  // Tools
  { name: "Unity", level: 70, category: 'tool' },
  { name: "Git", level: 85, category: 'tool' }
]

// Professional Experience
export const experience: Experience[] = [
  {
    company: "Dinefer, SA",
    position: "Técnico de eletrónica",
    period: "2020 - 2025",
    description: "Eletrónica realizada em módulos para teste de cablagem automóvel. Testes compostos por deteções específicas, estanqueidade e outras lógicas requeridas por clientes. Trabalhei em regime de trabalhador-estudante, demonstrando capacidade de gestão de tempo e pressão.",
    technologies: ["Eletrónica", "Testes Automóveis", "Sistemas de Deteção"],
    type: 'work'
  },
  {
    company: "Dinefer, SA",
    position: "Técnico de pneumática",
    period: "2017 - 2020",
    description: "Pneumática realizada em módulos para teste de cablagem automóvel. Testes compostos por deteções específicas, estanqueidade e outras lógicas requeridas por clientes.",
    technologies: ["Pneumática", "Testes Automóveis", "Sistemas de Estanqueidade"],
    type: 'work'
  },
  {
    company: "MobileTec",
    position: "Estágio integrado",
    period: "2017",
    description: "Reparação de equipamentos eletrónicos, como computadores, smartphones, iPhones e consolas.",
    technologies: ["Reparação", "Hardware", "Dispositivos Móveis"],
    type: 'internship'
  },
  {
    company: "Horus Gaming Entertainment",
    position: "Estágio integrado",
    period: "2017",
    description: "Desenvolvimento de aplicações e jogos para Android e iOS usando a linguagem C e o GameEngine Unity. Utilização de ferramentas como Inkscape e UnityEngine.",
    technologies: ["Unity", "C", "Android", "iOS", "Game Development"],
    type: 'internship'
  }
]

// Education
export const education: Education[] = [
  {
    institution: "ESTCB - Escola Superior de Tecnologia de Castelo Branco (IPCB)",
    degree: "Licenciatura em Informática e Multimédia",
    period: "2023 - presente",
    location: "Castelo Branco",
    status: 'in-progress',
    description: "Formação especializada em desenvolvimento de aplicações de software e sistemas de informação, com ênfase em conteúdos multimédia e tecnologias modernas.",
    specializations: [
      "Programação e Engenharia de Software",
      "Sistemas Inteligentes e Apoio à Decisão",
      "Bases de Dados e Sistemas de Informação",
      "Multimédia e Conteúdos Internet"
    ]
  },
  {
    institution: "IEFP Castelo Branco",
    degree: "Técnico de Informática e Sistemas",
    period: "2016 - 2017",
    location: "Castelo Branco",
    status: 'completed'
  }
]

// Featured Projects
export const projects: Project[] = [
  {
    title: "Software Reconhecimento Visual para Componentes de Cablagem Automóvel",
    description: "Sistema inteligente de reconhecimento visual para identificação e classificação automática de componentes de cablagem elétrica automóvel, aplicando técnicas avançadas de análise inteligente de dados visuais.",
    longDescription: "Sistema avançado de reconhecimento visual desenvolvido com foco em sistemas inteligentes e apoio à decisão para a indústria automóvel. Utiliza algoritmos de machine learning e técnicas de processamento de sinais multimédia para identificar e classificar componentes de cablagem com alta precisão. A solução integra fundamentos de inteligência artificial com aplicações práticas, otimizando processos de inspeção e controlo de qualidade industrial.",
    technologies: ["YOLO", "PyTorch", "Python", "OpenCV", "LabelIMG"],
    category: 'ai',
    featured: true,
    image: "/images/projects/automotive-recognition.jpg",
    images: [
      "/images/projects/reconComponentes1.png",
      "/images/projects/reconComponentes2.png",
      "/images/projects/reconComponentes3.png",
      "/images/projects/reconComponentes4.png",
      "/images/projects/reconComponentes5.png"
    ],
    githubUrl: "https://github.com/cabrit0/automotive-cable-recognition",
    liveUrl: "https://automotive-recognition-demo.netlify.app",
    features: [
      "Reconhecimento automático de componentes de cablagem",
      "Classificação inteligente com alta precisão",
      "Interface intuitiva para operadores",
      "Relatórios detalhados de inspeção",
      "Integração com sistemas de qualidade existentes"
    ],
    challenges: [
      "Treinar o modelo com dataset limitado de componentes específicos",
      "Otimizar a precisão para diferentes condições de iluminação",
      "Implementar processamento em tempo real",
      "Garantir robustez em ambiente industrial"
    ],
    learnings: [
      "Domínio avançado de algoritmos YOLO para detecção de objetos",
      "Experiência prática com PyTorch para deep learning",
      "Compreensão profunda de computer vision",
      "Metodologias de treino e validação de modelos ML"
    ]
  },
  {
    title: "Website da Feira de Emprego Universitária",
    description: "Plataforma web desenvolvida para evento académico de ligação universidade-empresa, aplicando princípios de design de interfaces pessoa-máquina e arquitetura de sistemas web modernos.",
    longDescription: "Plataforma web completa desenvolvida aplicando conhecimentos de linguagens web e design de sistemas interativos. O projeto implementa uma arquitetura de informação eficiente para consulta de empresas participantes, agenda interativa e sistema de inscrições. Desenvolvido com foco na experiência do utilizador e acessibilidade, seguindo padrões modernos de desenvolvimento web e design responsivo.",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    category: 'web',
    featured: true,
    image: "/images/projects/job-fair.jpg",
    images: [
      "/images/projects/job-fair.jpg",
      "/images/projects/job-fair2.jpg",
      "/images/projects/job-fair3.jpg",
      "/images/projects/job-fair4.jpg",
      "/images/projects/job-fair5.jpg"
    ],
    githubUrl: "https://github.com/cabrit0/site_feiraEmprego_IPCB",
    liveUrl: "https://cabrit0.github.io/site_feiraEmprego_IPCB/",
    features: [
      "Listagem completa de empresas participantes",
      "Agenda interativa do evento",
      "Sistema de inscrição em sessões",
      "Design responsivo e moderno",
      "Otimização para SEO",
      "Interface intuitiva e acessível"
    ],
    challenges: [
      "Criar design atrativo para estudantes e empresas",
      "Implementar sistema de inscrições funcional",
      "Garantir responsividade em todos os dispositivos",
      "Otimizar performance e carregamento"
    ],
    learnings: [
      "Desenvolvimento web com HTML semântico",
      "Estilização avançada com TailwindCSS",
      "JavaScript para interatividade",
      "Princípios de UX/UI design"
    ]
  },
  {
    title: "Fitness4U",
    description: "Sistema de informação completo para gestão fitness, implementando arquitetura de bases de dados robusta e padrões de engenharia de software para autenticação e gestão de utilizadores.",
    longDescription: "Sistema de informação web desenvolvido aplicando princípios de engenharia de software e arquitetura de bases de dados. Implementa autenticação segura, gestão de utilizadores e estrutura de dados otimizada para mais de 1000 exercícios. A aplicação integra funcionalidades de análise de dados para sugestões personalizadas e calendário dinâmico, demonstrando competências em desenvolvimento full-stack e sistemas de informação.",
    technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "Redux"],
    category: 'web',
    featured: true,
    image: "/images/projects/fitness4u.jpg",
    images: [
      "/images/projects/fitness4U1.png",
      "/images/projects/fitness4U2.png",
      "/images/projects/fitness4U3.png",
      "/images/projects/fitness4U4.png"
    ],
    githubUrl: "https://github.com/cabrit0/fitness_ai_frontend",
    liveUrl: "https://fitness4u-n7f4.onrender.com/",
    features: [
      "Sistema completo de autenticação e autorização",
      "Base de dados com mais de 1000 exercícios",
      "Criação de planos de treino personalizados",
      "Calendário dinâmico para agendamento",
      "Cálculo automático de BMI",
      "Sugestões inteligentes de exercícios",
      "Interface responsiva e moderna"
    ],
    challenges: [
      "Implementar sistema de autenticação seguro",
      "Gerir estado complexo com Redux",
      "Otimizar performance com grande volume de dados",
      "Criar interface intuitiva para gestão de treinos"
    ],
    learnings: [
      "Arquitetura full-stack com React e Node.js",
      "Gestão de estado avançada com Redux",
      "Implementação de autenticação JWT",
      "Design de APIs RESTful escaláveis"
    ]
  },
  {
    title: "Faltas4U",
    description: "Sistema completo de gestão de faltas e férias com autenticação baseada em roles, desenvolvido para otimizar processos de recursos humanos e gestão de equipas.",
    longDescription: "Aplicação web full-stack desenvolvida aplicando princípios de engenharia de software e arquitetura de sistemas de informação. Implementa sistema robusto de autenticação com três níveis de acesso (Trabalhador, Chefia, Recursos Humanos), cada um com interfaces e permissões específicas. A solução integra gestão de utilizadores, aprovação de pedidos, relatórios automáticos e notificações, demonstrando competências em desenvolvimento full-stack e design de sistemas empresariais.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    category: 'web',
    featured: true,
    image: "/images/projects/faltas4u.jpg",
    images: [
      "/images/projects/ferias4U1.png",
      "/images/projects/ferias4U2.png",
      "/images/projects/ferias4U3.png",
      "/images/projects/ferias4U4.jpg"
    ],
    githubUrl: "https://github.com/cabrit0/FeriasAPP_API",
    liveUrl: "https://feriasapp.onrender.com/",
    features: [
      "Sistema de autenticação com três níveis de acesso",
      "Interface adaptativa baseada no role do utilizador",
      "Gestão completa de pedidos de faltas e férias",
      "Sistema de aprovação hierárquica",
      "Relatórios automáticos e dashboard analítico",
      "Notificações em tempo real",
      "Encriptação segura de credenciais"
    ],
    challenges: [
      "Implementação de sistema de roles complexo",
      "Design de interfaces diferenciadas por permissão",
      "Gestão de estados de aprovação em cascata",
      "Segurança e encriptação de dados sensíveis"
    ],
    learnings: [
      "Arquitetura de sistemas empresariais",
      "Gestão avançada de autenticação e autorização",
      "Design de APIs RESTful escaláveis",
      "Implementação de workflows de aprovação"
    ]
  },
  {
    title: "CryptoPartner",
    description: "Aplicação web interativa para monitorização de criptomoedas em tempo real, desenvolvida com React e integração de APIs externas para dados financeiros atualizados.",
    longDescription: "Aplicação frontend desenvolvida aplicando conhecimentos de programação web moderna e integração de APIs. Implementa consumo de dados em tempo real de mercados de criptomoedas, gestão de estado com React Hooks, e interface responsiva para visualização de informações financeiras. O projeto demonstra competências em desenvolvimento frontend, manipulação de dados dinâmicos e design de interfaces para dados financeiros.",
    technologies: ["React", "CSS", "JavaScript", "API Integration"],
    category: 'web',
    featured: false,
    image: "/images/projects/cryptopartner.jpg",
    githubUrl: "https://github.com/cabrit0/cryptoPartner",
    liveUrl: "https://crypto-partner.netlify.app/",
    features: [
      "Monitorização de preços em tempo real",
      "Interface responsiva e intuitiva",
      "Integração com APIs de criptomoedas",
      "Visualização de dados financeiros",
      "Gestão de estado com React Hooks",
      "Design adaptativo para diferentes dispositivos"
    ],
    challenges: [
      "Integração eficiente com APIs externas",
      "Gestão de atualizações em tempo real",
      "Otimização de performance para dados dinâmicos",
      "Design responsivo para dados tabulares"
    ],
    learnings: [
      "Consumo e manipulação de APIs REST",
      "Gestão avançada de estado com React",
      "Técnicas de otimização de performance",
      "Design de interfaces para dados financeiros"
    ]
  },
  {
    title: "Sistema de Agenda com Autenticação",
    description: "Aplicação web full-stack para gestão de contactos com sistema de autenticação segura, implementando operações CRUD completas e arquitetura de base de dados NoSQL.",
    longDescription: "Sistema de gestão de contactos desenvolvido aplicando fundamentos de engenharia de software e arquitetura de bases de dados. Implementa autenticação de utilizadores, operações CRUD (Create, Read, Update, Delete) completas, e estrutura de dados otimizada com MongoDB. A aplicação demonstra competências em desenvolvimento full-stack, segurança de aplicações web e design de sistemas de informação pessoal.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    category: 'web',
    featured: false,
    image: "/images/projects/contact-system.jpg",
    images: [
      "/images/projects/agenda.jpg"
    ],
    githubUrl: "https://github.com/cabrit0/AGENDA",
    features: [
      "Sistema de autenticação segura",
      "Operações CRUD completas para contactos",
      "Interface intuitiva para gestão de dados",
      "Validação de dados no frontend e backend",
      "Estrutura de base de dados otimizada",
      "Sessões de utilizador persistentes"
    ],
    challenges: [
      "Implementação de autenticação segura",
      "Design de esquemas de base de dados eficientes",
      "Validação consistente entre frontend e backend",
      "Gestão de sessões e estados de utilizador"
    ],
    learnings: [
      "Fundamentos de operações CRUD",
      "Integração MongoDB com Mongoose",
      "Princípios de autenticação web",
      "Arquitetura de aplicações full-stack"
    ]
  },
  {
    title: "Personal Portfolio",
    description: "Portfólio moderno e responsivo desenvolvido com Next.js e TypeScript, apresentando projetos e competências de forma interativa e profissional.",
    longDescription: "Portfólio web avançado desenvolvido aplicando as mais recentes tecnologias de desenvolvimento frontend. Implementa componentes reutilizáveis, animações fluidas com Framer Motion, design system consistente e otimizações de performance. O projeto demonstra competências em arquitetura de aplicações modernas, design responsivo e experiência do utilizador.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: 'web',
    featured: true,
    image: "/images/projects/portfolio.jpg",
    images: [
      "/images/projects/webPortfolio1.png",
      "/images/projects/webPortfolio2.png",
      "/images/projects/webPortfolio3.png",
      "/images/projects/webPortfolio4.png",
      "/images/projects/webPortfolio5.png"
    ],
    githubUrl: "https://github.com/cabrit0/webPortfolio",
    liveUrl: "https://webportfolio-0prr.onrender.com/",
    features: [
      "Design system modular com componentes reutilizáveis",
      "Animações fluidas e interações avançadas",
      "Galeria de projetos com lightbox responsivo",
      "Otimização SEO e performance",
      "Tema dark/light com persistência"
    ],
    challenges: [
      "Implementação de sistema de componentes escalável",
      "Otimização de animações para diferentes dispositivos",
      "Gestão de estado complexo para galerias interativas"
    ],
    learnings: [
      "Arquitetura avançada com Next.js 15",
      "Padrões de design system profissionais",
      "Otimizações de performance e acessibilidade"
    ]
  },
  {
    title: "Gestor de Gastos Financeiros",
    description: "Aplicação móvel desenvolvida para dispositivos móveis utilizando Flutter, implementando base de dados local e análise de dados para gestão financeira pessoal com interface nativa otimizada.",
    longDescription: "Aplicação móvel nativa desenvolvida aplicando conhecimentos de programação para dispositivos móveis e gestão de bases de dados. Implementa SQLite para armazenamento local, análise de padrões de dados financeiros e interface responsiva. O projeto demonstra competências em desenvolvimento mobile, arquitetura de dados e design de sistemas interativos para plataformas móveis.",
    technologies: ["Flutter", "Dart", "SQLite", "Charts"],
    category: 'mobile',
    featured: true,
    image: "/images/projects/expense-manager.jpg",
    images: [
      "/images/projects/gestorGastosFlutter1.png",
      "/images/projects/gestorGastosFlutter2.png",
      "/images/projects/gestorGastosFlutter3.png",
      "/images/projects/gestorGastosFlutter4.png"
    ],
    githubUrl: "https://github.com/cabrit0/gestao_gastos",
    features: [
      "Registo de despesas e receitas",
      "Categorização automática de gastos",
      "Relatórios detalhados com gráficos",
      "Acompanhamento de orçamento mensal",
      "Análise de padrões de consumo",
      "Interface nativa e responsiva",
      "Armazenamento local seguro"
    ],
    challenges: [
      "Implementar base de dados local eficiente",
      "Criar gráficos interativos e informativos",
      "Desenvolver interface intuitiva para mobile",
      "Otimizar performance da aplicação"
    ],
    learnings: [
      "Desenvolvimento mobile com Flutter",
      "Programação em Dart",
      "Gestão de base de dados SQLite",
      "Implementação de gráficos e charts",
      "Design patterns para mobile"
    ]
  },
  {
    title: "Sistema de Gestão de Bilhetes e Viagens",
    description: "Sistema de informação empresarial completo para gestão de transportes, implementando arquitetura de bases de dados relacionais e padrões de desenvolvimento web para gestão integrada de bilhetes, rotas e clientes.",
    longDescription: "Sistema empresarial desenvolvido aplicando princípios de engenharia de software e arquitetura de bases de dados relacionais. Implementa gestão completa de reservas, controlo de rotas, administração de clientes e relatórios financeiros. A solução integra múltiplos módulos empresariais com interface web responsiva, demonstrando competências em desenvolvimento de sistemas de informação complexos e arquitetura de software empresarial.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    category: 'web',
    featured: true,
    image: "/images/projects/travel-management.jpg",
    images: [
      "/images/projects/felixbus1.png",
      "/images/projects/felixbus2.png",
      "/images/projects/felixbus3.png",
      "/images/projects/felixbus4.png",
      "/images/projects/felixbus5.png"
    ],
    githubUrl: "https://github.com/DevJoseanneGourgel/JoaoCabrito_JoseanneGourgel",
    features: [
      "Gestão completa de reservas e bilhetes",
      "Administração de rotas e horários",
      "Sistema de gestão de clientes",
      "Relatórios financeiros e operacionais",
      "Interface administrativa multi-módulo",
      "Base de dados relacional otimizada",
      "Sistema de autenticação e permissões"
    ],
    challenges: [
      "Design de base de dados relacional complexa",
      "Integração de múltiplos módulos empresariais",
      "Gestão de transações financeiras",
      "Otimização de consultas para relatórios"
    ],
    learnings: [
      "Arquitetura de sistemas empresariais",
      "Design avançado de bases de dados relacionais",
      "Desenvolvimento web com PHP",
      "Integração de módulos de negócio complexos"
    ]
  },
  {
    title: "Gerador de Passwords Seguras",
    description: "Aplicação web frontend para geração de passwords seguras com diferentes níveis de complexidade, implementando algoritmos de aleatoriedade e critérios de segurança personalizáveis.",
    longDescription: "Aplicação frontend desenvolvida aplicando fundamentos de programação web e princípios de segurança digital. Implementa algoritmos de geração aleatória, validação de critérios de segurança, e interface intuitiva para personalização de passwords. Este projeto inicial demonstra competências em JavaScript vanilla, manipulação do DOM e implementação de lógica de segurança básica.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: 'web',
    featured: false,
    image: "/images/projects/password-generator.jpg",
    githubUrl: "https://github.com/cabrit0/password-generator",
    features: [
      "Geração de passwords com critérios personalizáveis",
      "Diferentes níveis de complexidade",
      "Interface simples e intuitiva",
      "Validação de critérios de segurança",
      "Algoritmos de aleatoriedade seguros",
      "Cópia automática para clipboard"
    ],
    challenges: [
      "Implementação de algoritmos de aleatoriedade",
      "Validação de critérios de segurança",
      "Design de interface user-friendly",
      "Manipulação eficiente do DOM"
    ],
    learnings: [
      "Fundamentos de JavaScript vanilla",
      "Princípios básicos de segurança digital",
      "Manipulação do DOM e eventos",
      "Design de interfaces web simples"
    ]
  }
]

// Technologies organized by category
export const technologies = {
  frontend: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS", "Bootstrap", "Sass"],
  backend: ["Node.js", "Express.js", "Python", "Java", "PHP"],
  mobile: ["Flutter", "Dart"],
  database: ["MongoDB", "SQL", "MySQL", "SQLite"],
  ai: ["PyTorch", "YOLO", "OpenCV", "LabelIMG"],
  tools: ["Unity", "Git", "Redux"],
  languages: ["JavaScript", "Python", "Java", "C", "Dart", "PHP"]
}

// Social Links with official icons
export const socialLinks = [
  {
    platform: "linkedin",
    href: "https://linkedin.com/in/cabrit0/",
    icon: "linkedin", // Official LinkedIn icon
    color: "#0077B5",
    label: "LinkedIn"
  },
  {
    platform: "github",
    href: "https://github.com/cabrit0",
    icon: "github", // Official GitHub icon
    color: "#333",
    label: "GitHub"
  },
  {
    platform: "mail",
    href: `mailto:${personalInfo.email}`,
    icon: "mail", // Official Mail icon
    color: "#EA4335",
    label: "Email"
  },
  {
    platform: "phone",
    href: `tel:${personalInfo.phone}`,
    icon: "phone", // Official Phone icon
    color: "#25D366",
    label: "Telefone"
  }
]

// Social Skills with detailed descriptions
export const socialSkills = [
  {
    title: "Excelência na comunicação",
    description: "Capacidade de expressar ideias de forma clara e concisa, tanto verbalmente como por escrito. Facilidade em adaptar a comunicação ao público-alvo, garantindo que a mensagem é compreendida eficazmente."
  },
  {
    title: "Naturalmente sociável e eficaz na transmissão de ideias",
    description: "Personalidade aberta e acessível que facilita a criação de relações interpessoais positivas. Habilidade para apresentar conceitos técnicos complexos de forma simples e compreensível."
  },
  {
    title: "Trabalho bem sob pressão, cumprindo prazos com rigor",
    description: "Capacidade comprovada de manter a qualidade do trabalho mesmo em situações de stress e prazos apertados. Organização e gestão eficaz do tempo para cumprir objetivos estabelecidos."
  },
  {
    title: "Valorizo o espírito de equipa, contribuindo para um ambiente colaborativo",
    description: "Forte orientação para o trabalho em equipa, promovendo a partilha de conhecimento e apoio mútuo. Capacidade de integrar diferentes perspetivas para alcançar objetivos comuns."
  },
  {
    title: "Rápida capacidade de aprendizagem",
    description: "Facilidade em assimilar novos conceitos, tecnologias e metodologias de trabalho. Autodidatismo comprovado através da aprendizagem contínua de linguagens de programação e frameworks."
  },
  {
    title: "Ambição saudável, procurando constantemente oportunidades de desenvolvimento",
    description: "Motivação intrínseca para o crescimento profissional e pessoal. Procura ativa de desafios que permitam expandir competências e contribuir de forma mais significativa para os projetos."
  }
]

// Contact Information
export const contactInfo = {
  email: personalInfo.email,
  location: personalInfo.location,
  availability: "Disponível imediatamente para oportunidades na área da programação",
  preferredContact: "email",
  status: "Procurando mudança de carreira para a área da programação",
  motivation: "Paixão genuína pela programação e desejo de pôr em prática o conhecimento adquirido"
}
