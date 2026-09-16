import Image from "next/image";
import { ticketsHref } from "@/lib/festival";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden text-cream">
      <div className="sunburst pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep/10 via-transparent to-navy-deep/80" />
      <div className="relative mx-auto max-w-5xl px-4 py-6 sm:py-12 md:py-20">
        <div className="flex items-center gap-3 sm:gap-6 md:flex-col md:items-center md:gap-8">
          <div className="shrink-0 rounded-[1.35rem] bg-navy-deep/90 px-2.5 py-3 circuit-frame sm:rounded-[2.5rem] sm:px-6 sm:py-8 md:px-10">
            <Image
              src="/brand/logo.png"
              alt="Inspira Impro Fest 2 — Bogotá 2026"
              width={420}
              height={760}
              priority
              className="h-auto w-[108px] sm:w-[220px] md:w-[320px]"
            />
          </div>
          <div className="min-w-0 flex-1 rounded-sm bg-paper p-4 text-left text-ink shadow-[8px_8px_0_#071320] sm:p-6 sm:text-center md:w-full md:max-w-xl md:p-10 md:shadow-[12px_12px_0_#071320]">
            <p className="font-display text-[11px] uppercase tracking-[0.18em] text-teal-deep sm:text-sm sm:tracking-[0.28em]">
              Bogotá · 11–18 de octubre
            </p>
            <h1 className="mt-2 font-display text-[1.65rem] uppercase leading-[0.95] sm:mt-3 sm:text-4xl md:text-6xl">
              Un festival de
              <span className="block text-gold-deep">Improvisación</span>
              para inspirarnos
            </h1>
            <p className="mt-3 text-sm leading-snug text-ink/80 sm:mx-auto sm:mt-5 sm:max-w-md sm:text-base sm:leading-relaxed">
              Funciones, talleres montaje e invitados especiales. En Teatro R101
              y Estudio La Gata Cirko.
            </p>
            <p className="mt-2 text-xs font-medium text-teal-deep sm:mt-3 sm:text-sm">
              Invitados especiales: Jeff Gladstone y Viviane Eggers
            </p>
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-8 sm:justify-center sm:gap-3">
              <a href={ticketsHref()} className="cta-star">
                Comprar entradas
              </a>
              <a href="#invitados" className="cta-eye">
                <Image
                  src="/brand/ojo.png"
                  alt=""
                  width={28}
                  height={18}
                  className="h-[1.05em] w-auto"
                />
                Ver invitados
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
