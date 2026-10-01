import { motion, useScroll, useTransform } from 'framer-motion';

// Linha de batimento reutilizada nas duas esferas
function Pulso({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 100" className={className} fill="none" stroke="#4FA9E1" strokeWidth="2" strokeLinejoin="round">
      <polyline className="pulse-path" points="0,50 90,50 110,50 125,15 145,85 162,30 175,50 300,50" />
    </svg>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 90]); // parallax sutil (só desktop)

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-16">
      <div className="dots absolute inset-0" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-deep/40 blur-[120px]" />

      {/* Esfera grande à direita: só no desktop */}
      <motion.div style={{ y }} className="absolute -right-24 top-1/2 hidden -translate-y-1/2 md:block lg:right-10">
        <div className="sphere flex h-[380px] w-[380px] items-center justify-center lg:h-[460px] lg:w-[460px]">
          <Pulso className="w-4/5" />
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
          {/* Esfera pequena em cima do nome: só no celular, dentro da coluna (não corta) */}
          <div className="sphere mb-8 flex h-28 w-28 items-center justify-center md:hidden">
            <Pulso className="w-4/5" />
          </div>

          <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl">PulseTech</h1>
          <p className="mt-4 font-display text-xl text-neon md:text-2xl">Sua operação com pulso. Seus dados em movimento.</p>
          <p className="mt-5 text-mute">
            Transformamos planilhas em dashboards inteligentes e processos automatizados — sem trocar todo o seu sistema.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contato" className="glow-green rounded-lg bg-green px-6 py-3 font-medium text-bg">Começar agora</a>
            <a href="#servicos" className="glass rounded-lg px-6 py-3 font-medium transition-colors hover:border-neon/50">Ver serviços</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}