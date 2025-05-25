import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// import jwt from "jsonwebtoken";

// export function decodeToken(token: string) {
//   const decoded = jwt.decode(token);
//   return decoded as { name: string; email: string };
// }