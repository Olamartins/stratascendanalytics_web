import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/auth';

/**
 * Phase-5 CRUD routers. Public GET endpoints and admin write endpoints are
 * declared here so the API surface is stable; handlers return 501 until the
 * CMS phase implements them against the schema in database/schema.sql.
 */
function stub(name: string) {
  const r = Router();
  r.all('/*', (_req, res) => {
    res.status(501).json({ error: `${name} endpoints are implemented in phase 5 (CMS CRUD)` });
  });
  return r;
}

export const pagesRouter = stub('pages');
export const productsRouter = stub('products');
export const resourcesRouter = stub('resources');
export const trainingsRouter = stub('trainings');
export const ordersRouter = Router();
ordersRouter.post('/checkout/initiate', (_req, res) =>
  res.status(501).json({ error: 'Paystack checkout is implemented in phase 7' }),
);
ordersRouter.post('/paystack/webhook', (_req, res) =>
  res.status(501).json({ error: 'Paystack webhook is implemented in phase 7' }),
);
export const mediaRouter = Router();
mediaRouter.use('/admin/*', requireAuth);
mediaRouter.all('/admin/*', (_req, res) =>
  res.status(501).json({ error: 'media upload is implemented in phase 5' }),
);
export const settingsRouter = Router();
settingsRouter.use(requireAuth);
settingsRouter.all('/*', requireRole('admin'), (_req, res) =>
  res.status(501).json({ error: 'settings endpoints are implemented in phase 5' }),
);
export const searchRouter = stub('search');
