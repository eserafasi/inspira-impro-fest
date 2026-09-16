import Image from "next/image";
import { WHATSAPP } from "@/lib/festival";

export function Guest() {
  return (
    <section id="invitado" className="relative scroll-mt-20 overflow-hidden">
      <div className="argyle absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-start gap-6 px-4 py-20 lg:grid-cols-2">
        <div className="bg-cream p-6 shadow-[16px_16px_0_#071320] md:p-10">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-teal-deep">
            Intensivo · 9 horas
          </p>
          <h2 className="mt-2 font-display text-5xl uppercase leading-none sm:text-6xl">
            People you know
          </h2>
          <p className="mt-3 font-display text-lg uppercase tracking-wide">
            Jeff Gladstone desde Canadá
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink/80">
            Un taller para encontrar la inspiración en los personajes de
            nuestra cotidianidad: relaciones, historias, mascotas u objetos
            favoritos. Inspirado en el formato{" "}
            <span className="italic">Life Game</span> de Keith Johnstone. Un
            juego de verdades, choques y transformaciones en escena.
          </p>
          <ul className="mt-6 space-y-1 text-sm">
            <li>Domingo 11 oct · 9 am–4 pm</li>
            <li>Lunes 12 oct · 6–9 pm</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP.jeff.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-navy px-5 py-3 font-display text-sm uppercase tracking-[0.16em] text-cream"
            >
              Inscripciones {WHATSAPP.jeff.display}
            </a>
            <a
              href={WHATSAPP.primary.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border-2 border-navy px-5 py-3 font-display text-sm uppercase tracking-[0.16em]"
            >
              Festival {WHATSAPP.primary.display}
            </a>
          </div>
        </div>
        <div className="grid gap-4">
          <Image
            src="/brand/jeff.png"
            alt="Taller People you know con Jeff Gladstone"
            width={800}
            height={1000}
            className="h-auto w-full shadow-[12px_12px_0_#071320]"
          />
        </div>
      </div>
    </section>
  );
}
