import readline from 'node:readline';
import bcrypt from 'bcryptjs';
import { pool, query } from '../src/db/pool';
import { slugify } from '../src/utils/slugify';

/**
 * Creates or resets an admin user:
 *   npm run create-admin -- --email admin@stratascendanalytics.com --name "Admin" --password "..."
 * If --password is omitted you will be prompted (input hidden).
 */
async function main() {
  const args = process.argv.slice(2);
  const get = (flag: string) => {
    const i = args.indexOf(flag);
    return i >= 0 ? args[i + 1] : undefined;
  };

  const email = (get('--email') ?? 'admin@stratascendanalytics.com').toLowerCase();
  const name = get('--name') ?? 'Admin';
  let password = get('--password');

  if (!password) {
    password = await new Promise<string>((resolve) => {
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      rl.question('Password: ', (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }
  if (!password || password.length < 8) {
    console.error('Password must be at least 8 characters.');
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, 10);
  const existing = await query<{ id: number }[]>('SELECT id FROM users WHERE email = ?', [email]);
  if (existing.length) {
    await query('UPDATE users SET password_hash = ?, role = ? WHERE email = ?', [hash, 'admin', email]);
    console.log(`Updated existing user ${email} (role=admin).`);
  } else {
    await query('INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)', [
      name,
      email,
      hash,
      'admin',
    ]);
    console.log(`Created admin user ${email}. Slug-safe name: ${slugify(name)}`);
  }
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
