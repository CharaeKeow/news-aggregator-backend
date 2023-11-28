import knex from '../../database/connection';
import { News } from '../types/news';

const DEFAULT_LIMIT = 50;

class NewsModel {
	async getNews(limit = DEFAULT_LIMIT) {
		return knex
			.select(
				'n.id',
				'n.title',
				'n.image_url as imageUrl',
				'n.link',
				'n.pub_date as pubDate',
				'p.name',
			)
			.from('news as n')
			.innerJoin('publisher as p', 'p.id', 'n.publisher_id')
			.orderBy('pub_date', 'desc')
			.limit(limit);
	}

	async saveNews(news: News[]) {
		// all news items are of same publisher
		const publisher = news[0].publisher;

		// Find publisher id in DB
		const { publisherId } = await knex
			.select('id as publisherId')
			.from('publisher')
			.where('name', publisher)
			.first();

		if (!publisherId) {
			console.log('Publisher not found');
			throw new Error('Publisher not found!');
		}

		// batch insert
		await knex
			.insert(
				news.map((n) => ({
					title: n.title,
					image_url: n.imageUrl,
					link: n.link,
					guid: n.guid,
					publisher_id: publisherId,
					pub_date: n.pubDate,
				})),
			)
			.into('news')
			.onConflict(['publisher_id', 'guid']) // update the current news during on conflict
			.merge();
	}
}

export default NewsModel;
