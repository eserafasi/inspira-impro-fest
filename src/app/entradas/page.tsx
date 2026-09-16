import type { Metadata } from "next";
import Image from "next/image";
import { CopyPaymentButton } from "@/components/copy-payment-button";
import { TicketForm } from "@/components/ticket-form";
import { ticketsWhatsAppHref } from "@/lib/festival";
import {
  EVENT,
  PAYMENT,
  formatTicketPrice,
  paymentCopyText,
} from "@/lib/ticket";

export const metadata: Metadata = {
  title: `Entradas · ${EVENT.name}`,
  description: `Compra tu entrada para ${EVENT.name} por transferencia bancaria.`,
};

export default function TicketsPage() {
  return (
    <main className="flex-1 bg-paper">
      <div className="mx-auto grid max-w-lg gap-8 px-4 py-8 sm:py-12">
        <header className="grid gap-4">
          <Image
            src={EVENT.image}
            alt={EVENT.imageAlt}
            width={1200}
            height={1500}
            priority
            className="w-full border-4 border-navy"
          />
          <div>
            <p className="font-display text-sm uppercase tracking-[0.28em] text-teal-deep">
              Entrada
            </p>
            <h1 className="mt-2 font-display text-4xl uppercase leading-[0.95]">
              {EVENT.name}
            </h1>
            <p className="mt-3 text-ink/80">
              {EVENT.date}
              <span className="block">{EVENT.time}</span>
            </p>
            <p className="mt-1 text-ink/80">{EVENT.location}</p>
          </div>
        </header>

        <section className="border-2 border-navy bg-cream-soft p-5">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-teal-deep">
            Transferencia
          </p>
          <dl className="mt-3 space-y-1 text-sm">
            <div>
              <dt className="inline">Banco: </dt>
              <dd className="inline font-medium">{PAYMENT.bank}</dd>
            </div>
            <div>
              <dt className="inline">Tipo de cuenta: </dt>
              <dd className="inline font-medium">{PAYMENT.accountType}</dd>
            </div>
            <div>
              <dt className="inline">Número: </dt>
              <dd className="inline font-medium">{PAYMENT.accountNumber}</dd>
            </div>
            <div>
              <dt className="inline">Titular: </dt>
              <dd className="inline font-medium">{PAYMENT.accountHolder}</dd>
            </div>
            <div>
              <dt className="inline">Documento: </dt>
              <dd className="inline font-medium">{PAYMENT.document}</dd>
            </div>
          </dl>
          <p className="mt-4 font-display text-sm uppercase tracking-[0.12em]">
            Valor de la entrada:
          </p>
          <p className="font-display text-3xl">{formatTicketPrice()}</p>
          <CopyPaymentButton text={paymentCopyText()} />
          <p className="mt-4 text-sm text-ink/75">
            Realiza la transferencia y luego completa el formulario con los
            mismos datos utilizados para la compra.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl uppercase">Enviar comprobante</h2>
          <div className="mt-4">
            <TicketForm />
          </div>
        </section>

        <div className="grid justify-items-center gap-2">
          <p className="font-display text-base lowercase leading-none text-ink/70">
            o
          </p>
          <a
            href={ticketsWhatsAppHref()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-[#25D366] px-4 py-2 font-display text-[11px] uppercase tracking-[0.12em] text-white hover:bg-[#128C7E]"
          >
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
