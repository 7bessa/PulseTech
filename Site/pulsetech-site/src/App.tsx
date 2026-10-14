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
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
      <Navbar />
      <main id="conteudo" tabIndex={-1}>
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
