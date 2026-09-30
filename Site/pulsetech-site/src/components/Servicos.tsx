import { Search, LayoutDashboard, Workflow, Database, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

const servicos = [
  { Icon: Search, titulo: 'Diagnóstico de Processos', desc: 'Mapeamos o que vale automatizar' },
  { Icon: LayoutDashboard, titulo: 'Dashboards Inteligentes', desc: 'Power BI, Looker Studio, Metabase' },
  { Icon: Workflow, titulo: 'Automação de Fluxos', desc: 'Zapier, Make, n8n, Python' },
  { Icon: Database, titulo: 'Migração de Dados', desc: 'De planilhas para bancos leves' },
  { Icon: TrendingUp, titulo: 'Relatório de ROI', desc: 'Tempo e dinheiro economizados' },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-bg py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><h2 className="text-center font-display text-3xl font-semibold md:text-4xl">Serviços</h2></Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ Icon, titulo, desc }, i) => (
            <Reveal key={titulo} delay={i * 0.06}>
              <div className="glass glow-blue h-full rounded-2xl p-7 transition-all duration-300">
                <Icon size={28} strokeWidth={1.25} className="text-neon" />
                <h3 className="mt-5 font-display text-lg font-medium">{titulo}</h3>
                <p className="mt-2 text-sm text-mute">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
