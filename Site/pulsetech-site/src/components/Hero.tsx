export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-bg pb-16 pt-28">
      <div className="dots absolute inset-0" />
      <div className="absolute -left-40 top-20 hidden h-96 w-96 rounded-full bg-deep/40 blur-[120px] md:block" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-5 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="order-1 min-w-0 max-w-xl md:order-1">
          <h1 className="font-display text-6xl font-bold tracking-tight md:text-7xl">PulseTech</h1>
          <p className="mt-4 font-display text-xl text-neon md:text-2xl">Sua operação com pulso. Seus dados em movimento.</p>
          <p className="mt-5 text-mute">
            Transformamos planilhas em dashboards inteligentes e processos automatizados — sem trocar todo o seu sistema.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contato" className="primary-action rounded-lg bg-green px-6 py-3 font-medium text-bg">Começar agora</a>
            <a href="#servicos" className="glass rounded-lg px-6 py-3 font-medium transition-colors hover:border-neon/50">Ver serviços</a>
          </div>
        </div>

        <div className="hero-visual order-2 w-full max-w-[540px] self-center md:order-2 md:flex-1">
          <svg
            aria-labelledby="hero-dashboard-title hero-dashboard-description"
            className="h-auto w-full"
            fill="none"
            role="img"
            viewBox="0 0 620 470"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="hero-dashboard-title">Dashboard de operações da PulseTech</title>
            <desc id="hero-dashboard-description">Painel de dados com indicadores, gráfico de desempenho e automações conectadas.</desc>
            <defs>
              <linearGradient id="dashboard-panel" x1="114" y1="54" x2="511" y2="389" gradientUnits="userSpaceOnUse">
                <stop stopColor="#142840" />
                <stop offset="1" stopColor="#091321" />
              </linearGradient>
              <linearGradient id="dashboard-card" x1="214" y1="127" x2="513" y2="352" gradientUnits="userSpaceOnUse">
                <stop stopColor="#15263A" />
                <stop offset="1" stopColor="#0C1726" />
              </linearGradient>
              <linearGradient id="dashboard-line" x1="248" y1="297" x2="485" y2="239" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4FA9E1" />
                <stop offset="1" stopColor="#58E0C0" />
              </linearGradient>
              <linearGradient id="dashboard-area" x1="367" y1="220" x2="367" y2="327" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4FA9E1" stopOpacity=".28" />
                <stop offset="1" stopColor="#4FA9E1" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Linhas de conexão atrás do painel */}
            <path d="M30 197h43c14 0 18-24 32-24h20m366 123h36c12 0 17 18 29 18h30" stroke="#4FA9E1" strokeOpacity=".52" strokeWidth="1.5" />
            <circle cx="72" cy="197" r="3" fill="#58E0C0" />
            <circle cx="586" cy="314" r="3" fill="#58E0C0" />

            {/* Painel principal */}
            <rect x="92.5" y="54.5" width="442" height="334" rx="21.5" fill="url(#dashboard-panel)" stroke="#4FA9E1" strokeOpacity=".48" />
            <path d="M93 112.5h441" stroke="#8CB6D5" strokeOpacity=".17" />
            <rect x="111" y="74" width="7" height="7" rx="2" fill="#58E0C0" />
            <rect x="122" y="74" width="7" height="7" rx="2" fill="#4FA9E1" fillOpacity=".76" />
            <rect x="133" y="74" width="7" height="7" rx="2" fill="#4FA9E1" fillOpacity=".38" />
            <text x="151" y="82" fill="#E8F2FC" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.5">PULSETECH</text>
            <text x="228" y="82" fill="#7F9BB5" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing="1">OPERAÇÕES</text>
            <rect x="445" y="68" width="71" height="22" rx="11" fill="#14372F" stroke="#58E0C0" strokeOpacity=".4" />
            <circle cx="458" cy="79" r="3" fill="#58E0C0" />
            <text x="467" y="82" fill="#B7F4E7" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="600">ATIVO</text>

            {/* Navegação */}
            <rect x="108" y="128" width="86" height="241" rx="11" fill="#0B1523" stroke="#FFFFFF" strokeOpacity=".07" />
            <text x="121" y="150" fill="#607B95" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" letterSpacing="1.2">MENU</text>
            <rect x="116" y="163" width="70" height="28" rx="7" fill="#153450" />
            <rect x="125" y="173" width="9" height="8" rx="2" stroke="#72C7F0" strokeWidth="1.4" />
            <path d="M127 179h5m-4-3h3" stroke="#72C7F0" strokeWidth="1.2" />
            <text x="141" y="180" fill="#D7E9F8" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="600">Visão geral</text>
            <rect x="125" y="207" width="9" height="9" rx="2" stroke="#718AA2" strokeWidth="1.2" />
            <path d="m127 213 2-2 2 2 2-3" stroke="#718AA2" strokeWidth="1.2" />
            <text x="141" y="215" fill="#8FA4B9" fontFamily="Arial, sans-serif" fontSize="8">Relatórios</text>
            <circle cx="129.5" cy="245.5" r="4.5" stroke="#718AA2" strokeWidth="1.2" />
            <path d="M126 245.5h7m-3.5-3.5v7" stroke="#718AA2" strokeWidth="1" />
            <text x="141" y="248" fill="#8FA4B9" fontFamily="Arial, sans-serif" fontSize="8">Automações</text>
            <path d="M120 270h62" stroke="#FFFFFF" strokeOpacity=".08" />
            <circle cx="129.5" cy="292.5" r="4.5" stroke="#718AA2" strokeWidth="1.2" />
            <path d="M129.5 289v3l2 1" stroke="#718AA2" strokeWidth="1.2" strokeLinecap="round" />
            <text x="141" y="295" fill="#8FA4B9" fontFamily="Arial, sans-serif" fontSize="8">Atividade</text>
            <circle cx="129.5" cy="326.5" r="4.5" stroke="#718AA2" strokeWidth="1.2" />
            <path d="M126.5 326.5h6" stroke="#718AA2" strokeWidth="1.2" />
            <text x="141" y="329" fill="#8FA4B9" fontFamily="Arial, sans-serif" fontSize="8">Integrações</text>

            {/* Métricas */}
            <text x="211" y="139" fill="#A9BDD0" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="600" letterSpacing=".6">VISÃO DA OPERAÇÃO</text>
            <text x="211" y="153" fill="#607B95" fontFamily="Arial, sans-serif" fontSize="7">Resumo do seu negócio</text>
            <rect x="211" y="164" width="145" height="69" rx="9" fill="url(#dashboard-card)" stroke="#FFFFFF" strokeOpacity=".08" />
            <text x="224" y="181" fill="#91A8BE" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing=".4">PROCESSOS ATIVOS</text>
            <text x="224" y="209" fill="#F2F7FC" fontFamily="Arial, sans-serif" fontSize="23" fontWeight="700">24</text>
            <path d="m322 203 5-5 4 3 8-9" stroke="#58E0C0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <text x="316" y="218" fill="#58E0C0" fontFamily="Arial, sans-serif" fontSize="7">+18% este mês</text>

            <rect x="366" y="164" width="152" height="69" rx="9" fill="url(#dashboard-card)" stroke="#FFFFFF" strokeOpacity=".08" />
            <text x="379" y="181" fill="#91A8BE" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing=".4">TEMPO RECUPERADO</text>
            <text x="379" y="209" fill="#F2F7FC" fontFamily="Arial, sans-serif" fontSize="23" fontWeight="700">32h</text>
            <circle cx="489" cy="199" r="13" stroke="#4FA9E1" strokeOpacity=".35" strokeWidth="4" />
            <path d="M489 186a13 13 0 0 1 11 6" stroke="#58E0C0" strokeLinecap="round" strokeWidth="4" />

            {/* Gráfico */}
            <rect x="211" y="244" width="307" height="113" rx="9" fill="#0C1827" stroke="#FFFFFF" strokeOpacity=".08" />
            <text x="225" y="262" fill="#D9E7F4" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="600">Eficiência operacional</text>
            <text x="225" y="274" fill="#7089A2" fontFamily="Arial, sans-serif" fontSize="7">Últimos 6 meses</text>
            <text x="490" y="262" fill="#58E0C0" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700">+32%</text>
            <path d="M231 291.5h273M231 314.5h273M231 337.5h273" stroke="#91A8BE" strokeOpacity=".1" strokeDasharray="3 5" />
            <path d="m240 326 41-8 39 3 41-25 39 8 40-28 42-11 21 4v75H240z" fill="url(#dashboard-area)" />
            <path d="m240 326 41-8 39 3 41-25 39 8 40-28 42-11 21 4" stroke="url(#dashboard-line)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="482" cy="265" r="4" fill="#0C1827" stroke="#58E0C0" strokeWidth="2" />
            <text x="239" y="349" fill="#718AA2" fontFamily="Arial, sans-serif" fontSize="6">JAN</text>
            <text x="317" y="349" fill="#718AA2" fontFamily="Arial, sans-serif" fontSize="6">MAR</text>
            <text x="396" y="349" fill="#718AA2" fontFamily="Arial, sans-serif" fontSize="6">MAI</text>
            <text x="475" y="349" fill="#718AA2" fontFamily="Arial, sans-serif" fontSize="6">JUL</text>

            {/* Cartão flutuante: automação concluída */}
            <rect x="21.5" y="180.5" width="151" height="67" rx="12" fill="#101F2E" stroke="#4FA9E1" strokeOpacity=".52" />
            <circle cx="43" cy="204" r="11" fill="#153A35" />
            <path d="m38 204 3.5 3.5L48 201" stroke="#58E0C0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <text x="61" y="202" fill="#DCE9F4" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700">Fluxo concluído</text>
            <text x="61" y="216" fill="#829AB0" fontFamily="Arial, sans-serif" fontSize="7">Financeiro · agora</text>
            <path d="M35 231h122" stroke="#FFFFFF" strokeOpacity=".08" />
            <rect x="35" y="237" width="55" height="3" rx="1.5" fill="#58E0C0" fillOpacity=".72" />
            <rect x="95" y="237" width="31" height="3" rx="1.5" fill="#4FA9E1" fillOpacity=".48" />

            {/* Cartão flutuante: integrações */}
            <rect x="410.5" y="345.5" width="187" height="76" rx="12" fill="#101F2E" stroke="#58E0C0" strokeOpacity=".48" />
            <circle cx="433" cy="369" r="10" fill="#153A35" />
            <path d="m428.5 369 3 3 6-6" stroke="#58E0C0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <text x="450" y="367" fill="#DCE9F4" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700">Dados sincronizados</text>
            <text x="450" y="381" fill="#829AB0" fontFamily="Arial, sans-serif" fontSize="7">3 fontes conectadas</text>
            <circle cx="430" cy="402" r="5" fill="#1B3650" stroke="#4FA9E1" strokeOpacity=".7" />
            <circle cx="447" cy="402" r="5" fill="#1B3650" stroke="#4FA9E1" strokeOpacity=".7" />
            <circle cx="464" cy="402" r="5" fill="#1B3650" stroke="#4FA9E1" strokeOpacity=".7" />
            <path d="M435 402h7m10 0h7" stroke="#58E0C0" strokeOpacity=".65" strokeWidth="1.3" />
            <path d="M480 402h101" stroke="#FFFFFF" strokeOpacity=".1" strokeLinecap="round" />
            <circle cx="577" cy="402" r="2" fill="#58E0C0" />
          </svg>
        </div>
      </div>
    </section>
  );
}
