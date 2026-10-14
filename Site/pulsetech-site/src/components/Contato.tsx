import { Send, Mail, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

const EMAIL = 'pulsetech7@outlook.com'
const WHATSAPP = '5562982442850'; // TROCAR (DDI+DDD+número)

const campo = 'glass w-full rounded-lg px-4 py-3 text-tx placeholder:text-mute outline-none transition-colors focus:border-neon/60';

export default function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden bg-bg2 py-28">
      <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-green/15 blur-[120px]" />
      <div className="relative mx-auto max-w-xl px-5">
        <Reveal><h2 className="text-center font-display text-3xl font-semibold md:text-4xl">Vamos dar pulso à sua operação?</h2></Reveal>
        <form data-contact-form className="mt-10 space-y-4">
          <input name="nome" placeholder="Seu nome" required className={campo} />
          <input name="email" type="email" placeholder="Seu e-mail" required className={campo} />
          <textarea name="mensagem" rows={4} placeholder="Como podemos ajudar?" required className={campo} />
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
