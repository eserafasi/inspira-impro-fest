import { EVENT, formatTicketPrice } from "@/lib/ticket";

function FakeField({ label }: { label: string }) {
  return (
    <div className="grid gap-0.5">
      <span className="text-[9px] font-medium text-ink/70">{label}</span>
      <div className="h-6 border border-navy bg-paper" />
    </div>
  );
}

/** Decoración compacta. No es el formulario real (archivado en src/archive/tickets). */
export function TicketOfficeMockup() {
  return (
    <div className="grid gap-3 px-1 py-2">
      <header>
        <p className="font-display text-[9px] uppercase tracking-[0.28em] text-teal-deep">
          Taquilla
        </p>
        <p className="mt-1 font-display text-xl uppercase leading-none">
          {EVENT.name}
        </p>
        <p className="mt-1 text-[10px] leading-snug text-ink/70">
          {EVENT.date}
          <span className="block">{EVENT.location}</span>
        </p>
      </header>

      <section className="border border-navy bg-cream-soft p-2.5">
        <p className="font-display text-[8px] uppercase tracking-[0.2em] text-teal-deep">
          Transferencia
        </p>
        <p className="mt-1 text-[10px] leading-snug text-ink/60">
          Banco · Cuenta · Titular
        </p>
        <p className="mt-1 font-display text-lg leading-none">
          {formatTicketPrice()}
        </p>
        <div className="mt-2 h-6 border border-navy/50 bg-paper" />
      </section>

      <section className="grid gap-1.5">
        <p className="font-display text-sm uppercase leading-none">
          Enviar comprobante
        </p>
        <FakeField label="Nombre" />
        <FakeField label="Teléfono" />
        <FakeField label="Correo" />
        <div className="mt-1 h-7 w-28 justify-self-center bg-[#e4bc4a] shadow-[2px_2px_0_#071320]" />
      </section>
    </div>
  );
}
