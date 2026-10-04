import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problema from './components/Problema';
import Servicos from './components/Servicos';
import Diferenciais from './components/Diferenciais';
import ComoFunciona from './components/ComoFunciona';
import Equipe from './components/Equipe';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('pulsetech-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Problema />
        <Servicos />
        <Diferenciais />
        <ComoFunciona />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
