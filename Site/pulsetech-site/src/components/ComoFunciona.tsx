import Reveal from './Reveal';

const passos = [
  { titulo: 'Diagnóstico', desc: 'Mapeamos seus processos' },
  { titulo: 'Proposta', desc: 'Desenhamos a solução sob medida' },
  { titulo: 'Implementação', desc: 'Colocamos tudo no ar em dias' },
  { titulo: 'Acompanhamento', desc: 'Suporte contínuo e ajustes' },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-bg py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><h2 className="text-center font-display text-3xl font-semibold md:text-4xl">Como funciona</h2></Reveal>
        <div className="relative mt-16 grid gap-10 md:grid-cols-4">
          {/* Linha da timeline (só no desktop) */}
          <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent md:block" />
          {passos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.1} className="relative text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-neon bg-bg font-display text-neon shadow-[0_0_20px_rgba(79,169,225,.45)]">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display text-lg font-medium">{p.titulo}</h3>
              <p className="mt-2 text-sm text-mute">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
