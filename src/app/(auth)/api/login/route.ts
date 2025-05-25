import { db } from '@/lib/db';
import { compare } from 'bcrypt';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await compare(password, user.password))) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
 
  const token = jwt.sign(
    {
      email: user.email,
      username: user.username,
      sub: user.id,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: '7d',
      jwtid: crypto.randomUUID(),
    }
  );

  const serialized = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  const response = NextResponse.json({ message: 'Login successful' });
  response.headers.set('Set-Cookie', serialized);
  return response;
}
