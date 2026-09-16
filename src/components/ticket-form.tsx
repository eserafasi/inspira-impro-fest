"use client";

import { useEffect, useId, useState } from "react";
import { RECEIPT } from "@/lib/ticket";
import { validateReceiptMeta, validateTicketFields } from "@/lib/ticket-submit";

export function TicketForm() {
  const previewId = useId();
  const [mounted, setMounted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  if (!mounted) {
    return <p className="text-sm text-ink/70">Cargando formulario…</p>;
  }

  if (success) {
    return (
      <div className="border-2 border-navy bg-cream-soft p-6">
        <h2 className="font-display text-2xl uppercase">
          ¡Comprobante recibido!
        </h2>
        <p className="mt-4 text-ink/80">
          Hemos recibido tu información y comprobante.
        </p>
        <p className="mt-3 text-ink/80">
          Tu transferencia será verificada manualmente.
        </p>
        <p className="mt-3 text-ink/80">
          Si el pago es confirmado, el equipo del evento se pondrá en contacto
          contigo utilizando los datos proporcionados.
        </p>
        <p className="mt-4 font-medium">Gracias.</p>
      </div>
    );
  }

  return (
    <form
      className="relative grid gap-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setError(null);

        const form = event.currentTarget;
        const data = new FormData(form);
        const fields = validateTicketFields({
          name: String(data.get("name") ?? ""),
          phone: String(data.get("phone") ?? ""),
          document: String(data.get("document") ?? ""),
          email: String(data.get("email") ?? ""),
          website: String(data.get("website") ?? ""),
        });
        if (!fields.ok) {
          setError(fields.error);
          return;
        }

        const receipt = data.get("receipt");
        if (!(receipt instanceof File) || !receipt.size) {
          setError("Adjunta el comprobante de transferencia.");
          return;
        }
        const receiptCheck = validateReceiptMeta({
          mimeType: receipt.type,
          size: receipt.size,
        });
        if (!receiptCheck.ok) {
          setError(receiptCheck.error);
          return;
        }

        setPending(true);
        try {
          const response = await fetch("/api/tickets", {
            method: "POST",
            body: data,
          });
          const result = (await response.json()) as {
            ok?: boolean;
            error?: string;
          };
          if (!response.ok || !result.ok) {
            setError(result.error || "No se pudo enviar el comprobante.");
            return;
          }
          setSuccess(true);
        } catch {
          setError("No se pudo enviar el comprobante. Intenta de nuevo.");
        } finally {
          setPending(false);
        }
      }}
    >
      <label className="grid gap-1">
        <span className="text-sm font-medium">Nombre completo</span>
        <input
          name="name"
          required
          autoComplete="name"
          suppressHydrationWarning
          className="min-h-12 border-2 border-navy bg-paper px-3"
        />
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-medium">Teléfono</span>
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          suppressHydrationWarning
          className="min-h-12 border-2 border-navy bg-paper px-3"
        />
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-medium">
          Documento{" "}
          <span className="font-normal text-ink/60">(opcional)</span>
        </span>
        <input
          name="document"
          autoComplete="off"
          suppressHydrationWarning
          className="min-h-12 border-2 border-navy bg-paper px-3"
        />
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-medium">Correo electrónico</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          suppressHydrationWarning
          className="min-h-12 border-2 border-navy bg-paper px-3"
        />
      </label>

      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <label className="grid gap-1">
        <span className="text-sm font-medium">
          Comprobante de transferencia
        </span>
        <input
          name="receipt"
          type="file"
          required
          accept={RECEIPT.accept}
          className="min-h-12 border-2 border-navy bg-paper px-3 py-2 file:mr-3 file:border-0 file:bg-navy file:px-3 file:py-2 file:font-display file:text-xs file:uppercase file:tracking-[0.12em] file:text-cream"
          onChange={(event) => {
            const file = event.target.files?.[0];
            setPreviewUrl((current) => {
              if (current) URL.revokeObjectURL(current);
              return file ? URL.createObjectURL(file) : null;
            });
          }}
        />
      </label>

      {previewUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          id={previewId}
          src={previewUrl}
          alt="Vista previa del comprobante"
          className="max-h-48 w-full border-2 border-navy object-contain bg-cream-soft"
        />
      ) : null}

      {error ? (
        <p role="alert" className="text-sm text-purple">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="cta-star justify-self-center disabled:opacity-60"
      >
        {pending ? "Enviando…" : "Enviar comprobante"}
      </button>
    </form>
  );
}
