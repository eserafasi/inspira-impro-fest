import { isAllowedReceiptType, RECEIPT } from "@/lib/ticket";

export type TicketPayload = {
  name: string;
  idPhone: string;
  email: string;
  website: string;
  receipt: {
    name: string;
    mimeType: string;
    base64: string;
    size: number;
  };
};

export function validateTicketFields(input: {
  name: string;
  idPhone: string;
  email: string;
  website: string;
}) {
  if (input.website.trim()) {
    return { ok: true as const, spam: true as const };
  }

  const name = input.name.trim();
  const idPhone = input.idPhone.trim();
  const email = input.email.trim();

  if (!name) return { ok: false as const, error: "El nombre es obligatorio." };
  if (!idPhone) {
    return { ok: false as const, error: "El documento o teléfono es obligatorio." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, error: "Ingresa un correo electrónico válido." };
  }

  return { ok: true as const, spam: false as const, name, idPhone, email };
}

export function validateReceiptMeta(file: {
  mimeType: string;
  size: number;
}) {
  if (!file.size) {
    return { ok: false as const, error: "Adjunta el comprobante de transferencia." };
  }
  if (!isAllowedReceiptType(file.mimeType)) {
    return {
      ok: false as const,
      error: "El comprobante debe ser una imagen JPG, PNG o WEBP.",
    };
  }
  if (file.size > RECEIPT.maxBytes) {
    return {
      ok: false as const,
      error: "El comprobante no puede superar aproximadamente 10 MB.",
    };
  }
  return { ok: true as const };
}
