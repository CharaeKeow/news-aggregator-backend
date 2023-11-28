import { Request, Response } from 'express';

import NewsService from '../services/news.service';
import { LanguageCode } from '../types/news';

const DEFAULT_LANGUAGE_CODE = LanguageCode.English;

class NewsController {
	async getNews(req: Request, res: Response) {
		try {
			// we use query params for the language filter
			let { language } = req.query;

			// Extracts the valid language codes from the LanguageCode enum into an array
			const validLanguageCodes = Object.values(LanguageCode);

			// if language code is none or not valid, change it to default (English)
			if (!validLanguageCodes.includes(language as LanguageCode)) {
				language = DEFAULT_LANGUAGE_CODE;
			}

			const newsService = new NewsService();
			const news = await newsService.getNews(language as LanguageCode);

			res.status(200).send({ news });
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: 'Error getting news.' });
		}
	}

	async crawlArticles(req: Request, res: Response) {
		try {
			const newsService = new NewsService();
			// const
			await newsService.crawlArticles();

			res.status(200).send();
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: 'Error parsing rss news' });
		}
	}
}

export default new NewsController();
