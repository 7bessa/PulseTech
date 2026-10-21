import { Menu, Moon, Sun } from 'lucide-react';
import Brand from './Brand';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
      <nav aria-label="Navegação principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label="PulseTech, voltar ao início" className="flex shrink-0 items-center text-lg">
          <Brand />
        </a>
        <div className="hidden gap-5 text-xs text-mute lg:flex xl:gap-7 xl:text-sm">
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
          <a href="#contato" className="primary-action hidden rounded-lg px-4 py-2 text-sm font-medium lg:inline-flex">Fale conosco</a>
          <details className="group relative lg:hidden">
            <summary aria-label="Navegação do site" className="glass flex size-10 cursor-pointer list-none items-center justify-center rounded-lg transition-colors hover:border-neon/50 focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">
              <Menu size={19} aria-hidden="true" />
            </summary>
            <div className="glass absolute right-0 top-full z-50 mt-2 w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl p-3 shadow-xl">
              <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="rounded-lg px-4 py-3 text-sm text-mute transition-colors hover:bg-white/5 hover:text-tx focus-visible:text-tx">
                    {l.label}
                  </a>
                ))}
                <a href="#contato" className="primary-action mt-2 rounded-lg px-4 py-3 text-center text-sm font-medium">Fale conosco</a>
              </nav>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
