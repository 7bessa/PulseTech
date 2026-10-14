import { Moon, Sun } from 'lucide-react';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
      <nav aria-label="Navegação principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <svg aria-hidden="true" width="28" height="20" viewBox="0 0 28 20" fill="none">
            <rect x="2" y="10" width="4" height="8" rx="1.5" fill="#4FA9E1" fillOpacity=".62" />
            <rect x="9" y="6" width="4" height="12" rx="1.5" fill="#4FA9E1" fillOpacity=".8" />
            <rect x="16" y="2" width="4" height="16" rx="1.5" fill="#4FA9E1" />
            <rect x="23" y="8" width="4" height="10" rx="1.5" fill="#58E0C0" />
          </svg>
          PulseTech
        </a>
        <div className="hidden gap-8 text-sm text-mute md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-tx">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-theme-toggle
            aria-label="Alternar tema claro ou escuro"
            title="Alternar tema claro ou escuro"
            className="glass flex size-10 items-center justify-center rounded-lg transition-colors hover:border-neon/50"
          >
            <Sun size={18} data-theme-toggle-icon="light" aria-hidden="true" />
            <Moon size={18} data-theme-toggle-icon="dark" aria-hidden="true" />
          </button>
          <a href="#contato" className="primary-action rounded-lg bg-green px-4 py-2 text-sm font-medium text-bg">Fale conosco</a>
        </div>
      </nav>
    </header>
  );
}
