import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main style={{ marginTop: '100px', padding: '0 4rem' }}>
        <h2>Conteúdo virá aqui...</h2>
      </main>
    </ThemeProvider>
  );
}

export default App;