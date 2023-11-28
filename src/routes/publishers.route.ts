import { Router } from 'express';

import PublisherController from '../controllers/publishers.controller';

const router = Router();

// get all publishers
router.get('/', PublisherController.getPublishers);

export default router;
