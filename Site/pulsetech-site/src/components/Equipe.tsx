import Reveal from './Reveal';

interface Membro {
  nome: string;
  foto: string;
  cargo: string;
  responsabilidades: string[];
}

const equipe: Membro[] = [
  {
    nome: 'Cauã de Bessa Franco',
    foto: '/equipe/caua-bessa.jpg',
    cargo: 'Gerente de Projetos / Scrum Master',
    responsabilidades: [
      'Lidera o planejamento e a execução dos projetos',
      'Facilita cerimônias ágeis (Scrum/Kanban)',
      'Garante prazos, SLAs e comunicação com o cliente',
      'Remove impedimentos e alinha a equipe',
    ],
  },
  {
    nome: 'Miguel Pimenta de Brito',
    foto: '/equipe/miguel-pimenta.jpg',
    cargo: 'Líder Técnico / Backend',
    responsabilidades: [
      'Responsável pela arquitetura das soluções',
      'Desenvolve integrações e automações',
      'Conecta planilhas, bancos de dados e APIs',
      'Garante performance e segurança dos sistemas',
    ],
  },
  {
    nome: 'Marcus Gabriel Peixoto',
    foto: '/equipe/marcus-peixoto.jpg',
    cargo: 'QA / Frontend',
    responsabilidades: [
      'Desenvolve as interfaces dos dashboards',
      'Garante experiência visual clara e intuitiva',
      'Responsável pelos testes e qualidade das entregas',
      'Valida se tudo funciona antes de chegar ao cliente',
    ],
  },
  {
    nome: 'Ana Gabrielly Costa Maciel',
    foto: '/equipe/ana-gabrielly.jpg',
    cargo: 'Documentação / Fullstack',
    responsabilidades: [
      'Responsável pela documentação técnica e de uso',
      'Atua no desenvolvimento fullstack das soluções',
      'Garante rastreabilidade e organização das informações',
      'Apoia o cliente na adoção das ferramentas',
    ],
  },
  {
    nome: 'Guilherme Barros Takata',
    foto: '/equipe/guilherme-takata.jpg',
    cargo: 'QA / Frontend',
    responsabilidades: [
      'Desenvolve as interfaces dos dashboards',
      'Garante experiência visual clara e intuitiva',
      'Responsável pelos testes e qualidade das entregas',
      'Valida se tudo funciona antes de chegar ao cliente',
    ],
  },
];

export default function Equipe() {
  return (
    <section id="equipe" className="border-t border-white/5 bg-bg2 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold md:text-4xl">Nossa equipe</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {membros()}
        </div>
      </div>
    </section>
  );

  function membros() {
    return equipe.map((m, i) => (
      <Reveal key={m.nome} delay={i * 0.08}>
        <article className="glass card-interactive h-full rounded-2xl p-6">
          <img
            src={m.foto}
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            className="mx-auto h-20 w-20 rounded-full border border-white/15 object-cover object-center"
          />
          <h3 className="mt-4 text-center font-display text-lg font-medium">{m.nome}</h3>
          <p className="mt-1 text-center text-sm text-neon">{m.cargo}</p>
          <ul className="mt-5 space-y-2 text-sm text-mute">
            {m.responsabilidades.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                {r}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    ));
  }
}
