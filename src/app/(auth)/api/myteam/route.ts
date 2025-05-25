import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.json();
  const { full_name, title, description, category, thumbnail_Url, linkedIn, github, instagram, twitter } = body;

  try {
    await db.execute(
      `INSERT INTO MyTeam (full_name, title, description, category, thumbnail_Url, linkedIn, github, instagram, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [ full_name, title, description, category, thumbnail_Url, linkedIn, github, instagram, twitter]
    );

    return NextResponse.json({ message: 'Inserted successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Insertion failed' }, { status: 500 });
  }
}

