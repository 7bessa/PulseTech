import { Activity, CheckCircle2, Clock3, GitBranch, Server, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

const etapas = [
  {
    Icon: Server,
    titulo: 'Isolamento do servidor',
    texto: 'Quarentena imediata para interromper a exploração ativa.',
  },
  {
    Icon: GitBranch,
    titulo: 'Análise técnica',
    texto: 'Auditoria no Git e identificação do uso da função exec junto à captura do cabeçalho malicioso.',
  },
  {
    Icon: Activity,
    titulo: 'Validação controlada',
    texto: 'Reprodução segura da falha para mapear o alcance do incidente.',
  },
  {
    Icon: ShieldCheck,
    titulo: 'Correção e higienização',
    texto: 'Remoção do backdoor e validação das entradas da API.',
  },
];

const resultados = [
  {
    valor: '0%',
    titulo: 'Vazamento de dados',
    detalhe: 'Nenhum dado de cliente ou credencial exposto',
    Icon: ShieldCheck,
  },
  {
    valor: '100%',
    titulo: 'SLA cumprido',
    detalhe: 'Resolvido antes das 09h30',
    Icon: Clock3,
  },
  {
    valor: 'HTTP 200 OK',
    titulo: 'Pedidos restabelecidos',
    detalhe: 'Rotas legítimas novamente disponíveis',
    Icon: CheckCircle2,
  },
];

export default function CaseEstudo() {
  return (
    <Reveal className="mt-8">
      <article aria-labelledby="case-pizzaria-titulo" className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1421] text-white shadow-xl shadow-black/10">
        <div className="border-b border-white/10 p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold text-cyan-200">
                  Resposta a Incidentes
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-slate-300">
                  Blue Team &amp; DevSecOps
                </span>
              </div>
              <h3 id="case-pizzaria-titulo" className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-3xl">
                Mitigação emergencial: neutralização de backdoor em API crítica
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Cliente: <span className="font-medium text-white">Pizzaria &amp; Burger Express</span>
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Resolução em <span className="font-semibold text-white">menos de 4 horas</span> · contenção dentro do SLA crítico
              </p>
            </div>

            <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-300">
              <CheckCircle2 size={15} aria-hidden="true" />
              Resolvido com sucesso · HTTP 200 restabelecido
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section aria-labelledby="case-pizzaria-desafio">
            <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-cyan-300">O desafio</p>
            <h4 id="case-pizzaria-desafio" className="mt-2 font-display text-lg font-semibold">Ataque à cadeia de suprimentos</h4>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Durante a madrugada, um ataque com padrão semelhante a incidentes de supply chain observados no ecossistema PHP comprometeu a API de pedidos.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Um backdoor permitia execução remota de código pelo cabeçalho <code className="break-all rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-cyan-200">HTTP_X_ZERODAY_AGENT</code>, com payloads codificados em Base64, ameaçando os dados dos clientes e a estabilidade do servidor.
            </p>
          </section>

          <section aria-labelledby="case-pizzaria-atuacao">
            <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-cyan-300">Atuação da consultoria</p>
            <h4 id="case-pizzaria-atuacao" className="mt-2 font-display text-lg font-semibold">Resposta em quatro etapas</h4>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {etapas.map(({ Icon, titulo, texto }, index) => (
                <li key={titulo} className="rounded-xl border border-white/10 bg-white/[.035] p-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-slate-400">Etapa 0{index + 1}</span>
                  </div>
                  <h5 className="mt-3 text-sm font-semibold text-white">{titulo}</h5>
                  <p className="mt-1.5 text-xs leading-5 text-slate-300">{texto}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section aria-label="Resultados obtidos" className="grid gap-px border-t border-white/10 bg-white/10 sm:grid-cols-3">
          {resultados.map(({ valor, titulo, detalhe, Icon }) => (
            <div key={titulo} className="bg-[#0B1421] p-5 sm:p-6">
              <div className="flex items-center gap-2 text-emerald-300">
                <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                <p className="text-[10px] font-semibold uppercase tracking-[.14em]">{titulo}</p>
              </div>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">{valor}</p>
              <p className="mt-1 text-xs leading-5 text-slate-300">{detalhe}</p>
            </div>
          ))}
        </section>
      </article>
    </Reveal>
  );
}
