import Parser from 'rss-parser';
import { load } from 'cheerio';

import NewsModel from '../models/news.model';
import PublisherModel from '../models/publishers.model';
import { News } from '../types/news';
import { Publisher, PublisherName } from '../types/publisher';

class NewsService {
	private newsModel = new NewsModel();
	private publisherModel = new PublisherModel();

	async getNews() {
		const news: News[] = await this.newsModel.getNews();

		return news;
	}

	// TODO: Think if it's better to put it inside its own `rss-parser.service.ts` file
	async parseRssNews() {
		const parser = new Parser({
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
			},
			customFields: {
				item: [['media:content', 'mediaContent']],
			},
		});

		// get list of publishers
		const publishers: Publisher[] = await this.publisherModel.getPublishers();
		// console.log({ publishers });

		// iterate thru the list and parse the rss feed
		for (const publisher of publishers) {
			const feed = await parser.parseURL(publisher.feedUrl);

			const rssNews: News[] = [];

			// feed.items.forEach((item) => {
			for (const item of feed.items) {
				let imageUrl = null;

				if (publisher.name === PublisherName.UtusanMalaysia) {
					// if utusan, extract image from content
					const content = item.content;

					if (content) {
						const $ = load(content); // load the HTML in content using Cheerio library

						// grab the first img tag in content, and get the src attribute value
						const imgElement = $('img').first();
						imageUrl = imgElement.attr('src');
					}
				} else if (publisher.name === PublisherName.Says) {
					// if SAYS, extract from custom field mediaContent
					imageUrl = item.mediaContent?.['$'].url;
				}

				// push the rss items to rssNews array
				rssNews.push({
					title: item.title?.trim() as string,
					imageUrl: imageUrl,
					link: item.link as string,
					pubDate: new Date(item.isoDate as string),
					guid: item.guid as string,
					publisher: publisher.name,
				});
			}

			// save the news
			await this.newsModel.saveNews(rssNews);

			console.log(`${rssNews.length} news processed.`);
		}
	}
}

export default NewsService;