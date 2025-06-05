import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

// Professional entrance animation for hero section
export const createHeroAnimation = () => {
  const tl = gsap.timeline()
  
  // Cinematic reveal with sophisticated timing
  tl.fromTo(".hero-bg", 
    { scale: 1.2, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
  )
  .fromTo(".hero-title", 
    { y: 100, opacity: 0, rotationX: 90 },
    { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "back.out(1.7)" },
    "-=1.5"
  )
  .fromTo(".hero-subtitle", 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
    "-=0.8"
  )
  .fromTo(".hero-buttons", 
    { y: 30, opacity: 0, scale: 0.8 },
    { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
    "-=0.4"
  )
  
  return tl
}

// Magnetic button effect - very professional and eye-catching
export const createMagneticEffect = (element: HTMLElement) => {
  const button = element
  const buttonText = button.querySelector('.btn-text')
  
  button.addEventListener('mouseenter', () => {
    gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" })
    gsap.to(buttonText, { y: -2, duration: 0.3, ease: "power2.out" })
  })
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, { scale: 1, x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" })
    gsap.to(buttonText, { y: 0, x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" })
  })
  
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(button, { 
      x: x * 0.3, 
      y: y * 0.3, 
      duration: 0.3, 
      ease: "power2.out" 
    })
    gsap.to(buttonText, { 
      x: x * 0.1, 
      y: y * 0.1, 
      duration: 0.3, 
      ease: "power2.out" 
    })
  })
}

// Parallax scrolling effect for depth
export const createParallaxEffect = () => {
  gsap.utils.toArray(".parallax-element").forEach((element: any) => {
    const speed = element.dataset.speed || 0.5
    
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  })
}

// Morphing text effect - very unique
export const createMorphingText = (element: HTMLElement, texts: string[]) => {
  let currentIndex = 0
  
  const morphText = () => {
    const nextIndex = (currentIndex + 1) % texts.length
    
    gsap.to(element, {
      duration: 0.3,
      opacity: 0,
      y: -20,
      ease: "power2.in",
      onComplete: () => {
        element.textContent = texts[nextIndex]
        gsap.to(element, {
          duration: 0.3,
          opacity: 1,
          y: 0,
          ease: "power2.out"
        })
      }
    })
    
    currentIndex = nextIndex
  }
  
  // Auto-morph every 3 seconds
  setInterval(morphText, 3000)
}

// Liquid cursor effect
export const createLiquidCursor = () => {
  if (typeof window === "undefined") return
  
  const cursor = document.createElement('div')
  cursor.className = 'liquid-cursor'
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: linear-gradient(45deg, #0066ff, #00ff88);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.1s ease;
  `
  document.body.appendChild(cursor)
  
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX - 10,
      y: e.clientY - 10,
      duration: 0.1,
      ease: "power2.out"
    })
  })
  
  // Expand on hover over interactive elements
  document.querySelectorAll('button, a, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 2, duration: 0.2 })
    })
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 })
    })
  })
}

// Floating particles background
export const createFloatingParticles = (container: HTMLElement) => {
  const particleCount = 50
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'floating-particle'
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
      border-radius: 50%;
      pointer-events: none;
    `
    
    // Random position
    gsap.set(particle, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    })
    
    container.appendChild(particle)
    
    // Floating animation
    gsap.to(particle, {
      y: "-=100",
      x: `+=${Math.random() * 100 - 50}`,
      duration: Math.random() * 10 + 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }
}

// Reveal animation for sections
export const createRevealAnimation = (element: HTMLElement) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  })
  
  tl.fromTo(element, 
    { y: 100, opacity: 0, rotationX: 45 },
    { y: 0, opacity: 1, rotationX: 0, duration: 1, ease: "power2.out" }
  )
  
  return tl
}

// Glitch effect for special emphasis
export const createGlitchEffect = (element: HTMLElement) => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 })
  
  tl.to(element, {
    duration: 0.1,
    skewX: 5,
    ease: "power2.inOut"
  })
  .to(element, {
    duration: 0.1,
    skewX: -5,
    ease: "power2.inOut"
  })
  .to(element, {
    duration: 0.1,
    skewX: 0,
    ease: "power2.inOut"
  })
  
  return tl
}

// Professional loading animation
export const createLoadingAnimation = () => {
  const tl = gsap.timeline()
  
  tl.to(".loading-bar", {
    width: "100%",
    duration: 2,
    ease: "power2.out"
  })
  .to(".loading-screen", {
    y: "-100%",
    duration: 0.8,
    ease: "power2.inOut"
  })
  .from(".main-content", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4")
  
  return tl
}
