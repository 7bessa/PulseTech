import { BarChart3, Check, Database, Workflow } from 'lucide-react';
import Reveal from './Reveal';

const itens = [
  'Implementação rápida (dias, não meses)',
  'Custo acessível comparado a ERPs',
  'Não exige abandonar o Excel de imediato',
  'Integração com ferramentas que você já usa',
  'Soluções sob medida e escaláveis',
];

const etapas = [
  { Icon: Database, titulo: 'Dados', texto: 'Planilhas e sistemas em um só lugar.' },
  { Icon: Workflow, titulo: 'Fluxos', texto: 'Rotinas repetitivas seguem um processo claro.' },
  { Icon: BarChart3, titulo: 'Indicadores', texto: 'Uma visão objetiva para decidir melhor.' },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-bg2 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-2">
        <div>
          <Reveal><h2 className="font-display text-3xl font-semibold md:text-4xl">Por que a PulseTech</h2></Reveal>
          <ul className="mt-10 space-y-5">
            {itens.map((t) => (
              <li key={t} className="flex items-center gap-4">
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-green/50 bg-green/10 text-green">
                  <Check size={15} strokeWidth={1.5} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-lg">
          <div className="rounded-2xl border border-white/10 bg-[#0B1421] p-6 text-white sm:p-8">
            <div className="border-b border-white/10 pb-5">
              <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#4FA9E1]">Processo integrado</p>
              <h3 className="mt-2 font-display text-xl font-semibold">Da planilha à decisão</h3>
              <p className="mt-2 text-sm text-[#A8B7C6]">Etapas conectadas do dado ao resultado.</p>
            </div>

            <div className="relative mt-8">
              <div aria-hidden="true" className="absolute bottom-5 left-5 top-5 w-px bg-[#2B4053] sm:bottom-auto sm:left-[16.67%] sm:right-[16.67%] sm:top-5 sm:h-px sm:w-auto" />
              <ol className="grid gap-6 sm:grid-cols-3 sm:gap-3">
                {etapas.map(({ Icon, titulo, texto }, index) => (
                  <li key={titulo} className="relative z-10 flex items-start gap-4 sm:flex-col sm:items-center sm:gap-4 sm:text-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#35495D] bg-[#0B1421] text-[#4FA9E1]">
                      <Icon size={17} strokeWidth={1.65} aria-hidden="true" />
                    </span>
                    <div className="pt-0.5 sm:pt-0">
                      <p className="text-[9px] font-medium uppercase tracking-[.15em] text-[#A8B7C6]">Etapa 0{index + 1}</p>
                      <h4 className="mt-1 font-display text-sm font-semibold">{titulo}</h4>
                      <p className="mt-1 text-xs leading-5 text-[#A8B7C6]">{texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-[#A8B7C6]">
              <Check size={15} className="shrink-0 text-green" strokeWidth={1.8} aria-hidden="true" />
              <span>Clareza e controle em cada etapa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
