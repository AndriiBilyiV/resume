import { createGlobalStyle } from 'styled-components';
import { styles } from 'theme';

export const GlobalStyle = createGlobalStyle` 
body {
  background-color: ${styles.colors.light};
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
