import { Request, Response } from 'express';

import NewsService from '../services/news.service';

class NewsController {
	async getNews(req: Request, res: Response) {
		try {
			const newsService = new NewsService();
			const news = await newsService.getNews();

			res.status(200).send({ news });
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: 'Error getting news.' });
		}
	}

	async parseRssNews(req: Request, res: Response) {
		try {
			const newsService = new NewsService();
			// const
			await newsService.parseRssNews();

			res.status(200).send();
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: 'Error parsing rss news' });
		}
	}
}

export default new NewsController();
