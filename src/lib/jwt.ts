// lib/jwt.ts
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function decodeToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as {
      email: string;
      sub: string;
      username: string;
      iat: number;
      exp: number;
      jti: string;
    };
  } catch (err) {
    return null;
  }
}
