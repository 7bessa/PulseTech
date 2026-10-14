import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';

// Fade + slide up ao entrar na tela
export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      element.dataset.revealed = 'true';
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealed = 'true';
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -60px 0px' });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      data-reveal
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
