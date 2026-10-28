import { ArrowUpRight, Check, Scissors, UsersRound, Wrench } from 'lucide-react';
import CaseEstudo from './CaseEstudo';
import Reveal from './Reveal';

const projetos = [
  {
    numero: '01',
    categoria: 'SaaS · Gestão para barbearias',
    titulo: 'Barber em Ordem',
    descricao: 'Agenda, equipe e operação financeira organizadas em um só sistema para a rotina da barbearia.',
    Icon: Scissors,
    recursos: ['Agendamento online', 'Agenda e cadastro de clientes', 'Caixa e controle de comissões'],
  },
  {
    numero: '02',
    categoria: 'Sistema · Gestão para oficinas',
    titulo: 'Gestão para Oficinas',
    descricao: 'Um fluxo de trabalho para acompanhar serviços, equipe e controles essenciais da oficina.',
    Icon: Wrench,
    recursos: ['Ordens de serviço e orçamentos', 'Financeiro e estoque', 'Acessos por função'],
  },
  {
    numero: '03',
    categoria: 'CRM · Prospecção comercial',
    titulo: 'CRM de Prospecção',
    descricao: 'Relacionamento comercial com leads, histórico e próximos passos em um workspace privado.',
    Icon: UsersRound,
    recursos: ['Funil e organização de leads', 'Follow-ups e histórico de atividades', 'Relatórios e acompanhamento de projetos'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-y border-white/5 bg-bg2 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-neon">Projetos selecionados</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Tecnologia aplicada a desafios reais</h2>
            <p className="mt-4 text-mute">
              Sistemas que conectam atendimento, gestão e operação para tornar o trabalho mais claro e organizado.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map(({ numero, categoria, titulo, descricao, Icon, recursos }, index) => (
            <Reveal key={titulo} delay={index * 0.08}>
              <article className="glass card-interactive h-full rounded-2xl p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div aria-hidden="true" className="flex size-14 items-center justify-center rounded-xl border border-neon/25 bg-neon/10 text-neon">
                    <Icon size={27} strokeWidth={1.6} />
                  </div>
                  <span aria-hidden="true" className="font-display text-3xl font-semibold tracking-tight text-neon/35">{numero}</span>
                </div>

                <p className="mt-7 text-[11px] font-semibold uppercase tracking-[.16em] text-neon">{categoria}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{titulo}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-mute">{descricao}</p>

                <ul className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm text-tx">
                  {recursos.map((recurso) => (
                    <li key={recurso} className="flex items-start gap-2.5">
                      <Check size={16} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-neon" />
                      <span>{recurso}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <CaseEstudo />

        <Reveal className="mt-10 text-center">
          <a href="#contato" className="inline-flex items-center gap-2 text-sm font-medium text-neon transition-colors hover:text-tx">
            Vamos conversar sobre o seu projeto?
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
