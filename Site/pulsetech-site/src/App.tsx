import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problema from './components/Problema';
import Servicos from './components/Servicos';
import Diferenciais from './components/Diferenciais';
import ComoFunciona from './components/ComoFunciona';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Equipe from './components/Equipe'; 

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Servicos />
        <Diferenciais />
        <ComoFunciona />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
