import { Router } from 'express';

import NewsController from '../controllers/news.controller';

const router = Router();

// get all news sorted by time descending
router.get('/', NewsController.getNews);
router.get('/crawl-articles', NewsController.crawlArticles);

export default router;
