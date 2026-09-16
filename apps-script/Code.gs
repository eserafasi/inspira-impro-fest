/**
 * Ticket MVP backend.
 *
 * Receives one form submission, stores the receipt in Drive,
 * and appends a row to the Tickets sheet.
 *
 * Setup (once):
 * 1. Open the existing Google Spreadsheet.
 * 2. Extensions → Apps Script. Paste this file.
 * 3. Run setupOnce() and approve permissions.
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the web app URL into GOOGLE_APPS_SCRIPT_URL on the website.
 *
 * Optional Script Properties:
 *   SPREADSHEET_ID   — only needed if this script is standalone
 *   DRIVE_FOLDER_ID  — folder for receipts; created by setupOnce() if empty
 */

var SHEET_NAME = "Tickets";
var HEADERS = ["Timestamp", "Name", "ID / Phone", "Email", "Receipt", "Checked"];

function doGet() {
  return json_({ ok: true, service: "tickets" });
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.website) {
      return json_({ ok: true });
    }

    var name = String(data.name || "").trim();
    var idPhone = String(data.idPhone || "").trim();
    var email = String(data.email || "").trim();
    var mimeType = String(data.mimeType || "");
    var base64 = String(data.receiptBase64 || "");
    var fileName = String(data.fileName || "comprobante.jpg");

    if (!name || !idPhone || !email || !base64) {
      return json_({ ok: false, error: "Missing required fields." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ ok: false, error: "Invalid email." });
    }

    if (["image/jpeg", "image/png", "image/webp"].indexOf(mimeType) === -1) {
      return json_({ ok: false, error: "Receipt must be an image." });
    }

    var bytes = Utilities.base64Decode(base64);
    var maxBytes = 10 * 1024 * 1024;
    if (bytes.length > maxBytes) {
      return json_({ ok: false, error: "Receipt is too large." });
    }

    var folder = getReceiptFolder_();
    var blob = Utilities.newBlob(bytes, mimeType, fileName);
    var file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    var sheet = getTicketsSheet_();
    var timestamp = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      "dd/MM/yyyy HH:mm"
    );

    sheet.appendRow([timestamp, name, idPhone, email, "", false]);
    var row = sheet.getLastRow();
    sheet.getRange(row, 5).setRichTextValue(
      SpreadsheetApp.newRichTextValue()
        .setText("View")
        .setLinkUrl(file.getUrl())
        .build()
    );

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function setupOnce() {
  var sheet = getTicketsSheet_();
  var props = PropertiesService.getScriptProperties();

  if (!props.getProperty("DRIVE_FOLDER_ID")) {
    var folder = DriveApp.createFolder("Ticket Receipts");
    props.setProperty("DRIVE_FOLDER_ID", folder.getId());
  }

  var range = sheet.getRange(2, 6, Math.max(sheet.getMaxRows() - 1, 1), 1);
  var rule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
  range.setDataValidation(rule);
}

function getSpreadsheet_() {
  var id = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
  if (id) return SpreadsheetApp.openById(id);
  return SpreadsheetApp.getActiveSpreadsheet();
}

function getTicketsSheet_() {
  var ss = getSpreadsheet_();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  var firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  var empty = firstRow.every(function (cell) {
    return cell === "";
  });
  if (empty) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getReceiptFolder_() {
  var id = PropertiesService.getScriptProperties().getProperty("DRIVE_FOLDER_ID");
  if (id) return DriveApp.getFolderById(id);
  return DriveApp.getRootFolder();
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
