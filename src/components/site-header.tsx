"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { ticketsHref } from "@/lib/festival";

const LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#talleres", label: "Talleres" },
  { href: "#invitado", label: "Invitado" },
  { href: "#redes", label: "Redes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => {
    document.body.style.overflow = "";
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/20 bg-navy-deep/95 text-cream backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:py-3">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          onClick={closeMenu}
        >
          <Image
            src="/brand/ojo.png"
            alt=""
            width={44}
            height={28}
            className="h-7 w-auto shrink-0"
          />
          <span className="font-display truncate text-xs uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.22em]">
            <span className="sm:hidden">Inspira Fest 2</span>
            <span className="hidden sm:inline">Inspira Impro Fest 2</span>
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
            href={ticketsHref()}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-gold px-4 py-2 font-display text-xs uppercase tracking-[0.18em] text-navy-deep hover:bg-cream"
          >
            Entradas
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <a
            href={ticketsHref()}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-gold px-3 py-2.5 font-display text-[11px] uppercase leading-none tracking-[0.14em] text-navy-deep"
          >
            Entradas
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-cream/30"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
            <span
              className="flex h-3.5 w-5 flex-col justify-between"
              aria-hidden
            >
              <span
                className={`block h-0.5 w-5 origin-center bg-cream transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-cream transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 origin-center bg-cream transition-transform ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id={menuId}
          className="grid gap-1 border-t border-cream/10 bg-navy-deep px-3 pb-4 pt-2 md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                closeMenu();
                const id = link.href.slice(1);
                const target = document.getElementById(id);
                if (!target) return;
                event.preventDefault();
                window.history.pushState(null, "", link.href);
                requestAnimationFrame(() => {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                });
              }}
              className="flex min-h-12 items-center rounded-sm px-3 font-display text-base uppercase tracking-[0.18em] active:bg-cream/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ticketsHref()}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="mt-1 flex min-h-12 items-center justify-center rounded-sm bg-gold px-3 font-display text-sm uppercase tracking-[0.16em] text-navy-deep"
          >
            Comprar entradas
          </a>
        </nav>
      ) : null}
    </header>
  );
}
