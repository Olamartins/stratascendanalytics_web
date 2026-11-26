import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { query } from '../db/pool';
import { clearAuthCookie, requireAuth, setAuthCookie, signToken, type AuthUser } from '../middleware/auth';
import { HttpError } from '../middleware/error';
import { logAudit } from '../middleware/audit';

const router = Router();

interface UserRow {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  role: AuthUser['role'];
}

router.post('/admin/login', async (req, res, next) => {
  try {
    const { email, password } = req.body ?? {};
    if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
      throw new HttpError(400, 'Email and password are required');
    }
    const rows = await query<UserRow[]>('SELECT * FROM users WHERE email = ? LIMIT 1', [email.toLowerCase()]);
    const user = rows[0];
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      await logAudit(req, 'login_failed', 'auth', null, { email });
      throw new HttpError(401, 'Invalid email or password');
    }
    const authUser: AuthUser = { id: user.id, email: user.email, role: user.role, name: user.name };
    setAuthCookie(res, signToken(authUser));
    await logAudit(req, 'login', 'auth', user.id, {});
    res.json({ user: authUser });
  } catch (err) {
    next(err);
  }
});

router.post('/admin/logout', (_req, res) => {
  clearAuthCookie(res);
  res.json({ ok: true });
});

router.get('/admin/me', requireAuth, (req, res) => {
  res.json({ user: req.user });
});

export default router;
