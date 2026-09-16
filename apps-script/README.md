# Ticket backend (Google Apps Script)

The website never talks to Sheets or Drive directly. It posts to this web app.

## Deploy

1. Open the existing Google Spreadsheet.
2. **Extensions → Apps Script**.
3. Replace `Code.gs` with the file in this folder.
4. Select `setupOnce` → **Run** → approve access to Drive and Sheets.
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the URL into `.env.local`:

```bash
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
```

7. Restart `npm run dev` (or set the same variable on Vercel).

Spreadsheet ID and Drive folder stay in Apps Script. They are not sent to the browser.

## Test procedure

### Test 1 — Page

Open `/entradas`.

Confirm:

- Event information appears.
- Price appears.
- Bank information appears.
- Form works.

### Test 2 — Submission

Enter:

```text
Name: Test User
ID / Phone: 3000000000
Email: test@example.com
Receipt: public/test/test-image.jpg
```

Submit.

Expected: success message **¡Comprobante recibido!**

### Test 3 — Spreadsheet

Open the Google Sheet → tab **Tickets**.

Expected: a new row with timestamp, name, ID/phone, email, and a Receipt link.

### Test 4 — Receipt

Click **View**.

Expected: the uploaded image opens in Google Drive.

### Test 5 — Failure

Submit without an image.

Expected: the form refuses submission.
