import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Chakra UI
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from "@chakra-ui/core";

// React Router Dom
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <Router>
          <App />
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

