import { Router } from 'express';
import { userRouter } from './userRoutes.js';
import { gameRouter } from './gameRoutes.js';
import { reviewRouter } from './reviewRoutes.js';
import { recommendationRouter } from './recommendationRoutes.js';
import { completionTimeRouter } from './completionTimeRoutes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/games', gameRouter);
router.use('/reviews', reviewRouter);
router.use('/recommendations', recommendationRouter);
router.use('/completiontimes', completionTimeRouter);

export default router;