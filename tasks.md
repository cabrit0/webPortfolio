# 📘 tasks.md — Webportfolio Moderno em React

## 🎯 Objetivo Geral

Desenvolver um webportfolio moderno, visualmente impactante e tecnicamente impressionante, com:

- [ ] Estrutura escalável baseada em componentes atómicos
- [ ] Design ultra-moderno com elementos 3D e micro-interações
- [ ] Tecnologias de ponta para impressionar recrutadores
- [ ] Performance otimizada e experiência fluida
- [ ] Conteúdo direto: biografia, competências, projetos, contacto
- [ ] Navegação fluida, responsiva e interativa

---

## 🗂️ 1. Setup Inicial

### 1.1. Ambiente de Projeto

- [ ] Criar repositório Git com nome `webportfolio`
- [x] **Opção A (Recomendada)**: Inicializar com Next.js 14 + React + TypeScript
- [ ] **Opção B**: Inicializar projeto com Vite + React + TypeScript
- [x] Instalar TailwindCSS para styling utilitário
- [x] Instalar Shadcn/ui para componentes modernos e acessíveis
- [ ] Instalar React Router (se Vite) ou usar App Router (se Next.js)
- [x] Instalar Framer Motion para animações suaves
- [x] Instalar GSAP para animações profissionais avançadas
- [x] Instalar Lenis para smooth scrolling ultra-suave
- [ ] Instalar Three.js + React Three Fiber para elementos 3D
- [ ] Instalar React Hook Form + Zod para formulários robustos

### 1.2. Organização de Pastas

- [x] Criar estrutura moderna:
  - [x] `src/components/ui/` → componentes Shadcn/ui
  - [x] `src/components/atoms/` → elementos básicos (Botão, Texto, Ícone)
  - [x] `src/components/molecules/` → combinações simples (Card de Projeto, Formulário)
  - [x] `src/components/sections/` → secções completas da UI (Hero, Sobre, Projetos, Contacto)
  - [x] `src/components/3d/` → componentes Three.js e elementos 3D
  - [x] `src/components/animations/` → componentes de animação GSAP/Framer
  - [x] `src/app/` → páginas Next.js (se Next.js) ou `src/pages/` (se Vite)
  - [x] `src/hooks/` → custom hooks reutilizáveis
  - [x] `src/lib/` → utilitários, configurações e helpers
  - [x] `src/stores/` → gestão de estado (Zustand)
  - [x] `src/assets/` → imagens, ícones, fontes, modelos 3D
  - [x] `src/data/` → ficheiros com dados dos projetos
  - [x] `src/styles/` → estilos globais e temas
- [x] Criar ficheiros principais: `App.tsx`, `main.tsx`, `globals.css`

---

## 🎨 2. Design e Estilo

### 2.1. Identidade Visual Moderna

- [ ] Escolher paleta de cores ultra-moderna:
  - [ ] **Primary**: Electric Blue (#0066FF) ou Neon Purple (#8B5CF6)
  - [ ] **Background**: Rich Black (#0A0A0A) com gradientes subtis
  - [ ] **Accent**: Cyber Green (#00FF88) ou Hot Pink (#FF0080)
  - [ ] **Neutral**: Warm Grays com tints coloridos
- [ ] Tipografia moderna e variável:
  - [ ] **Headings**: Inter Variable ou Satoshi
  - [ ] **Body**: Inter ou System UI stack
  - [ ] **Code**: JetBrains Mono ou Fira Code
- [ ] Design system com tokens CSS customizados
- [ ] **Glassmorphism**: Cards com efeito vidro translúcido
- [ ] **Gradient Meshes**: Fundos com gradientes complexos animados
- [ ] **Theme switcher**: Transição cinematográfica entre dark/light
- [ ] **Cursor personalizado**: Cursor que reage aos elementos

### 2.2. Ícones e Elementos Visuais

- [ ] Utilizar ícones vetoriais modernos (Lucide, Heroicons, Phosphor)
- [ ] **Ícones animados**: Micro-animações on-hover e on-focus
- [ ] Usar imagens de projetos otimizadas (WebP, AVIF)
- [ ] **Particle systems**: Partículas interativas no background
- [ ] **3D elements**: Modelos 3D subtis para destacar secções
- [ ] **Lottie animations**: Animações vetoriais para micro-interações
- [ ] **SVG morphing**: Transições suaves entre ícones

---

## 📑 3. Estrutura de Páginas

### 3.1. Página Home `/`

- [ ] Secção **Hero** (Ultra-Moderna)

  - [ ] Nome e título profissional (ex.: "João Cabrito — Developer & AI Enthusiast")
  - [ ] **Typewriter effect**: Frase de impacto com animação de escrita
  - [ ] **3D Avatar**: Modelo 3D interativo ou avatar animado
  - [ ] **Floating elements**: Elementos 3D flutuantes no background
  - [ ] **Particle cursor trail**: Rastro de partículas seguindo o cursor
  - [ ] Botões com **glassmorphism** e micro-animações
  - [ ] **Scroll indicator**: Indicador animado para scroll down
  - [ ] **GSAP timeline**: Animação orquestrada de entrada

- [ ] Secção **Sobre Mim** (Interativa)

  - [ ] Breve biografia (com destaque nas áreas de IA, multimédia, bases de dados)
  - [ ] **Skills radar chart**: Visualização gráfica das competências
  - [ ] **Animated skill bars**: Barras que se preenchem com scroll
  - [ ] **Tech stack carousel**: Carrossel 3D com tecnologias
  - [ ] **GitHub stats**: Contribuições e estatísticas em tempo real
  - [ ] **Timeline interativa**: Jornada profissional com animações

- [ ] Secção **Projetos** (Showcase Avançado)

  - [ ] **Filtros dinâmicos**: Filtrar projetos por tecnologia
  - [ ] **Cards 3D**: Projetos em carrossel/grid 3D interativo
  - [ ] **Hover effects**: Parallax e morphing nos cards
  - [ ] Cada projeto deve mostrar:
    - [ ] Nome com animação de reveal
    - [ ] Descrição com typewriter effect
    - [ ] **Tech badges**: Tags animadas das tecnologias
    - [ ] **Live preview**: Iframe ou screenshot interativo
    - [ ] Botões com micro-animações: Ver Demo / GitHub
  - [ ] **Infinite scroll** ou paginação suave
  - [ ] **Search functionality**: Pesquisa inteligente nos projetos

- [ ] Secção **Contacto**

  - [ ] Pequena introdução com chamada à ação
  - [ ] Formulário com campos:
    - [ ] Nome
    - [ ] Email
    - [ ] Mensagem
  - [ ] Feedback visual de envio (mensagem de sucesso ou erro)
  - [ ] Links para redes sociais (GitHub, LinkedIn)

- [ ] **Footer**
  - [ ] Navegação secundária (Home, Sobre, Projetos, Contacto)
  - [ ] Redes sociais
  - [ ] Copyright

---

## 🧱 4. Componentes Visuais (Widgets)

### 4.1. Atoms

- [ ] Botão (estilos: primário, secundário, ghost)
- [ ] Título (H1–H3, com tamanhos e pesos distintos)
- [ ] Parágrafo (texto base com espaçamento)
- [ ] Ícone (com suporte a diferentes ícones SVG)
- [ ] Tag (representação de tecnologias: React, MongoDB, etc.)

### 4.2. Molecules

- [ ] Cartão de Projeto
  - [ ] Imagem
  - [ ] Nome
  - [ ] Stack (tags)
  - [ ] Botões
- [ ] Formulário de Contacto
  - [ ] Campos estilizados com bordas suaves
  - [ ] Validação básica (formato email, campos obrigatórios)

### 4.3. Sections

- [ ] HeroSection
- [ ] AboutSection
- [ ] ProjectsSection
- [ ] ContactSection
- [ ] FooterSection

---

## 🔀 5. Navegação

- [ ] Implementar navegação entre secções com React Router (scroll suave com âncoras ou rotas simples)
- [ ] Menu fixo no topo com os links:
  - [ ] Home
  - [ ] Sobre Mim
  - [ ] Projetos
  - [ ] Contacto
- [ ] Responsividade total do menu (versão mobile com hamburguer)

---

## 🎥 6. Animações e Interações Avançadas

- [ ] **GSAP ScrollTrigger**: Animações complexas baseadas no scroll
- [ ] **Framer Motion**: Animações de página e componentes
- [ ] **Lenis**: Smooth scrolling ultra-suave
- [ ] **Cursor personalizado**: Cursor que reage aos elementos
- [ ] **Magnetic buttons**: Botões que atraem o cursor
- [ ] **Parallax moderno**: Efeitos de profundidade subtis
- [ ] **Morphing shapes**: Formas que se transformam
- [ ] **Loading animations**: Skeleton loaders e progress indicators
- [ ] **Micro-interações**: Feedback em cada ação do utilizador
- [ ] **Sound design** (opcional): Sons subtis para interações
- [ ] **Easter eggs**: Elementos surpresa para mostrar criatividade

---

## 📱 7. Responsividade

- [ ] Garantir que o layout funciona em:
  - [ ] Mobile (vertical)
  - [ ] Tablet
  - [ ] Desktop
- [ ] Reorganizar secções empilhadas em mobile
- [ ] Ajustar tamanho de fontes e imagens consoante breakpoints

---

## ⚙️ 8. Performance e Otimização Moderna

- [ ] **Next.js optimizations**: Image component, font optimization
- [ ] **Modern formats**: WebP, AVIF para imagens
- [ ] **Code splitting**: Lazy loading inteligente de componentes
- [ ] **Service Worker**: Caching estratégico para PWA
- [ ] **Core Web Vitals**: Otimização para métricas Google
- [ ] **Bundle analysis**: Análise e otimização do bundle
- [ ] **Preloading**: Critical resources e route prefetching
- [ ] **Performance monitoring**: Real-time metrics dashboard
- [ ] **Lighthouse CI**: Automated performance testing

---

## 🔐 9. Acessibilidade (a11y)

- [ ] Alt em todas as imagens
- [ ] Labels associados aos inputs
- [ ] Contraste suficiente entre texto e fundo
- [ ] Navegação com teclado testada

---

## 📤 10. Deploy

- [ ] Gerar build final com Vite
- [ ] Fazer deploy em Vercel (ligar com GitHub)
- [ ] Testar URL pública em vários dispositivos

---

## ✅ 11. Commits Simples (boas práticas)

- [ ] Usar mensagens simples e claras, por exemplo:
  - [ ] `init: setup inicial do projeto`
  - [ ] `feat: criar secção Hero`
  - [ ] `style: aplicar paleta de cores`
  - [ ] `fix: ajustar layout mobile dos projetos`

---

## � 12. Funcionalidades Avançadas (Impressionar Recrutadores)

### 12.1. Funcionalidades Core

- [ ] **Command Palette** (Cmd+K): Navegação rápida estilo VS Code
- [ ] **Theme switcher**: Transição cinematográfica dark/light
- [ ] **Scroll progress bar**: Barra de progresso animada
- [ ] **Download CV**: PDF gerado dinamicamente
- [ ] **PWA**: Progressive Web App com offline support

### 12.2. Funcionalidades Showcase

- [ ] **Code playground**: Executar código diretamente no site
- [ ] **AI Chatbot**: Bot pessoal que responde sobre ti
- [ ] **Real-time analytics**: Dashboard de visitantes
- [ ] **Dynamic content**: Conteúdo que se adapta ao visitante
- [ ] **Virtual business card**: Contacto em AR (opcional)

### 12.3. Detalhes Técnicos

- [ ] **Página de projeto detalhada** (`/project/:id`)
- [ ] **Tech stack visualization**: Grafo interativo de tecnologias
- [ ] **GitHub integration**: Commits, stars, activity em tempo real
- [ ] **Performance metrics**: Lighthouse scores visíveis
- [ ] **Error boundaries**: Handling elegante de erros

---

## 🧪 13. Testes e Verificação Final

- [ ] Verificar todos os links e botões
- [ ] Testar formulário de contacto (com feedback simulado)
- [ ] Validar responsividade e layout
- [ ] Corrigir qualquer falha visual ou interação estranha

---

## 🏁 14. Entrega Final

- [ ] Confirmar que o site está funcional e ultra-moderno
- [ ] Confirmar que a navegação é fluida e intuitiva
- [ ] Confirmar que o site reflete:
  - [ ] As tuas competências técnicas avançadas
  - [ ] O teu conhecimento de tecnologias modernas
  - [ ] O teu estilo profissional e criatividade visual
  - [ ] A tua capacidade de criar experiências cativantes
- [ ] **Performance audit**: Lighthouse score > 90 em todas as métricas
- [ ] **Cross-browser testing**: Funcionalidade em todos os browsers
- [ ] **Mobile-first**: Experiência perfeita em dispositivos móveis

---

## 🎯 15. Tecnologias Recomendadas (Stack Completa)

### 15.1. Core Technologies

- **Framework**: Next.js 14 (App Router) ou Vite + React 18
- **Language**: TypeScript para type safety
- **Styling**: TailwindCSS + Shadcn/ui
- **State**: Zustand para gestão de estado leve
- **Forms**: React Hook Form + Zod validation

### 15.2. Animation & 3D

- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js + React Three Fiber
- **Smooth Scroll**: Lenis
- **Particles**: React Particles ou custom WebGL

### 15.3. Performance & SEO

- **Image Optimization**: Next.js Image ou sharp
- **Bundle Analysis**: @next/bundle-analyzer
- **SEO**: Next.js metadata API
- **PWA**: next-pwa ou Vite PWA plugin

### 15.4. Developer Experience

- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **Testing**: Vitest + Testing Library
- **Deployment**: Vercel (recomendado) ou Netlify

### 15.5. Advanced Features

- **Analytics**: Vercel Analytics ou Google Analytics 4
- **Error Tracking**: Sentry (opcional)
- **CMS**: Sanity ou Contentful (se conteúdo dinâmico)
- **Database**: Supabase ou PlanetScale (se necessário)
