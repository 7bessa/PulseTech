import { ArrowRight, BarChart3, Check, Database, Workflow } from 'lucide-react';
import Reveal from './Reveal';

const itens = [
  'Implementação rápida (dias, não meses)',
  'Custo acessível comparado a ERPs',
  'Não exige abandonar o Excel de imediato',
  'Integração com ferramentas que você já usa',
  'Soluções sob medida e escaláveis',
];

const etapas = [
  { Icon: Database, titulo: 'Dados', texto: 'Fontes integradas' },
  { Icon: Workflow, titulo: 'Fluxos', texto: 'Tarefas automáticas' },
  { Icon: BarChart3, titulo: 'Indicadores', texto: 'Decisões melhores' },
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
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-green/50 bg-green/10 text-green">
                    <Check size={15} strokeWidth={1.5} />
                  </span>
                  {t}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <div className="rounded-3xl border border-white/10 bg-[#0B1421] p-5 text-white shadow-[0_20px_56px_rgba(0,0,0,.2)] sm:p-7">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-neon">Operação conectada</p>
                <h3 className="mt-2 font-display text-xl font-semibold">Da planilha à decisão</h3>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-mute">
                3 etapas
              </span>
            </div>

            <div className="mt-6 grid grid-cols-[minmax(0,1fr)_18px_minmax(0,1fr)_18px_minmax(0,1fr)] items-center gap-1 sm:gap-2">
              {etapas.map(({ Icon, titulo, texto }, index) => (
                <div key={titulo} className="contents">
                  <div className="flex min-h-[132px] min-w-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[.035] px-2 py-4 text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon/20 bg-neon/10 text-neon">
                      <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="mt-3 text-[11px] font-semibold sm:text-xs">{titulo}</span>
                    <span className="mt-1 text-[9px] leading-4 text-mute sm:text-[10px]">{texto}</span>
                  </div>
                  {index < etapas.length - 1 && (
                    <ArrowRight className="justify-self-center text-neon/70" size={16} strokeWidth={1.6} aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-mute">
              <Check size={15} className="shrink-0 text-green" strokeWidth={1.8} aria-hidden="true" />
              <span>Clareza e controle em cada etapa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
