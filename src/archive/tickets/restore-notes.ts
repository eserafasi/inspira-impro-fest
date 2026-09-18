/**
 * Taquilla digital real (archivada).
 *
 * La página /entradas muestra un mockup bloqueado + WhatsApp.
 * Este folder guarda el formulario, el botón de copiar pago, la validación
 * y la ruta API para reactivarlos después.
 *
 * Restaurar en una rama aparte:
 *   1. git checkout -b feature/taquilla
 *   2. Copiar:
 *        ticket-form.tsx         → src/components/ticket-form.tsx
 *        copy-payment-button.tsx → src/components/copy-payment-button.tsx
 *        ticket-submit.ts        → src/lib/ticket-submit.ts
 *        api-route.ts            → src/app/api/tickets/route.ts
 *   3. En ticket-form.tsx y api-route.ts, cambiar
 *        from "./ticket-submit"
 *      por
 *        from "@/lib/ticket-submit"
 *   4. En src/app/entradas/page.tsx, quitar ConstructionComingSoon
 *      y TicketOfficeMockup; volver a montar TicketForm + CopyPaymentButton
 *      (el layout anterior está en git / en este comentario de restore).
 */
export {};
