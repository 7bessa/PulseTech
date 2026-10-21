import { LayoutDashboard, Table2, Workflow } from 'lucide-react';

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
          className="hero-visual hero-process-visual order-2 w-full max-w-[540px] self-center md:order-2 md:flex-1"
          role="img"
          aria-label="Planilhas se conectam a fluxos de automação e viram dashboards"
        >
          <div className="hero-process-track" aria-hidden="true">
            <div className="hero-process-step">
              <span className="hero-process-icon"><Table2 size={30} strokeWidth={1.7} /></span>
              <span>Planilhas</span>
            </div>
            <span className="hero-process-link"><i /></span>
            <div className="hero-process-step">
              <span className="hero-process-icon"><Workflow size={36} strokeWidth={1.6} /></span>
              <span>Automação</span>
            </div>
            <span className="hero-process-link hero-process-link-last"><i /></span>
            <div className="hero-process-step">
              <span className="hero-process-icon"><LayoutDashboard size={30} strokeWidth={1.7} /></span>
              <span>Dashboards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
