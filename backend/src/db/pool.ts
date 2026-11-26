import mysql from 'mysql2/promise';
import type { ExecuteValues } from 'mysql2';
import { env } from '../config/env';

export const pool = mysql.createPool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  namedPlaceholders: true,
});

export async function query<T = unknown>(sql: string, params: ExecuteValues = []): Promise<T> {
  const [rows] = await pool.execute(sql, params);
  return rows as T;
}
