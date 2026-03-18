export const theme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#60a5fa',    
    surface: '#111111', 
    text: '#ffffff', 
    textSecondary: '#a0a0a0', 
    white: '#ffffff',
    black: '#000000',
    gradient: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
  },
  fonts: {
    main: 'Arial, sans-serif',
    secondary: 'Georgia, serif',
    montserrat: "'Montserrat', sans-serif",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  background: {
    primary: "linear-gradient(135deg, #000000 0%, #111111 50%, #2c2c2c 100%)"
  },
} as const;

export type Theme = typeof theme;