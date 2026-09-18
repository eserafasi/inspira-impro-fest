import type { Metadata } from "next";
import { ConstructionComingSoon } from "@/components/construction-coming-soon";
import { TicketOfficeMockup } from "@/components/ticket-office-mockup";
import { EVENT } from "@/lib/ticket";

export const metadata: Metadata = {
  title: `Entradas · ${EVENT.name}`,
  description: `Compra tu entrada para ${EVENT.name} por WhatsApp.`,
};

/**
 * Taquilla en “próximamente”: mockup decorativo + CTA de WhatsApp.
 * El formulario real, copiar pago, validación y API están en
 * src/archive/tickets/ (ver restore-notes.ts).
 *
 * Para reactivar la taquilla en una rama aparte:
 *   git checkout -b feature/taquilla
 *   y sigue src/archive/tickets/restore-notes.ts
 */
export default function TicketsPage() {
  return (
    <main className="flex-1 bg-paper">
      <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
        <div className="relative">
          <div
            className="construction-blocked pointer-events-none select-none"
            inert={true}
            aria-hidden="true"
          >
            <TicketOfficeMockup />
          </div>
          <ConstructionComingSoon />
        </div>
      </div>
    </main>
  );
}
