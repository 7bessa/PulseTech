import Brand from './Brand';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative bg-bg pb-10 pt-16">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/45 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 text-center">
        <div className="flex justify-center"><Brand className="text-xl" /></div>
        <p className="mt-2 text-sm text-mute">Sua operação com pulso. Seus dados em movimento.</p>
        <nav aria-label="Navegação do rodapé" className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-mute">
          <a href="#servicos" className="hover:text-tx">Serviços</a>
          <a href="#diferenciais" className="hover:text-tx">Diferenciais</a>
          <a href="#como-funciona" className="hover:text-tx">Como Funciona</a>
          <a href="#contato" className="hover:text-tx">Contato</a>
        </nav>
        <small className="mt-8 block text-xs text-mute">© {currentYear} PulseTech. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
