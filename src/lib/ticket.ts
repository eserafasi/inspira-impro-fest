export const EVENT = {
  name: "Inspira Impro Fest 2",
  date: "11–18 de octubre de 2026",
  time: "Según programación de cada función",
  location: "Teatro R101, Bogotá",
  image: "/brand/cartel-fest.png",
  imageAlt: "Cartel Inspira Impro Fest 2, Bogotá 11–18 de octubre",
  price: 50000,
};

export const PAYMENT = {
  bank: "BANK",
  accountType: "ACCOUNT TYPE",
  accountNumber: "ACCOUNT NUMBER",
  accountHolder: "ACCOUNT HOLDER",
  document: "ACCOUNT DOCUMENT",
};

export const RECEIPT = {
  maxBytes: 10 * 1024 * 1024,
  accept: "image/jpeg,image/jpg,image/png,image/webp,.jpg,.jpeg,.png,.webp",
  mimeTypes: ["image/jpeg", "image/png", "image/webp"] as const,
};

export function formatTicketPrice(price = EVENT.price) {
  return `$${new Intl.NumberFormat("es-CO").format(price)} COP`;
}

export function paymentCopyText() {
  return [
    `Banco: ${PAYMENT.bank}`,
    `Tipo de cuenta: ${PAYMENT.accountType}`,
    `Número: ${PAYMENT.accountNumber}`,
    `Titular: ${PAYMENT.accountHolder}`,
    `Documento: ${PAYMENT.document}`,
    "",
    "Valor de la entrada:",
    formatTicketPrice(),
  ].join("\n");
}

export function isAllowedReceiptType(mimeType: string) {
  return (RECEIPT.mimeTypes as readonly string[]).includes(mimeType);
}
