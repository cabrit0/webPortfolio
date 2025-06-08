# 🚀 Plano de Otimização de Performance - Portfolio João Cabrito

## 📊 Análise Atual

### 🔍 Problemas Identificados:
1. **Imagens não otimizadas**: 40+ imagens PNG/JPG sem compressão
2. **Carregamento sequencial**: Todas as imagens carregam simultaneamente
3. **Falta de lazy loading**: Imagens fora do viewport carregam imediatamente
4. **Sem cache estratégico**: Recursos recarregam a cada visita
5. **Bundle size**: Componentes pesados carregam todos de uma vez
6. **Animações custosas**: 10 frames de animação precarregados

### 📈 Métricas Atuais (Estimadas):
- **First Contentful Paint (FCP)**: ~2.5s
- **Largest Contentful Paint (LCP)**: ~4.0s
- **Cumulative Layout Shift (CLS)**: ~0.15
- **Total Bundle Size**: ~800KB
- **Images Total Size**: ~15MB

---

## 🎯 Objetivos de Performance

### 🏆 Metas Core Web Vitals:
- **FCP**: < 1.8s (Bom)
- **LCP**: < 2.5s (Bom)
- **CLS**: < 0.1 (Bom)
- **FID**: < 100ms (Bom)
- **Bundle Size**: < 500KB
- **Images**: < 5MB total

---

## 🛠️ Estratégias de Otimização

### 1. 🖼️ Otimização de Imagens

#### 1.1 Conversão para Formatos Modernos
```bash
# Converter todas as imagens para WebP/AVIF
npm install sharp
```

**Implementação**:
- Converter PNG/JPG → WebP (70% menor)
- Gerar AVIF para browsers compatíveis (50% menor que WebP)
- Manter fallbacks para compatibilidade

#### 1.2 Responsive Images
```typescript
// Gerar múltiplos tamanhos
const imageSizes = {
  thumbnail: 300,
  small: 600,
  medium: 1200,
  large: 1920
}
```

#### 1.3 Lazy Loading Inteligente
```typescript
// Implementar intersection observer
const useIntersectionObserver = (threshold = 0.1) => {
  // Carregar apenas quando próximo do viewport
}
```

### 2. 📦 Code Splitting & Lazy Loading

#### 2.1 Component-Level Splitting
```typescript
// Lazy load componentes pesados
const ProjectGallery = lazy(() => import('./ProjectGallery'))
const ScrollToTopAnimated = lazy(() => import('./ScrollToTopAnimated'))
```

#### 2.2 Route-Based Splitting
```typescript
// Páginas carregam apenas quando necessário
const ExperiencePage = lazy(() => import('./experiencia/page'))
```

### 3. 🎨 Otimização de Animações

#### 3.1 Animação Scroll-to-Top Otimizada
```typescript
// Carregar frames sob demanda
const loadFrameOnDemand = (frameNumber: number) => {
  // Carregar apenas o frame necessário
}
```

#### 3.2 Framer Motion Otimizado
```typescript
// Usar transform em vez de layout
const optimizedVariants = {
  hidden: { opacity: 0, transform: 'translateY(20px)' },
  visible: { opacity: 1, transform: 'translateY(0px)' }
}
```

### 4. 💾 Estratégia de Cache

#### 4.1 Service Worker
```typescript
// Cache estratégico de recursos
const cacheStrategy = {
  images: 'cache-first',
  api: 'network-first',
  static: 'stale-while-revalidate'
}
```

#### 4.2 Browser Cache Headers
```typescript
// Next.js config otimizado
const nextConfig = {
  headers: [
    {
      source: '/images/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      ]
    }
  ]
}
```

---

## 🔧 Implementação Prática

### Fase 1: Otimização de Imagens (Semana 1)

#### 1.1 Script de Conversão
```typescript
// scripts/optimize-images.ts
import sharp from 'sharp'
import { glob } from 'glob'

const optimizeImages = async () => {
  const images = await glob('public/images/**/*.{png,jpg,jpeg}')
  
  for (const image of images) {
    // Gerar WebP
    await sharp(image)
      .webp({ quality: 80 })
      .toFile(image.replace(/\.(png|jpg|jpeg)$/, '.webp'))
    
    // Gerar AVIF
    await sharp(image)
      .avif({ quality: 70 })
      .toFile(image.replace(/\.(png|jpg|jpeg)$/, '.avif'))
    
    // Gerar tamanhos responsivos
    const sizes = [300, 600, 1200, 1920]
    for (const size of sizes) {
      await sharp(image)
        .resize(size, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(image.replace(/\.(png|jpg|jpeg)$/, `_${size}w.webp`))
    }
  }
}
```

#### 1.2 Componente de Imagem Otimizada
```typescript
// components/atoms/OptimizedImage.tsx
interface OptimizedImageProps {
  src: string
  alt: string
  sizes?: string
  priority?: boolean
  lazy?: boolean
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  sizes = "100vw",
  priority = false,
  lazy = true 
}: OptimizedImageProps) => {
  const basePath = src.replace(/\.(png|jpg|jpeg)$/, '')
  
  return (
    <picture>
      <source
        srcSet={`
          ${basePath}_300w.avif 300w,
          ${basePath}_600w.avif 600w,
          ${basePath}_1200w.avif 1200w,
          ${basePath}_1920w.avif 1920w
        `}
        type="image/avif"
        sizes={sizes}
      />
      <source
        srcSet={`
          ${basePath}_300w.webp 300w,
          ${basePath}_600w.webp 600w,
          ${basePath}_1200w.webp 1200w,
          ${basePath}_1920w.webp 1920w
        `}
        type="image/webp"
        sizes={sizes}
      />
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        loading={lazy ? 'lazy' : 'eager'}
        className="transition-opacity duration-300"
      />
    </picture>
  )
}
```

### Fase 2: Lazy Loading Avançado (Semana 2)

#### 2.1 Hook de Intersection Observer
```typescript
// hooks/useIntersectionObserver.ts
export const useIntersectionObserver = (
  threshold = 0.1,
  rootMargin = '50px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin, hasIntersected])

  return { ref, isIntersecting, hasIntersected }
}
```

#### 2.2 Galeria Otimizada
```typescript
// components/molecules/OptimizedProjectGallery.tsx
export const OptimizedProjectGallery = ({ images, title }: Props) => {
  const { ref, hasIntersected } = useIntersectionObserver(0.1, '100px')
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]))

  const loadImage = useCallback((index: number) => {
    setLoadedImages(prev => new Set([...prev, index]))
  }, [])

  return (
    <div ref={ref}>
      {/* Carregar apenas imagem principal inicialmente */}
      <OptimizedImage
        src={images[0]}
        alt={`${title} - Principal`}
        priority
        lazy={false}
      />
      
      {/* Carregar thumbnails apenas quando visível */}
      {hasIntersected && (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {images.slice(1).map((image, index) => (
            <div key={index + 1}>
              {loadedImages.has(index + 1) ? (
                <OptimizedImage
                  src={image}
                  alt={`${title} - ${index + 2}`}
                  sizes="(max-width: 768px) 25vw, 200px"
                />
              ) : (
                <div 
                  className="h-32 bg-muted animate-pulse cursor-pointer"
                  onClick={() => loadImage(index + 1)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
```

### Fase 3: Bundle Optimization (Semana 3)

#### 3.1 Dynamic Imports
```typescript
// Carregar componentes pesados sob demanda
const ProjectGallery = dynamic(
  () => import('./ProjectGallery'),
  { 
    loading: () => <ProjectGallerySkeleton />,
    ssr: false 
  }
)

const ScrollToTopAnimated = dynamic(
  () => import('./ScrollToTopAnimated'),
  { ssr: false }
)
```

#### 3.2 Tree Shaking Otimizado
```typescript
// Importar apenas o necessário
import { motion } from 'framer-motion'
// Em vez de: import * as motion from 'framer-motion'

import { Github, Linkedin, Mail } from 'lucide-react'
// Em vez de: import * from 'lucide-react'
```

---

## 📊 Monitorização e Métricas

### 1. Performance Monitoring
```typescript
// utils/performance.ts
export const measurePerformance = () => {
  // Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log(`${entry.name}: ${entry.value}`)
    })
  })
  
  observer.observe({ entryTypes: ['measure', 'navigation'] })
}
```

### 2. Bundle Analysis
```bash
# Adicionar ao package.json
"analyze": "ANALYZE=true next build"
```

### 3. Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
```

---

## 🎯 Cronograma de Implementação

### Semana 1: Imagens
- [ ] Instalar sharp e criar script de otimização
- [ ] Converter todas as imagens para WebP/AVIF
- [ ] Implementar componente OptimizedImage
- [ ] Testar em diferentes dispositivos

### Semana 2: Lazy Loading
- [ ] Implementar useIntersectionObserver
- [ ] Otimizar ProjectGallery
- [ ] Otimizar ScrollToTopAnimated
- [ ] Implementar skeleton loading

### Semana 3: Bundle & Cache
- [ ] Implementar dynamic imports
- [ ] Configurar service worker
- [ ] Otimizar Next.js config
- [ ] Setup monitoring

### Semana 4: Testing & Fine-tuning
- [ ] Testes de performance
- [ ] Ajustes baseados em métricas
- [ ] Documentação
- [ ] Deploy otimizado

---

## 📈 Resultados Esperados

### Melhorias Estimadas:
- **FCP**: 2.5s → 1.2s (52% melhoria)
- **LCP**: 4.0s → 2.0s (50% melhoria)
- **Bundle Size**: 800KB → 400KB (50% redução)
- **Images Size**: 15MB → 4MB (73% redução)
- **Lighthouse Score**: 70 → 95+ (36% melhoria)

### Benefícios:
- ✅ Experiência mais fluida
- ✅ Menor consumo de dados
- ✅ Melhor SEO ranking
- ✅ Maior taxa de conversão
- ✅ Melhor performance em mobile

---

**🚀 Próximo Passo**: Começar pela Fase 1 - Otimização de Imagens
