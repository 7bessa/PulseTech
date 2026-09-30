export default function Footer() {
  return (
    <footer className="relative bg-bg pb-10 pt-16">
      {/* Linha de pulso decorativa no topo */}
      <svg className="absolute inset-x-0 top-0 h-8 w-full opacity-40" viewBox="0 0 1200 30" preserveAspectRatio="none" fill="none" stroke="#4FA9E1" strokeWidth="1.2">
        <polyline points="0,15 450,15 480,15 500,3 525,27 545,9 560,15 1200,15" />
      </svg>
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="font-display text-xl font-semibold">PulseTech</p>
        <p className="mt-2 text-sm text-mute">Sua operação com pulso. Seus dados em movimento.</p>
        <nav className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-mute">
          <a href="#servicos" className="hover:text-tx">Serviços</a>
          <a href="#diferenciais" className="hover:text-tx">Diferenciais</a>
          <a href="#como-funciona" className="hover:text-tx">Como Funciona</a>
          <a href="#contato" className="hover:text-tx">Contato</a>
        </nav>
        <small className="mt-8 block text-xs text-mute/70">© {new Date().getFullYear()} PulseTech. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
