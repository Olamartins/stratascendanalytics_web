import type { Request } from 'express';
import { query } from '../db/pool';

export async function logAudit(
  req: Request,
  action: string,
  resourceType: string | null,
  resourceId: number | null,
  meta: Record<string, unknown> = {},
): Promise<void> {
  try {
    await query(
      'INSERT INTO audit_logs (user_id, action, resource_type, resource_id, meta) VALUES (?, ?, ?, ?, ?)',
      [req.user?.id ?? null, action, resourceType, resourceId, JSON.stringify(meta)],
    );
  } catch (err) {
    console.error('audit log failed', err);
  }
}
