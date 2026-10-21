import { ArrowRight, LayoutDashboard, Workflow } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-bg pb-16 pt-28">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-5 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="order-1 min-w-0 max-w-xl md:order-1">
          <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl">PulseTech</h1>
          <p className="mt-4 font-display text-xl text-neon md:text-2xl">Sua operação com pulso. Seus dados em movimento.</p>
          <p className="mt-5 text-mute">
            Transformamos planilhas em dashboards inteligentes e automatizamos processos, sem trocar todo o seu sistema.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contato" className="primary-action rounded-lg px-6 py-3 font-medium">Começar agora</a>
            <a href="#servicos" className="glass rounded-lg px-6 py-3 font-medium transition-colors hover:border-neon/50">Ver serviços</a>
          </div>
        </div>

        <div
          className="hero-visual hero-scene order-2 w-full max-w-[540px] self-center md:order-2 md:flex-1"
          role="img"
          aria-label="Demonstração visual de planilhas conectadas a um painel por fluxos de automação"
        >
          <div className="hero-dashboard" aria-hidden="true">
            <div className="hero-dashboard-top">
              <div className="hero-brand-mark"><span /><span /><span /></div>
              <div className="hero-dashboard-name">
                <span>PulseTech</span>
                <span>PAINEL DE OPERAÇÕES</span>
              </div>
              <span className="hero-demo-tag">VISUAL ILUSTRATIVO</span>
            </div>

            <div className="hero-dashboard-heading">
              <div>
                <span className="hero-eyebrow">DADOS E PROCESSOS</span>
                <h2>Visão da operação</h2>
              </div>
              <span className="hero-view-tag">Visão unificada</span>
            </div>

            <div className="hero-workflow-layout">
              <div className="hero-mini-panel hero-source-panel">
                <div className="hero-panel-heading">
                  <span className="hero-panel-icon hero-sheet-icon"><i /><i /><i /><i /></span>
                  <span>Planilhas</span>
                </div>
                <div className="hero-sheet-grid">
                  <span /><span /><span />
                  <span /><span /><span />
                  <span /><span /><span />
                  <span /><span /><span />
                </div>
                <div className="hero-source-caption"><span /> Dados organizados</div>
              </div>

              <div className="hero-flow-bridge">
                <span className="hero-flow-line"><i /></span>
                <span className="hero-flow-icon"><Workflow size={18} strokeWidth={1.7} /></span>
                <span className="hero-flow-caption">AUTOMAÇÃO</span>
                <span className="hero-flow-line hero-flow-line-reverse"><i /></span>
              </div>

              <div className="hero-mini-panel hero-output-panel">
                <div className="hero-panel-heading">
                  <span className="hero-panel-icon"><LayoutDashboard size={16} strokeWidth={1.7} /></span>
                  <span>Dashboard</span>
                </div>
                <div className="hero-chart-title">Resumo visual <span>●</span></div>
                <div className="hero-chart">
                  <span /><span /><span /><span /><span /><span /><span />
                  <svg viewBox="0 0 180 66" preserveAspectRatio="none">
                    <path d="M2 55 C20 51 22 41 40 45 S62 49 78 34 S99 38 116 26 S138 31 153 16 S169 19 178 7" />
                  </svg>
                </div>
                <div className="hero-chart-labels"><span>Processos</span><span>Relatórios</span></div>
              </div>
            </div>

            <div className="hero-dashboard-footer">
              <span className="hero-footer-node"><i /> Dados conectados</span>
              <span className="hero-footer-line" />
              <span className="hero-footer-node"><i /> Fluxos automatizados</span>
              <span className="hero-footer-arrow"><ArrowRight size={14} /></span>
            </div>
          </div>

          <div className="hero-float-card" aria-hidden="true">
            <span className="hero-float-icon"><Workflow size={16} strokeWidth={1.8} /></span>
            <span><strong>Fluxo conectado</strong><small>Planilha → painel</small></span>
            <span className="hero-float-check">✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
