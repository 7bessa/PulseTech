import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Send, Mail, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

const EMAIL = 'contato@pulsetech.com.br'; // TROCAR
const WHATSAPP = '5562999999999';         // TROCAR (DDI+DDD+número)

const campo = 'glass w-full rounded-lg px-4 py-3 text-tx placeholder:text-mute outline-none transition-colors focus:border-neon/60';

export default function Contato() {
  const [f, setF] = useState({ nome: '', email: '', mensagem: '' });
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [e.target.name]: e.target.value });

  // Sem backend: abre o e-mail com os dados preenchidos
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const corpo = `Nome: ${f.nome}\nE-mail: ${f.email}\n\n${f.mensagem}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Contato pelo site')}&body=${encodeURIComponent(corpo)}`;
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-bg2 py-28">
      <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-green/15 blur-[120px]" />
      <div className="relative mx-auto max-w-xl px-5">
        <Reveal><h2 className="text-center font-display text-3xl font-semibold md:text-4xl">Vamos dar pulso à sua operação?</h2></Reveal>
        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <input name="nome" placeholder="Seu nome" value={f.nome} onChange={onChange} required className={campo} />
          <input name="email" type="email" placeholder="Seu e-mail" value={f.email} onChange={onChange} required className={campo} />
          <textarea name="mensagem" rows={4} placeholder="Como podemos ajudar?" value={f.mensagem} onChange={onChange} required className={campo} />
          <button type="submit" className="glow-green flex w-full items-center justify-center gap-2 rounded-lg bg-green py-3 font-medium text-bg">
            <Send size={16} strokeWidth={1.5} /> Enviar mensagem
          </button>
        </form>
        <div className="mt-5 flex gap-3">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="glass flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm transition-colors hover:border-neon/50">
            <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="glass flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm transition-colors hover:border-neon/50">
            <Mail size={16} strokeWidth={1.5} /> E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
