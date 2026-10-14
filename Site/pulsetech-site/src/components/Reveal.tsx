import type { ReactNode } from 'react';

// Mantém a estrutura dos blocos sem adicionar animações ao navegador.
export default function Reveal({ children, delay: _delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
