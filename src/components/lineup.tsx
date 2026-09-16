import Image from "next/image";
import { SHOWS, ticketsHref } from "@/lib/festival";

const TONE: Record<(typeof SHOWS)[number]["tone"], string> = {
  navy: "bg-navy text-cream",
  teal: "bg-teal text-cream",
  gold: "bg-gold text-navy-deep",
  cream: "bg-cream text-navy",
  purple: "bg-purple text-cream",
};

export function Lineup() {
  return (
    <section id="funciones" className="scroll-mt-20 bg-cream-soft">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-teal-deep">
          Programación
        </p>
        <h2 className="mt-2 font-display text-4xl uppercase sm:text-5xl">
          Funciones
        </h2>
        <p className="mt-3 max-w-2xl text-ink/75">
          Una semana en Bogotá para ver, crear y entrar en escena. Ubicación:
          Teatro R101 y Estudio La Gata Cirko.
        </p>
        <div className="mt-8 overflow-hidden border-4 border-navy">
          <Image
            src="/brand/cartel-fest.png"
            alt="Cartel Inspira Impro Fest 2, Bogotá 11–18 de octubre"
            width={1200}
            height={1500}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {SHOWS.map((show) => (
            <article
              key={show.day}
              className={`${TONE[show.tone]} flex min-h-[240px] flex-col justify-between p-5`}
            >
              <p className="font-display text-xs uppercase tracking-[0.2em] opacity-80">
                {show.day}
              </p>
              <div>
                <h3 className="font-display text-2xl uppercase leading-none">
                  {show.title}
                </h3>
                <p className="mt-3 text-sm leading-snug opacity-90">
                  {show.subtitle}
                </p>
                <a href={ticketsHref(show)} className="cta-star-sm mt-5">
                  Comprar entradas
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
