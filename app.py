from flask import Flask, request, jsonify, send_from_directory
from google.oauth2 import service_account
from googleapiclient.discovery import build
from datetime import datetime
import os
import json

app = Flask(__name__, static_folder='.')

SPREADSHEET_ID = os.getenv('SPREADSHEET_ID', '')
SHEET_NAME = os.getenv('SHEET_NAME', 'Анкеты')
CREDENTIALS_FILE = os.getenv('CREDENTIALS_FILE', 'credentials.json')
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']


def get_sheets_service():
    creds_json = os.getenv('GOOGLE_CREDENTIALS')
    if creds_json:
        info = json.loads(creds_json)
        creds = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
    else:
        if not os.path.exists(CREDENTIALS_FILE):
            raise FileNotFoundError(f'Credentials file not found: {CREDENTIALS_FILE}')
        creds = service_account.Credentials.from_service_account_file(
            CREDENTIALS_FILE, scopes=SCOPES
        )
    return build('sheets', 'v4', credentials=creds)


def append_to_sheet(data):
    service = get_sheets_service()
    row = [
        datetime.now().strftime('%d.%m.%Y %H:%M'),
        data.get('email', '').strip(),
        data.get('name', '').strip(),
        data.get('experience', '').strip(),
        data.get('telegram', '').strip(),
        data.get('goal', '').strip(),
        data.get('difficulties', '').strip(),
        data.get('readiness', '').strip(),
        data.get('how_long', '').strip(),
    ]
    service.spreadsheets().values().append(
        spreadsheetId=SPREADSHEET_ID,
        range=f'{SHEET_NAME}!A1',
        valueInputOption='RAW',
        insertDataOption='INSERT_ROWS',
        body={'values': [row]}
    ).execute()


@app.route('/')
def index():
    return send_from_directory('.', 'index.html')


@app.route('/form')
def form_page():
    return send_from_directory('.', 'form.html')


@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json(silent=True)
    if not data:
        return jsonify({'error': 'Invalid JSON'}), 400

    required = ['email', 'name', 'experience', 'telegram', 'goal', 'difficulties', 'readiness', 'how_long']
    missing = [field for field in required if not data.get(field)]
    if missing:
        return jsonify({'error': 'Missing fields', 'missing': missing}), 400

    try:
        append_to_sheet(data)
        print(f'✅ Submission received: {data.get("email")}')
        return jsonify({'ok': True})
    except FileNotFoundError as e:
        print(f'Credentials error: {e}')
        return jsonify({'error': str(e)}), 500
    except Exception as e:
        print(f'Sheets error: {type(e).__name__}: {e}')
        return jsonify({'error': 'Server error'}), 500


if __name__ == '__main__':
    debug_mode = os.getenv('DEBUG', 'False').lower() in ('1', 'true', 'yes')
    port = int(os.getenv('PORT', 5000))
    app.run(debug=debug_mode, host='0.0.0.0', port=port)
