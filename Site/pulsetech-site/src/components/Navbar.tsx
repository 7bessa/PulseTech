const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" stroke="#4FA9E1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="0,10 8,10 11,2 16,18 19,10 28,10" />
          </svg>
          PulseTech
        </a>
        <div className="hidden gap-8 text-sm text-mute md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-tx">{l.label}</a>
          ))}
        </div>
        <a href="#contato" className="glow-green rounded-lg bg-green px-4 py-2 text-sm font-medium text-bg">Fale conosco</a>
      </nav>
    </header>
  );
}
