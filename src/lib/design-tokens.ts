// Professional Design System - Inspired by top portfolios
// This file contains all design tokens for consistency across the portfolio

export const designTokens = {
  // Brand Colors - Professional and Modern
  colors: {
    brand: {
      primary: '#0066FF',      // Electric Blue - Trust & Innovation
      secondary: '#6366F1',    // Indigo - Creativity & Depth  
      accent: '#00D9FF',       // Cyan - Energy & Modernity
      success: '#10B981',      // Emerald - Growth & Success
      warning: '#F59E0B',      // Amber - Attention & Warmth
      danger: '#EF4444',       // Red - Urgency & Importance
    },
    
    // Sophisticated Grays
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5', 
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0A0A0A',
    },
    
    // Semantic Colors
    semantic: {
      background: 'hsl(222.2 84% 4.9%)',
      foreground: 'hsl(210 40% 98%)',
      card: 'hsl(222.2 84% 6.9%)',
      border: 'hsl(217.2 32.6% 17.5%)',
      muted: 'hsl(215 20.2% 65.1%)',
    }
  },

  // Professional Typography Scale
  typography: {
    fontFamilies: {
      sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
    },
    
    fontSizes: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
      '8xl': '6rem',      // 96px
      '9xl': '8rem',      // 128px
    },
    
    fontWeights: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    
    lineHeights: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    }
  },

  // Professional Spacing Scale
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',    // 2px
    1: '0.25rem',       // 4px
    1.5: '0.375rem',    // 6px
    2: '0.5rem',        // 8px
    2.5: '0.625rem',    // 10px
    3: '0.75rem',       // 12px
    3.5: '0.875rem',    // 14px
    4: '1rem',          // 16px
    5: '1.25rem',       // 20px
    6: '1.5rem',        // 24px
    7: '1.75rem',       // 28px
    8: '2rem',          // 32px
    9: '2.25rem',       // 36px
    10: '2.5rem',       // 40px
    11: '2.75rem',      // 44px
    12: '3rem',         // 48px
    14: '3.5rem',       // 56px
    16: '4rem',         // 64px
    20: '5rem',         // 80px
    24: '6rem',         // 96px
    28: '7rem',         // 112px
    32: '8rem',         // 128px
    36: '9rem',         // 144px
    40: '10rem',        // 160px
    44: '11rem',        // 176px
    48: '12rem',        // 192px
    52: '13rem',        // 208px
    56: '14rem',        // 224px
    60: '15rem',        // 240px
    64: '16rem',        // 256px
    72: '18rem',        // 288px
    80: '20rem',        // 320px
    96: '24rem',        // 384px
  },

  // Professional Shadows
  shadows: {
    soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    hard: '0 10px 40px -10px rgba(0, 0, 0, 0.2)',
    glow: '0 0 20px rgba(59, 130, 246, 0.15)',
    glowLg: '0 0 40px rgba(59, 130, 246, 0.2)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  // Professional Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',     // 2px
    base: '0.25rem',    // 4px
    md: '0.375rem',     // 6px
    lg: '0.5rem',       // 8px
    xl: '0.75rem',      // 12px
    '2xl': '1rem',      // 16px
    '3xl': '1.5rem',    // 24px
    full: '9999px',
  },

  // Professional Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #0066FF 0%, #6366F1 100%)',
    secondary: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    accent: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 100%)',
    success: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    warm: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    cool: 'linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)',
    sunset: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
    ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // Professional Z-Index Scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  // Professional Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Professional Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
    slower: '500ms ease-in-out',
  },

  // Professional Animations
  animations: {
    durations: {
      fast: '150ms',
      base: '250ms',
      slow: '350ms',
      slower: '500ms',
    },
    
    easings: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }
  }
} as const

// Type-safe design token access
export type DesignTokens = typeof designTokens
export type ColorTokens = typeof designTokens.colors
export type TypographyTokens = typeof designTokens.typography
export type SpacingTokens = typeof designTokens.spacing
