export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-bg pb-16 pt-28">
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
            viewBox="0 0 620 430"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="hero-dashboard-title">Dashboard de operações da PulseTech</title>
            <desc id="hero-dashboard-description">Interface de produto com indicadores, gráfico de operações e status das integrações.</desc>

            {/* Janela principal do produto */}
            <rect x="20.5" y="22.5" width="579" height="385" rx="14" fill="#0B1420" stroke="#26394C" />
            <path d="M21 74.5h578" stroke="#25374A" />

            {/* Cabeçalho e navegação do painel */}
            <rect x="44" y="50" width="4" height="8" rx="1" fill="#4FA9E1" fillOpacity=".62" />
            <rect x="51" y="46" width="4" height="12" rx="1" fill="#4FA9E1" fillOpacity=".82" />
            <rect x="58" y="42" width="4" height="16" rx="1" fill="#4FA9E1" />
            <rect x="65" y="48" width="4" height="10" rx="1" fill="#58E0C0" />
            <text x="79" y="53" fill="#E1EAF3" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" letterSpacing="1.1">PULSETECH</text>
            <path d="M157 38v22" stroke="#293B4D" />
            <text x="169" y="52" fill="#8294A8" fontFamily="Arial, sans-serif" fontSize="8">OPERAÇÕES</text>

            <text x="265" y="52" fill="#D7E2EC" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="600">Visão geral</text>
            <path d="M264 67h57" stroke="#4FA9E1" strokeWidth="1.5" />
            <text x="342" y="52" fill="#8193A6" fontFamily="Arial, sans-serif" fontSize="8">Relatórios</text>
            <text x="411" y="52" fill="#8193A6" fontFamily="Arial, sans-serif" fontSize="8">Automações</text>

            <rect x="488" y="36" width="94" height="24" rx="5" fill="#101C2A" stroke="#293B4D" />
            <text x="501" y="51" fill="#BAC8D5" fontFamily="Arial, sans-serif" fontSize="8">Últimos 30 dias</text>
            <path d="m568 46 3 3 3-3" stroke="#8294A8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Indicadores resumidos */}
            <text x="46" y="101" fill="#D7E2EC" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" letterSpacing=".7">RESUMO DA OPERAÇÃO</text>
            <text x="46" y="114" fill="#74879B" fontFamily="Arial, sans-serif" fontSize="7">Indicadores principais</text>

            <rect x="46.5" y="126.5" width="167" height="71" rx="7.5" fill="#101B29" stroke="#26384B" />
            <text x="60" y="144" fill="#91A2B4" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="600" letterSpacing=".35">PROCESSOS AUTOMATIZADOS</text>
            <text x="60" y="172" fill="#F0F4F8" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700">1.284</text>
            <text x="60" y="187" fill="#58BFA2" fontFamily="Arial, sans-serif" fontSize="7">+12% vs. mês anterior</text>

            <rect x="226.5" y="126.5" width="167" height="71" rx="7.5" fill="#101B29" stroke="#26384B" />
            <text x="240" y="144" fill="#91A2B4" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="600" letterSpacing=".35">TEMPO RECUPERADO</text>
            <text x="240" y="172" fill="#F0F4F8" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700">32h</text>
            <text x="240" y="187" fill="#91A2B4" fontFamily="Arial, sans-serif" fontSize="7">neste mês</text>

            <rect x="406.5" y="126.5" width="167" height="71" rx="7.5" fill="#101B29" stroke="#26384B" />
            <text x="420" y="144" fill="#91A2B4" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="600" letterSpacing=".35">FLUXOS NO PRAZO</text>
            <text x="420" y="172" fill="#F0F4F8" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700">96%</text>
            <text x="420" y="187" fill="#58BFA2" fontFamily="Arial, sans-serif" fontSize="7">meta atingida</text>

            {/* Gráfico de operações */}
            <rect x="46.5" y="210.5" width="337" height="175" rx="8" fill="#0E1926" stroke="#26384B" />
            <text x="62" y="232" fill="#D7E2EC" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="600">Volume de operações</text>
            <text x="62" y="245" fill="#74879B" fontFamily="Arial, sans-serif" fontSize="7">Tarefas processadas</text>
            <text x="337" y="233" fill="#8193A6" fontFamily="Arial, sans-serif" fontSize="7">30 DIAS</text>
            <path d="M63 269h304M63 298h304M63 327h304" stroke="#293B4D" strokeOpacity=".72" strokeDasharray="2 5" />
            <path d="M65 337c15-3 23-12 37-11 15 1 19-11 34-11s18 7 32 1 18-20 34-18 21 10 35 1 18-20 33-18 19 7 33-3 20-13 32-10 20-7 32-14" stroke="#4FA9E1" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="367" cy="255" r="3" fill="#0E1926" stroke="#73B8E2" strokeWidth="1.5" />
            <text x="63" y="368" fill="#74879B" fontFamily="Arial, sans-serif" fontSize="6">16 SET</text>
            <text x="155" y="368" fill="#74879B" fontFamily="Arial, sans-serif" fontSize="6">28 SET</text>
            <text x="254" y="368" fill="#74879B" fontFamily="Arial, sans-serif" fontSize="6">10 OUT</text>
            <text x="340" y="368" fill="#74879B" fontFamily="Arial, sans-serif" fontSize="6">14 OUT</text>

            {/* Status das integrações */}
            <rect x="396.5" y="210.5" width="177" height="175" rx="8" fill="#0E1926" stroke="#26384B" />
            <text x="412" y="232" fill="#D7E2EC" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="600">Integrações</text>
            <text x="412" y="245" fill="#74879B" fontFamily="Arial, sans-serif" fontSize="7">Status de sincronização</text>
            <rect x="412" y="267" width="5" height="5" rx="1" fill="#58BFA2" />
            <text x="425" y="273" fill="#C7D3DE" fontFamily="Arial, sans-serif" fontSize="7.5">Financeiro</text>
            <text x="531" y="273" fill="#8193A6" fontFamily="Arial, sans-serif" fontSize="6.5">Em dia</text>
            <path d="M412 286h146" stroke="#293B4D" />
            <rect x="412" y="300" width="5" height="5" rx="1" fill="#58BFA2" />
            <text x="425" y="306" fill="#C7D3DE" fontFamily="Arial, sans-serif" fontSize="7.5">Estoque</text>
            <text x="531" y="306" fill="#8193A6" fontFamily="Arial, sans-serif" fontSize="6.5">Em dia</text>
            <path d="M412 319h146" stroke="#293B4D" />
            <rect x="412" y="333" width="5" height="5" rx="1" fill="#58BFA2" />
            <text x="425" y="339" fill="#C7D3DE" fontFamily="Arial, sans-serif" fontSize="7.5">Pedidos</text>
            <text x="531" y="339" fill="#8193A6" fontFamily="Arial, sans-serif" fontSize="6.5">Em dia</text>
            <text x="412" y="368" fill="#74879B" fontFamily="Arial, sans-serif" fontSize="6.5">Atualizado há poucos minutos</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
