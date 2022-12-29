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
    <Routes>
      <Route path="/" element={<LoginTemplate />} />
      <Route path="/home" element={<HomeTemplate />} />
      <Route path='/user/kakao/oauth' element={<OAuth />} />
    </Routes>
  );
}
// function App() {
//   return <Login />;
// }

export default App;
