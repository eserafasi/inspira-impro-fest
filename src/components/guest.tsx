import Image from "next/image";
import { GUESTS, WHATSAPP } from "@/lib/festival";

export function Guest() {
  return (
    <section id="invitados" className="relative scroll-mt-20 overflow-hidden">
      <div className="argyle absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-3xl border-4 border-navy bg-paper p-6 text-navy-deep shadow-[12px_12px_0_#071320] md:p-8">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-teal-deep">
            Invitados especiales
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-none sm:text-6xl">
            Jeff Gladstone y Viviane Eggers
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink">
            Dos invitados internacionales en el festival: Jeff llega desde
            Canadá con un intensivo y una función dirigida en vivo. Viviane
            llega desde Hamburgo a dirigir uno de los talleres montaje.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="bg-cream p-6 shadow-[16px_16px_0_#071320] md:p-8">
            <Image
              src={GUESTS[0].image}
              alt={GUESTS[0].imageAlt}
              width={800}
              height={1000}
              className="h-auto w-full"
            />
            <p className="mt-6 font-display text-sm uppercase tracking-[0.28em] text-teal-deep">
              Intensivo · 9 horas
            </p>
            <h3 className="mt-2 font-display text-4xl uppercase leading-none sm:text-5xl">
              {GUESTS[0].name}
            </h3>
            <p className="mt-2 font-display text-lg uppercase tracking-wide">
              {GUESTS[0].origin}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              {GUESTS[0].role}. Un taller para encontrar la inspiración en los
              personajes de nuestra cotidianidad: relaciones, historias,
              mascotas u objetos favoritos. Inspirado en el formato{" "}
              <span className="italic">Life Game</span> de Keith Johnstone.
            </p>
            <ul className="mt-6 space-y-1 text-sm">
              <li>Domingo 11 oct · 9 am–4 pm</li>
              <li>Lunes 12 oct · 6–9 pm</li>
              <li>Sábado 17 oct · The Reunion, dirigido en vivo</li>
            </ul>
            <a
              href={WHATSAPP.primary.href}
              target="_blank"
              rel="noreferrer"
              className="cta-star mt-8"
            >
              Inscripciones
            </a>
          </article>

          <article className="bg-gold p-6 text-navy-deep shadow-[16px_16px_0_#071320] md:p-8">
            <Image
              src={GUESTS[1].image}
              alt={GUESTS[1].imageAlt}
              width={800}
              height={1000}
              className="h-auto w-full"
            />
            <p className="mt-6 font-display text-sm uppercase tracking-[0.28em]">
              Taller montaje
            </p>
            <h3 className="mt-2 font-display text-4xl uppercase leading-none sm:text-5xl">
              {GUESTS[1].name}
            </h3>
            <p className="mt-2 font-display text-lg uppercase tracking-wide">
              {GUESTS[1].origin}
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              {GUESTS[1].role}, un ensamble para mujeres improvisadoras. ¿Qué
              nos mueve a sentir? Partiendo de la experiencia como seres
              sintientes, compartiremos, experimentaremos y crearemos algo
              salvaje. Dictado en español e inglés.
            </p>
            <ul className="mt-6 space-y-1 text-sm">
              <li>Lunes 28 sept y 5 oct · 6–9 pm</li>
              <li>Sábado 3 oct · 2–5 pm</li>
              <li>Domingo 4 oct · 2–5 pm</li>
            </ul>
            <a
              href={WHATSAPP.primary.href}
              target="_blank"
              rel="noreferrer"
              className="cta-star mt-8"
            >
              Inscripciones
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
