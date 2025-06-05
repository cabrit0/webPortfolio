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

- [x] Escolher paleta de cores ultra-moderna:
  - [x] **Primary**: Electric Blue (#0066FF) ou Neon Purple (#8B5CF6)
  - [x] **Background**: Rich Black (#0A0A0A) com gradientes subtis
  - [x] **Accent**: Cyber Green (#00FF88) ou Hot Pink (#FF0080)
  - [x] **Neutral**: Warm Grays com tints coloridos
- [x] Tipografia moderna e variável:
  - [x] **Headings**: Geist Sans (moderna e cativante)
  - [x] **Body**: Geist Sans (otimizada para web)
  - [x] **Code**: Geist Mono (consistente com o design)
- [x] Design system com tokens CSS customizados
- [x] **Glassmorphism**: Cards com efeito vidro translúcido
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

- [x] Secção **Hero** (Ultra-Moderna)

  - [x] Nome e título profissional (ex.: "João Cabrito — Developer & AI Enthusiast")
  - [x] **Typewriter effect**: Frase de impacto com animação de escrita
  - [x] **Floating elements**: Partículas flutuantes melhoradas no background
  - [x] **Gradient effects**: Gradientes modernos e mesh overlays
  - [x] Botões com **glassmorphism** e micro-animações magnéticas
  - [x] **Typography moderna**: Geist font com letter-spacing otimizado
  - [x] **Enhanced animations**: Animações cinematográficas melhoradas
  - [x] **Visual hierarchy**: Hierarquia tipográfica mais cativante

- [ ] Secção **Sobre Mim** (Interativa)

  - [ ] Breve biografia (com destaque nas áreas de IA, multimédia, bases de dados)
  - [ ] **Skills radar chart**: Visualização gráfica das competências
  - [ ] **Animated skill bars**: Barras que se preenchem com scroll
  - [ ] **Tech stack carousel**: Carrossel 3D com tecnologias
  - [ ] **GitHub stats**: Contribuições e estatísticas em tempo real
  - [ ] **Timeline interativa**: Jornada profissional com animações

- [ ] Secção **Projetos** (Showcase Avançado)

  - [x] **Filtros dinâmicos**: Filtrar projetos por tecnologia e categoria
  - [x] **Cards responsivos**: Grid adaptativo com informações completas
  - [x] **Hover effects**: Transições suaves e efeitos visuais
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

- [x] Botão (estilos: primário, secundário, ghost)
- [x] Título (H1–H3, com tamanhos e pesos distintos)
- [x] Parágrafo (texto base com espaçamento)
- [x] Ícone (com suporte a diferentes ícones SVG)
- [x] Tag (representação de tecnologias: React, MongoDB, etc.)

### 4.2. Molecules

- [x] Cartão de Projeto
  - [x] Imagem
  - [x] Nome
  - [x] Stack (tags)
  - [x] Botões
- [x] Formulário de Contacto
  - [x] Campos estilizados com bordas suaves
  - [x] Validação básica (formato email, campos obrigatórios)

### 4.3. Sections

- [x] HeroSection
- [x] AboutSection
- [x] ProjectsSection
- [x] ContactSection
- [x] FooterSection

---

## 🔀 5. Navegação

- [x] Implementar navegação entre secções com scroll suave (âncoras)
- [x] **Header limpo** apenas com logo e botão Menu
- [x] **Drawer/Gaveta moderna** contém APENAS os links de navegação:
  - [x] Home
  - [x] About (Sobre Mim)
  - [x] Projects (Projetos)
  - [x] Contact (Contacto)
- [x] **Gaveta ocupa 85% da largura e 100% da altura** (85vw x 100vh)
- [x] **Links muito grandes e espaçados** (text-4xl/5xl, py-8, space-y-8)
- [x] **Mantra pessoal**: "Com calma e com alma"
- [x] **Frase de Agostinho da Silva**: "O importante não é aquilo que fazemos da nossa vida, mas aquilo que a nossa vida faz de nós."
- [x] **Botão Menu** disponível em desktop e mobile
- [x] **Drawer desliza da direita** com animação suave
- [x] **Animação glitch na transição** da gaveta (abertura/fechamento)
- [x] **Botão "Voltar"** bem posicionado com ícone e hover effects
- [x] **Animação no botão antes de fechar** (scale + translate)
- [x] **Gaveta fecha mais devagar** (0.6s) do que abre (0.3s)
- [x] **Sequência de animações**: botão → glitch → fechar
- [x] **Glassmorphism** effect no header e drawer
- [x] **Enhanced glitch effects** com skew, blur, brightness e box-shadow
- [x] **Smooth slide animation** com spring physics
- [x] **Staggered item animation** no drawer
- [x] **Overlay com backdrop blur** quando drawer está aberto

---

## 📋 6. Planeamento e Estrutura das Secções

### 🎯 Análise do Perfil
- [x] **Developer experiente** com stack completo (Frontend + Backend + Mobile + AI)
- [x] **Projetos diversificados** (Web, Mobile, AI/ML, Sistemas)
- [x] **Formação sólida** (Técnico + Licenciatura em curso)
- [x] **Experiência profissional** (Dinefer + Estágios)
- [x] **Competências sociais** fortes (comunicação, trabalho em equipa)

### 🏗️ Estrutura das Secções Definida

#### 1. 🏠 HOME/HERO *(Já implementada)*
- [x] **Status**: Completa
- [x] **Conteúdo**: Nome, título, call-to-actions

#### 2. 👨‍💻 ABOUT
- [x] **Intro pessoal** melhorada (mais cativante que o CV)
- [x] **Jornada profissional** (timeline visual)
- [x] **Paixões e motivações**
- [x] **Localização** (Castelo Branco, Portugal)
- [x] **Mantra**: "Com calma e com alma"

#### 3. 💼 EXPERIENCE & SKILLS
- [x] **Skills técnicas** (com níveis visuais)
  - [x] Frontend: React, JavaScript, HTML/CSS, Tailwind
  - [x] Backend: Node.js, Express.js, Python, PHP
  - [x] Mobile: Flutter, Dart
  - [x] Database: MongoDB, SQL
  - [x] AI/ML: PyTorch, YOLO, OpenCV
  - [x] Tools: Git, Unity, C#
- [x] **Experiência profissional** (Dinefer, MobileTec, Horus Gaming)
- [x] **Educação** (IEFP + ESTCB)
- [x] **Competências sociais** destacadas (secção dedicada implementada)

#### 4. 🚀 PROJECTS
- [x] **9 projetos principais** do CV
  - [x] Software Reconhecimento Visual (YOLO, PyTorch, Python)
  - [x] Website Feira de Emprego (HTML, Tailwind, JavaScript)
  - [x] Fitness4U (React, Tailwind, Node.js, MongoDB)
  - [x] Faltas4U (React, ChakraUI, Node.js, MongoDB)
  - [x] CryptoPartner (React, CSS)
  - [x] Contact with Login System (HTML, CSS, JavaScript, Node.js)
  - [x] **Gestor de Gastos Financeiros** (Flutter, Dart, SQLite)
  - [x] **Sistema de Gestão de Bilhetes e Viagens** (PHP, MySQL, HTML, CSS)
  - [x] Personal Portfolio (HTML, CSS, Bootstrap, Sass)
- [x] **Cards interativos** com demos/links
- [x] **Destaque**: Projeto de AI (reconhecimento visual)
- [x] **Diversidade**: Web, Mobile, AI, Backend

#### 5. 📞 CONTACT
- [x] **Informações de contacto** (email, localização, disponibilidade)
- [x] **Formulário de contacto** (nome, email, assunto, mensagem)
- [x] **Links sociais** (LinkedIn, Email)
- [x] **Disponibilidade** para projetos (imediatamente disponível)

### 🎨 Melhorias de Texto Propostas
- [ ] **About - Versão melhorada**: Texto mais cativante e storytelling
- [ ] **Skills - Categorização**: Organização por áreas técnicas
- [ ] **Projects - Descrições**: Textos mais impactantes para cada projeto
- [ ] **Experience - Timeline**: Narrativa da jornada profissional

---

## 🎥 7. Animações e Interações Avançadas

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

## 📱 8. Responsividade

- [ ] Garantir que o layout funciona em:
  - [ ] Mobile (vertical)
  - [ ] Tablet
  - [ ] Desktop
- [ ] Reorganizar secções empilhadas em mobile
- [ ] Ajustar tamanho de fontes e imagens consoante breakpoints

---

## ⚙️ 9. Performance e Otimização Moderna

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

## 🔐 10. Acessibilidade (a11y)

- [ ] Alt em todas as imagens
- [ ] Labels associados aos inputs
- [ ] Contraste suficiente entre texto e fundo
- [ ] Navegação com teclado testada

---

## 📤 11. Deploy

- [ ] Gerar build final com Vite
- [ ] Fazer deploy em Vercel (ligar com GitHub)
- [ ] Testar URL pública em vários dispositivos

---

## ✅ 11. Commits Simples (boas práticas)

- [x] Usar mensagens simples e claras, por exemplo:
  - [x] `init: setup inicial do projeto`
  - [x] `feat: criar secção Hero`
  - [x] `style: aplicar paleta de cores`
  - [x] `fix: ajustar layout mobile dos projetos`

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
