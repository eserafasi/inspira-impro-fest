import Image from "next/image";
import { WHATSAPP } from "@/lib/festival";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/brand/ojo.png"
            alt=""
            width={72}
            height={48}
            className="h-10 w-auto"
          />
          <div>
            <p className="font-display text-xl uppercase">Inspira Impro Fest 2</p>
            <p className="text-sm text-cream/70">
              Proyecto Cocoloco · La Gata Cirko · Teatro R101 · Trascena
            </p>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-display uppercase tracking-widest text-gold">
            Info e inscripciones
          </p>
          <a
            href={WHATSAPP.primary.href}
            className="mt-1 block text-lg hover:text-gold"
          >
            {WHATSAPP.primary.display}
          </a>
        </div>
      </div>
    </footer>
  );
}
