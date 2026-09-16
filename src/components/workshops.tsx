import Image from "next/image";
import { WHATSAPP } from "@/lib/festival";

function TitleBlock({ kicker }: { kicker: string }) {
  return (
    <div className="title-block inline-block px-5 py-3">
      <p className="font-display text-3xl uppercase leading-none sm:text-4xl">
        Taller
      </p>
      <p className="font-display text-3xl uppercase leading-none text-cream sm:text-4xl">
        Montaje
      </p>
      <p className="mt-1 text-xs tracking-wide text-cream/80">
        se parte del ensamble{" "}
        <span className="inspira-word">
          <span>i</span>
          <span>n</span>
          <span>s</span>
          <span>p</span>
          <span>i</span>
          <span>ra</span>
        </span>
      </p>
      <p className="sr-only">{kicker}</p>
    </div>
  );
}

export function Workshops() {
  return (
    <section id="talleres" className="scroll-mt-20 bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
          Rodéate de inspiración
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl uppercase leading-none sm:text-6xl">
          Sé parte del ensamble Inspira
        </h2>
        <p className="mt-5 max-w-2xl text-cream/80">
          Cuatro sesiones y 12 horas para explorar, dirigir y crear un formato
          que abre el festival. Para improvisadores con experiencia. Cupos
          limitados. Función: miércoles 14 de octubre en Teatro R101.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="bg-gold p-3">
            <Image
              src="/brand/listos-escena.png"
              alt="Pieza gráfica ¿Listos? dirigida por Viviane Eggers"
              width={800}
              height={1000}
              className="h-auto w-full"
            />
          </div>
          <div className="bg-teal p-3">
            <Image
              src="/brand/contacto-escena.png"
              alt="Pieza gráfica Con-tacto dirigida por Marisol Correa"
              width={800}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="bg-gold p-6 text-navy-deep md:p-8">
            <TitleBlock kicker="¿Listos?" />
            <h3 className="mt-6 font-display text-5xl uppercase leading-none">
              ¿Listos?
            </h3>
            <p className="mt-2 font-display text-sm uppercase tracking-[0.18em]">
              Dirigido por Viviane Eggers · Hamburgo
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Un ensamble para mujeres improvisadoras. ¿Qué nos mueve a
              sentir? Partiendo de la experiencia como seres sintientes,
              compartiremos, experimentaremos y crearemos algo salvaje.
              Dictado en español e inglés.
            </p>
            <ul className="mt-5 space-y-1 text-sm">
              <li>Lunes 28 sept y 5 oct · 6–9 pm</li>
              <li>Sábado 3 oct · 2–5 pm</li>
              <li>Domingo 4 oct · 2–5 pm</li>
              <li>Preventa $330.000 · General $350.000</li>
            </ul>
          </article>

          <article className="bg-teal-deep p-6 text-cream md:p-8">
            <TitleBlock kicker="Con-tacto" />
            <h3 className="mt-6 font-display text-5xl uppercase leading-none">
              Con-tacto
            </h3>
            <p className="mt-2 font-display text-sm uppercase tracking-[0.18em] text-gold">
              Dirigido por Marisol Correa
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/90">
              El contacto es la acción de dos cosas que se encuentran
              físicamente. Dos cuerpos, emociones, historias. O un cuerpo con
              una silla, una pared, o alguien del público. Exploramos el
              contacto para descubrir, con tacto, qué historia aparece.
            </p>
            <ul className="mt-5 space-y-1 text-sm">
              <li>Martes 29 sept y 6 oct · 6–9 pm</li>
              <li>Sábado 3 oct · 10 am–1 pm</li>
              <li>Domingo 4 oct · 10 am–1 pm</li>
              <li>Preventa $280.000 · General $300.000</li>
            </ul>
          </article>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-gold/30 bg-navy-deep p-6 md:flex-row md:items-center">
          <p className="max-w-xl text-sm text-cream/85">
            Elige el ensamble del que quieres ser parte antes de que se acaben
            los cupos.
          </p>
          <a
            href={WHATSAPP.primary.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-gold px-5 py-3 font-display text-sm uppercase tracking-[0.16em] text-navy-deep hover:bg-cream"
          >
            Info e inscripciones
          </a>
        </div>
      </div>
    </section>
  );
}
