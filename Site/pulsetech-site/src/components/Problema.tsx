import { AlertCircle, EyeOff, Clock, TrendingDown } from 'lucide-react';
import Reveal from './Reveal';

const itens = [
  { Icon: AlertCircle, texto: 'Retrabalho e erros manuais' },
  { Icon: EyeOff, texto: 'Falta de visibilidade em tempo real' },
  { Icon: Clock, texto: 'Processos lentos e repetitivos' },
  { Icon: TrendingDown, texto: 'Medo de investir em um ERP caro' },
];

export default function Problema() {
  return (
    <section className="bg-bg2 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-semibold md:text-4xl">
            Ainda tomando decisões com planilhas desatualizadas?
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map(({ Icon, texto }, i) => (
            <Reveal key={texto} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6">
                <Icon size={26} strokeWidth={1.25} className="text-neon" />
                <p className="mt-5 text-tx">{texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
