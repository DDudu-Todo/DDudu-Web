// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { useState } from 'react';

// ----------------------------------------------------------------------

function App() {

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}
// function App() {
//   return <Login />;
// }

export default App;
