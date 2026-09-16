"use client";

import { useState } from "react";

export function CopyPaymentButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="mt-4 min-h-11 w-full rounded-sm border-2 border-navy px-4 py-2 font-display text-xs uppercase tracking-[0.16em] hover:bg-navy hover:text-cream"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? "Copiado" : "Copiar datos de pago"}
    </button>
  );
}
