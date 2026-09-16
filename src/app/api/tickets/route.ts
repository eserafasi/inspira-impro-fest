import { validateReceiptMeta, validateTicketFields } from "@/lib/ticket-submit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json(
      { ok: false, error: "Adjunta el comprobante de transferencia." },
      { status: 400 }
    );
  }
  const fields = validateTicketFields({
    name: String(form.get("name") ?? ""),
    phone: String(form.get("phone") ?? ""),
    document: String(form.get("document") ?? ""),
    email: String(form.get("email") ?? ""),
    website: String(form.get("website") ?? ""),
  });

  if (!fields.ok) {
    return Response.json({ ok: false, error: fields.error }, { status: 400 });
  }

  if (fields.spam) {
    return Response.json({ ok: true });
  }

  const receipt = form.get("receipt");
  if (!(receipt instanceof File)) {
    return Response.json(
      { ok: false, error: "Adjunta el comprobante de transferencia." },
      { status: 400 }
    );
  }

  const receiptCheck = validateReceiptMeta({
    mimeType: receipt.type,
    size: receipt.size,
  });
  if (!receiptCheck.ok) {
    return Response.json({ ok: false, error: receiptCheck.error }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!scriptUrl) {
    return Response.json(
      {
        ok: false,
        error:
          "Falta GOOGLE_APPS_SCRIPT_URL. Configúralo en .env.local (ver apps-script/README.md).",
      },
      { status: 503 }
    );
  }

  const buffer = Buffer.from(await receipt.arrayBuffer());
  const payload = JSON.stringify({
    name: fields.name,
    phone: fields.phone,
    document: fields.document,
    idPhone: fields.phone,
    email: fields.email,
    website: "",
    fileName: receipt.name,
    mimeType: receipt.type,
    receiptBase64: buffer.toString("base64"),
  });

  const response = await postToAppsScript(scriptUrl, payload);

  const text = await response.text();
  let data: { ok?: boolean; error?: string } = {};
  try {
    data = JSON.parse(text) as { ok?: boolean; error?: string };
  } catch {
    return Response.json(
      {
        ok: false,
        error:
          "El backend de Google no respondió correctamente. Revisa el deployment del Apps Script.",
      },
      { status: 502 }
    );
  }

  if (!data.ok) {
    return Response.json(
      { ok: false, error: data.error || "No se pudo guardar el comprobante." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}

async function postToAppsScript(url: string, body: string) {
  const headers = { "Content-Type": "application/json" };
  const first = await fetch(url, {
    method: "POST",
    headers,
    body,
    redirect: "manual",
  });

  const location = first.headers.get("location");
  if (location && [301, 302, 303, 307, 308].includes(first.status)) {
    return fetch(location, {
      method: "POST",
      headers,
      body,
      redirect: "follow",
    });
  }

  return first;
}
