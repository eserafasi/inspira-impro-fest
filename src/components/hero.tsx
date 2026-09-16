import Image from "next/image";
import { ticketsHref } from "@/lib/festival";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden text-cream">
      <div className="sunburst pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep/10 via-transparent to-navy-deep/80" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-16 md:py-20">
        <div className="rounded-[2.5rem] bg-navy-deep/90 px-6 py-8 circuit-frame sm:px-10">
          <Image
            src="/brand/logo.png"
            alt="Inspira Impro Fest 2 — Bogotá 2026"
            width={420}
            height={760}
            priority
            className="h-auto w-[220px] sm:w-[280px] md:w-[320px]"
          />
        </div>
        <div className="mt-8 w-full max-w-xl rounded-sm bg-paper p-6 text-center text-ink shadow-[12px_12px_0_#071320] md:p-10">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-teal-deep">
            Bogotá · 11–18 de octubre
          </p>
          <h1 className="mt-3 font-display text-4xl uppercase leading-[0.95] sm:text-6xl">
            Un festival de
            <span className="block text-gold-deep">improvisación</span>
            para mirar más adentro
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/80">
            Funciones, talleres montaje y un intensivo con Jeff Gladstone
            (Canadá). En Teatro R101 y Estudio La Gata Cirko.
          </p>
          <p className="mt-3 text-sm font-medium text-teal-deep">
            Invitado especial: Jeff Gladstone
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={ticketsHref()}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-navy px-5 py-3 font-display text-sm uppercase tracking-[0.16em] text-cream hover:bg-teal-deep"
            >
              Comprar entradas
            </a>
            <a
              href="#talleres"
              className="rounded-sm border-2 border-navy px-5 py-3 font-display text-sm uppercase tracking-[0.16em] hover:bg-navy hover:text-cream"
            >
              Ver talleres
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
