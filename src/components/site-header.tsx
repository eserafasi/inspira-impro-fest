"use client";

import { useState } from "react";
import Image from "next/image";
import { WHATSAPP } from "@/lib/festival";

const LINKS = [
  { href: "#festival", label: "Festival" },
  { href: "#funciones", label: "Funciones" },
  { href: "#talleres", label: "Talleres" },
  { href: "#invitado", label: "Invitado" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/20 bg-navy-deep/95 text-cream backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/brand/ojo.png"
            alt=""
            width={44}
            height={28}
            className="h-7 w-auto"
          />
          <span className="font-display text-sm uppercase tracking-[0.22em]">
            Inspira Impro Fest 2
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="tracking-wide text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP.primary.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-gold px-4 py-2 font-display text-xs uppercase tracking-[0.18em] text-navy-deep hover:bg-cream"
          >
            Inscripciones
          </a>
        </nav>
        <button
          type="button"
          className="font-display text-xs uppercase tracking-widest md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-3 border-t border-cream/10 px-4 py-4 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP.primary.href}
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-sm bg-gold px-4 py-2 font-display text-xs uppercase tracking-widest text-navy-deep"
          >
            Inscripciones
          </a>
        </nav>
      ) : null}
    </header>
  );
}
