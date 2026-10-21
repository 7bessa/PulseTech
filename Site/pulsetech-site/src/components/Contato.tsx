import { Send, Mail, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

const EMAIL = 'pulsetech7@outlook.com'
const WHATSAPP = '5562982442850'; // TROCAR (DDI+DDD+número)

const campo = 'glass w-full rounded-lg px-4 py-3 text-tx placeholder:text-mute outline-none transition-colors focus:border-neon/60';

export default function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden bg-bg2 py-28">
      <div className="relative mx-auto max-w-xl px-5">
        <Reveal><h2 className="text-center font-display text-3xl font-semibold md:text-4xl">Vamos dar pulso à sua operação?</h2></Reveal>
        <form data-contact-form className="mt-10 space-y-4">
          <label className="sr-only" htmlFor="contato-nome">Seu nome</label>
          <input id="contato-nome" name="nome" autoComplete="name" placeholder="Seu nome" required className={campo} />
          <label className="sr-only" htmlFor="contato-email">Seu e-mail</label>
          <input id="contato-email" name="email" type="email" autoComplete="email" placeholder="Seu e-mail" required className={campo} />
          <label className="sr-only" htmlFor="contato-mensagem">Como podemos ajudar?</label>
          <textarea id="contato-mensagem" name="mensagem" rows={4} placeholder="Como podemos ajudar?" required className={campo} />
          <button type="submit" className="primary-action flex w-full items-center justify-center gap-2 rounded-lg py-3 font-medium">
            <Send size={16} strokeWidth={1.5} aria-hidden="true" /> Enviar mensagem
          </button>
        </form>
        <div className="mt-5 flex gap-3">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="glass flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm transition-colors hover:border-neon/50">
            <MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" /> WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="glass flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm transition-colors hover:border-neon/50">
            <Mail size={16} strokeWidth={1.5} aria-hidden="true" /> E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
