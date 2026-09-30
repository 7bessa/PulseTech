import { Check } from 'lucide-react';
import Reveal from './Reveal';

const itens = [
  'Implementação rápida (dias, não meses)',
  'Custo acessível comparado a ERPs',
  'Não exige abandonar o Excel de imediato',
  'Integração com ferramentas que você já usa',
  'Soluções sob medida e escaláveis',
];

// Rotação de cada face do cubo (tamanho 160px => translateZ 80px)
const faces = [
  'rotateY(0deg) translateZ(80px)', 'rotateY(90deg) translateZ(80px)',
  'rotateY(180deg) translateZ(80px)', 'rotateY(-90deg) translateZ(80px)',
  'rotateX(90deg) translateZ(80px)', 'rotateX(-90deg) translateZ(80px)',
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-bg2 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-2">
        <div>
          <Reveal><h2 className="font-display text-3xl font-semibold md:text-4xl">Por que a PulseTech</h2></Reveal>
          <ul className="mt-10 space-y-5">
            {itens.map((t, i) => (
              <Reveal key={t} delay={i * 0.07}>
                <li className="flex items-center gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-green/50 text-green shadow-[0_0_14px_rgba(46,204,113,.35)]">
                    <Check size={15} strokeWidth={1.5} />
                  </span>
                  {t}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="flex h-72 items-center justify-center [perspective:800px]">
          <div className="cube">
            {faces.map((f) => <div key={f} style={{ transform: f }} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
