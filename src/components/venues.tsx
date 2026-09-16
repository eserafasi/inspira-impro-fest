import Image from "next/image";

export function Venues() {
  return (
    <section id="festival" className="scroll-mt-20 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <Image
            src="/brand/ensambles.jpg"
            alt="Talleres montaje Inspira: Con-tacto y ¿Listo?"
            width={900}
            height={1100}
            className="mb-8 w-full border-2 border-navy object-cover"
          />
          <p className="font-display text-sm uppercase tracking-[0.3em] text-teal-deep">
            Bogotá 2026
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase sm:text-5xl">
            Dónde ocurre
          </h2>
          <p className="mt-4 max-w-md text-ink/75">
            El festival vive entre la sala y el estudio: funciones en Teatro
            R101 y laboratorios en La Gata Cirko, que celebra 25 años.
          </p>
        </div>
        <div className="grid gap-4">
          <article className="border-2 border-navy bg-paper p-5">
            <h3 className="font-display text-2xl uppercase">Teatro R101</h3>
            <p className="mt-1 text-sm text-ink/70">
              Funciones del festival y presentación de los ensambles el 14 de
              octubre.
            </p>
          </article>
          <article className="border-2 border-navy bg-teal text-cream p-5">
            <h3 className="font-display text-2xl uppercase">
              Estudio La Gata Cirko
            </h3>
            <p className="mt-1 text-sm text-cream/85">
              Cra 20 #70-19 · Ensayos y talleres montaje.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
