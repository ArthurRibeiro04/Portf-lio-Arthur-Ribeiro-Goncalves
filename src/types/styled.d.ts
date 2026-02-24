import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;       // Adicione esta linha
      text: string;
      textSecondary: string; // Adicione esta linha
      accent: string;
    };
  }
}