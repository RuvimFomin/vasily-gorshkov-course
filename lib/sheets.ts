import { google } from 'googleapis';

export interface FormData {
  email: string;
  name: string;
  experience: string;
  telegram: string;
  goal: string;
  difficulties: string;
  readiness: string;
  how_long: string;
}

export async function appendToSheet(data: FormData) {
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS!);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const sheetName = process.env.SHEET_NAME ?? 'Анкеты';

  const now = new Date().toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[
        now,
        data.email.trim(),
        data.name.trim(),
        data.experience,
        data.telegram.trim(),
        data.goal.trim(),
        data.difficulties.trim(),
        data.readiness,
        data.how_long.trim(),
      ]],
    },
  });
}
