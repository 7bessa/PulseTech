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

        <div className="hero-visual order-2 w-full max-w-[540px] self-center md:order-2 md:flex-1">
          <svg
            aria-labelledby="hero-visual-title hero-visual-description"
            className="h-auto w-full"
            fill="none"
            role="img"
            viewBox="0 0 620 430"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="hero-visual-title">Ícone 3D PulseTech</title>
            <desc id="hero-visual-description">Cubo tecnológico em perspectiva com um traço de pulso, representando dados e automação.</desc>
            <defs>
              <linearGradient id="pulse-cube-top" x1="130" y1="65" x2="468" y2="250" gradientUnits="userSpaceOnUse">
                <stop stopColor="#17364A" />
                <stop offset=".55" stopColor="#1C5268" />
                <stop offset="1" stopColor="#17384C" />
              </linearGradient>
              <linearGradient id="pulse-cube-left" x1="112" y1="181" x2="296" y2="354" gradientUnits="userSpaceOnUse">
                <stop stopColor="#142A3B" />
                <stop offset="1" stopColor="#0A1825" />
              </linearGradient>
              <linearGradient id="pulse-cube-right" x1="330" y1="283" x2="524" y2="197" gradientUnits="userSpaceOnUse">
                <stop stopColor="#102536" />
                <stop offset="1" stopColor="#1C5368" />
              </linearGradient>
              <linearGradient id="pulse-cube-line" x1="164" y1="161" x2="456" y2="161" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4FA9E1" />
                <stop offset="1" stopColor="#58E0C0" />
              </linearGradient>
            </defs>

            <polygon points="310 35 530 160 310 285 90 160" fill="url(#pulse-cube-top)" stroke="#4D8199" strokeOpacity=".7" strokeLinejoin="round" />
            <polygon points="90 160 310 285 310 415 90 290" fill="url(#pulse-cube-left)" stroke="#36556A" strokeOpacity=".7" strokeLinejoin="round" />
            <polygon points="310 285 530 160 530 290 310 415" fill="url(#pulse-cube-right)" stroke="#44748A" strokeOpacity=".7" strokeLinejoin="round" />

            <path d="M310 285v130" stroke="#4A7185" strokeOpacity=".55" />
            <path d="M164 160h80l26-32 31 66 29-50 23 30h103" stroke="url(#pulse-cube-line)" strokeWidth="9" strokeOpacity=".16" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M164 160h80l26-32 31 66 29-50 23 30h103" stroke="url(#pulse-cube-line)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="456" cy="174" r="4" fill="#58E0C0" />
          </svg>
        </div>
      </div>
    </section>
  );
}
