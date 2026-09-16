import Image from "next/image";
import { SOCIAL, WHATSAPP, ticketsHref } from "@/lib/festival";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div className="flex items-start gap-4 md:col-span-1">
          <Image
            src="/brand/ojo.png"
            alt=""
            width={72}
            height={48}
            className="h-10 w-auto"
          />
          <div>
            <p className="font-display text-xl uppercase">Inspira Impro Fest 2</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              Proyecto Cocoloco · La Gata Cirko · Teatro R101 · Trascena
            </p>
          </div>
        </div>

        <div id="redes" className="scroll-mt-20">
          <p className="font-display uppercase tracking-widest text-gold">
            Redes
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {SOCIAL.map((profile) => (
              <li key={profile.href}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  {profile.name}
                  <span className="mt-0.5 block text-cream/60">
                    {profile.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-display uppercase tracking-widest text-gold">
            Entradas
          </p>
          <a href={ticketsHref()} className="cta-star mt-2">
            Comprar entradas
          </a>
          <p className="mt-5 font-display uppercase tracking-widest text-gold">
            Talleres
          </p>
          <a
            href={WHATSAPP.primary.href}
            target="_blank"
            rel="noreferrer"
            className="cta-star mt-2"
          >
            Inscríbete a los talleres
          </a>
        </div>
      </div>
    </footer>
  );
}
