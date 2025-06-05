// Profile data for João Cabrito
// Based on CV and personal information

export interface PersonalInfo {
  name: string
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
  technologies: string[]
  category: 'web' | 'mobile' | 'ai' | 'system'
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  image?: string
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "João Filipe Campos Cabrito",
  title: "Frontend Developer",
  location: "Castelo Branco, Portugal",
  mantra: "Com calma e com alma",
  description: "Sou um Frontend Developer com competências autodidatas e espírito criativo. Curioso por natureza, presto especial atenção às tecnologias, sempre com a ambição de desenvolver novos conhecimentos e participar em projetos desafiantes.",
  bio: `Sou um Frontend Developer com competências autodidatas e espírito criativo. Curioso por natureza, presto especial atenção às tecnologias, sempre com a ambição de desenvolver novos conhecimentos e participar em projetos desafiantes.

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
  { name: "ChakraUI", level: 75, category: 'frontend' },

  // Backend
  { name: "Node.js", level: 80, category: 'backend' },
  { name: "Express.js", level: 80, category: 'backend' },

  // Mobile
  { name: "Flutter", level: 80, category: 'mobile' },

  // Database
  { name: "MongoDB", level: 85, category: 'database' },
  { name: "SQL", level: 85, category: 'database' },

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
    description: "Projeto de final de licenciatura focado no desenvolvimento de um software inteligente de reconhecimento visual, capaz de identificar e classificar componentes de cablagem elétrica automóvel. Utilizando machine learning e algoritmos de computação visual, a solução visa otimizar processos de inspeção e qualidade na indústria automóvel, reduzindo erros e aumentando a eficiência produtiva.",
    technologies: ["YOLO", "PyTorch", "Python", "OpenCV", "LabelIMG"],
    category: 'ai',
    featured: true,
    image: "/images/projects/automotive-recognition.jpg"
  },
  {
    title: "Website da Feira de Emprego Universitária",
    description: "Desenvolvimento do website oficial da feira de emprego da universidade, um evento crucial para a ligação entre estudantes e o mercado de trabalho. O site oferece uma plataforma intuitiva para consulta de empresas participantes, agenda do evento e inscrição em sessões de networking. Implementado com um design responsivo e otimizado para uma experiência de utilizador fluida e acessível.",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    category: 'web',
    featured: true,
    image: "/images/projects/job-fair.jpg"
  },
  {
    title: "Fitness4U",
    description: "Aplicação com Authorization e Autentication desenhada para aplicações de ginásios. Com user login, cada user pode criar o seu plano de treino adicionando exercícios de mais de 1000 exercícios diferente, pode associar o treino a um calendário dinâmico que renderiza treinos marcados nos respetivos dias. Informações sobre BMI e sugestões de exercícios adicionadas.",
    technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "Redux"],
    category: 'web',
    featured: true,
    image: "/images/projects/fitness4u.jpg"
  },
  {
    title: "Faltas4U",
    description: "Aplicação desenhada para utilizadores realizarem uma despensa de falta ou Férias. Esta possui sistema de login e roles, assim diferentes layouts e autorizações estão disponíveis consoante a Role (trabalhador, chefia, Recursos Humanos). Acessos diferentes para todos os roles, users independentes e com credenciais devidamente encriptadas.",
    technologies: ["React", "ChakraUI", "Node.js", "Express.js", "MongoDB"],
    category: 'web',
    featured: true,
    image: "/images/projects/faltas4u.jpg"
  },
  {
    title: "CryptoPartner",
    description: "A aplicação permite que o usuário veja informações em tempo real sobre criptomoedas, como valores comerciais, entre outros. A utilização de estados/hooks do React tornou a aplicação dinâmica e responsiva.",
    technologies: ["React", "CSS"],
    category: 'web',
    featured: false,
    image: "/images/projects/cryptopartner.jpg"
  },
  {
    title: "Contact with login system",
    description: "Projeto criado utilizando JavaScript e MongoDB como banco de dados. A aplicação permite que os usuários façam login, registrem e editem contatos após o login. Este projeto ajudou a compreender o sistema CRUD com a tecnologia MongoDB e Mongoose.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    category: 'web',
    featured: false,
    image: "/images/projects/contact-system.jpg"
  },
  {
    title: "Personal Portfolio",
    description: "Projeto desenvolvido com o objetivo de exibir meu trabalho na internet de maneira criativa e eficiente.",
    technologies: ["HTML", "CSS", "Bootstrap", "Sass", "JavaScript"],
    category: 'web',
    featured: false,
    image: "/images/projects/portfolio.jpg"
  }
]

// Technologies organized by category
export const technologies = {
  frontend: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS", "ChakraUI", "Bootstrap", "Sass"],
  backend: ["Node.js", "Express.js", "Python", "PHP"],
  mobile: ["Flutter", "Dart"],
  database: ["MongoDB", "SQL"],
  ai: ["PyTorch", "YOLO", "OpenCV", "LabelIMG"],
  tools: ["Unity", "Git", "Redux"],
  languages: ["JavaScript", "Python", "Java", "C", "Dart", "PHP"]
}

// Social Links
export const socialLinks = [
  { platform: "linkedin", href: "https://linkedin.com/in/cabrit0/" },
  { platform: "mail", href: `mailto:${personalInfo.email}` }
]

// Social Skills
export const socialSkills = [
  "Excelência na comunicação",
  "Naturalmente sociável e eficaz na transmissão de ideias",
  "Trabalho bem sob pressão, cumprindo prazos com rigor",
  "Valorizo o espírito de equipa, contribuindo para um ambiente colaborativo",
  "Rápida capacidade de aprendizagem",
  "Ambição saudável, procurando constantemente oportunidades de desenvolvimento"
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
