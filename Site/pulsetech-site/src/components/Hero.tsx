import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 40]); // parallax sutil

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-bg pb-16 pt-28">
      <div className="dots absolute inset-0" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-deep/40 blur-[120px]" />

      {/* Layout: coluna no celular (esfera em cima), linha no PC (esfera ao lado) */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-5 md:flex-row md:items-center md:justify-between md:gap-12">

        {/* Esfera de vidro com linha de pulso: faz parte do layout, então nunca é cortada */}
        <motion.div style={{ y }} className="order-1 shrink-0 self-center md:order-2 md:self-auto">
          <div className="sphere flex aspect-square w-44 items-center justify-center sm:w-52 md:w-72 lg:w-[420px]">
            <svg viewBox="0 0 300 100" className="w-4/5" fill="none" stroke="#4FA9E1" strokeWidth="2" strokeLinejoin="round">
              <polyline className="pulse-path" points="0,50 90,50 110,50 125,15 145,85 162,30 175,50 300,50" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 min-w-0 max-w-xl md:order-1"
        >
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