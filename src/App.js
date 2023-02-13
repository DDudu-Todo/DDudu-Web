// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { useState } from 'react';
import { CookiesProvider } from 'react-cookie';

// ----------------------------------------------------------------------

function App() {

  return (
    <CookiesProvider>
      <ThemeProvider>
        <ScrollToTop />
        <Router />
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;