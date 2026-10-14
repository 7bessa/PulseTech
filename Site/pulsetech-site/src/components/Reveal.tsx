import type { CSSProperties, ReactNode } from 'react';

export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const style: CSSProperties = { transitionDelay: `${Math.min(Math.max(delay, 0), 0.32)}s` };

  return (
    <div className={className} data-reveal="" style={style}>
      {children}
    </div>
  );
}
