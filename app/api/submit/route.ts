import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet, type FormData } from '@/lib/sheets';

const REQUIRED_FIELDS: (keyof FormData)[] = [
  'email', 'name', 'experience', 'telegram',
  'goal', 'difficulties', 'readiness', 'how_long',
];

export async function POST(req: NextRequest) {
  let data: Partial<FormData>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((f) => !data[f]);
  if (missing.length > 0) {
    return NextResponse.json({ error: 'Missing fields', missing }, { status: 400 });
  }

  try {
    await appendToSheet(data as FormData);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Sheets error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
