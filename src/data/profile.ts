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
  avatar: "/images/avatar.jpg" // Placeholder
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
    period: "2023 - Junho 2025",
    description: "Eletrónica realizada em módulos para teste de cablagem Automóvel. Testes compostos por deteções específicas, Estanqueidade e outras lógicas requeridas por clientes. Trabalhei em regime de trabalhador-estudante, demonstrando capacidade de gestão de tempo e pressão.",
    technologies: ["Eletrónica", "Testes Automóveis", "Sistemas de Deteção"],
    type: 'work'
  },
  {
    company: "Dinefer, SA",
    position: "Técnico de pneumática",
    period: "2022 - 2023",
    description: "Pneumática realizada em módulos para teste de cablagem Automóvel. Testes compostos por deteções específicas, Estanqueidade e outras.",
    technologies: ["Pneumática", "Testes Automóveis", "Sistemas de Estanqueidade"],
    type: 'work'
  },
  {
    company: "MobileTec",
    position: "Estágio integrado",
    period: "Estágio",
    description: "Reparação de equipamentos eletrônicos, como computadores, smartphones, iPhones e consolas.",
    technologies: ["Reparação", "Hardware", "Dispositivos Móveis"],
    type: 'internship'
  },
  {
    company: "Horus Gaming Entertainment",
    position: "Estágio integrado",
    period: "Estágio",
    description: "Desenvolvimento aplicativos e jogos para Android e iOS usando a linguagem C e o GameEngine Unity. Utilização de ferramentas como Inscape e UnityEngine.",
    technologies: ["Unity", "C", "Android", "iOS", "Game Development"],
    type: 'internship'
  }
]

// Education
export const education: Education[] = [
  {
    institution: "ESTCB - Escola Superior de Tecnologia de Castelo Branco (IPCB)",
    degree: "Licenciatura em Informática e Multimédia",
    period: "2021 - 2025 (Finalista)",
    location: "Castelo Branco",
    status: 'in-progress'
  },
  {
    institution: "IEFP Castelo Branco",
    degree: "Técnico de Informática e Sistemas",
    period: "Concluído",
    location: "Castelo Branco",
    status: 'completed'
  }
]

// Featured Projects
export const projects: Project[] = [
  {
    title: "Software Reconhecimento Visual para Componentes de Cablagem Automóvel",
    description: "Projeto de final de licenciatura focado no desenvolvimento de um software inteligente de reconhecimento visual, capaz de identificar e classificar componentes de cablagem elétrica automóvel.",
    longDescription: "Este projeto representa o culminar da minha licenciatura, onde desenvolvi um sistema avançado de reconhecimento visual utilizando machine learning e algoritmos de computação visual. A solução visa otimizar processos de inspeção e qualidade na indústria automóvel, reduzindo erros humanos e aumentando significativamente a eficiência produtiva. O sistema é capaz de identificar e classificar diferentes tipos de componentes de cablagem com alta precisão.",
    technologies: ["YOLO", "PyTorch", "Python", "OpenCV", "LabelIMG"],
    category: 'ai',
    featured: true,
    image: "/images/projects/automotive-recognition.jpg",
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
    description: "Desenvolvimento do website oficial da feira de emprego da universidade, um evento crucial para a ligação entre estudantes e o mercado de trabalho.",
    longDescription: "Website oficial desenvolvido para a feira de emprego da universidade ESTCB. O projeto oferece uma plataforma completa e intuitiva para consulta de empresas participantes, agenda detalhada do evento e sistema de inscrição em sessões de networking. Implementado com design responsivo e otimizado para proporcionar uma experiência de utilizador fluida e acessível em todos os dispositivos.",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    category: 'web',
    featured: true,
    image: "/images/projects/job-fair.jpg",
    githubUrl: "https://github.com/cabrit0/feira-emprego-website",
    liveUrl: "https://feira-emprego-estcb.netlify.app",
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
    description: "Aplicação completa para gestão de treinos e acompanhamento fitness com sistema de autenticação robusto e interface moderna.",
    longDescription: "Fitness4U é uma aplicação web completa desenvolvida para ginásios e utilizadores individuais. O sistema inclui autenticação e autorização seguras, permitindo que cada utilizador crie planos de treino personalizados a partir de uma base de dados com mais de 1000 exercícios diferentes. A aplicação integra um calendário dinâmico que renderiza treinos marcados, cálculo de BMI e sugestões inteligentes de exercícios baseadas no perfil do utilizador.",
    technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "Redux"],
    category: 'web',
    featured: true,
    image: "/images/projects/fitness4u.jpg",
    githubUrl: "https://github.com/cabrit0/fitness4u",
    liveUrl: "https://fitness4u-app.netlify.app",
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
    description: "Aplicação desenhada para utilizadores realizarem uma despensa de falta ou Férias. Esta possui sistema de login e roles, assim diferentes layouts e autorizações estão disponíveis consoante a Role (trabalhador, chefia, Recursos Humanos). Acessos diferentes para todos os roles, users independentes e com credenciais devidamente encriptadas.",
    technologies: ["React", "ChakraUI", "Node.js", "Express.js", "MongoDB"],
    category: 'web',
    featured: true,
    image: "/images/projects/faltas4u.jpg",
    githubUrl: "https://github.com/cabrit0/faltas4u",
    liveUrl: "https://faltas4u-app.netlify.app"
  },
  {
    title: "CryptoPartner",
    description: "A aplicação permite que o usuário veja informações em tempo real sobre criptomoedas, como valores comerciais, entre outros. A utilização de estados/hooks do React tornou a aplicação dinâmica e responsiva.",
    technologies: ["React", "CSS"],
    category: 'web',
    featured: false,
    image: "/images/projects/cryptopartner.jpg",
    githubUrl: "https://github.com/cabrit0/cryptopartner",
    liveUrl: "https://cryptopartner-app.netlify.app"
  },
  {
    title: "Contact with login system",
    description: "Projeto criado utilizando JavaScript e MongoDB como banco de dados. A aplicação permite que os usuários façam login, registrem e editem contatos após o login. Este projeto ajudou a compreender o sistema CRUD com a tecnologia MongoDB e Mongoose.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    category: 'web',
    featured: false,
    image: "/images/projects/contact-system.jpg",
    githubUrl: "https://github.com/cabrit0/contact-login-system",
    liveUrl: "https://contact-system-demo.netlify.app"
  },
  {
    title: "Personal Portfolio",
    description: "Projeto desenvolvido com o objetivo de exibir meu trabalho na internet de maneira criativa e eficiente.",
    technologies: ["HTML", "CSS", "Bootstrap", "Sass", "JavaScript"],
    category: 'web',
    featured: false,
    image: "/images/projects/portfolio.jpg",
    githubUrl: "https://github.com/cabrit0/personal-portfolio",
    liveUrl: "https://cabrit0-portfolio.netlify.app"
  },
  {
    title: "Gestor de Gastos Financeiros",
    description: "Aplicação móvel desenvolvida em Flutter para gestão pessoal de finanças. Permite aos utilizadores registar despesas e receitas, categorizar gastos, visualizar relatórios detalhados e acompanhar o orçamento mensal.",
    longDescription: "Aplicação móvel completa desenvolvida em Flutter para gestão pessoal de finanças. O app permite aos utilizadores registar despesas e receitas de forma intuitiva, categorizar gastos por tipo, visualizar relatórios detalhados com gráficos interativos e acompanhar o orçamento mensal. Interface moderna e responsiva com análise de padrões de consumo para um controlo financeiro eficaz.",
    technologies: ["Flutter", "Dart", "SQLite", "Charts"],
    category: 'mobile',
    featured: true,
    image: "/images/projects/expense-manager.jpg",
    githubUrl: "https://github.com/cabrit0/flutter-expense-manager",
    liveUrl: "https://expense-manager-demo.netlify.app",
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
    description: "Aplicação web completa para gestão de bilhetes, viagens, rotas e clientes. Sistema desenvolvido para empresas de transporte com funcionalidades de reserva de bilhetes, gestão de rotas, controlo de clientes e relatórios administrativos. Interface responsiva com painel administrativo para gestão completa do sistema.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    category: 'web',
    featured: true,
    image: "/images/projects/travel-management.jpg",
    githubUrl: "https://github.com/cabrit0/travel-management-system",
    liveUrl: "https://travel-management-demo.netlify.app"
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
