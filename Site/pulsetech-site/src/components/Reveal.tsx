import type { CSSProperties, ReactNode } from 'react';

// Fade + slide up ao entrar na tela
export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div
      data-reveal
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
