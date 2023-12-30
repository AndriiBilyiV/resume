import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { styles } from 'theme';
import { GlobalStyle } from 'GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={styles}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
