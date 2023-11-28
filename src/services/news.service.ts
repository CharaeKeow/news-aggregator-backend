import Parser from 'rss-parser';
import { load } from 'cheerio';

import NewsModel from '../models/news.model';
import PublisherModel from '../models/publishers.model';
import { languageCodeUnion, News } from '../types/news';
import { Publisher, PublisherName } from '../types/publisher';

const PLACEHOLDER_IMG_LINK =
	'https://luminews.my/_next/static/media/logo-black.411b1fed.png/?w=128&q=75';

class NewsService {
	private newsModel = new NewsModel();
	private publisherModel = new PublisherModel();

	async getNews(languageCode: languageCodeUnion) {
		const news: News[] = await this.newsModel.getNews(languageCode);

		return news;
	}

	async crawlArticles() {
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
			const rssNews = await this.processRssFeed(parser, publisher);

			// only save if there are rss news
			if (rssNews.length > 0) {
				await this.newsModel.saveNews(rssNews);
				console.log(`${rssNews.length} news processed for ${publisher.name}.`);
			}
		}
	}

	// utils. Keep here instead of into `../utils` folder since it's not reused elsewhere
	/**
	 * Util function to crawl, process rss feed, and return the articles. If there is error, print the error
	 */
	private async processRssFeed(parser: Parser, publisher: Publisher) {
		try {
			const feed = await parser.parseURL(publisher.feedUrl);

			const rssNews: News[] = [];

			for (const item of feed.items) {
				let imageUrl = this.extractImageUrl(item, publisher);

				// push the rss items to rssNews array
				rssNews.push({
					title: item.title?.trim() as string,
					imageUrl: imageUrl || PLACEHOLDER_IMG_LINK,
					link: item.link as string,
					pubDate: new Date(item.isoDate as string),
					guid: item.guid as string,
					publisher: publisher.name,
				});
			}

			return rssNews;
		} catch (error) {
			console.error(`Error processing ${publisher.name} rss feed.`, error);
			return [];
		}
	}

	/**
	 * Util function to extract image url from article item. Return null if there is no image found.
	 */
	private extractImageUrl(item: any, publisher: Publisher) {
		let imageUrl = null;

		// if utusan, extract image from content
		if (publisher.name === PublisherName.UtusanMalaysia) {
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

		// ? No Berita Harian here because Berita Harian rss feed doesn't contain any image

		return imageUrl;
	}
}

export default NewsService;
