import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db
}


// For MySQL

import mysql from "mysql2";

const pool = mysql.createPool({
  host : process.env.MYSQL_HOST,
  user : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE
})

const poolPromise = pool.promise();
export default poolPromise;