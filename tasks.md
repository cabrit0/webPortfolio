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
- [x] **Status**: Completa e otimizada
- [x] **Conteúdo**: Nome (apenas "João Cabrito"), título, call-to-actions
- [x] **Header limpo**: Removida repetição do nome para evitar redundância

#### 2. 👨‍💻 ABOUT
- [x] **Intro pessoal** melhorada (mais cativante que o CV)
- [x] **Jornada profissional** (timeline visual)
- [x] **Paixões e motivações**
- [x] **Localização** (Castelo Branco, Portugal)
- [x] **Mantra**: "Com calma e com alma"

#### 3. 💼 EXPERIENCE & SKILLS
- [x] **Secção Tecnologias redesenhada** com layout moderno e cores bem escolhidas
  - [x] Grid 3x3 com 9 tecnologias incluindo Java
  - [x] Java adicionado: ☕ Backend robusto (vermelho-laranja)
  - [x] Ícones e descrições para cada tech
  - [x] Efeitos hover e glow personalizados
  - [x] Cores realistas: JavaScript (amarelo), Java (vermelho-laranja), Python (azul), etc.
- [x] **Skills técnicas** (com níveis visuais)
  - [x] Frontend: React, JavaScript, HTML/CSS, Tailwind
  - [x] Backend: Node.js, Express.js, Python, PHP
  - [x] Mobile: Flutter, Dart
  - [x] Database: MongoDB, SQL, MySQL, SQLite
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
- [x] **Filtros simplificados**: Apenas por categoria (Web, Mobile, AI)
- [x] **Cards interativos** com informação completa
- [x] **Tecnologias completas**: Todas as tecnologias sempre visíveis
- [x] **Interface limpa**: Removidos filtros de tecnologia e "projeto em destaque"
- [x] **Diversidade**: Web, Mobile, AI, Backend

#### 5. 📞 CONTACT
- [x] **Informações de contacto** (email, localização, disponibilidade)
- [x] **Formulário de contacto** (nome, email, assunto, mensagem)
- [x] **Links sociais** (LinkedIn, Email)
- [x] **Disponibilidade** para projetos (imediatamente disponível)

#### 6. 🦶 FOOTER
- [x] **Footer limpo e profissional** com layout otimizado
- [x] **Informações essenciais**: Nome, localização, email
- [x] **Redes sociais centralizadas**: LinkedIn, GitHub, Email
- [x] **Download CV** integrado no footer
- [x] **Made with ❤️ by cabrit0** personalizado
- [x] **Design responsivo** com layout flexível
- [x] **Removidas redundâncias**: Navegação, tecnologias e theme toggle

### 🎨 Melhorias de Texto Propostas
- [ ] **About - Versão melhorada**: Texto mais cativante e storytelling
- [ ] **Skills - Categorização**: Organização por áreas técnicas
- [ ] **Projects - Descrições**: Textos mais impactantes para cada projeto
- [ ] **Experience - Timeline**: Narrativa da jornada profissional

---

## 🎥 7. Animações e Interações Avançadas

- [x] **Lenis**: Smooth scrolling ultra-suave implementado
- [x] **Framer Motion**: Animações de página e componentes
- [x] **Scroll Progress**: Barra de progresso de scroll
- [x] **Scroll to Top**: Botão animado para voltar ao topo
- [x] **Magnetic buttons**: Botões que atraem o cursor
- [x] **Parallax moderno**: Efeitos de profundidade subtis
- [x] **Theme transitions**: Transições suaves entre temas
- [ ] **GSAP ScrollTrigger**: Animações complexas baseadas no scroll
- [ ] **Cursor personalizado**: Cursor que reage aos elementos
- [ ] **Morphing shapes**: Formas que se transformam
- [ ] **Loading animations**: Skeleton loaders e progress indicators
- [ ] **Micro-interações**: Feedback em cada ação do utilizador
- [ ] **Sound design** (opcional): Sons subtis para interações
- [ ] **Easter eggs**: Elementos surpresa para mostrar criatividade

---

## 📱 8. Responsividade

- [x] **Mobile-first otimizado**:
  - [x] Hero section responsivo (text-4xl → text-9xl)
  - [x] Tecnologias grid adaptativo (2→3→4 colunas)
  - [x] Projetos grid responsivo (1→2→3 colunas)
  - [x] Contacto form mobile-friendly
  - [x] Padding e spacing otimizados
- [x] Garantir que o layout funciona em:
  - [x] Mobile (vertical) - Totalmente otimizado
  - [x] Tablet - Grid adaptativo
  - [x] Desktop - Layout completo
- [x] Reorganizar secções empilhadas em mobile
- [x] Ajustar tamanho de fontes e imagens consoante breakpoints

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

- [x] **Theme switcher**: Transição cinematográfica dark/light/system
- [x] **Scroll progress bar**: Barra de progresso animada
- [x] **Download CV**: Componente funcional com animações
- [x] **Smooth scrolling**: Lenis integrado com GSAP
- [ ] **Command Palette** (Cmd+K): Navegação rápida estilo VS Code
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

---

## 🧹 16. Limpeza e Otimização do Projeto

### 16.1. Análise e Identificação
- [x] Analisar projeto para identificar duplicações e código morto
- [x] Identificar diretórios vazios desnecessários
- [x] Encontrar componentes duplicados
- [x] Localizar ficheiros placeholder redundantes

### 16.2. Tarefas de Limpeza
- [x] Remover diretórios vazios:
  - [x] `src/app/components-demo/` (vazio)
  - [x] `src/app/font-test/` (vazio)
  - [x] `src/app/portfolio-demo/` (vazio)
  - [x] `src/components/3d/` (vazio)
  - [x] `src/components/sections/` (vazio)
  - [x] `src/stores/` (vazio)
  - [x] `src/styles/` (vazio)
- [x] Consolidar componentes duplicados:
  - [x] Unificar `src/components/ui/button.tsx` e `src/components/atoms/Button.tsx`
  - [x] Manter o componente mais avançado (atoms/Button.tsx)
  - [x] Atualizar todos os imports para usar o componente consolidado
- [x] Unificar ficheiros de animação:
  - [x] Consolidar `src/lib/animations.ts` e `src/lib/animation-variants.ts`
  - [x] Eliminar duplicações de variantes de animação
  - [x] Atualizar imports para usar ficheiro principal
- [x] Remover ficheiros desnecessários:
  - [x] `public/cv/README.md` (placeholder)
  - [x] `public/cv/` (diretório vazio)
- [x] Verificar e limpar exports não utilizados nos ficheiros index.ts
- [x] Corrigir variants de botão incompatíveis ("default" → "primary")
- [x] Limpar imports não utilizados (fadeInDown, staggerContainer, technologies)
- [x] Testar funcionalidade após cada limpeza

### 16.3. Verificação Final
- [x] Confirmar que todas as funcionalidades continuam a funcionar
- [x] Verificar que não há imports quebrados
- [x] Testar navegação e componentes principais
- [x] Executar build para verificar se não há erros

### 16.4. Resultados da Limpeza
**Ficheiros/Diretórios Removidos:**
- 7 diretórios vazios removidos
- `src/components/ui/button.tsx` (duplicado)
- `src/lib/animation-variants.ts` (duplicado)
- `public/cv/README.md` (placeholder)
- `public/cv/` (diretório vazio)

**Consolidações Realizadas:**
- Todos os componentes agora usam `@/components/atoms/Button`
- Todas as animações agora usam `@/lib/animations`
- Variants de botão padronizados ("default" → "primary")
- Imports limpos e otimizados

**Build Status:** ✅ **Sucesso** - Projeto compila sem erros

---

## 🎯 17. Divisão da Página "Sobre Mim"

### 17.1. Planeamento e Análise
- [x] Analisar conteúdo atual da página About (muito densa)
- [x] Planear divisão estratégica do conteúdo
- [x] Definir estrutura de navegação com nova página

### 17.2. Implementação da Nova Página "Experiência"
- [x] Atualizar configuração de navegação (`src/config/navigation.ts`)
- [x] Criar componente `ExperienceSection` (`src/components/organisms/ExperienceSection.tsx`)
- [x] Criar página `/experiencia` (`src/app/experiencia/page.tsx`)
- [x] Adicionar export no index dos organisms
- [x] Implementar secções técnicas:
  - [x] Stack tecnológico com TechStack component
  - [x] Competências por categoria (Frontend, Backend, Mobile/AI, Database/Tools)
  - [x] Preferências de desenvolvimento com percentagens dinâmicas
  - [x] Timeline de experiência profissional
  - [x] Timeline de formação académica

### 17.3. Redistribuição de Conteúdo
- [x] Remover secções técnicas da página About
- [x] Manter na página About:
  - [x] Bio pessoal + Avatar + Stats
  - [x] O que faço (serviços)
  - [x] Competências sociais
  - [x] Mentorias & Rev Up
  - [x] Call-to-action para página Experiência
- [x] Mover para página Experiência:
  - [x] Stack tecnológico completo com competências detalhadas
  - [x] Linguagens de programação com experiência
  - [x] Frontend, Backend, Mobile, Database, IA, Ferramentas
  - [x] Preferências de desenvolvimento com percentagens
  - [x] Timeline de experiência profissional
  - [x] Timeline de formação académica

### 17.4. Estrutura Final
**Página "Sobre Mim"** (mais pessoal):
- Bio + Avatar + Stats básicas
- O que faço (serviços especializados)
- Competências sociais (soft skills)
- Mentorias & ensino (Rev Up)

**Página "Experiência"** (mais técnica):
- Stack tecnológico completo
- Competências técnicas detalhadas
- Preferências de desenvolvimento
- Timeline profissional e académica

### 17.5. Verificação e Testes
- [x] Build passa sem erros
- [x] Nova página `/experiencia` funcional
- [x] Navegação atualizada com novo link
- [x] Design consistente com resto do projeto
- [x] Testar navegação entre páginas
- [x] Verificar responsividade
- [x] Confirmar aspeto visual mantido
- [x] Conteúdo redistribuído corretamente
- [x] Call-to-action funcional entre páginas

**Status:** ✅ **Concluído** - Divisão estratégica do conteúdo implementada com sucesso

---

## 🧹 18. Limpeza de Secções Duplicadas na Página Experiência

### 18.1. Problema Identificado
- [x] Página Experiência tinha secções duplicadas após redistribuição
- [x] Secção "Competências & Experiência" duplicada
- [x] Secção "Preferências de Desenvolvimento" duplicada

### 18.2. Solução Implementada
- [x] Mantida secção "Stack Tecnológico & Competências" (primeira)
- [x] Mantida secção "Preferências de Desenvolvimento" (primeira)
- [x] Removida secção "Competências & Experiência" duplicada
- [x] Removida secção "Preferências de Desenvolvimento" duplicada
- [x] Mantida secção "Experiência & Formação" (timeline)

### 18.3. Estrutura Final da Página Experiência
1. ✅ **Stack Tecnológico & Competências** (detalhado por categorias)
2. ✅ **Preferências de Desenvolvimento** (percentagens dinâmicas)
3. ✅ **Experiência & Formação** (timeline profissional e académica)

### 18.4. Verificação
- [x] Build passa sem erros
- [x] Página funcional sem duplicações
- [x] Design consistente mantido
- [x] Performance otimizada (234 kB First Load JS)

**Status:** ✅ **Concluído** - Secções duplicadas removidas com sucesso

---

## ✨ 19. Implementação de Animação Magnetic no Botão CTA

### 19.1. Objetivo
- [x] Adicionar animação magnetic ao botão "Ver Experiência Completa" na página About
- [x] Melhorar interatividade e apelo visual do call-to-action principal

### 19.2. Implementação
- [x] Substituir Button normal por MagneticButton component
- [x] Configurar magneticStrength para 0.4 (valor otimizado)
- [x] Manter todas as propriedades visuais existentes (gradiente, glow, ícone)
- [x] Limpar imports não utilizados

### 19.3. Funcionalidades da Animação Magnetic
- [x] **Hover Scale**: Botão aumenta para 1.05x ao hover
- [x] **Magnetic Follow**: Botão segue o cursor com força magnética
- [x] **Text Animation**: Texto interno tem movimento independente
- [x] **Elastic Return**: Retorno suave com efeito elástico ao sair do hover
- [x] **Shimmer Effect**: Mantém efeito shimmer original do botão

### 19.4. Configuração Técnica
```tsx
<MagneticButton
  variant="primary"
  size="lg"
  magneticStrength={0.4}
  leftIcon={<Icon name="briefcase" size="lg" />}
  onClick={() => window.location.href = '/experiencia'}
  className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 glow-effect shadow-lg"
>
  Ver Experiência Completa
</MagneticButton>
```

### 19.5. Verificação
- [x] Build passa sem erros
- [x] Animação magnetic funcional
- [x] Design visual mantido
- [x] Performance otimizada
- [x] Interatividade melhorada

**Status:** ✅ **Concluído** - Animação magnetic implementada com sucesso

---

## 🔧 20. Correção do Ícone Backend Development

### 20.1. Problema Identificado
- [x] Ícone do "Backend Development" não aparecia na secção "O que faço" da página About
- [x] Ícone "code" pode ter conflito ou não estar a renderizar corretamente

### 20.2. Investigação e Solução
- [x] Verificar disponibilidade do ícone "code" no registro (✅ existe)
- [x] Testar com ícone "database" temporariamente (funcionou)
- [x] Adicionar ícone "server" ao registro de ícones (mais apropriado para backend)
- [x] Implementar ícone "server" para Backend Development

### 20.3. Implementação Técnica
- [x] **Import**: Adicionar `Server` ao import do Lucide React
- [x] **Registry**: Adicionar `server: Server` ao iconRegistry
- [x] **Feature**: Alterar ícone de "code" para "server" no Backend Development
- [x] **Semântica**: Ícone "server" é mais apropriado para backend que "code"

### 20.4. Código Implementado
```tsx
// Icon.tsx - Import
import { Server } from "lucide-react"

// Icon.tsx - Registry
const iconRegistry = {
  // Tech
  code: Code,
  palette: Palette,
  zap: Zap,
  database: Database,
  server: Server, // ✅ Novo ícone
}

// AboutSection.tsx - Feature
{
  title: "Backend Development",
  description: "Building scalable APIs and server-side applications with robust architecture.",
  icon: "server" // ✅ Ícone corrigido
}
```

### 20.5. Verificação
- [x] Build passa sem erros
- [x] Ícone "server" renderiza corretamente
- [x] Design visual consistente mantido
- [x] Semântica melhorada (server > code para backend)

**Status:** ✅ **Concluído** - Ícone Backend Development corrigido e melhorado

---

## 🎓 21. Integração Dissimulada da Informação Académica

### 21.1. Estratégia de Integração
- [x] Análise da informação académica oficial da universidade
- [x] Planeamento de integração subtil e profissional
- [x] Evitar secções dedicadas ou linguagem académica óbvia
- [x] Focar em linguagem de mercado e competências profissionais

### 21.2. Locais de Integração Implementados

#### **📄 Página About - Bio e Serviços**
- [x] **Bio Pessoal**: Atualizada com especialização em "engenharia de software, sistemas inteligentes e desenvolvimento multimédia"
- [x] **Serviços Oferecidos**:
  - Frontend → "Design de interfaces pessoa-máquina e sistemas interativos"
  - Backend → "Arquitetura de sistemas e sistemas de informação escaláveis"
  - AI → "Sistemas inteligentes e apoio à decisão com análise de dados"

#### **📄 Página Experiência - Competências Técnicas**
- [x] **Descrição Principal**: "Formação especializada em engenharia de software e sistemas inteligentes"
- [x] **Stack Tecnológico**: Linguagem profissional com referências académicas subtis
- [x] **Linguagens de Programação**: "Algoritmia e programação orientada por objetos"
- [x] **Frontend**: "Design de interfaces pessoa-máquina e sistemas interativos"
- [x] **Backend & Mobile**: "Arquitetura de sistemas e desenvolvimento móvel"
- [x] **Bases de Dados**: "Sistemas de informação e arquitetura de dados"
- [x] **Sistemas Inteligentes**: "Inteligência artificial e apoio à decisão"
- [x] **Ferramentas**: "Desenvolvimento e engenharia de software"

#### **📄 Formação Académica - ESTCB Expandida**
- [x] **Interface Atualizada**: Adicionados campos `description` e `specializations`
- [x] **Descrição do Curso**: "Formação especializada em desenvolvimento de aplicações de software e sistemas de informação"
- [x] **Perfis de Formação**: 4 badges com especializations:
  - "Programação e Engenharia de Software"
  - "Sistemas Inteligentes e Apoio à Decisão"
  - "Bases de Dados e Sistemas de Informação"
  - "Multimédia e Conteúdos Internet"

#### **📄 Descrições de Projetos - Linguagem Profissional**
- [x] **YOLO Project**: "Sistema inteligente... aplicando técnicas de análise inteligente de dados visuais"
- [x] **Website Feira**: "Aplicando princípios de design de interfaces pessoa-máquina"
- [x] **Fitness4U**: "Implementando arquitetura de bases de dados e padrões de engenharia de software"
- [x] **Flutter App**: "Desenvolvida para dispositivos móveis... implementando base de dados local"
- [x] **Travel System**: "Sistema de informação empresarial... arquitetura de bases de dados relacionais"

### 21.3. Contextos Técnicos Atualizados
- [x] **JavaScript**: "Desenvolvimento web e aplicações móveis"
- [x] **Java**: "Programação orientada por objetos e sistemas"
- [x] **Python**: "Sistemas inteligentes e análise de dados"
- [x] **Dart**: "Desenvolvimento para dispositivos móveis"
- [x] **C**: "Programação de sistemas e arquitetura"
- [x] **PHP**: "Desenvolvimento web e sistemas de informação"
- [x] **React**: "Aplicações web modernas e componentes reutilizáveis"
- [x] **HTML/CSS**: "Linguagens web e design responsivo"
- [x] **TailwindCSS**: "Frameworks CSS e design systems"
- [x] **Node.js**: "Arquitetura de sistemas e APIs REST"
- [x] **Express.js**: "Desenvolvimento de serviços web escaláveis"
- [x] **Flutter**: "Aplicações móveis cross-platform nativas"
- [x] **MongoDB**: "Bases de dados não-relacionais e NoSQL"
- [x] **MySQL**: "Sistemas relacionais e modelação de dados"
- [x] **SQL**: "Linguagens de organização de dados"
- [x] **SQLite**: "Bases de dados embebidas para mobile"
- [x] **PyTorch**: "Sistemas inteligentes e redes neurais"
- [x] **YOLO**: "Análise inteligente de dados visuais"
- [x] **OpenCV**: "Processamento e codificação multimédia"
- [x] **Unity**: "Desenvolvimento de aplicações multimédia"
- [x] **Git**: "Controlo de versões e engenharia de software"

### 21.4. Mapeamento Académico → Profissional
```
Unidades Curriculares → Competências Profissionais:
├── Algoritmia e Programação → "Algoritmia e programação orientada por objetos"
├── Interfaces Pessoa-Máquina → "Design de interfaces pessoa-máquina"
├── Programação para Dispositivos Móveis → "Desenvolvimento para dispositivos móveis"
├── Linguagens Web → "Linguagens web e design responsivo"
├── Arquitetura de Sistemas → "Arquitetura de sistemas e APIs REST"
├── Bases de Dados → "Sistemas de informação e arquitetura de dados"
├── Inteligência Artificial → "Sistemas inteligentes e apoio à decisão"
├── Análise Inteligente de Dados → "Análise inteligente de dados visuais"
├── Engenharia de Software → "Padrões de engenharia de software"
├── Sistemas de Informação → "Sistemas de informação empresarial"
├── Multimédia → "Desenvolvimento de aplicações multimédia"
└── Codificação de Sinais → "Processamento e codificação multimédia"
```

### 21.5. Verificação e Resultados
- [x] Build passa sem erros (0 warnings)
- [x] Linguagem profissional e de mercado mantida
- [x] Referências académicas integradas subtilmente
- [x] Credibilidade técnica aumentada
- [x] SEO melhorado com palavras-chave relevantes
- [x] Design visual consistente preservado
- [x] Performance mantida (235 kB First Load JS)

**Status:** ✅ **Concluído** - Informação académica integrada de forma dissimulada e profissional

---

## 🎨 22. Ajustes de Design e Layout Mobile

### 22.1. Alterações na Ordem dos Filtros de Projetos
- [x] **Problema**: Ordem dos botões "Inteligência Artificial" e "Web" na secção filtrar por categoria
- [x] **Solução**: Modificado hook `useProjectFilter` para definir ordem específica
- [x] **Implementação**: Web aparece antes de AI nos filtros de categoria

### 22.2. Limpeza do Footer
- [x] **Problema**: Texto "Vamos Conectar" desnecessário no footer
- [x] **Solução**: Removido título, mantido apenas o parágrafo informativo
- [x] **Resultado**: Footer mais limpo com "Encontra-me nas redes sociais ou entra em contacto diretamente"

### 22.3. Otimização do Menu Móvel (Drawer)
- [x] **Problema**: Texto muito grande e layout inadequado para dispositivos móveis
- [x] **Soluções Implementadas**:

#### **📱 Ajustes de Tamanho de Texto**
- [x] **Links do Menu**: `text-xl md:text-2xl` → `text-lg` (mais pequeno)
- [x] **Botão Voltar**: `text-lg` → `text-sm` (mais compacto)
- [x] **Mantra**: `text-2xl` → `text-lg` (mais adequado)
- [x] **Citação**: `text-lg` → `text-sm` (mais legível)
- [x] **Autor**: `text-sm` → `text-xs` (mais discreto)
- [x] **Copyright**: `text-sm` → `text-xs` (mais compacto)

#### **📐 Ajustes de Layout e Espaçamento**
- [x] **Padding Geral**: Reduzido de `p-8` para `p-6` (mais eficiente)
- [x] **Navegação**: `px-12 py-8` → `px-8 py-6` (melhor aproveitamento)
- [x] **Espaçamento Items**: `space-y-8` → `space-y-6` (mais compacto)
- [x] **Botões**: `px-8 py-6` → `px-6 py-4` (mais adequado)
- [x] **Botão Voltar**: `px-6 py-3` → `px-4 py-2` (mais discreto)

#### **🔧 Melhorias Técnicas**
- [x] **Largura Máxima**: Adicionado `max-w-sm` para limitar largura
- [x] **Scroll**: `overflow-hidden` → `overflow-y-auto` (conteúdo sempre visível)
- [x] **Ícones**: Reduzidos de `xl/lg` para `lg/default` (proporcionais)
- [x] **Hover Effects**: Reduzido `translate-x-6` → `translate-x-4` (mais sutil)

### 22.4. Código Implementado

#### **🔄 Ordem dos Filtros**
```tsx
// ProjectFilter.tsx - Hook atualizado
const categories = React.useMemo(() => {
  const uniqueCategories = Array.from(new Set(projects.map(p => p.category)))
  // Define desired order: web before ai
  const categoryOrder = ['web', 'ai', 'mobile']
  return categoryOrder.filter(cat => uniqueCategories.includes(cat))
    .concat(uniqueCategories.filter(cat => !categoryOrder.includes(cat)))
}, [projects])
```

#### **🧹 Footer Limpo**
```tsx
// Footer.tsx - Secção social simplificada
<div className="text-center">
  <p className="text-sm text-muted-foreground mb-4">
    Encontra-me nas redes sociais ou entra em contacto diretamente
  </p>
  {/* Social icons */}
</div>
```

#### **📱 Menu Móvel Otimizado**
```tsx
// DrawerMenu.tsx - Layout responsivo
<motion.div className={cn(
  "fixed top-0 h-screen w-[85vw] max-w-sm bg-background/95 backdrop-blur-xl
   border-l border-border/50 shadow-2xl z-50 overflow-y-auto"
)}>
  {/* Back button - compacto */}
  <Button size="default" className="px-4 py-2 text-sm" />

  {/* Navigation - texto menor */}
  <nav className="px-8 py-6">
    <Button className="px-6 py-4 text-lg" />
  </nav>

  {/* Quotes - texto reduzido */}
  <div className="p-6 space-y-4">
    <p className="text-lg">Mantra</p>
    <p className="text-sm max-w-xs">Citação</p>
    <p className="text-xs">Autor</p>
  </div>
</motion.div>
```

### 22.5. Resultados e Benefícios
- [x] **UX Mobile Melhorada**: Texto legível e layout otimizado
- [x] **Conteúdo Sempre Visível**: Scroll automático quando necessário
- [x] **Design Mais Limpo**: Footer simplificado e profissional
- [x] **Ordem Lógica**: Filtros organizados por relevância
- [x] **Performance Mantida**: 243 kB First Load JS (estável)
- [x] **Responsividade**: Layout adapta-se melhor a ecrãs pequenos

### 22.6. Verificação de Qualidade
- [x] **Build Status**: ✅ Sucesso (0 erros)
- [x] **Mobile Layout**: ✅ Otimizado para dispositivos pequenos
- [x] **Legibilidade**: ✅ Texto adequado para mobile
- [x] **Navegação**: ✅ Menu funcional e acessível
- [x] **Design Consistency**: ✅ Visual mantido em todas as resoluções

**Status:** ✅ **Concluído** - Design e layout mobile otimizados com sucesso

---

## 🎨 23. Correção da Cor da Tag AI

### 23.1. Problema Identificado
- [x] **Problema**: Tag "AI" nos projetos muito similar ao logo do Adobe Illustrator
- [x] **Risco**: Confusão visual com marca registada da Adobe
- [x] **Solução**: Manter texto "AI" mas alterar cor para evitar associação

### 23.2. Alteração de Cor Implementada
- [x] **Cor Anterior**: Laranja (`orange-500/50`, `orange-400`, `orange-500/10`)
- [x] **Cor Nova**: Cyan (`cyan-500/50`, `cyan-400`, `cyan-500/10`)
- [x] **Justificação**: Cyan é distintivo e não se confunde com Adobe Illustrator

### 23.3. Ficheiros Atualizados

#### **🎨 Category Styles**
```tsx
// category-styles.ts - Cores atualizadas
export const categoryStyles = {
  web: "border-blue-500/50 text-blue-400 bg-blue-500/10",
  mobile: "border-green-500/50 text-green-400 bg-green-500/10",
  ai: "border-cyan-500/50 text-cyan-400 bg-cyan-500/10", // ✅ Alterado
  system: "border-purple-500/50 text-purple-400 bg-purple-500/10"
}
```

#### **🔧 Category Utils**
```tsx
// category-utils.ts - Configuração atualizada
ai: {
  label: "AI",
  color: "text-cyan-400",        // ✅ Alterado de orange para cyan
  bgColor: "bg-cyan-500/10",     // ✅ Alterado de orange para cyan
  borderColor: "border-cyan-500/50", // ✅ Alterado de orange para cyan
  icon: "🤖",
  description: "Inteligência artificial e machine learning"
}
```

#### **📊 Development Preferences**
```tsx
// development-preferences.ts - Cor atualizada
{
  category: 'ai',
  percentage: totalPoints > 0 ? Math.round((categoryCounts.ai / totalPoints) * 100) : 0,
  color: 'text-cyan-400', // ✅ Alterado de orange para cyan
  label: 'AI'
}
```

### 23.4. Locais Onde a Cor é Aplicada
- [x] **Filtros de Projetos**: Botão "AI" na secção filtrar por categoria
- [x] **Project Headers**: Badge da categoria nos detalhes do projeto
- [x] **Project Cards**: Tags de categoria nos cartões de projeto
- [x] **Development Preferences**: Gráfico de preferências de desenvolvimento
- [x] **Category Utils**: Sistema centralizado de cores

### 23.5. Comparação Visual

| **Aspecto** | **Antes (Laranja)** | **Depois (Cyan)** |
|-------------|---------------------|-------------------|
| **Cor Principal** | `text-orange-400` | `text-cyan-400` |
| **Background** | `bg-orange-500/10` | `bg-cyan-500/10` |
| **Border** | `border-orange-500/50` | `border-cyan-500/50` |
| **Associação** | ❌ Similar ao Adobe Illustrator | ✅ Distintivo e único |
| **Legibilidade** | ✅ Boa | ✅ Boa |
| **Contraste** | ✅ Adequado | ✅ Adequado |

### 23.6. Benefícios da Alteração
- [x] **🎯 Evita Confusão**: Não se confunde com Adobe Illustrator
- [x] **🎨 Distintivo**: Cor cyan é única no portfolio
- [x] **⚖️ Legal**: Evita potenciais problemas de marca registada
- [x] **👁️ Visual**: Mantém boa legibilidade e contraste
- [x] **🔄 Consistência**: Aplicado em todo o sistema de cores

### 23.7. Verificação de Qualidade
- [x] **Build Status**: ✅ Sucesso (0 erros)
- [x] **Cor Aplicada**: ✅ Cyan em todos os componentes
- [x] **Legibilidade**: ✅ Contraste adequado mantido
- [x] **Distintividade**: ✅ Não confunde com Adobe Illustrator
- [x] **Performance**: ✅ Mantida (243 kB First Load JS)

**Status:** ✅ **Concluído** - Cor da tag AI alterada com sucesso para evitar confusão com Adobe Illustrator
