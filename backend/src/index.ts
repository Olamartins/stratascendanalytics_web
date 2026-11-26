import { createApp } from './app';
import { env } from './config/env';
import { pool } from './db/pool';

const app = createApp();

async function main() {
  try {
    await pool.query('SELECT 1');
    console.log('MySQL connected');
  } catch (err) {
    console.error('MySQL connection failed — check DB_* env vars. Server still starting for /api/health.', err);
  }

  app.listen(env.PORT, () => {
    console.log(`Stratascend API listening on http://localhost:${env.PORT}`);
  });
}

main();
