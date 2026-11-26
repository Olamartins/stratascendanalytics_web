import { Router } from 'express';
import healthRouter from './health';
import authRouter from './auth';
import {
  mediaRouter,
  ordersRouter,
  pagesRouter,
  productsRouter,
  resourcesRouter,
  searchRouter,
  settingsRouter,
  trainingsRouter,
} from './stubs';

const router = Router();

router.use('/api', healthRouter);
router.use('/api', authRouter);

router.use('/api/pages', pagesRouter);
router.use('/api/products', productsRouter);
router.use('/api/resources', resourcesRouter);
router.use('/api/trainings', trainingsRouter);
router.use('/api', ordersRouter); // /api/checkout/initiate, /api/paystack/webhook
router.use('/api/media', mediaRouter);
router.use('/api/admin/settings', settingsRouter);
router.use('/api/search', searchRouter);

export default router;
