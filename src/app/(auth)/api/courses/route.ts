import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.json();
  const { title, description, category, thumbnail_Url, old_price, new_price, projectOneLogo, projectOneTitle, projectOneDes, projectTwoLogo, projectTwoTitle, projectTwoDes, projectThreeLogo, projectThreeTitle, projectThreeDes } = body;

  try {
    await db.execute(
      `INSERT INTO Courses (title, description, category, thumbnail_Url, old_price, new_price, projectOneLogo, projectOneTitle, projectOneDes, projectTwoLogo, projectTwoTitle, projectTwoDes, projectThreeLogo, projectThreeTitle, projectThreeDes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, description, category, thumbnail_Url, old_price, new_price, projectOneLogo, projectOneTitle, projectOneDes, projectTwoLogo, projectTwoTitle, projectTwoDes, projectThreeLogo, projectThreeTitle, projectThreeDes]
    );

    return NextResponse.json({ message: 'Inserted successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Insertion failed' }, { status: 500 });
  }
}

