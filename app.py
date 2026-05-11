from flask import Flask, request, jsonify
from google.oauth2 import service_account
from googleapiclient.discovery import build
from datetime import datetime
import os, json

app = Flask(__name__)

SPREADSHEET_ID = os.environ.get('SPREADSHEET_ID', '')
SHEET_NAME = 'Анкеты'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

def get_sheets_service():
    creds_json = os.environ.get('GOOGLE_CREDENTIALS')
    if creds_json:
        info = json.loads(creds_json)
        creds = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
    else:
        creds = service_account.Credentials.from_service_account_file(
            'credentials.json', scopes=SCOPES
        )
    return build('sheets', 'v4', credentials=creds)

def append_to_sheet(data):
    service = get_sheets_service()
    row = [
        datetime.now().strftime('%d.%m.%Y %H:%M'),
        data.get('email', ''),
        data.get('name', ''),
        data.get('experience', ''),
        data.get('telegram', ''),
        data.get('goal', ''),
        data.get('difficulties', ''),
        data.get('readiness', ''),
        data.get('how_long', ''),
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
    html_path = os.path.join(os.path.dirname(__file__), 'index.html')
    with open(html_path, encoding='utf-8') as f:
        return f.read()

@app.route('/form')
def form_page():
    html_path = os.path.join(os.path.dirname(__file__), 'form.html')
    with open(html_path, encoding='utf-8') as f:
        return f.read()

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    required = ['email', 'name', 'experience', 'telegram', 'goal', 'difficulties', 'readiness', 'how_long']
    if not all(data.get(field) for field in required):
        return jsonify({'error': 'Missing fields'}), 400
    try:
        append_to_sheet(data)
        return jsonify({'ok': True})
    except Exception as e:
        print(f'Sheets error: {e}')
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(debug=False, host='0.0.0.0', port=port)
